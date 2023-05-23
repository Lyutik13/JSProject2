const burger = (menuSelector, burgerSelector) => {
	const menuElem = document.querySelector(menuSelector),
		burgerElem = document.querySelector(burgerSelector)

	burgerElem.addEventListener('click', () => {
		menuElem.classList.toggle('active')
	})
}

export default burger
