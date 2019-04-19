import React from 'react';
import ReactDOM from 'react-dom';

import AimiButton from 'aimi-button'
import AimiAlert from './AimiAlert.js'

import 'aimi-button/dist/aimibutton.css'
import './app.scss';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    handleWarning = () =>{
        AimiAlert.success('www')
    }

    handleConfirm = () =>{
        AimiAlert.confirm('Warning Confirm')
    }

    render(){
        return(
            <div>
                <div className="demo-container">
                    <p className="demo-title">Aimi Alert Component</p>
                    <div className="demo-btn-panel">
                        <AimiButton onClick={this.handleWarning}>Alert Warning</AimiButton>
                    </div>
                    <div className="demo-btn-panel">
                        <AimiButton onClick={this.handleConfirm}>Alert Confirm</AimiButton>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
