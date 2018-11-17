import React, { useReducer, useMemo } from 'react'

const FieldError = ({ children }) => (
  <div style={{ color: 'red' }}>{children}</div>
)

const initialState = {
  values: { username: '', password: '' },
  touched: {},
  errors: {}
}
function loginFormStoreReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_FIELD': {
      const values = {
        ...state.values,
        [action.name]: action.value
      }
      return { ...state, values }
    }
    case 'BLUR_FIELD': {
      const touched = {
        ...state.touched,
        [action.name]: true
      }
      const errors = {
        ...validate(state.values)
      }
      return { ...state, errors, touched }
    }
    case 'RESET_FORM': {
      return initialState
    }
    default:
      return state
  }
}

function validate(values) {
  const errors = {}
  if (!values.username) {
    errors.username = 'Username is required.'
  }
  if (!values.password) {
    errors.password = 'Password is required.'
  }
  return errors
}

function getChangeAction(dispatch) {
  return ({ target }) =>
    dispatch({ type: 'CHANGE_FIELD', name: target.name, value: target.value })
}

function getFocusAction(dispatch) {
  return ({ target }) => dispatch({ type: 'FOCUS_FIELD', name: target.name })
}

function getBlurAction(dispatch) {
  return ({ target }) => dispatch({ type: 'BLUR_FIELD', name: target.name })
}

const LoginForm = props => {
  const [state, dispatch] = useReducer(loginFormStoreReducer, initialState)
  const { handleChange, handleFocus, handleBlur } = useMemo(
    () => ({
      handleChange: getChangeAction(dispatch),
      handleFocus: getFocusAction(dispatch),
      handleBlur: getBlurAction(dispatch)
    }),
    [dispatch]
  )

  return (
    <form>
      <label style={{ display: 'block ' }}>
        Username:{' '}
        <input
          name="username"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={state.values.username}
        />
        {state.touched.username && state.errors.username && (
          <FieldError>{state.errors.username}</FieldError>
        )}
      </label>
      <label style={{ display: 'block ' }}>
        Password:{' '}
        <input
          name="password"
          type="password"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={state.values.password}
        />
        {state.touched.password && state.errors.password && (
          <FieldError>{state.errors.password}</FieldError>
        )}
      </label>
      <button type="button" onClick={() => dispatch({ type: 'RESET_FORM' })}>
        clear
      </button>
    </form>
  )
}

export default LoginForm
