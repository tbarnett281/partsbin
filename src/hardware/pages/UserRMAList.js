import React from 'react';
import UserRMA from '../components/UserRMA';

const DUMMY_RMA = [
    {
        id: 'p1',
        Hostname: 'hou271005',
        status: 'active',
        DateOpened: '03-April, 2022',
        DateClosed: '04-April, 2022',
        Description: 'failed motherboard',
        Initiator : 'u1',
        RMANumber : 'FS100900',

        ShippingType: 'Freight',
        OutGoingTracking: '011111222333',
        OilorAir: 'oil',
        RMAHardware: 'nvme',
        HardwareModelNumber: 'Samsung 970 Evo',
        HardwareSerialNumber: 'HW99999933333333',
        ChassisSerialNumber: 'Chassis88887777',
        ProblemDescription: 'nvme failed',
        creator: 'taylor'
    },
    {
        id: 'p2',
        Hostname: 'hou275007',
        status: 'active',
        DateOpened: '10-May, 2022',
        DateClosed: '04-June, 2022',
        Description: 'PSU failure',
        Initiator : 'u2',
        RMANumber : 'FS3109002',

        ShippingType: 'Freight',
        OutGoingTracking: '011111222333',
        OilorAir: 'oil',
        RMAHardware: 'nvme',
        HardwareModelNumber: 'Samsung 970 Evo',
        HardwareSerialNumber: 'HW99999933333333',
        ChassisSerialNumber: 'Chassis88887777',
        ProblemDescription: 'nvme failed',
        creator: 'taylor'
    }
]

const UserRMAList = () => {
    return <UserRMA items={DUMMY_RMA}/>
};

export default UserRMAList;