'use strict'

import moreStyleLoad from './modules/moreStyleLoad'
import modals from './modules/modal'
import sliders from './modules/sliders'
import forms from './modules/forms'

window.addEventListener('DOMContentLoaded', () => {
	modals()

	moreStyleLoad('.button-styles', '.styles-2', true)

	sliders('.main-slider-item', 'vertical')
	sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn')

  forms()
})
