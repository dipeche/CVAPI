import axios from '../utils/axios';
import { flattenObject } from '../utils/helper';

const allUrl = `/all`;
export const getAllList = async () => {
	try {
		const results = await axios.get(allUrl);
		const data = results.data;
		const summaryList = {};
		flattenObject(results.data.summary, summaryList);
		data.summary = summaryList;
		console.log(data);
		return results.data;
	} catch (err) {
		console.log(err);
	}
};
