import React from 'react'

const NavigationElement = ({path1,path2,path3}) => {
  return (
    <div className="mb-4 text-[15px] font-semibold bg-white p-3 rounded-lg shadow-md ">
        {path1} {'>'} {path2} {'>'} {path3}
      </div>
  )
}

export default NavigationElement