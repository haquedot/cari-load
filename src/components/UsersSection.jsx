import React from 'react';
import '../assets/styles/UserSection-style.css';
import userSection from '../assets/images/user-section.svg';

function UserSection() {

    return (
        <>
            <div className="container user-section">
                <h2 className='text-center'>
                    Who are <span>Our Users?</span>
                </h2>
                <div className="row m-0">
                    <div className="col-lg-6 p-4">
                        <img src={userSection} alt="userSection" className='w-100' />
                    </div>
                    <div className="col-lg-6 m-auto">
                        <div className="d-flex align-items-center flex-column">
                            <div className="p-4 user-card">
                                <i class="bi bi-person-fill"></i>
                                <h3>Load Owners</h3>
                                <p>Easily find available trucks to transport your loads, anywhere and anytime.</p>
                            </div>

                            <div className="p-4 user-card">
                                <i class="bi bi-person-fill"></i>
                                <h3>Load Owners</h3>
                                <p>Easily find available trucks to transport your loads, anywhere and anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserSection;