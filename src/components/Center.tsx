import React from 'react'

const Center: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto p-[0 20px]'>
        {children}
    </div>
  )
}

export default Center