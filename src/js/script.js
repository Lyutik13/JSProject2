'use strict'

import moreStyleLoad from './modules/moreStyleLoad'
import modals from './modules/modal'
import sliders from './modules/sliders'
import forms from './modules/forms'
import mask from './modules/mask'
import checkTextInputs from './modules/checkTextInputs'
import calc from './modules/calc'
import filter from './modules/filter'
import picturesSizes from './modules/picturesSizes'
import accordion from './modules/accordion'
import burger from './modules/burger'
import scroll from './modules/scroll'

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

  picturesSizes('.sizes-block')

  accordion('.accordion-heading', '.accordion-block')

  burger('.burger-menu', '.burger')

  scroll('.pageup')
})


// json-server src/db.json
// gulp