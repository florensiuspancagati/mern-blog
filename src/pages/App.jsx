import { useState } from 'react'
import reactLogo from '../assets/image/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
// import './App.css'
import { AppRoutes, store } from '../config'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}

export default App
