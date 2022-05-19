const URL = 'https://gorest.co.in/public/v1/users';

const list = document.getElementById('list');

const getData = async (url) => {
	const res = await fetch(url);
	const data = await res.json();

	//Just to show some data
	data.data.forEach((user) => {
		const li = `<li>${user.name}</li>`;
		list.innerHTML += li;
	});

	return data;
};

getData(URL);
