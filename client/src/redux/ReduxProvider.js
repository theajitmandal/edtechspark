'use client'
import React from 'react'
import store from './store/configureStore'
import { Provider } from 'react-redux'

const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default ReduxProvider