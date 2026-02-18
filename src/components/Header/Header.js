import React, {useEffect} from "react";

const Header = ({appName}) => {
    //Simulating componentDidMount
    useEffect(() => {
        console.log('Web Page loaded correctly.');
    }, []); // The empty array ensures the effect runs only on mount
    return (
        <header>
            <span></span>
            <h1>{appName}</h1>
        </header>
    )
}

export default Header;