import { StyledHeader } from './styles.ts';
import React, {useEffect, useRef} from "react";

//When input parameter is a simple value (such as string) then we can create an interface
//then add it to the input parameter with "React.FC" or "const Header = ({appName}: HeaderProps)"
interface HeaderProps {
    appName: string;
}

const Header: React.FC<HeaderProps> = ({appName}) => {

    const isFirstRender = useRef(true);
    //Simulating componentDidMount
    useEffect(() => {
        !isFirstRender.current ? 
        console.log('Web Page loaded correctly.') : isFirstRender.current = false;
        
    }, []); // The empty array ensures the effect runs only on mount
    return (
        <StyledHeader>
            <span></span>
            <h1>{appName}</h1>
        </StyledHeader>
    )
}

export default Header;