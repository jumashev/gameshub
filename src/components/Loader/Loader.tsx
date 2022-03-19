import React from 'react'

export const Loader:React.FC = ():JSX.Element => {
  return (
    <div className='d-flex loaded justify-content-center'>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}