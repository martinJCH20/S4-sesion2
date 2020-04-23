  
import React from 'react';
import './Button2.css';

export const Button = (props) => {
	return (
		<button className='primary-button'>
			<a href='#'>
				<p className='text-button'>{props.textButton}</p>
			</a>
		</button>
	);
};