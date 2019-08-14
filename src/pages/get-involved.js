import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const What = () => (
  <Layout>
    <SEO title="Get Involved" />
    <Header>Get Involved</Header>
  </Layout>
)

const Header = styled.div`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: #FF0083;
`

export default What
