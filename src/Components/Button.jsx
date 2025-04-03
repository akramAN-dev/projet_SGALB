import React from 'react'

const Button = ({login,bgBtn,logo,text,hoverColor}) => {
  return (
    <button 
            onClick={login}
            style={{backgroundColor: bgBtn}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = bgBtn}
            className={`flex items-center justify-center gap-3 p-2 text-white rounded-md shadow-md transition duration-200 w-full text-[12px] lg:text-[16px]`}>
                {logo}
            <span className="font-semibold">{text}</span>
        </button>
  )
}

export default Button