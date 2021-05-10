import React from 'react';

const JobExperienceTable = ({ jobExperienceList }) => {
	return jobExperienceList.map((job, indx) => (
		<tr key={`JobId-${indx}`}>
			<td width="10%">{indx + 1}.</td>
			<td width="90%">
				<table class="table">
					<tr>
						<td width="20%">Title</td>
						<td width="80%">{job.title}</td>
					</tr>
					<tr>
						<td width="20%">Company</td>
						<td width="80%">{job.company}</td>
					</tr>
					<tr>
						<td width="20%">Address</td>
						<td width="80%">{job.address}</td>
					</tr>
					<tr>
						<td width="20%">Years</td>
						<td width="80%">
							{job.date?.from} - {job.date?.to}
						</td>
					</tr>
					<tr>
						<td width="20%">Description</td>
						<td width="80%">{job.description}</td>
					</tr>
					<tr>
						<td width="20%">Tasks & Achievements</td>
						<td width="80%">
							{job.tasks.map((task) => (
								<p>{task}</p>
							))}
						</td>
					</tr>
				</table>
			</td>
		</tr>
	));
};

export default JobExperienceTable;
