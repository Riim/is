export const is: (value1: any, value2: any) => boolean =
	Object.is || ((a, b) => (a === b ? a !== 0 || 1 / a == 1 / b : a != a && b != b));
