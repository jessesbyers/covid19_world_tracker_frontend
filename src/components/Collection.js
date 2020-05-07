import React from 'react';

const Collection = (props) => {
    return (
        <li key={props.index}>{props.collection.name} : {props.collection.summary} <button>View Collection</button></li>
        
    )
}

export default Collection
