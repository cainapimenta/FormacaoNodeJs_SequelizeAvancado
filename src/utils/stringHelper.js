module.exports = (objectProperties) => {
	for (let prop in objectProperties) {
		if (/Id|id/.test(prop)) {
			objectProperties[prop] = Number(objectProperties[prop]);
		}
	}

	return objectProperties;
};