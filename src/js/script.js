"use strict";

import modal from "./modules/modal";
import moreStyleLoad from "./modules/moreStyleLoad";

window.addEventListener("DOMContentLoaded", () => {
    modal(".button-design", ".popup-design", ".popup-close");
	modal(".fixed-gift", ".popup-gift", ".popup-close", true, true);
	modal(".button-consultation", ".popup-consultation", ".popup-close", true, false, true);

	moreStyleLoad(".button-styles", ".styles-2", true);
});
