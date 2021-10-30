import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Navbar = () => {
    const { changeTheme } = bindActionCreators(actionCreators, useDispatch());
    const { amount, theme } = useSelector(state => state);
    return (
        <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Redux bank</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <button className={`btn btn-${theme === 'light' ? 'dark' : 'light'} disabled`}>Your balance: {amount}</button>
                </div>
                <button className={`btn btn-${theme === 'light' ? 'dark' : 'light'}`} onClick={() => { changeTheme(theme === 'light' ? 'dark' : 'light') }}>Dark mode</button>
            </div>
        </nav>
    )
}

export default Navbar
