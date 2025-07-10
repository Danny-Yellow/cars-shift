interface BuildPaths {
	entry: string;
	html: string;
	output: string;
	src: string;
}

export interface EnvVariables {
	mode?: 'development' | 'production';
	port?: number;
}

export interface BuildOptions extends EnvVariables {
	paths: BuildPaths;
}
