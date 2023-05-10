import { getResourse } from '../services/requests'

function moreStyleLoad(triggerSelector, wrapper, triggerDel = false) {
	const trigger = document.querySelector(triggerSelector)
	// elem = document.querySelectorAll(elemSelector)

	/* 	trigger.addEventListener('click', () => {
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
	}) */

	trigger.addEventListener('click', function () {
		// getResourse('http://localhost:3000/styles')
		getResourse('db.json')
			// .then((res) => createCards(res))
			.then((res) => createCards(res.styles))
			.catch((error) => console.log(error))

		if (triggerDel) {
			this.remove()
			document.querySelector('.paints').style.display = 'none'
		}
	})

	function createCards(response) {
		response.forEach(({src, title, link}) => {
			let card = document.createElement('div')

			card.classList.add(
				'col-sm-3',
				'col-sm-offset-0',
				'col-xs-10',
				'col-xs-offset-1',
				'animate__animated',
				'animate__backInDown'
			)

			card.innerHTML = `
      <div class='styles-block'>
        <img src= ${src} alt='style'>
        <h4>${title}</h4>
        <a href=${link}>Подробнее</a>
      </div>`

			document.querySelector(wrapper).appendChild(card)
		})
	}
}

export default moreStyleLoad
