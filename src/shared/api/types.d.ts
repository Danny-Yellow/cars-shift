interface AxiosRequestConfig<Params = undefined, Data = undefined> {
	config?: import('axios').AxiosRequestConfig<Data>;
	data?: Data;
	params?: Params;
}

interface DefaultResponse<T> {
	data: T;
	reason: string;
	success: boolean;
}
