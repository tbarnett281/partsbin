import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import RMA from '../../user/pages/RMA';
import './UserRMA.css';
import UsersItem from '../../user/components/UsersItem';
import HardwareItem from './HardwareItem';
import '../pages/UserRMAList';

const UserRMA = props => {
    if(props.items.length === 0){
        return( <div className="place-list center">
            <Card>
                <h2>
                    No RMA's found for specific user.
                    <button> Create RMA </button>
                </h2>
            </Card>
        </div>
        );
    }

    return <ul className = "place-list">
        {props.items.map(RMA => (
        <HardwareItem
        key={RMA.id}
        id={RMA.id}
        node = {RMA.node}
        status = {RMA.status}
        DateOpened = {RMA.DateOpened}
        DateClosed = {RMA.DateCLosed}
        Description = {RMA.Description}
        creatorID = {RMA.creator}
        />
        ))}
    </ul>
};

export default UserRMA;