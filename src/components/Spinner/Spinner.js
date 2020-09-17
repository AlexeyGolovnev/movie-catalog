import React from 'react';
import './Spinner.scss';
function Spinner(props) {
    return (
        <div className='spinner-box'>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
}

export default Spinner;