import axios from '../utils/axios';

const educationURL = `/education`;
export const getEducationList = async () => {
	try {
		const results = await axios.get(educationURL);

		return results.data;
	} catch (err) {
		console.log(err);
	}
};

export const getEducationById = async (id) => {
	try {
		const results = await axios.get(`${educationURL}/${id}`);
		return results;
	} catch (err) {
		console.log(err);
	}
};

export const addNewEducation = async (newEducation) => {
	try {
		const results = await axios.post(educationURL + '/new', newEducation);
		if (results.status !== 200) {
			throw new Error(results.error);
		}

		return results;
	} catch (err) {
		console.log(err);
	}
};

export const updateEducation = async (updatedEducation) => {
	try {
		const results = await axios.put(
			`${educationURL}/update/${updatedEducation.id}`,
			updatedEducation
		);
		if (results.status !== 200) {
			throw new Error(results.error);
		}
		return results;
	} catch (err) {
		console.log(err);
	}
};

export const deleteEducation = async (id) => {
	try {
		const results = await axios.delete(`${educationURL}/${id}`);
		if (results.status !== 200) {
			throw new Error(results.error);
		}
		return results;
	} catch (err) {
		console.log(err);
	}
};
