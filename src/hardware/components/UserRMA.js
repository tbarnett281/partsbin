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
        // id={RMA.id}
        // node = {RMA.node}
        // status = {RMA.status}
        DateOpened = {RMA.DateOpened}
        DateClosed = {RMA.DateClosed}
        Description = {RMA.Description}
        Initiator = {RMA.Initiator}
        status = {RMA.status}
        RMANumber = {RMA.RMANumber}
        RMADateStart = {RMA.DateStart}
        RMADateEnd = {RMA.DateEnd}
        ShippingType = {RMA.ShippingType}
        OutGoingTracking = {RMA.OutGoingTracking}
        OilorAir = {RMA.OilorAir}
        RMAHardware = {RMA.RMAHardware}
        HardwareModelNumber = {RMA.HardwareModelNumber}
        HardwareSerialNumber = {RMA.HardwareSerialNumber}
        ChassisSerialNumber = {RMA.ChassisSerialNumber}
        Hostname = {RMA.Hostname}
        ProblemDescription = {RMA.ProblemDescription}
        creatorID = {RMA.creator}
        />
        ))}
    </ul>
};

export default UserRMA;
/*
initiator   = todd
RMA Number = FR19160122
RMA Date start
RMA Date End
Shipping Type
Outgoing Tracking
Received
Oil/Air
RMA Hardware
Hardware M/N (model number)
Hardware S/N
Chassis S/N
Hostname
Problem Description

*/