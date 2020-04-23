import React from 'react';
import './Title.css';

export const Title = (props) =>{
    return(
    <h2 className='primary-title'>{props.title}</h2>
    )
}

export default Title;