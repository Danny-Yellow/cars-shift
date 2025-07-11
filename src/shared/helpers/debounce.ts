let timer: ReturnType<typeof setTimeout> | undefined;

export function debounce(callback: () => void, ms: number) {
	if (timer) {
		clearTimeout(timer);
	}
	timer = setTimeout(() => {
		callback();
	}, ms);
}
