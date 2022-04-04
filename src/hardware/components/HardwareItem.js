import React from 'react';
import './UserRMA';
import './HardwareItem.css';
import '../pages/UserRMAList';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

const HardwareItem = props => {
    return <li className = "place-item">
        <Card className="place-item__content">
          
        <div className="place-item__info">
        <h2>{props.Hostname}</h2>
        <h4>RMAHardware: {props.RMAHardware}</h4>
        <h5>RMA Number: {props.RMANumber}</h5>
        <h5>RMA ID: {props.ID} </h5>
        <h5>Hostname: {props.Hostname}</h5>
        <h5>Status: {props.status}</h5>
        <h5>Date Opened: {props.DateOpened}</h5>
        <h5>Date Closed: {props.DateClosed}</h5>
        <h5>Initiator : {props.Initiator}</h5>
        <h5>RMA Number : {props.RMANumber}</h5>
        <h5>Shipping Type: {props.ShippingType}</h5>
        <h5>Outgoing Tracking: {props.OutGoingTracking}</h5>
        <h5>Oil or Air: {props.OilorAir}</h5>
        <h5>HardwareModelNumber: {props.HardwareModelNumber}</h5>
        <h5>HardwareSerialNumber: {props.HardwareSerialNumber}</h5>
        <h5>ChassisSerialNumber: {props.ChassisSerialNumber}</h5>
        <h5>Creator: {props.creatorID}</h5>
        <p>Description: {props.ProblemDescription}</p>
        </div>
        <div className="place-item__actions">
            <Button>Edit</Button>
            <Button danger>Delete</Button>
        </div>
        </Card>
    </li>
};

export default HardwareItem;