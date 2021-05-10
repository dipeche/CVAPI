export const flattenObject = (object, returnObject) => {
	Object.keys(object).forEach((key) => {
		if (typeof object[key] === 'object') {
			flattenObject(object[key], returnObject);
		} else {
			returnObject[key] = object[key];
		}
	});
	return returnObject;
};
