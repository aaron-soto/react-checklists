import './flights.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Flights = () => {
	const { icao_code } = useParams();
	const [flights, setFlights] = useState();

	const API_URL = `https://airlabs.co/api/v9/schedules?dep_icao=${icao_code}&api_key=db013859-69b1-4f9c-80e9-c0c310083827`;

	useEffect(() => {
		axios.get(API_URL).then((response) => {
			// setAirport(response.data);
			setFlights(response.data.response);
		});
	}, []);

	return (
		<div className='container flights'>
			{flights
				? flights.map((flight) => {
						return (
							<p>
								Flight Number: {flight.flight_number}, from: {flight.dep_icao}{' '}
								to: {flight.arr_icao}
							</p>
						);
				  })
				: ''}
		</div>
	);
};
