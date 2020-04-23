import React from 'react';
import './Button.css';

// export default class Button extends Component {
//     render(){
//         return(
//             <div className='background-button'>
//                 <p className='text-button'>Click aquí</p>
//             </div>
//         )
//     }
// }

//or export default Button;

export const Button = (props) => {
    return(
        <p><div className='background-button'>
            <p className='text-button'>{props.textButton}</p>
        </div></p>
    )
}

export const Text = () => {
        return(
            <form >
                <table>
                    <tr>
                    <th><label>User:</label></th>
                    <th><input type="text"/></th>
                    </tr>
                    <tr>
                    <th><label>Password:</label></th>
                    <th><input type="password"/></th>
                    </tr>
                </table>
            </form>
        )
}