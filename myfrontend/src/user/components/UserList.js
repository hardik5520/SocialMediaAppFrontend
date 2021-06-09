import React from 'react';

import UserItem from './UserItem';
//controller for useritem
import Card from '../../shared/components/UIElements/Card'

import './UserList.css';

const UserList =(props) =>{

    if(props.items.length === 0)
    {
        return (
            <Card>
                <h2>No users found</h2>
            </Card>

        )
    }

    return(
        <ul className="users-list">
            {props.items.map(user =>{
                return <UserItem 
                name={user.name}
                key={user.id} 
                id={user.id} 
                image={user.image} 
                placeCount={user.places}
                />
            })}
        </ul>
    )

}

export default UserList;