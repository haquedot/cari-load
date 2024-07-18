import React from 'react';
import '../assets/styles/Features-style.css';
import costumer from '../assets/images/customer.svg';
import cost from '../assets/images/cost.svg';
import map from '../assets/images/map.svg';

function Features() {

    return (
        <>
            <div className="container feature-section">
                <h2 className='text-center'>
                    Our <span>Features</span>
                </h2>
                <div className="row m-0">
                    <div className="col-lg-4">
                        <div className="py-4 feature-card">
                            <img src={cost} alt="Cost" />
                            <h3>Cost Effectiveness</h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="py-4 feature-card">
                            <img src={costumer} alt="Cost" />
                            <h3>Customer Verification</h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="py-4 feature-card">
                            <img src={map} alt="Cost" />
                            <h3>Real-Time Tracking</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;