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
const url = 'https://turtlechallenge.herokuapp.com';

export const postRadio = async (token: string, body: postBody) => {
	try {
		const { data } = await axios.post(`${url}/api/radio`, body, {
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
			`${url}api/radio/${id}`,
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
			`${url}/api/radio/${id}`,

			{
				headers: { authorization: `Bearer ${token}` },
			}
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};
