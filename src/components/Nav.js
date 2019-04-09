// ..........................

import React from 'react'
import styledComponents from 'styled-components'
import { colors } from '../settings/style'

// ..........................

const Wrapper = styledComponents.nav`

  text-align: center
  width: 100%

  li {
    display: inline-block
  }

  a {
    display: inline-block
    color: ${colors.secondary}
    margin: 15px
    padding-bottom: 2px
    letter-spacing: 2px
    position: relative
    opacity: 0.5
    transition: all 0.25s ease
    text-decoration: none
    text-transform: lowercase
    font-size: 14px
  }

  a::selection {
    background-color: ${colors.selection}
  }

  a:hover {
    opacity: 1
  }

  a:hover:before {
    visibility: visible
    transform: scaleX(1)
  }

  a:before {
    position: absolute
    width: 100%
    height: 1px
    bottom: -5px
    left: 0
    background-color: ${colors.secondary}
    visibility: hidden
    transition: all 0.25s ease
    transform: scaleX(0)
  }

  a:before {
    content: '';
  }

`

// ..........................

const Nav = (props) => {
  return (
    <Wrapper>
      <ul>
        <li>
          <a href={'https://github.com/' + props.github} title='Github' target='_blank' rel='noopener noreferrer'>Github</a>
        </li>
        <li>
          <a href={'https://twitter.com/' + props.twitter} title='Twitter' target='_blank' rel='noopener noreferrer'>Twitter</a>
        </li>
      </ul>
    </Wrapper>
  )
}

// ..........................

export default Nav

// ..........................