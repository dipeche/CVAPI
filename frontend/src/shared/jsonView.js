import React from 'react';
import ReactJson from 'react-json-view';

const JsonView = ({ data, name }) => {
	// TODO: make data editable and saveable and things like that
	return (
		<ReactJson
			src={data}
			enableClipboard={true}
			name={name}
			collapseStringsAfterLength={10}
			collapsed={2}
		/>
	);
};

export default JsonView;
