import React from 'react';
import './UsersItem.css';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import { Link } from 'react-router-dom';

const UsersItem = props => {
    return(
        <li className='user-item'>
            <Card className='user-item__content'>
                <Link to={`/${props.id}/rma`}>
                    <di className='user-item__image'>
                        <Avatar image={props.image} alt = {props.name} />
                    </di>
                    <div className='user-item__info'>
                        <h2>{props.name}</h2>
                        <h3>{props.entries} {props.entires === 1 ? 'Entry' : 'Entries'}</h3>
                        <h3>{props.RMA} RMA</h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
};

export default UsersItem;