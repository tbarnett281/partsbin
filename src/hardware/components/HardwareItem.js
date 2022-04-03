import React from 'react';
import './UserRMA';
import './HardwareItem.css';
import '../pages/UserRMAList';
import Card from '../../shared/components/UIElements/Card';

const HardwareItem = props => {
    return <li className = "place-item">
        <Card className="place-item__content">
          
        <div className="place-item__info">
            <h2>{props.node}</h2>
            <h3>{props.status}</h3>
            <h3>{props.DateOpened}</h3>
            <h3>{props.DateClosed}</h3>
            <h3>{props.creatorID}</h3>
            <p>{props.Description}</p>
        </div>
        <div className="place-item__actions">
            <button>Status</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
        </Card>
    </li>
};

export default HardwareItem;