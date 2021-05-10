import React from 'react';

const EducationTable = ({ educationList }) => {
	return educationList.map((education, indx) => (
		<tr key={`Educationid-${indx}`}>
			<td width="10%">{indx + 1}.</td>
			<td width="90%">
				<table class="table">
					<tr>
						<td>Degree:</td>
						<td>{education.degree}</td>
					</tr>
					<tr>
						<td>College:</td>
						<td>{education.college}</td>
					</tr>
					<tr>
						<td>Address:</td>
						<td>{education.address}</td>
					</tr>
					<tr>
						<td>Duration:</td>
						<td>
							{education.date?.from} - {education.date?.to}
						</td>
					</tr>
					<tr>
						<td>Courses</td>
						<td>
							{education.courses.map((course) => (
								<p>{course}</p>
							))}
						</td>
					</tr>
				</table>
			</td>
		</tr>
	));
};

export default EducationTable;
