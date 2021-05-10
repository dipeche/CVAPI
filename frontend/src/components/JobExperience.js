import React, { useEffect, useState } from 'react';

import { getJobExperienceList } from '../services/jobExperienceServices';
import JsonView from '../shared/jsonView';
import RequestBody from '../shared/RequestBody';
import ToogleViewButton from '../shared/ToggleViewButton';
import { API_URL, VIEW_OPTIONS } from '../utils/constant';
import JobExperienceTable from './atoms/JobExperienceTable';

const JobExperience = () => {
	const [jobExperienceList, setJobExperienceList] = useState([]);
	const [currentView, setCurrentView] = useState(1);

	useEffect(() => {
		const GetAllListings = async () => {
			try {
				const results = await getJobExperienceList();
				setJobExperienceList(results);
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
			<RequestBody url={`${API_URL}work-experience`} />
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
							<JobExperienceTable jobExperienceList={jobExperienceList} />
						</>
					) : (
						<tr>
							<td colSpan={2}>
								<JsonView data={jobExperienceList} name="work_experience" />
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default JobExperience;
