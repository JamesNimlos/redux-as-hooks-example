import React from 'react'
import useUserStore from './stores/userStore'

const Welcome = () => {
  const { firstName, lastName, isLoading } = useUserStore()

  if (isLoading) {
    return null
  }

  return (
    <span>
      Welcome {firstName} {lastName}!
    </span>
  )
}

export default Welcome
