import React, { useEffect, useState } from 'react'
import './InputField.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Icon } from '@mui/material';

export default function InputField({ icon, placeholder, isPassword, onChange, value, inputType, label, multipleLine, style }) {

    let [type, setType] = useState('text')

    const handleType = () => {
        type === 'text' ? setType('password') : setType('text')
    }

    useEffect(() => {
        console.log(isPassword)
        if (isPassword) {
            setType('password')
        }
    }, [])

    return (
        <div style={{ width: '100%' }}>
            <div className="input1-label">{label}</div>
            {multipleLine ?
                <textarea className='textAreaComp' rows="4" ></textarea>
                : <div className='inputBox' style={style} >
                    <div className='leftBox' >
                        <input className='input' onChange={onChange} value={value} placeholder={placeholder} type={inputType ?? type}
                        />
                    </div>
                    {isPassword && <div className='isPassword-style' style={{color:'red'}} onClick={handleType}>
                        {type === 'password' ? "Show" : "Hide"}
                    </div>}
                    {icon && <div className='rightBox1'>
                        <img src={icon} alt="icon" />
                    </div>}
                </div>}
        </div>

    )
}

