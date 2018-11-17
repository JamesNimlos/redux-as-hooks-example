import React from 'react'
import useAsyncStore from './stores/asyncStore'

const AsyncLink = () => {
  const { isLoading } = useAsyncStore()

  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React {isLoading ? 'is fetching data' : 'has fetched data'}.
    </a>
  )
}

export default AsyncLink
