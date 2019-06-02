import React from 'react';
import './Nav.scss';

const Nav = () => {

    return (
            <div className="column col-10 col-md-10 col-mx-auto">
                <header className="navbar">

                    <section className="navbar-center">
                    </section>
                    <section className="navbar-section">
                        <a href="https://developers.deezer.com/api" target="_blank" rel="noopener noreferrer" className="btn btn-link">Deezer API</a>
                        <a href="https://github.com/samsaga1307" target="_blank" rel="noopener noreferrer" className="btn btn-link">My GitHub</a>
                    </section>
                </header>
            </div>
    )

}

export default Nav;
            