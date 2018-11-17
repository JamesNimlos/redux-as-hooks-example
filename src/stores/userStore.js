import React, { useContext } from 'react'
import { registerStore } from './GlobalStore'

const initialState = { isLoading: true, firstName: '', lastName: '' }
const UserContext = React.createContext(initialState)
UserContext.displayName = 'UserStore'

function useUserStore() {
  return useContext(UserContext)
}

class UserStore extends React.Component {
  state = initialState

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        firstName: 'James',
        lastName: 'Nimlos',
        isLoading: false
      })
    }, 600)
  }
}

registerStore(UserStore)

export default useUserStore
