export const compose =
	<T>(...funcs: ((arg: T) => T)[]): ((arg: T) => T) =>
	(arg: T): T =>
		funcs.reduceRight((acc, fn) => fn(acc), arg)
