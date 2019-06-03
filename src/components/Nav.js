import React from 'react';
import './Nav.scss';
import logo from '../imgs/logo.svg';

const Nav = () => {

    return (
            <div className="column col-10 col-md-10 col-mx-auto">
                <header className="navbar">
                    <section className="navbar-section">
                        <a href="/" className="logo-link">
                            <img src={logo} className="logo" alt="logo"/>
                            <h6>Musica</h6>
                        </a>
                    </section>

                    <section className="navbar-section hide">
                        <a href="https://dribbble.com/UiSaga" target="_blank" rel="noopener noreferrer" className="btn btn-link">Dribbble</a>
                        <a href="https://github.com/samsaga1307" target="_blank" rel="noopener noreferrer" className="btn btn-link">GitHub</a>

                        
                    </section>
                </header>
            </div>
    )

}

export default Nav;
            