function moreStyleLoad(triggerSelector, elemSelector, triggerDel = false) {
	const trigger = document.querySelector(triggerSelector),
		elem = document.querySelectorAll(elemSelector)

	trigger.addEventListener('click', () => {
		elem.forEach((item) => {
			item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs')
			item.classList.add(
				'col-sm-3',
				'col-sm-offset-0',
				'col-xs-10',
				'col-xs-offset-1',
				'animate__animated',
				'animate__backInDown'
			)

			if (triggerDel) {
				trigger.style.display = 'none'
				document.querySelector('.paints').style.display = 'none'
			}
		})
	})
}

export default moreStyleLoad
