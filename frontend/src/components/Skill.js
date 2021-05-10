import React, { useEffect, useState } from 'react';

import { getSkillList } from '../services/skillService';
import JsonView from '../shared/jsonView';
import RequestBody from '../shared/RequestBody';
import ToogleViewButton from '../shared/ToggleViewButton';
import { API_URL, VIEW_OPTIONS } from '../utils/constant';
import SkillTable from './atoms/SkillTable';

const Skills = () => {
	const [skillList, setSkillList] = useState([]);
	const [currentView, setCurrentView] = useState(1);

	useEffect(() => {
		const GetAllListings = async () => {
			try {
				const results = await getSkillList();
				setSkillList(results);
			} catch (err) {
				console.log(err);
			}
		};
		// AddNewData();
		GetAllListings();
	}, []);

	const toggleButton = () => {
		setCurrentView(1 - currentView);
	};
	return (
		<div>
			<RequestBody url={`${API_URL}skill`} />
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
							<SkillTable skillList={skillList} />
						</>
					) : (
						<tr>
							<td colSpan={2}>
								<JsonView data={skillList} name="skill" />
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Skills;
