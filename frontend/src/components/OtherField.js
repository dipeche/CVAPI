import React, { useEffect, useState } from 'react';

import { getOtherFieldList } from '../services/otherFieldService';
import JsonView from '../shared/jsonView';
import RequestBody from '../shared/RequestBody';
import ToogleViewButton from '../shared/ToggleViewButton';
import { API_URL, VIEW_OPTIONS } from '../utils/constant';
import OtherFieldTable from './atoms/OtherFieldTable';

const OtherField = () => {
	const [otherFieldList, setOtherFieldList] = useState([]);
	const [currentView, setCurrentView] = useState(1);

	useEffect(() => {
		const GetAllListings = async () => {
			try {
				const results = await getOtherFieldList();
				setOtherFieldList(results);
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
			<RequestBody url={`${API_URL}other-fields`} />
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
							<OtherFieldTable otherFieldList={otherFieldList} />
						</>
					) : (
						<tr>
							<td colSpan={2}>
								<JsonView data={otherFieldList} name="other_fields" />
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default OtherField;
