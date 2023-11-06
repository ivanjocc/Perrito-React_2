import axios from 'axios';

const baseURL = 'https://api.joeleprof.com/letsplay';

export const login = async (userData) => {
	try {
		const response = await axios.post(`${baseURL}/login`, userData);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const register = async (userData) => {
	try {
		const response = await axios.post(`${baseURL}/register`, userData);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getUserList = async () => {
	try {
		const response = await axios.get(`${baseURL}/users`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const increaseUserScore = async (userId) => {
	try {
		const response = await axios.put(`${baseURL}/users/${userId}/increase-score`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const decreaseUserScore = async (userId) => {
	try {
		const response = await axios.put(`${baseURL}/users/${userId}/decrease-score`);
		return response.data;
	} catch (error) {
		throw error;
	}
};


