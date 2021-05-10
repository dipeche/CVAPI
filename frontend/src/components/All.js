import React, { useEffect, useState } from 'react';

import { getAllList } from '../services/allServices';
import JsonView from '../shared/jsonView';
import RequestBody from '../shared/RequestBody';
import ToogleViewButton from '../shared/ToggleViewButton';
import { API_URL, VIEW_OPTIONS } from '../utils/constant';
import EducationTable from './atoms/EducationTable';
import JobExperienceTable from './atoms/JobExperienceTable';
import OtherFieldTable from './atoms/OtherFieldTable';
import SkillTable from './atoms/SkillTable';
import SummaryTable from './atoms/SummaryTable';

const All = () => {
	const [allList, setAllList] = useState([]);
	const [currentView, setCurrentView] = useState(1);

	useEffect(() => {
		const GetAllListings = async () => {
			try {
				const results = await getAllList();
				setAllList(results);
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
			<RequestBody url={`${API_URL}all`} />
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
							<h4>Summary</h4>
							<SummaryTable summaryList={allList.summary} />
							<h4>Education</h4>
							<EducationTable educationList={allList.education} />
							<h4>Work Experience</h4>
							<JobExperienceTable jobExperienceList={allList.jobExperience} />
							<h4>Skills</h4>
							<SkillTable skillList={allList.skills} />
							<h4>Others</h4>
							<OtherFieldTable otherFieldList={allList.otherFields} />
						</>
					) : (
						<tr>
							<td colSpan={2}>
								<JsonView data={allList} name="cv" />
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default All;
