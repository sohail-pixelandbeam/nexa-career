import React, { useEffect, useState } from 'react';
import './SelectBox.css'

export default function SelectBox({ label, options, onSelect, selected, placeholder }) {

    let [val, setVal] = useState("");


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

    console.log(val, )
    return (
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



    );
};