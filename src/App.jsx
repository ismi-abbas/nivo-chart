import { ResponsiveCalendar } from '@nivo/calendar';
import data from './data.json';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [codeStats, setCodeStats] = useState(data);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch('https://codestats.net/api/users/ismiabbas');
		const responseData = await response.json();
		const dates = responseData.dates;

		let dateData = [];

		for (const key in dates) {
			if (Object.hasOwnProperty.call(dates, key)) {
				dateData.push({
					day: key,
					value: dates[key],
				});
			}
		}
		setCodeStats(dateData);
	};

	return (
		<div className="wrapper">
			<h1>My Codestats exp</h1>
			<a target="_blank" href="https://codestats.net/users/ismiabbas" rel="noreferrer">
				Codestats Link
			</a>
			<a href="https://nivo.rocks/calendar/" target="_blank" rel="noreferrer">
				Nivo Calendar
			</a>
			<a href="https://github.com/ismi-abbas/nivo-chart" target="_blank" rel="noreferrer">
				Github
			</a>

			<div className="container">
				<ResponsiveCalendar
					data={codeStats}
					from="2023-01-01"
					to="2023-12-31"
					emptyColor="#eeeeee"
					colors={['#216e39', '#30a14e', '#40c463', '#9be9a8'].reverse()}
					margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
					yearSpacing={40}
					monthBorderColor="#ffffff"
					dayBorderWidth={2}
					dayBorderColor="#ffffff"
					legends={[
						{
							anchor: 'top',
							direction: 'row',
							translateY: 36,
							itemCount: 4,
							itemWidth: 42,
							itemHeight: 12,
							itemsSpacing: 24,
						},
					]}
				/>
			</div>
		</div>
	);
}

export default App;
