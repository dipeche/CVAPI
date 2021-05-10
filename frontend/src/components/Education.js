import React, { useEffect, useState } from 'react';

import { getEducationList } from '../services/educationServices';
import JsonView from '../shared/jsonView';
import RequestBody from '../shared/RequestBody';
import ToogleViewButton from '../shared/ToggleViewButton';
import { API_URL, VIEW_OPTIONS } from '../utils/constant';
import EducationTable from './atoms/EducationTable';

const Education = () => {
	const [educationList, setEducationList] = useState([]);
	const [currentView, setCurrentView] = useState(1);

	useEffect(() => {
		const GetAllListings = async () => {
			try {
				const results = await getEducationList();
				setEducationList(results);
			} catch (err) {
				console.log(err);
			}
		};
		GetAllListings();
	}, []);

	const toggleButton = () => {
		setCurrentView(1 - currentView);
	};
	return (
		<div>
			<RequestBody url={`${API_URL}education`} />
			<table className="table">
				<thead>
					<tr>
						<th colSpan={2}>
							Response:{' '}
							<ToogleViewButton
								toggleButton={toggleButton}
								buttonText={VIEW_OPTIONS[1 - currentView]}
							/>
						</th>
					</tr>
				</thead>
				<tbody>
					{currentView === 0 ? (
						<>
							<EducationTable educationList={educationList} />
						</>
					) : (
						<tr>
							<td colSpan={2}>
								<JsonView data={educationList} name="education" />
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Education;
