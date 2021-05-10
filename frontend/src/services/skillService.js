import axios from '../utils/axios';

const skillURL = `/skills`;
export const getSkillList = async () => {
	try {
		const results = await axios.get(skillURL);
		return results.data;
	} catch (err) {
		console.log(err);
	}
};

export const getSkillById = async (id) => {
	try {
		const results = await axios.get(`${skillURL}/${id}`);
		return results;
	} catch (err) {
		console.log(err);
	}
};

export const addNewSkill = async (newSkill) => {
	try {
		const results = await axios.post(`${skillURL}/new`, newSkill);
		if (results.status !== 200) {
			throw new Error(results.error);
		}

		return results;
	} catch (err) {
		console.log(err);
	}
};

export const updateSkill = async (updatedSkill) => {
	try {
		const results = await axios.put(
			`${skillURL}/update/${updatedSkill.id}`,
			updatedSkill
		);
		if (results.status !== 200) {
			throw new Error(results.error);
		}
		return results;
	} catch (err) {
		console.log(err);
	}
};

export const deleteSkill = async (id) => {
	try {
		const results = await axios.delete(`${skillURL}/${id}`);
		if (results.status !== 200) {
			throw new Error(results.error);
		}
		return results;
	} catch (err) {
		console.log(err);
	}
};
