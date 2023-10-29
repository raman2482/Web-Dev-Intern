import React from 'react'

export default function body() {
  return (
    <>
    <div className='head'>
      <h1>Pricing Plans</h1>
    </div>
    <div className='text'>
     <h2>Features that will help your company scale faster</h2>
    </div>
    <div className='text-2'>
        <h3><div  className={`form-check form-switch mx-3 text-light`}>
        Bil Monthly<input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </h3>
        <h3>Bil Annualy(10% off)</h3>
    </div>
    </>
  )
}
