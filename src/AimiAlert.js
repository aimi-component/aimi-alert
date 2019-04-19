import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './AimiAlert.scss';

class Alert extends Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      alertShow:false

    };
  }



  render() {
    return (
      <div>
        <div>
          <div className={`aimi-alert--mask ${this.state.alertShow?'aimi-alert--hidden':''}`}></div>
          <div className="aimi-alert--wrap" role="dialog">
            <div className={`aimi-alert-dialog ${this.props.className}`}>
              <div className="aimi-alert--content">
                <button className="aimi-alert--close"></button>
                <div className="aimi-alert--body"></div>
                <div className="aimi-alert--footer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// export default AimiAlert;
const div = document.createElement('div');
document.body.appendChild(div)


export default {
  success(content, duration, onClose) {
    // alert(content);
    ReactDOM.render(<Alert />, div)
  },
  error(content, duration, onClose) {
    console.log(content)
  },
  confirm(content){
    confirm(content)
  },
  info(content, duration, onClose) {
    
  },
  warning(content, duration, onClose) {
  
  }
};