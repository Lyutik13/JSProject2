const forms = () => {
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		upload = document.querySelectorAll('[name="upload"]')

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		error: 'Что то пошло не так...',
		spinner: 'img/spinner.gif',
		ok: 'img/ok.png',
		fail: 'img/fail.png',
	}
  
	const path = {
		designer: 'server.php',
		question: 'question.php',
	}

	//ф-я отправки одного запроса
	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: 'POST',
			body: data,
		})

		return await res.text()
	}

	// очистка формы и надписи
	const clearInouts = () => {
		inputs.forEach((item) => {
			item.value = ''
		})
		upload.forEach((item) => {
			item.previousElementSibling.textContent = 'Файл не выбран'
		})
	}

	// изменение надписи при загрузке файла
	upload.forEach((item) => {
		item.addEventListener('input', () => {
			let dots
			const arr = item.files[0].name.split('.')
			arr.length > 6 ? (dots = '...') : (dots = '.')
			const name = arr[0].substring(0, 6) + dots + arr[1]
			item.previousElementSibling.textContent = name
		})
	})

	// Перебор всех форм, событие, отмена ст. поведения браузера(перезагрузки)
	form.forEach((item) => {
		item.addEventListener('submit', (e) => {
			e.preventDefault()

			// оповещение пользователя
			let statusMessage = document.createElement('div')
			statusMessage.classList.add('status')
			item.parentNode.appendChild(statusMessage)

			item.classList.add('animate__animated', 'animate__fadeOutUp')
			setTimeout(() => {
				item.style.display = 'none'
			}, 500)

			let statusImg = document.createElement('img')
			statusImg.setAttribute('src', message.spinner)
			statusImg.classList.add('animate__animated', 'animate__fadeInUp')
			statusMessage.appendChild(statusImg)

			let textMessage = document.createElement('div')
			textMessage.textContent = message.loading
			statusMessage.appendChild(textMessage)

			// собираем данные
			const formData = new FormData(item)

			// выбор куда отправляем
			let api
			item.closest('.popup-design') || item.classList.contains('calc_form')
				? (api = path.designer)
				: (api = path.question)
			console.log(api)

			// отправляем данные
			postData(api, formData)
				.then((res) => {
					console.log(res)
					statusImg.setAttribute('src', message.ok)
					textMessage.textContent = message.success
				})
				.catch(() => {
					statusImg.setAttribute('src', message.fail)
					textMessage.textContent = message.error
				})
				.finally(() => {
					clearInouts()
					setTimeout(() => {
						statusMessage.remove()
						item.style.display = 'block'
						item.classList.remove('animate__fadeOutUp')
						item.classList.add('animate__fadeInUp')
					}, 5000)
				})
		})
	})
}

export default forms
