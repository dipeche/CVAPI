import React from 'react';

const RequestBody = ({ url }) => {
	return (
		<>
			<h1>Request</h1>
			<div className="row">
				<p>
					<b>GET</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<a href={url}>
						<i>{url}</i>
					</a>
				</p>
			</div>
		</>
	);
};

export default RequestBody;
