// myCode
/* function picturesSizes() {
	function picturesSizesOption(number, srcEnd, src) {
		const pictures = document.querySelectorAll('.sizes-block > img')[number],
			sizePictures = document.querySelectorAll('.size')[number],
			startingPictures = document.querySelectorAll('.starting-price')[number],
			pricePictures = document.querySelectorAll('.final-price')[number],
      btn = document.querySelector('.sizes-hit')

		pictures.addEventListener('mouseover', function () {
			this.src = srcEnd
      this.classList.add('animate__animated', 'animate__swing')

			sizePictures.style.display = 'none'
			startingPictures.style.display = 'none'
			pricePictures.style.display = 'none'
		})

		pictures.addEventListener('mouseout', function () {
			this.src = src
      this.classList.remove('animate__animated', 'animate__swing')

			sizePictures.style.display = 'block'
			startingPictures.style.display = 'block'
			pricePictures.style.display = 'block'
		})

    btn.addEventListener('mouseover', function () {
			this.style.backgroundColor = '#ed8c00'
    })
    btn.addEventListener('mouseout', function () {
			this.style.backgroundColor = '#f99300'
    })
	}
  picturesSizesOption(0, 'img/sizes-1-1.png', 'img/sizes-1.png')
  picturesSizesOption(1, 'img/sizes-2-1.png', 'img/sizes-2.png')
  picturesSizesOption(2, 'img/sizes-3-1.png', 'img/sizes-3.png')
  picturesSizesOption(3, 'img/sizes-4-1.png', 'img/sizes-4.png')
} */

function picturesSizes(imgSelector) {
	const blocks = document.querySelectorAll(imgSelector)

	function showImg(block) {
		const img = block.querySelector('img')
		// something.png => something-1.png
		img.src = img.src.slice(0, -4) + '-1.png'
		block.querySelectorAll('p:not(.sizes-hit)').forEach((p) => {
			p.style.display = 'none'
		})

		block.classList.add('animate__animated', 'animate__swing')

		block.querySelector('.sizes-hit').style.backgroundImage =
			'linear-gradient(66deg,#a12ab1 0,#c818bc 100%)'
	}

	function hideImg(block) {
		const img = block.querySelector('img')
		// something.png => something-1.png
		img.src = img.src.slice(0, -6) + '.png'
		block.querySelectorAll('p:not(.sizes-hit)').forEach((p) => {
			p.style.display = 'block'
		})

		block.classList.remove('animate__animated', 'animate__swing')

		block.querySelector('.sizes-hit').style.backgroundImage =
			'linear-gradient(66deg,#ed8c00 0,#f99300 100%)'
	}

	blocks.forEach((block) => {
		block.addEventListener('mouseover', () => {
			showImg(block)
		})
		block.addEventListener('mouseout', () => {
			hideImg(block)
		})
	})
}

export default picturesSizes
