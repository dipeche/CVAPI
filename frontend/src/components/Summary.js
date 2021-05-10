import React, { useEffect, useState } from 'react';

import summaryService from '../services/summaryService';
import JsonView from '../shared/jsonView';
import RequestBody from '../shared/RequestBody';
import ToogleViewButton from '../shared/ToggleViewButton';
import { API_URL, VIEW_OPTIONS } from '../utils/constant';
import SummaryTable from './atoms/SummaryTable';

const Summary = () => {
	const [summaryList, setSummaryList] = useState({});
	const [currentView, setCurrentView] = useState(1);
	useEffect(() => {
		const getSummary = async () => {
			try {
				const results = await summaryService.getSummaryList();
				delete results.id;
				setSummaryList({ ...results });
			} catch (err) {}
		};
		getSummary();
	}, []);

	const toggleButton = () => {
		setCurrentView(1 - currentView);
	};

	return (
		<div>
			<RequestBody url={`${API_URL}summary`} />
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
							<SummaryTable summaryList={summaryList} />
						</>
					) : (
						<tr>
							<td colSpan={2}>
								<JsonView data={summaryList} name="summary" />
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Summary;
