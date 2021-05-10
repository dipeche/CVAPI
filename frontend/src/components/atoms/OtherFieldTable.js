import React from 'react';

const OtherFieldTable = ({ otherFieldList }) => {
	return otherFieldList.map((field, indx) => (
		<tr key={`FieldId-${indx}`}>
			<td>{field.name}</td>
			<td>{field.details.join(', ')}</td>
		</tr>
	));
};

export default OtherFieldTable;
