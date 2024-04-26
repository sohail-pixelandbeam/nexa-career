import React, { useEffect, useState } from 'react';
import './SelectBox.css'

export default function SelectBox({ label, options, onSelect, selected, placeholder, required }) {

    let [val, setVal] = useState("");


    const onChange = (e) => {
        setVal(e.target.value)
        if (onSelect) {
            onSelect(e.target.value);
        }
    }

    useEffect(() => {
        if (selected) {
            setVal(selected)
        }
    }, [])

    return (
        <div style={{ width: '100%' }}>
<div className="input1-label">{label}{required && <font className='required-style'>*</font>}</div>
        <div className='selectBox'>
           {val === "" && <div className="select1-label">{placeholder}</div>}
            <select id="select" className='inputBox1' value={val} onChange={onChange}>
                <option key='' value=''> </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
            </div>


    );
};
