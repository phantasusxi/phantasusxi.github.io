// ..........................

import React from 'react'
import Helmet from 'react-helmet'
import styledComponents, { createGlobalStyle } from 'styled-components'

import Header from './components/Header'
import Nav from './components/Nav'
import Wave from './components/Wave'
import { colors, type } from './settings/style'
import pkg from '../package.json'

// ..........................

const Style = createGlobalStyle`

  html {
    box-sizing: border-box
    font-size: ${type.size.root}
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0
    padding: 0
    font-weight: normal
  }

  ol, ul {
    list-style: none
  }

  img {
    max-width: 100%
    height: auto
  }

  body {
    -webkit-font-smoothing: antialiased
    font-family: ${type.family}
  }

`

const Wrapper = styledComponents.main`

  background-color: ${colors.main}
  background: linear-gradient(to bottom, ${colors.main} 0%, ${colors.dark} 100%);

  text-align: center
  min-height: 100vh
  border: 24px solid ${colors.secondary}
  display: flex
  flex-direction: column
  justify-content: center

`

// ..........................

const App = () => (<>
  <Helmet>
    <title>{`${pkg.config.title} – ${pkg.config.description}`}</title>
    <meta content={`${colors.main}`} name="theme-color" />
    <link rel="canonical" href={`${pkg.homepage}`} />
  </Helmet>
  <Style />
  <Wrapper>
    <Header title="@phantasusXI" subtitle={`${pkg.config.description}`} />
    <Nav github="phantasusXI" twitter="phantasusXI" />
    <Wave />
  </Wrapper>
</>)

// ..........................

export default App

// ..........................