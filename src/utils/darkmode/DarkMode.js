import { useEffect, useState } from 'react';
import './toggle-switch.scss';

import { CgDarkMode } from 'react-icons/cg';
import { IoColorPalette } from 'react-icons/io5';
import { BsGearFill } from 'react-icons/bs';

export const DarkMode = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isToggled, setIsToggled] = useState(true);
	const [colorsToggled, setColorsToggled] = useState(false);
	const [activeColor, setActiveColor] = useState('purple');

	useEffect(() => {
		document.documentElement.classList.add(`theme-light`, `palette-purple`);
	}, []);

	useEffect(() => {
		if (isToggled) {
			document.documentElement.classList.remove(`theme-dark`);
			document.documentElement.classList.add(`theme-light`);
		} else {
			document.documentElement.classList.add(`theme-dark`);
			document.documentElement.classList.remove(`theme-light`);
		}
	}, [isToggled]);

	useEffect(() => {
		document.documentElement.classList.remove(`palette-red`);
		document.documentElement.classList.remove(`palette-blue`);
		document.documentElement.classList.remove(`palette-purple`);
		document.documentElement.classList.remove(`palette-green`);
		document.documentElement.classList.remove(`palette-orange`);
		document.documentElement.classList.remove(`palette-yellow`);
		document.documentElement.classList.add(`palette-${activeColor}`);
	}, [activeColor]);

	// {/* <CgDarkMode /> */}
	return (
		<>
			<div
				className={`menu-open-btn ${menuOpen ? 'opened' : ''}`}
				onClick={(e) => setMenuOpen(!menuOpen)}
			>
				<BsGearFill className='icon' />
			</div>

			<div className={`menu-icons ${menuOpen ? 'opened' : ''}`}>
				<div
					className={`icon-wrapper mode ${isToggled ? 'active' : ''}`}
					onClick={(e) => setIsToggled(!isToggled)}
				>
					<CgDarkMode />
				</div>
				<div
					className='icon-wrapper'
					onClick={(e) => setColorsToggled(!colorsToggled)}
				>
					<IoColorPalette />
				</div>
			</div>

			<div
				className={`color-icons ${colorsToggled ? 'active' : ''} ${
					menuOpen ? 'opened' : ''
				}`}
			>
				<div
					className='color-btn red'
					onClick={(e) => setActiveColor('red')}
				></div>
				<div
					className='color-btn blue'
					onClick={(e) => setActiveColor('blue')}
				></div>
				<div
					className='color-btn purple'
					onClick={(e) => setActiveColor('purple')}
				></div>
				<div
					className='color-btn green'
					onClick={(e) => setActiveColor('green')}
				></div>
				<div
					className='color-btn orange'
					onClick={(e) => setActiveColor('orange')}
				></div>
				<div
					className='color-btn yellow'
					onClick={(e) => setActiveColor('yellow')}
				></div>
			</div>
		</>
	);
};
