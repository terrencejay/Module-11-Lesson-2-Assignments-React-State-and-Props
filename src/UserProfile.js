import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Terry' };

        // Bind the changeName method to the component instance
        this.changeName = this.changeName.bind(this);
    }

    // Correct function using setState
    changeName() {
        this.setState({ name: 'Terrence' });
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile;