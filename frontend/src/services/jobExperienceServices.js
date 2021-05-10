import axios from '../utils/axios';

const jobExperienceURL = `/work-experience`;
export const getJobExperienceList = async () => {
	try {
		const results = await axios.get(jobExperienceURL);
		return results.data;
	} catch (err) {
		console.log(err);
	}
};

// export const getJobExperienceById = async (id) => {
// 	try {
// 		const results = await axios.get(`${jobExperienceURL}/${id}`);
// 		return results;
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

export const addNewJobExperience = async (newJobExperience) => {
	try {
		const results = await axios.post(
			jobExperienceURL + '/new',
			newJobExperience
		);
		if (results.status !== 200) {
			throw new Error(results.error);
		}

		return results;
	} catch (err) {
		console.log(err);
	}
};

export const updateJobExperience = async (updatedJobExperience) => {
	try {
		const results = await axios.put(
			`${jobExperienceURL}/update/${updatedJobExperience.id}`,
			updatedJobExperience
		);
		if (results.status !== 200) {
			throw new Error(results.error);
		}
		return results;
	} catch (err) {
		console.log(err);
	}
};

export const deleteJobExperience = async (id) => {
	try {
		const results = await axios.delete(`${jobExperienceURL}/${id}`);
		if (results.status !== 200) {
			throw new Error(results.error);
		}
		return results;
	} catch (err) {
		console.log(err);
	}
};
