import { FloatLabel } from 'primereact/floatlabel'
import { InputText } from 'primereact/inputtext'
import React from 'react'

const TextInput = () => {
  return (
    <div>
        <FloatLabel>
            <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
            <label htmlFor="username">Username</label>
        </FloatLabel>
    </div>
  )
}

export default TextInput