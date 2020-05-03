import { graphql } from 'gatsby'
import React, { Component } from 'react'
import classNames from 'classnames'

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

import Meta from 'components/meta'
import Layout from 'components/layout'

// page sections
import Hero from 'components/hero'
import Section from 'components/section'
import HowItWorks from 'components/how-it-works'
import Menu from 'components/menu'
import About from 'components/about'

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cakes: [], 
      cookies: [],
      muffins: []
    }
  }

  syncFromGSheets() {
    var spreadsheet_id = "1Yp8JHrj3wbW-z9dagiqPRG5CI5kXhNrcH0PDt_Yhzbg"
    var api_key = "AIzaSyAEVj_OGT_ZxrkA_z_5NMlvKpzKdqnWbdQ"
    var includeGridData = "true"
    var fields = "sheets.data.rowData.values.userEnteredValue"

    var url = ("https://sheets.googleapis.com/v4/spreadsheets/" + spreadsheet_id + 
      "?key=" + api_key + 
      "&includeGridData=" + includeGridData + 
      "&fields=" + fields)

    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        cakes: this.parseSheets(responseJson, 1),
        cookies: this.parseSheets(responseJson, 2),
        muffins: this.parseSheets(responseJson, 3)
      })

    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  parseSheets(responseJson, sheetNum) {
    // get rawData
    var rawData = responseJson['sheets'][sheetNum]['data'][0]['rowData']
    var data = []
    // assign headers using first row
    var first_row = rawData[0]['values']
    var headers = []
    for(var i = 0; i < first_row.length; i++) {
      headers[i] = first_row[i]['userEnteredValue']['stringValue']
    }
    // go through rows
    for (var i = 1; i < rawData.length; i++) { // skip first row (headers)
      var row = rawData[i]['values']
      var temp = {}
      // go through columns
      for (var k = 0; k < headers.length; k++) {
        var cellValue = row[k]['userEnteredValue']['stringValue']   
        // try assigning it to a number
        if (!cellValue) {
          cellValue = row[k]['userEnteredValue']['numberValue']
        }
        // not a number, so a boolean
        if (!cellValue & cellValue !== 0) {
          cellValue = row[k]['userEnteredValue']['boolValue']
        }
        temp[headers[k]] = cellValue
      }

      data.push(temp)
    }
    return data
  }

  componentDidMount() {
    this.syncFromGSheets()
  }

  render() {
    console.log(this.props)
    return (
      <Layout location={this.props.location}>
        <Hero text={this.props.data.site.meta.description}/>
        <Section
          id="order"
          title="Place An Order"
          bg="white">
          <HowItWorks />
        </Section>
        <Section
          title="Cakes"
          id="menu"
          bg="beige"
          backgroundText={this.state.cakes.length > 0 ? "cakes" : ''}
          backgroundTextColor="white"
          backgroundTextSize="45vw">
          <Menu
            items={this.state.cakes}
            infoText="All cakes approximately 7.5 x 7.5 x 2.5 inches and 1 to 1.3 kg."/>
        </Section>
        <Section
          title="Cookies"
          bg="white"
          backgroundText={this.state.cookies.length > 0 ? "cookies" : ''}
          backgroundTextColor="beige"
          backgroundTextSize="33vw">
          <Menu
            items={this.state.cookies}
            infoText="All cookies in packs of 65-75 pieces."/>
        </Section>
        <Section
          title="Muffins"
          bg="beige"
          backgroundText={this.state.muffins.length > 0 ? "muffins" : ''}
          backgroundTextColor="white"
          backgroundTextSize="30vw">
          <Menu
            items={this.state.muffins} />
        </Section>
        <Section
          bg="white">
          <About />
        </Section>
        <Meta site={this.props.data.site.meta} />
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        adsense
      }
    }
  }
`
