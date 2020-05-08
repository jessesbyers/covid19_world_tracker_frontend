import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';


const Collection = (props) => {
    console.log(props)



    return (
        <div key={props.collection.id}>
            <NavLink 
                to={{
                    pathname: `/collections/${props.collection.id}`,
                    collection: {id: props.collection.id, name: props.collection.name, summary: props.collection.summary}}}>
                <Button 
                    variant="dark">
                    {props.collection.name}
                </Button>
            </NavLink>
            <p>{props.collection.summary}</p>
        </div>
    )
}

export default Collection