// @flow

import React from 'react'
import { APP_NAME } from '../config'

const year = (new Date()).getFullYear()

const Footer = () =>
  <div className="container mt-5">
    <hr />
    <footer>
      <p>© {APP_NAME} {year}</p>
    </footer>
  </div>

export default Footer
