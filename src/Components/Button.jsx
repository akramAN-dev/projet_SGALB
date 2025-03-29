import React from 'react'

const Button = ({login,bgBtn,logo,text}) => {
  return (
    <button 
            onClick={login} 
            style={{backgroundColor: bgBtn}}
            className={`flex items-center justify-center gap-3 p-2 text-white rounded-md shadow-md hover:bg-red-700 transition duration-200`}>
                {logo}
            <span className="font-semibold">{text}</span>
        </button>
  )
}

export default Button