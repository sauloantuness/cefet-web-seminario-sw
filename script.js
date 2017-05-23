if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js').then(function(registration) {
		console.log('O ServiceWorker foi registrado com escopo: ', registration.scope);
	}).catch(function(err) {
		console.log('O registro do ServiceWorker falhou com o erro: ', err);
	});
}


$('button').on('click', function() {
	var url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

	$.ajax({
		method: 'GET',
		url: url,
		success: function(response) {
			
			// var messages = JSON.parse(localStorage.getItem('messages'));
			// messages.push(response.message);
			// localStorage.setItem('messages', JSON.stringify(messages))

			$('h1').html(response.message);
		}
	})
})

localStorage.setItem('messages', '[]');