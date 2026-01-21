import React, {Component} from "react";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloggedIn: false,
            welcomeMessage: 'Welcome'
        }
    }

    render() {
        return (
            <header>
                <span></span>
                <h1>{this.props.appName}</h1>
                {/* <button onClick={this.handleButtonClick}>Click Me</button>
                <p>{this.state.welcomeMessage}</p>
                <p>{this.state.isloggedIn ? 'Welcome, user' : 'You are not connected'}</p> */}
            </header>
        )
    }
}

export default Header;