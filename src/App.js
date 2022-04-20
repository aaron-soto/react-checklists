import { Route, Routes } from 'react-router-dom';

import { Navbar } from 'components/navbar/Navbar';
import { DarkMode } from 'utils/darkmode/DarkMode';
import { TaskMainListItem } from 'components/task-main-list-item/TaskMainListItem';

import { Home } from 'pages/home/Home';
import { Hangman } from 'pages/hangman/Hangman';

function App() {
	return (
		<div className='App'>
			<DarkMode />

			<Navbar />

			<Routes>
				<Route path='/hangman' element={<Hangman />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
