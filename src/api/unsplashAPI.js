import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID HaeCmid3kcE4v8D7sqerRmzbZOOsoER3f6Zl4EaJErg',
	},
});
