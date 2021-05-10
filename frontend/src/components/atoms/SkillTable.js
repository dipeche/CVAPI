import React from 'react';

const SkillTable = ({ skillList }) => {
	return skillList.map((skill, indx) => (
		<tr key={`Skillid-${indx}`}>
			<td width="40%">
				<h3>{skill.title}</h3>
			</td>
			<td width="60%">
				{skill.skills.map((skillset) => (
					<p>{skillset}</p>
				))}
			</td>
		</tr>
	));
};

export default SkillTable;
