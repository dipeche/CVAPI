import axios from '../utils/axios';

const otherFieldURL = `/other-fields`;
export const getOtherFieldList = async () => {
	try {
		const results = await axios.get(otherFieldURL);
		return results.data;
	} catch (err) {
		console.log(err);
	}
};

export const getOtherFieldById = async (id) => {
	try {
		const results = await axios.get(`${otherFieldURL}/${id}`);
		return results;
	} catch (err) {
		console.log(err);
	}
};

export const addNewOtherField = async (newOtherField) => {
	try {
		const results = await axios.post(otherFieldURL + '/new', newOtherField);
		if (results.status !== 200) {
			throw new Error(results.error);
		}

		return results;
	} catch (err) {
		console.log(err);
	}
};

export const updateOtherField = async (updatedOtherField) => {
	try {
		const results = await axios.put(
			`${otherFieldURL}/update/${updatedOtherField.id}`,
			updatedOtherField
		);
		if (results.status !== 200) {
			throw new Error(results.error);
		}
		return results;
	} catch (err) {
		console.log(err);
	}
};

export const deleteOtherField = async (id) => {
	try {
		const results = await axios.delete(`${otherFieldURL}/${id}`);
		if (results.status !== 200) {
			throw new Error(results.error);
		}
		return results;
	} catch (err) {
		console.log(err);
	}
};
