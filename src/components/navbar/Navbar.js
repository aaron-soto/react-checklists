import { Link } from 'react-router-dom';
import './navbar.scss';

export const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='container nav'>
				<div className='nav-left'>
					<Link className='home-link' to='/'>
						Login Site
					</Link>
					<ul>
						<Link to='/airports'>Airports</Link>
					</ul>
				</div>
				<ul className='nav-right'>
					<li>Login</li>
					<li>Sign Up</li>
				</ul>
			</div>
		</div>
	);
};
