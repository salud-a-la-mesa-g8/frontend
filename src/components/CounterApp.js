import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value, subtitle }) => {
  return (
    <>
      <h1 className="text-center">CounterApp Home</h1>
      <div className="container">
        <h2>{ subtitle }</h2>
        <h3>Valor del contador: { value }</h3>
      </div>
      
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
  subtitle: PropTypes.string
}

export default CounterApp
