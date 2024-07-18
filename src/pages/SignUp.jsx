import { Link } from 'react-router-dom';
import '../assets/styles/SignIn-style.css';

function SignUp() {

    return (
        <>
            <div className="container signIn">
                <div className="signIn-card p-4">
                    <h2 className='text-center mb-5'>CariLoad</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder='Enter your email' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Enter password</label>
                            <input type="password" className="form-control" id="password" placeholder='Password' />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Confirm password</label>
                            <input type="password" className="form-control" id="password" placeholder='Password' />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <div className="w-100 d-flex align-content-center justify-content-between">
                            <Link to='/cari-load/signin' className='m-0'>Login now</Link>
                            <button type="submit" className="signIn-btn">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;