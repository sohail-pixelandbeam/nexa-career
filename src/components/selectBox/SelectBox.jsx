import React, { useEffect, useState } from 'react';
import './SelectBox.css'

export default function SelectBox({ label, options, onSelect, selected, placeholder }) {

    let [val, setVal] = useState('');


    const onChange = (e) => {
        setVal(e.target.value)
        console.log(e.target.value)
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
        <div className='selectBox'>
            <div className="input1-label">{label}</div>
            <select id="select" className='inputBox1' value={val === '' ? placeholder : val} onChange={onChange}>
                <option key='' value=''> </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>



    );
};