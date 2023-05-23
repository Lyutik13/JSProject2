const accordion = (trigerSelector, itemsSelector) => {
  const btns = document.querySelectorAll(trigerSelector),
    blocks = document.querySelectorAll(itemsSelector)

  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (!this.classList.contains('active')) {
        btns.forEach(btn => {
          btn.classList.remove('active', 'active-style')
        })
        this.classList.add('active', 'active-style')
      }
    })
  })

  blocks.forEach(block => {
    block.classList.add('animate__animated', 'animate__fadeInDaun')
  })
}

export default accordion