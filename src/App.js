import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// GlobalStore adds all registered stores at the top level
import GlobalStore from './stores/GlobalStore'

// Welcome shows the basics of how to import and use a store
import Welcome from './Welcome'

// example of useReducer
import LoginForm from './LoginForm'

// AsyncLink dynamically adds the asyncStore once it is imported but not earlier
const AsyncLink = React.lazy(() => import('./AsyncLink'))

class App extends Component {
  render() {
    // We cannot use a store yet because our GlobalStore has not been rendered
    // to provide context

    return (
      <GlobalStore>
        <React.Suspense fallback={<div>Loading...</div>}>
          <div className="App">
            <header className="App-header">
              <Welcome />
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <AsyncLink />
              <LoginForm />
            </header>
          </div>
        </React.Suspense>
      </GlobalStore>
    )
  }
}

export default App
