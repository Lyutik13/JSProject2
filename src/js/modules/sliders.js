const sliders = (slides, dir, prev, next) => {
	let slideIndex = 1,
		paused = false

	const items = document.querySelectorAll(slides)

	// settings
	function showSlides(n) {
		if (n > items.length) {
			slideIndex = 1
		}

		if (n < 1) {
			slideIndex = items.length
		}

		items.forEach((item) => {
			item.classList.add('animate__animated')
			item.style.display = 'none'
		})

		items[slideIndex - 1].style.display = 'block'
	}

	showSlides(slideIndex)

	function plusSlides(n) {
		showSlides((slideIndex += n))
	}

	// обрабртчик ошибок если нет prev, next
	try {
		const prevBtn = document.querySelector(prev),
			nextBtn = document.querySelector(next)

		prevBtn.addEventListener('click', () => {
			plusSlides(-1)
			items[slideIndex - 1].classList.remove('animate__backInRight')
			items[slideIndex - 1].classList.add('animate__backInLeft')
		})

		nextBtn.addEventListener('click', () => {
			plusSlides(1)
			items[slideIndex - 1].classList.remove('animate__backInLeft')
			items[slideIndex - 1].classList.add('animate__backInRight')
		})
	} catch (e) {}

	function activateAnimation() {
    // анимация
		if (dir === 'vertical') {
			paused = setInterval(function () {
				plusSlides(1)
				items[slideIndex - 1].classList.add('animate__fadeInUp')
			}, 4000)
		} else {
			paused = setInterval(function () {
				plusSlides(1)
				items[slideIndex - 1].classList.remove('animate__backInLeft')
				items[slideIndex - 1].classList.add('animate__backInRight')
			}, 4000)
		}
	}

	activateAnimation()

  // убираем анимацию при наводе мышкой на родителя слайдера
	items[0].parentNode.addEventListener('mouseenter', () => {
		clearInterval(paused)
	})

	items[0].parentNode.addEventListener('mouseleave', () => {
		activateAnimation()
	})
}

export default sliders
