// ..........................

import React from 'react'
import styledComponents from 'styled-components'
import { colors } from '../settings/style'

// ..........................

const Wrapper = styledComponents.header`

  color: ${colors.secondary}

  h1::selection, h2::selection {
    background-color: ${colors.selection}
    color: ${colors.secondary}
  }

  h1 {
    font-weight: 700
    letter-spacing: 2px
    text-align: center
    margin-bottom: 10px
    font-size: 20px
  }

  h2 {
    font-weight: 400
    letter-spacing: 2px
    text-align: center
    margin-bottom: 20px
    font-size: 18px
    background-color: ${colors.dark}
    color: ${colors.secondary}
    display: inline-block
    border-radius: 4px
    padding: 4px 8px
    position: relative
  }

  h2::before {
    content: "";
  }

  h2::before {
    width: 12px
    height: 12px
    position: absolute
    bottom: -5px
    right: 50%
    margin-right: -6px
    border-top: 1px solid ${colors.dark}
    border-left: 1px solid ${colors.dark}
    background-color: ${colors.dark}
    transform: rotate(45deg)
  }

`

// ..........................

const Header = (props)  => (
  <Wrapper>
    <h1>{ props.title }</h1>
    <h2>{ props.subtitle }</h2>
  </Wrapper>
)

// ..........................

export default Header

// ..........................