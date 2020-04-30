import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Meta from 'components/meta'
import Layout from 'components/layout'
import Section from 'components/section'
import Button from 'components/button'

const PageNotFound = ({ data, location }) => {
  return (
    <Layout location={location} navClass="bg-dark">
      <Meta site={get(data, 'site.meta')} />
      <Section
        title="404: Page Not Found"
        className="section404">
        <p>We couldn't find that page! Perhaps you were distracted by the prospect of tasty treats... in which case, go to the home page to order some!</p>
        <div className="button404">
          <Button href="/">Back to Home Page</Button>
        </div>
      </Section>
    </Layout>
  )
}

export default PageNotFound

export const pageQuery = graphql`
  query {
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
