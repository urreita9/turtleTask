const URL = 'https://gorest.co.in/public/v1/users';
const TOKEN =
	'd7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3';

const list = document.getElementById('list');

const getData = async (url) => {
	const res = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
	});
	const data = await res.json();

	//Just to show some data
	data.data.forEach((user) => {
		const li = `<li>${user.name}</li>`;
		list.innerHTML += li;
	});

	//return response from api
	return data;
};

getData(URL);
