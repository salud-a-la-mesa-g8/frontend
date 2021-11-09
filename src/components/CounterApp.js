
import React from 'react' // , { useState }
import PropTypes from 'prop-types'

const CounterApp = ({ value, subtitle }) => {

  // const [ counter, setCounter ] = useState(value)

  return (
    <>
      <h1 className="text-center">CounterApp Home</h1>
      <div className="container">
        <h2>{ subtitle }</h2>
        {/* <h3>Valor del contador: { counter }</h3> */}
      </div>
      
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
  subtitle: PropTypes.string
}

export default CounterApp
