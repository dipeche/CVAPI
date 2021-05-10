import React from 'react';

const ToogleViewButton = ({ buttonText, toggleButton }) => {
	return (
		<button onClick={toggleButton} className="btn btn-warning">
			Switch to {buttonText}
		</button>
	);
};

export default ToogleViewButton;
