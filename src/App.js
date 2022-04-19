import { Route, Routes } from 'react-router-dom';

import { Navbar } from 'components/navbar/Navbar';
import { DarkMode } from 'utils/darkmode/DarkMode';
import { TaskMainListItem } from 'components/task-main-list-item/TaskMainListItem';

import { Home } from 'pages/home/Home';
import { Airports } from 'pages/flights/Airports';
import { Flights } from 'pages/flights/Flights';

function App() {
	return (
		<div className='App'>
			<DarkMode />

			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/airports' element={<Airports />} />
				<Route path='/airports/:icao_code' element={<Flights />} />
			</Routes>
		</div>
	);
}

export default App;
