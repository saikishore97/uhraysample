import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.styles.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Navbar() {

    return (
        <div className="navbar">
            <div className='nav-menu'>
                <ul>
                    <li>
                        <Link to="/" className="menu-items">Home</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='menu-items'>
                            Contact
                        </Link>
                    </li>

                    <li>
                        <Link to="/Page2" className='menu-items'>Page2</Link>

                        <ul className="ul__subitems">    
                            <li><Link className="menu-items__subitem">Subpage 1</Link></li>
                            <li><Link className="menu-items__subitem">Subpage 2</Link></li>
                        </ul>

                    </li>

                    <li>
                        <Link to="/Page2" className='menu-items'>Page3</Link>
                    
                    </li>

                    <li className="signout__section__container">
                        <div className="signout__section">
                            <h4>Sign Out</h4>
                            <ExitToAppIcon/>
                        </div>
                    </li>
                </ul>


            </div>

                
        </div>
    )
}

export default Navbar
