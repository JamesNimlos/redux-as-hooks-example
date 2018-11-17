import React from 'react'

let privateStores = []

function placeholderRegisterStore(StoreProvider) {
  privateStores.push(StoreProvider)
}

let privateRegisterStore = placeholderRegisterStore

function registerStore(StoreProvider) {
  privateRegisterStore(StoreProvider)
}

class GlobalStore extends React.Component {
  state = { stores: [] }

  registerStore = StoreProvider =>
    this.setState(state => ({ stores: state.stores.concat(StoreProvider) }))

  render() {
    if (this.state.stores.length === 0) {
      return <React.Fragment>{this.props.children}</React.Fragment>
    }
    return this.state.stores.reduceRight(
      (children, StoreProvider) => <StoreProvider>{children}</StoreProvider>,
      this.props.children
    )
  }

  componentDidMount() {
    this.setState({ stores: privateStores })
    privateStores = []
    privateRegisterStore = this.registerStore
  }

  componentWillUnmount() {
    privateStores = this.state.stores
    privateRegisterStore = placeholderRegisterStore
  }
}

export default GlobalStore

export { registerStore }
