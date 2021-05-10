import React from 'react';

const SummaryTable = ({ summaryList }) => {
	return (
		<>
			<tr>
				<td>
					<b>Name</b>
				</td>
				<td>{summaryList?.name}</td>
			</tr>
			<tr>
				<td>
					<b>Title</b>
				</td>
				<td>{summaryList?.title}</td>
			</tr>
			<tr>
				<td>
					<b>Summary</b>
				</td>
				<td>{summaryList?.summary}</td>
			</tr>
			<tr>
				<td>
					<b>Address</b>
				</td>
				<td>{summaryList?.address}</td>
			</tr>
			<tr>
				<td>
					<b>Email</b>
				</td>
				<td>{summaryList?.email}</td>
			</tr>
			<tr>
				<td>
					<b>Phone</b>
				</td>
				<td>{summaryList?.phone}</td>
			</tr>
			<tr>
				<td>
					<b>Linkedin</b>
				</td>
				<td>{summaryList?.linkedIn}</td>
			</tr>
			<tr>
				<td>
					<b>Github</b>
				</td>
				<td>{summaryList?.github}</td>
			</tr>
			<tr>
				<td>
					<b>Facebook</b>
				</td>
				<td>{summaryList?.facebook}</td>
			</tr>
		</>
	);
};

export default SummaryTable;
