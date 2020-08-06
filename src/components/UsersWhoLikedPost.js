import React, { Component, Fragment } from 'react';

class UsersWhoLikedPost extends Component {

    render() {
        const allUsers = this.props.data
        return allUsers.map((user) => {
            return(
            <Fragment>
                <div key={user}>
                    <span style={{ fontWeight: "bold", color: "#ged" }}>
                        {user}
                    </span>
                </div>
            </Fragment>
            )
        })
    }
}

export default UsersWhoLikedPost;