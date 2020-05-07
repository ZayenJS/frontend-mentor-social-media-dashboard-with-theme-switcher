const app = {
	domelems: {
		darkModeBtn: document.querySelector("#toggle__btn"),
		sliderCircle: document.querySelector(".slider__circle"),
		sliderContainer: document.querySelector(".slider__container"),
		header: document.querySelector(".header"),
		cards: Array.from(document.querySelectorAll(".card")),
		darkThemeWhite: Array.from(document.querySelectorAll(".white")),
		darkThemeDesaturated: Array.from(document.querySelectorAll(".desaturated")),
	},

	init() {
		this.domelems.darkModeBtn.addEventListener(
			"click",
			this.toggleDarkMode.bind(this),
		);
	},

	toggleDarkMode(e) {
		document.body.classList.toggle("dark-theme-white");
		document.body.classList.toggle("dark-theme-background");
		this.domelems.header.classList.toggle("dark-theme-header-background");
		this.domelems.sliderCircle.classList.toggle("dark-theme-slider-active");
		this.domelems.sliderContainer.classList.toggle(
			"dark-theme-slider-background",
		);

		for (const elem of this.domelems.darkThemeWhite) {
			elem.classList.toggle("dark-theme-white");
		}

		for (const elem of this.domelems.darkThemeDesaturated) {
			elem.classList.toggle("dark-theme-desaturated");
		}

		for (const card of this.domelems.cards) {
			card.classList.toggle("dark-theme-card-background");
		}
	},
};

app.init();
