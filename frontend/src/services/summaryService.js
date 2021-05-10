import axios from '../utils/axios';
import { flattenObject } from '../utils/helper';

const summaryURL = `/summary`;

const getSummaryList = async () => {
	try {
		const results = await axios.get(summaryURL);
		const curatedResult = {};
		flattenObject(results.data, curatedResult);
		return curatedResult;
	} catch (err) {
		console.log(err);
	}
};

const getSummaryById = async (id) => {
	try {
		const results = await axios.get(`${summaryURL}/${id}`);
		return results;
	} catch (err) {
		console.log(err);
	}
};

const addNewSummary = async (newSummary) => {
	try {
		const results = await axios.post(summaryURL + '/new', newSummary);
		if (results.status !== 200) {
			throw new Error(results.error);
		}

		return results;
	} catch (err) {
		console.log(err);
	}
};

const updateSummary = async (updatedSummary) => {
	try {
		const results = await axios.put(
			`${summaryURL}/update/${updatedSummary.id}`,
			updatedSummary
		);
		if (results.status !== 200) {
			throw new Error(results.error);
		}
		return results;
	} catch (err) {
		console.log(err);
	}
};

const deleteSummary = async (id) => {
	try {
		const results = await axios.delete(`${summaryURL}/${id}`);
		if (results.status !== 200) {
			throw new Error(results.error);
		}
		return results;
	} catch (err) {
		console.log(err);
	}
};

export default {
	getSummaryList,
	getSummaryById,
	addNewSummary,
	updateSummary,
	deleteSummary,
};
