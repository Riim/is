let is: (a: any, b: any) => boolean = Object.is || ((a, b) => {
	return a === b ? a !== 0 || 1 / a == 1 / b : a != a && b != b;
});

export { is };
