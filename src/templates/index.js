import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import Post from 'templates/post'
import Meta from 'components/meta'
import Layout from 'components/layout'
import Page from 'templates/page'

const Template = ({ data, location }) => (
  <div>
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
        <Page {...this.props} />
      )}
    </Layout>
  </div>
)
export default Template

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
