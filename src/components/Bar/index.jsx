import React, { useState } from 'react'

const Bar = ({ handleSearch }) => {
 
    const [inputValue, setInputValue] = useState("");

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleSearch(inputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput}

             value={inputValue} required/>
            <input type="submit" value="Search Folder"/>
        </form>
    )   
}

export default Bar
