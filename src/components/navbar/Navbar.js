import './navbar.scss';

export const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='container nav'>
				<div className='nav-left'>
					<span>Login Site</span>
					<ul>
						<li>Home</li>
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
