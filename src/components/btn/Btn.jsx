import React from 'react'
import './Btn.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Btn({ label, onClick, className, style }) {
    return (
        <button onClick={onClick} className={className ?? 'button'} style={style} >{label} &nbsp; <ArrowRightAltIcon /></button>
    )
}