import React from 'react';
import img from './error.png';
import './error.css';

const Error = ({errorMessage}) => {
    let mess = `Unexpexted Error. Something goes wrong.`;

    switch (errorMessage) {
        case '404':
            mess = `Error ${errorMessage}. The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.`;
            break;
        case '408':
            mess = `Error ${errorMessage}. The server did not receive a complete request message within the time that it was prepared to wait.`;
            break;
        case '410':
            mess = `Error ${errorMessage}. Access to the target resource is no longer available at the origin server.`;
            break;
        case '500':
            mess = `Critical Error ${errorMessage}. Could not connect to server.`;
            break;
        default:
            break;
    }

    return  <div className="error">
                <img src={img} width="100" height="100" alt="error"></img>
                <span>{mess}</span>
            </div>
}

export default Error;