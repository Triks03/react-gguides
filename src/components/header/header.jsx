import { Link } from 'react-router-dom';

import './header.sass'

const Header = () => {
    return(
        <div className="navigation">
            <h2 className="navigation__title"><Link to='/' className="navigation__title-link">GGuides</Link></h2>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link to="/character" className="navigation__link">Characters</Link>
                </li>
                <li className="navigation__item">
                    <Link to="/weapon" className="navigation__link">Weapons</Link>
                </li>
                <li className="navigation__item">
                    <Link to="/artifact" className="navigation__link">Artifacts</Link>
                </li>
                <li className="navigation__item">
                    <Link to="/admin-panel" className="navigation__link">Admin Page</Link>
                </li>
            </ul>
            <Link to="/login"><button className='navigation__button'>Log in</button></Link>
        </div>
    )
}

export default Header;