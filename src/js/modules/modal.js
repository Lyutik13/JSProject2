const modals = () => {
	let btnPressed = false

	function bindModal(
		triggerSelector,
		modalSelector,
		closeSelector,
		destroy = false
	) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]'),
			scroll = calcScroll()

		function windowsDisplayNone() {
			windows.forEach((item) => {
				item.style.display = 'none'
			})
		}

		function openModal() {
			modal.style.display = 'block'
			document.body.style.overflow = 'hidden'
			modal.classList.add('animate__animated', 'animate__fadeIn')
			document.body.style.marginRight = `${scroll}px`
		}

		function closeModal() {
			modal.style.display = 'none'
			document.body.style.overflow = ''
			document.body.style.marginRight = `0px`
			modal.classList.remove('animate__animated', 'animate__fadeIn')
		}

		trigger.forEach((item) => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault()
				}

				btnPressed = true

				if (destroy) {
					item.remove()
				}

				windowsDisplayNone()
				openModal()
			})
		})

		close.addEventListener('click', () => {
			windowsDisplayNone()
			closeModal()
		})

		// закрытие modal по клику в области
		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				windowsDisplayNone()
				closeModal()
			}
		})

		// Закрытие модального окна при клике на клавишу ESC.
		document.addEventListener('keydown', (e) => {
			if (e.code === 'Escape' && getComputedStyle(modal).display == 'block') {
				windowsDisplayNone()
				closeModal()
			}
		})
	}
	// /bindModal()

	// Открытие модалки через некоторое время (time) если открыто другое модальное окно этого не будет
	function showModalByTime(selector, time) {
		setTimeout(function () {
			let display

			document.querySelectorAll('[data-modal]').forEach((item) => {
				if (getComputedStyle(item).display !== 'none') {
					display = 'block'
				}
			})

			if (!display) {
				document.querySelector(selector).click()
			}
		}, time)
	}

	//убираем прыгание модального окна
	function calcScroll() {
		let div = document.createElement('div')

		div.style.width = '50px'
		div.style.height = '50px'
		div.style.overflowY = 'scroll'
		div.style.visibility = 'hidden'

		document.body.appendChild(div)
		let scrollWidth = div.offsetWidth - div.clientWidth
		div.remove()

		return scrollWidth
	}

	// Открытие модального окна после прокрутки страницы до конца и не нажатии ни одной кнопки
	// высота клиентского окна + высота скрола >= всей высоте страницы
	function openByScroll(selector) {
		window.addEventListener('scroll', () => {
			if (
				!btnPressed &&
				document.documentElement.clientHeight + window.scrollY >=
					document.documentElement.scrollHeight
			) {
				document.querySelector(selector).click()
			}
		})
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close')
	bindModal(
		'.button-consultation',
		'.popup-consultation',
		'.popup-consultation .popup-close'
	)
	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true)
	openByScroll('.fixed-gift')
	// showModalByTime(".button-consultation", 60000);
}

export default modals
