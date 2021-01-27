import React from 'react';

import "./user.css";

class User extends React.Component {
    render() {
        const {name, makeOlder, age, color} = this.props;
        console.log(name);
        return (
            <div>
                <h2 style={{color: color, backgroundColor: "black"}}>Utilisateur: {this.props.name}, 99 years old</h2>
                {
                    //JQuery => $("button").click(function() {fait qqch})
                    //JQuery => $("button").click(() => {fait qqch})
                }
                <button onClick={makeOlder}>Augmenter l'age</button>
            </div>
        )
    }
}

export default User;