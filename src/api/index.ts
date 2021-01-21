import axios, { AxiosResponse } from "axios";

export const getRequest = async <T>(url: string): Promise<AxiosResponse<T>> => {
	return axios.get<T>(url);
};
