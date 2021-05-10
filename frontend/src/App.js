import './App.css';

import React, { useState } from 'react';

import All from './components/All';
import Education from './components/Education';
import JobExperience from './components/JobExperience';
import OtherField from './components/OtherField';
import Skills from './components/Skill';
import Summary from './components/Summary';

const sections = [
	'All',
	'Summary',
	'Education',
	'Experience',
	'Skills',
	'Others',
];

function App() {
	const [currentSection, setCurrentSection] = useState('All');

	const getClassName = (section) => {
		const returnClass =
			currentSection === section
				? 'col-sm-12 col-md-2 btn btn-success'
				: 'col-sm-12 col-md-2 btn btn-outline-success';
		return returnClass;
	};

	const getActiveSection = () => {
		switch (currentSection) {
			case sections[1]:
				return <Summary />;
			case sections[2]:
				return <Education />;
			case sections[3]:
				return <JobExperience />;
			case sections[4]:
				return <Skills />;
			case sections[5]:
				return <OtherField />;
			default:
				return (
					<>
						<All />
					</>
				);
		}
	};
	return (
		<div className="App">
			<header className="App-header">Dipesh K. Sharma</header>

			<div className="container">
				<div className="navbar">
					{sections.map((section) => (
						<button
							href="#"
							className={getClassName(section)}
							onClick={() => setCurrentSection(section)}
							key={`Navbar-${section}`}
						>
							{section}
						</button>
					))}
				</div>
				<div className="row">
					<div className="content-div">{getActiveSection()}</div>
				</div>
			</div>
		</div>
	);
}

export default App;
