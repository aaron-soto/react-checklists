import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './flights.scss';

export const Airports = () => {
	const [airports, setAirports] = useState();
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredAirports, setFilteredAirports] = useState();

	const API_URL = `https://airlabs.co/api/v9/airports?&api_key=db013859-69b1-4f9c-80e9-c0c310083827`;

	useEffect(() => {
		axios.get(API_URL).then((response) => {
			setAirports(
				response.data.response.filter(
					(airport) => airport.country_code === 'US'
				)
			);
		});
	}, []);

	useEffect(() => {
		if (searchTerm.length >= 3) {
			let filtered = airports.filter((airport) =>
				airport.name.includes(searchTerm)
			);
			setFilteredAirports(filtered);
		} else {
			setFilteredAirports('');
		}
	}, [searchTerm]);

	https: return (
		<div className='airports'>
			{/* {airports &&
				airports.map((airport, idx) => {
					return <div key={idx}>{airport.name}</div>;
				})} */}
			{airports ? (
				<div className='container'>
					<div className='input-group'>
						<input
							type='text'
							className='input-box'
							placeholder='Search Airports'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<div className='btn btn-primary'>Click Me</div>
					</div>

					<ul className='results'>
						<h2>Results</h2>
						{filteredAirports &&
							filteredAirports.map((airport, idx) => {
								return (
									<Link
										key={idx}
										className='result'
										to={`/airports/${airport.icao_code}`}
									>
										{airport.name}
									</Link>
								);
							})}
					</ul>
				</div>
			) : (
				<h2 className='loading-header'>Loading...</h2>
			)}
		</div>
	);
};
