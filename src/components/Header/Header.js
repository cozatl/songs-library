import React, {Component} from "react";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            welcomeMessage: 'Welcome'
        }
    }

    componentDidMount() {
        console.log('Web Page loaded correctly.')
    }
    
    render() {
        return (
            <header>
                <span></span>
                <h1>{this.props.appName}</h1>
                {/* <p>{this.state.welcomeMessage}</p> */}
            </header>
        )
    }
}

export default Header;