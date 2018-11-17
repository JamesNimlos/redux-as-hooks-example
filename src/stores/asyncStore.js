import React, { useContext } from 'react'
import { registerStore } from './GlobalStore'

const initialState = { isLoading: true }
const AsyncStoreContext = React.createContext(initialState)
AsyncStoreContext.displayName = 'AsyncStore'

function useAsyncStore() {
  return useContext(AsyncStoreContext)
}

class AsyncStore extends React.Component {
  state = initialState

  render() {
    return (
      <AsyncStoreContext.Provider value={this.state}>
        {this.props.children}
      </AsyncStoreContext.Provider>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 600)
  }
}

registerStore(AsyncStore)

export default useAsyncStore
