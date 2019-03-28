console.log('Client side javascript file is loaded!')

var weatherForm  = document.querySelector('form');
var search = document.querySelector('input');
var firstMessage = document.querySelector('#firstMessage');
var secondMessage = document.querySelector('#secondMessage');

weatherForm.addEventListener('submit',(e) => {
	e.preventDefault();

	firstMessage.textContent = "Loading..."
	secondMessage.textContent = "";
	const location = search.value;

	fetch('/weather?address='+location).then((response) => {
		response.json().then((data) => {
			if(data.error) {
				firstMessage.textContent = data.error;
			} else {
				firstMessage.textContent = data.location;
				secondMessage.textContent = data.forecast;
			}
		})
	})
})