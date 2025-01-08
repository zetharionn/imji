export const validateUrl = async (url: string) => {
	const response = await fetch(url)
	return response.ok ? url : null
}
