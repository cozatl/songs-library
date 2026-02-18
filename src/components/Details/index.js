import React from "react";

function importAll(r) {
    let imgs = {};
    r.keys().forEach((key) => {
        const fileName = key.replace('./','');
        imgs[fileName] = r(key);
    });
    return imgs;
}

const images = importAll(require.context('../../assets/img',false,/\.(png|jpe?g|svg)$/));

const Details = () => { 
    return (
        <>
            <article className = 'main__playing'>
                <h1>Some details</h1>
                {/* <button onClick={this.handleButtonClick}>Click Me</button>
                <p>{this.state.welcomeMessage}</p>
                <p>{this.state.isloggedIn ? 'Welcome, user' : 'You are not connected'}</p> */}
            </article>
        </>
    )
}

export default Details;