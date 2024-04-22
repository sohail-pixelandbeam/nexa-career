import React, { useState } from 'react'
import './InputField.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Icon } from '@mui/material';

export default function InputField({ icon, placeholder, isPassword, onChange, value, inputType, label, multipleLine, style, isMobileNumber }) {

    let [type, setType] = useState('text')

    const handleType = () => {
        type === 'text' ? setType('password') : setType('text')
    }

    useState(() => {
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
                    {icon && <div className='rightBox1'>
                        <img src={icon} alt="icon" />
                    </div>}
                </div>}
        </div>

    )
}

