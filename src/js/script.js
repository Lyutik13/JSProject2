'use strict'

import moreStyleLoad from './modules/moreStyleLoad'
import modals from './modules/modal'
import sliders from './modules/sliders'
import forms from './modules/forms'
import mask from './modules/mask'
import checkTextInputs from './modules/checkTextInputs'
import calc from './modules/calc'
import filter from './modules/filter'

window.addEventListener('DOMContentLoaded', () => {
	modals()

	// moreStyleLoad('.button-styles', '.styles-2', true)
	moreStyleLoad('.button-styles', '#styles .row', true)

	sliders('.main-slider-item', 'vertical')
	sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn')

  forms()

  mask('[name="phone"]')
  checkTextInputs('[name="name"]')

  calc('#size', '#material', '#options', '.promocode', '.calc-price')

  filter()
})


// json-server src/db.json
// gulp