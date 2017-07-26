/* @flow */

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import Home from './handlers/Home'
import ShowCharacter from './handlers/ShowCharacter'
import ShowEpisode from './handlers/ShowEpisode'
import apolloClient from './utils/apolloClient'

import logo from './bb8.svg'
import './App.css'

const App = () => (
  <Router>
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The simple Star Wars app</h2>
        </div>
        <div className="App-intro">
          <Route exact path="/" component={Home} />
          <Route path="/character/:id" component={ShowCharacter} />
          <Route path="/episode/:episode" component={ShowEpisode} />
        </div>
      </div>
    </ApolloProvider>
  </Router>
)

export default App
