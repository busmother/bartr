import React from 'react';

const Results = props => {
    return (
        <div>
            {props.images.map(gif => <img key={image.url} src={image.url} alt="image" />)} 
        </div>
    )
}