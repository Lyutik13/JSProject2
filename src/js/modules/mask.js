const mask = (selector) => {
/* 	let setCursorPosition = (pos, elem) => {
		// ставит курсор
		elem.setSelectionRange(pos, pos)
	} */

	function createMask(event) {
		let matrix = '+7 (___)-___-__-__',
			i = 0,
			// D - Соответствует любому нецифровому символу, g - global (заменяем на '')
			def = matrix.replace(/\D/g, ''),
			val = this.value.replace(/\D/g, '')

		if (def.length >= val.length) {
			val = def
		}

		// . - соответствует любому символу
		this.value = matrix.replace(/./g, function (a) {
			// d - цыфры
			// Метод test, который тестирует совпадение в строке. Возвращает либо истину либо ложь.
			return /[_\d]/.test(a) && i < val.length
				? val.charAt(i++)
				: i >= val.length
				? ''
				: a
		})
		if (event.type === 'blur') {
			if (this.value.length == 2) {
				this.value = ''
			} else {
				// setCursorPosition(this.value.length, this)
        this.setSelectionRange(this.value.length, this.value.length)
			}
		}
	}

	let inputs = document.querySelectorAll(selector)

	inputs.forEach((input) => {
		input.addEventListener('input', createMask)
		input.addEventListener('focus', createMask)
		input.addEventListener('blur', createMask)
	})
}

export default mask
