import React,{useState} from 'react';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import './Header.styles.css';
import MenuIcon from '@material-ui/icons/Menu';
import Navbar from './Navbar.component';
import { Link } from 'react-router-dom';




function Header() {
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="header">
            <div className="header__main">
                <MenuIcon onClick={showSidebar} className="menu__icon"></MenuIcon>
                <Link to="/" className="header__homelink">Home</Link>
                <NotificationImportantIcon className="alert__icon"></NotificationImportantIcon>
            </div>
            
            {
                sidebar?<Navbar/>:null
            }
        </div>
    )
}

export default Header;
