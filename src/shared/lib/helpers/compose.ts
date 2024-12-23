export const compose = <T>(...funcs: ((arg: T) => T)[]): ((arg: T) => T) => {
	return (arg: T): T => funcs.reduceRight((acc, fn) => fn(acc), arg)
}
