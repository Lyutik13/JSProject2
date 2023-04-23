const modal = (
	triggerSelector,
	modalSelector,
	closeSelector,
	triggerDel = false,
	openModalTimerAdd = false,
	closeClickOverlay = true,
) => {
	const trigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSelector),
		close = document.querySelectorAll(closeSelector),
		windows = document.querySelectorAll("[data-modal]"),
		scroll = calcScroll();

	function windowsDisplayNone() {
		windows.forEach((item) => {
			item.style.display = "none";
		});
	}

	function openModal() {
		windowsDisplayNone();

		modal.style.display = "block";
		document.body.style.overflow = "hidden";
		modal.classList.add("animate__animated", "animate__fadeIn");
		document.body.style.marginRight = `${scroll}px`;
	}

	function closeModal() {
		windowsDisplayNone();

		modal.style.display = "none";
		document.body.style.overflow = "";
		document.body.style.marginRight = `0px`;
		modal.classList.remove("animate__animated", "animate__fadeIn");
	}

	trigger.forEach((item) => {
		item.addEventListener("click", (e) => {
			if (e.target) {
				e.preventDefault();
			}

			if (triggerDel) {
				item.remove();
			}

			openModal();
		});
	});

	close.forEach((item) => {
		item.addEventListener("click", () => {
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

	//убираем прыгание модального окна
	function calcScroll() {
		let div = document.createElement("div");

		div.style.width = "50px";
		div.style.height = "50px";
		div.style.overflow = "scroll";
		div.style.visibility = "hidden";

		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}

	// Открытие модалки через некоторое время (time = 60sec) если открыто другое модальное окно этого не будет
	function showModalByTime(time = 60000) {
		setTimeout(function () {
			let display;

			windows.forEach((item) => {
				if (getComputedStyle(item).display !== "none") {
					display = "block";
				}
			});

			if (!display) {
				openModal();
			}
		}, time);
	}

	if (openModalTimerAdd) {
		showModalByTime();
	}
    
};

export default modal;
