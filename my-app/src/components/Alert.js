import React from 'react'

function Alert(props) {
  return (

props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}</strong>{props.alert.msz}
  <button type="button" className='btn-close' data-bs-dismiss='alert' aria-label="close"></button>
</div>

  )
}

export default Alert