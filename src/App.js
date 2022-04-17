import { Route, Routes } from 'react-router-dom';

import { Navbar } from 'components/navbar/Navbar';
import { DarkMode } from 'utils/darkmode/DarkMode';
import { TaskMainListItem } from 'components/task-main-list-item/TaskMainListItem';

function App() {
	return (
		<div className='App'>
			<DarkMode />

			<Navbar />

			<Routes>
				<Route />
			</Routes>

			<div className='container'>
				<h2>To do Lists</h2>
				<ul className='task-list-main'>
					<TaskMainListItem id='School' total={10} complete={3} />
					<TaskMainListItem id='Personal' total={4} complete={3} />
					<TaskMainListItem id='Work' total={12} complete={7} />
				</ul>
			</div>

			<div className='container parent-wrapper'>
				<div className='child'></div>
				<div className='child'></div>
				<div className='child'></div>
			</div>
		</div>
	);
}

export default App;
