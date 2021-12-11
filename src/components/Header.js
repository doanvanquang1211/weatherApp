import { useState } from 'react';

export default function Header(props) {
    const [inputValue, setinputValue] = useState('')

    const changeInput = (input) => {
        setinputValue(input.target.value)
    }
    return (
        <div className="header ">
            <input value={inputValue} onChange={changeInput} type="text" placeholder="search..." />
            <button onClick={() => { props.search(inputValue); setinputValue('') }} ><i className="fa fa-search"></i></button>
        </div>
    );
}

