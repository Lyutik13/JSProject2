function scroll(elemSelector) {
  const elem = document.querySelector(elemSelector)
	const smoothLinks = document.querySelectorAll('a[href^="#"]')

	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener('click', function (e) {
			e.preventDefault()
			const id = smoothLink.getAttribute('href')

			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		})
	}

	window.addEventListener('scroll', function () {
		if (this.document.documentElement.scrollTop > 1650) {
      elem.style.opacity = '1'
		} else {
      elem.style.opacity = '0'
    }
	})
}

export default scroll
