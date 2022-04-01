import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
    {
        id:'u1', 
        name: 'Taylor Barnett',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaKciWD4yCRgCmr_C37p5Gk5-zh2jRj6XwBH7TTauKoPspbEFNC4hExrDlL9vzoaDY4s&usqp=CAU' ,
        count: 1,
        RMA: 1
    },
    {
        id:'u2', 
        name: 'Zach Sandberg',
        image: 'https://875946.smushcdn.com/2235448/wp-content/uploads/2021/01/mt225E-transparent.png?lossy=1&strip=1&webp=1' ,
        count: 0,
        RMA: 0
    },
    {
        id:'u3', 
        name: 'Brad Lewandowski',
        image: 'https://darkmattersmag.com/wp-content/uploads/2021/02/img_DM-Bigfoot-740x560.jpg' ,
        count: 1000,
        RMA: 10000
    },
    {
        id:'u4', 
        name: 'Noe Gonzalez',
        image: 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2017/05/CoffeeStomachPains-533906501-770x533-1.jpg' ,
        count: 2,
        RMA: 2
    }
];

    return <UsersList items={USERS}/>;
};

export default Users;