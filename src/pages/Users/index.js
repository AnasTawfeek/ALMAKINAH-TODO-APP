import React, { Component } from 'react';
import MyFriends from '../../components/MyFriends';
import MyTeam from '../../components/MyTeam';
import {Route, Link} from 'react-router-dom';

export default class Users extends Component{
    render(){
        return (
            <div>
                User listing
                <Route path='/users/friends' component={MyFriends} />
                <Route path='/users/team' component={MyTeam} />
                {/* <MyFriends />
                <MyTeam /> */}
            </div>
        )
    }
}
