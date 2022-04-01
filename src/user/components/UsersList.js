import React from 'react';
import './UsersList.css';
import UserItem from './UsersItem';
import Card from '../../shared/components/UIElements/Card';
const UsersList = props => {
    if(props.items.length === 0){
        return (<div className="center"> 
        <Card>
            <h2>No users were found.</h2>
        </Card>
        </div>
        );
    }
    return <ul>
        {
            props.items.map(user => {
                return <UserItem   
                key={user.id} 
                id = {user.id} 
                name = {user.name} 
                image = {user.image}
                entries = {user.count}
                RMA = {user.RMA}
                />;
            })
        }
    </ul>;

};
export default UsersList;