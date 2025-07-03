interface AxiosRequestConfig<Params = undefined, Data = undefined> {
	config?: import('axios').AxiosRequestConfig<Data>;
	data?: Data;
	params?: Params;
}

interface DefaultResponse<Data> {
	data: Data;
	reason: string;
	success: boolean;
}
