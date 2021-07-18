import api from './api';
export default async function fetcher(urls) {
	const responses = await Promise.all(urls.map((req) => api.get(req)));
	return responses.map((r) => r['data']);
}
