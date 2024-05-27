import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const Footer = () => {
  return (
    <footer className='bg-green-600 h-20 relative'>
      <MaxWidthWrapper>
        <div className='h-full flex justify-center items-center'>
          <div className='text-center pb-2 md:pb-0'>
            <p className='text-white  backdrop:text-sm'>
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer