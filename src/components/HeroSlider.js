export default class HeroSlider {
	#currentSlider = 0

	constructor() {
		this.slides = document.querySelectorAll(".heroslider-slide")
		this.control = document.querySelector(".heroslider-controls")

		this.events()
		this.goSlider()
		this.activeDot()
	}
	events() {
		this.renderControls()
		this.control.addEventListener(
			"click",
			this.executeSliderByClick.bind(this)
		)
	}
	renderControls() {
		let markup = ""
		this.slides.forEach((_, i) => {
			markup += `
				<span class="heroslider-btn" data-slide="${i}"></span>
			`
		})
		this.control.insertAdjacentHTML("afterbegin", markup)
	}
	executeSliderByClick(e) {
		const theNode = e.target.closest(".heroslider-btn")
		if (!theNode) return

		this.slides[this.#currentSlider].classList.remove("current-slide")

		this.#currentSlider = +theNode.dataset.slide

		this.goSlider()
		this.activeDot()
	}
	goSlider() {
		this.slides[this.#currentSlider].classList.add("current-slide")
	}
	activeDot() {
		const dots = document.querySelectorAll(".heroslider-btn")
		dots.forEach(el => el.classList.remove("active-slider-btn"))
		dots[this.#currentSlider].classList.add("active-slider-btn")
	}
}
