const modal = (
	triggerSelector,
	modalSelector,
	closeSelector,
	closeClickOverlay = true,
	triggerDel = false
) => {
	const trigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSelector),
		close = document.querySelectorAll(closeSelector);

	function closeModal() {
		modal.style.display = "none";
		document.body.style.overflow = "";

		if (triggerDel) {
			trigger.forEach((item) => {
				item.style.display = "none";
			});
		}
	}

	function openModal() {
		modal.style.display = "block";
		document.body.style.overflow = "hidden";
	}

	trigger.forEach((item) => {
		item.addEventListener("click", (e) => {
			if (e.target) {
				e.preventDefault();
			}

			openModal();
		});
	});

	close.forEach((item) => {
		item.addEventListener("click", (e) => {
			closeModal();
		});
	});

	// закрытие modal по клику в области
	modal.addEventListener("click", (e) => {
		if (e.target === modal && closeClickOverlay) {
			closeModal();
		}
	});

	// Закрытие модального окна при клике на клавишу ESC.
	document.addEventListener("keydown", (e) => {
		if (e.code === "Escape" && getComputedStyle(modal).display == "block") {
			closeModal();
		}
	});
};

export default modal;
