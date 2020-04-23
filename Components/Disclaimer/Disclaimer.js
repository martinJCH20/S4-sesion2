import React, { Component } from 'react';
import './Disclaimer.css';

class Disclaimer extends Component{
    // constructor(propos){
    //     super(propos);
    // }
    // onSubmitReturn= () => {
    //     // this.setState({
    //     //     text: this.state.text,
    //     //     display: false,
    //     //     submitted: this.state.submitted,
    //     // });
    //     alert("hola");
    // }

    render(){
        return(
            <div>
                <div className='disclaimer-container'>
                    <p className='disclaimer-text'>{this.props.text}</p>  
                    
                </div>
                <div className='disclaimer-button'>
                    <button onClick={this.props.clickButton}>
                    <a href="#">   
                        <img src="https://img.icons8.com/ultraviolet/40/000000/return.png"/>
                    </a>
                    </button> 
                </div> 
            </div>
        )
    }
}

export default Disclaimer;