import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import "../css/Home.css";
import "../App.css";

export default class Home extends Component {
    render() {
        return (

            <div className="Elements__conteiner">
                <div className='Home__conteiner'>

                    <div className='App_box'>

                        <div className='App__box1'>
                            <img src="images/jar22.png" alt="nie załądowano logo" className='Jar_two' />
                        </div>
                        <div className='App__box2'>
                            <h1>100% Strawberry</h1>
                        </div>
                        <div className='App__box3'>
                            <h3>When to do Dżem</h3>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
