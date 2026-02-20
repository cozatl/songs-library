import './styles.css';
import React, {useEffect, useRef} from "react";

const Header = ({appName}) => {

    const isFirstRender = useRef(true);
    //Simulating componentDidMount
    useEffect(() => {
        !isFirstRender.current ? 
        console.log('Web Page loaded correctly.') : isFirstRender.current = false;
        
    }, []); // The empty array ensures the effect runs only on mount
    return (
        <header>
            <span></span>
            <h1>{appName}</h1>
        </header>
    )
}

export default Header;