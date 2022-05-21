import axios from 'axios';

interface postBody {
	name: string;
	dial: number;
	img: string;
}
interface updateBody {
	name?: string;
	dial?: number;
	img?: string;
}

export const postRadio = async (token: string, body: postBody) => {
	try {
		const { data } = await axios.post('http://localhost:8080/api/radio', body, {
			headers: { authorization: `Bearer ${token}` },
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const updateRadio = async (
	token: string,
	id: string,
	body: updateBody
) => {
	try {
		const { data } = await axios.put(
			`http://localhost:8080/api/radio/${id}`,
			{ ...body },
			{
				headers: { authorization: `Bearer ${token}` },
			}
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const deleteRadio = async (token: string, id: string) => {
	try {
		const { data } = await axios.delete(
			`http://localhost:8080/api/radio/${id}`,

			{
				headers: { authorization: `Bearer ${token}` },
			}
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};
