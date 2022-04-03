import React from 'react';
import UserRMA from '../components/UserRMA';

const DUMMY_RMA = [
    {
        id: 'p1',
        node: 'hou271005',
        status: 'active',
        DateOpened: '03-April, 2022',
        DateClosed: '04-April, 2022',
        Description: 'failed motherboard',
        creator: 'u1'
    }
]

const UserRMAList = () => {
    return <UserRMA items={DUMMY_RMA}/>
};

export default UserRMAList;