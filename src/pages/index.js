import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import classNames from 'classnames'

import Meta from 'components/meta'
import Layout from 'components/layout'

// page sections
import Hero from 'components/hero'
import Section from 'components/section'
import HowItWorks from 'components/how-it-works'
import Menu from 'components/menu'
import About from 'components/about'

const Index = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Hero text={get(data, 'site.meta.description')}/>
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
        backgroundText="cakes"
        backgroundTextColor="white"
        backgroundTextSize="45vw">
        <Menu
          items={get(data, 'allGoogleSpreadsheetDataSheetCakes.edges')}
          infoText="All cakes approximately 7.5 x 7.5 x 2.5 inches and 1 to 1.3 kg."/>
      </Section>
      <Section
        title="Cookies"
        bg="white"
        backgroundText="cookies"
        backgroundTextColor="beige"
        backgroundTextSize="33vw">
        <Menu
          items={get(data, 'allGoogleSpreadsheetDataSheetCookies.edges')}
          infoText="All cookies in packs of 65-75 pieces."/>
      </Section>
      <Section
        title="Muffins"
        bg="beige"
        backgroundText="muffins"
        backgroundTextColor="white"
        backgroundTextSize="30vw">
        <Menu
          items={get(data, 'allGoogleSpreadsheetDataSheetMuffins.edges')} />
      </Section>
      <Section
        bg="white">
        <About />
      </Section>
      <Meta site={get(data, 'site.meta')} />
    </Layout>
  )
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
    allGoogleSpreadsheetDataSheetCakes {
      edges {
        node {
          name
          description
          price
        }
      }
    }
    allGoogleSpreadsheetDataSheetCookies {
      edges {
        node {
          name
          description
          price
        }
      }
    }
    allGoogleSpreadsheetDataSheetMuffins {
      edges {
        node {
          name
          description
          price
        }
      }
    }
  }
`
