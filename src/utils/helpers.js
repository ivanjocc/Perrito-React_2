export const formatDate = (date) => {
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	return new Date(date).toLocaleDateString(undefined, options);
};

export const capitalizeString = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateUniqueId = () => {
	return '_' + Math.random().toString(36).substr(2, 9);
};
