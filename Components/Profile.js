import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null
        };
    }
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/keshavrathi28');
        const json = await data.json();
        this.setState({
            userData: json
        });
    }
    render() {
        return (
            <div id="profile">
                <h2>{this.state?.userData?.name} - Profile Page</h2>
                <h2>{this.state?.userData?.location}</h2>
                <img src={this.state?.userData?.avatar_url} />
            </div>
        );
    }
}

export default Profile;