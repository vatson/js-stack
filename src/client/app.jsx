// @flow

import React from 'react'
import HelloButton from './container/hello-button'
import Message from './container/message'
import HelloButtonAsync from './container/hello-async-button'
import MessageAsync from './container/message-async'
import { APP_NAME } from '../shared/config'


const App = () =>
  <div>
    <h1>{APP_NAME}</h1>
    <Message />
    <HelloButton />
    <MessageAsync />
    <HelloButtonAsync />
  </div>

export default App
