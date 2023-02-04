import { NavLink } from 'react-router-dom';
import { routes } from '../../router/routes';
import { Subscribe } from '.';




export const Navbar = () => {
    return (
            <div className="nav-bar" >
                <div className='logo'>
                    <Subscribe/>                                        
                </div>
                <nav>
                    <ul  style={{display:"flex",background:"#fff" }}>
                        {
                            routes.map( ({to, name}) => (
                                <li className='category' key={to}>
                                    <NavLink to={to} className={ ({isActive}) => isActive? 'nav-active' : '' } >• {name}</NavLink>
                                </li>
                            ))
                        }
                            <div className="search">
                                <input type="text" id="search-box" className='inp'/>
                                <button id="search-button">Search</button>
                            </div>
                    </ul>
                    
                </nav>
                <hr />
            </div>
        
        )
}
    