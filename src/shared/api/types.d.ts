interface AxiosRequestConfig<Params = undefined, Data = undefined> {
	config?: import('axios').AxiosRequestConfig<Data>;
	data?: Data;
	params?: Params;
}

interface DefaultResponse<Data, Meta = undefined> {
	data: Data;
	meta?: Meta;
	reason: string;
	success: boolean;
}

interface Meta {
	limit: number;
	page: number;
	total: number;
	totalPages: number;
}