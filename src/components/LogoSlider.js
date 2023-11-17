export default class LogoSlider {
	#currentSlide = 0
	#lengthSlide = 0
	constructor() {
		this.slides = document.querySelectorAll(".logoslider-slide")
		this.control = document.querySelector(".logoslider-controls")
		this.events()
	}
	events() {
		this._goSlider()
		this._renderDots()
		this._activeDot()
		this.control.addEventListener("click", this.config.bind(this))
	}
	config(e) {
		this.handleActiveDot(e)
		this.prevSlide(e)
		this.nextSlide(e)
	}
	handleActiveDot(e) {
		const theNode = e.target.closest(".logoslider-btn")
		if (!theNode) return

		this.#currentSlide = +theNode.dataset.slide

		this._goSlider()
		this._activeDot()
	}
	prevSlide(e) {
		const theNode = e.target.closest(".logoslider-left")
		if (!theNode) return

		this.#currentSlide =
			this.#currentSlide > 0
				? this.#currentSlide - 1
				: this.#lengthSlide - 1

		this._goSlider()
		this._activeDot()
	}
	nextSlide(e) {
		const theNode = e.target.closest(".logoslider-right")
		if (!theNode) return

		this.#currentSlide =
			this.#currentSlide < this.#lengthSlide - 1
				? this.#currentSlide + 1
				: 0

		this._goSlider()
		this._activeDot()
	}
	_renderDots() {
		let markup = `
			<svg xmlns="http://www.w3.org/2000/svg" class="logoslider-arrow logoslider-left" viewBox="0 0 21 21"><path   stroke-linecap="round" stroke-linejoin="round" d="M7.499 6.497L3.5 10.499l4 4.001m9-4h-13"/></svg>
		`
		markup += [...Array(this.#lengthSlide).keys()]
			.map(
				(_, i) =>
					`<span class="logoslider-btn" data-slide="${i}"></span>`
			)
			.join("")

		markup += `
			<svg xmlns="http://www.w3.org/2000/svg" class="logoslider-arrow logoslider-right" viewBox="0 0 21 21"><path stroke-linecap="round" stroke-linejoin="round" d="m13.5 6.497l4 4.002l-4 4.001m-9-4h13"/></svg>
			`

		this.control.insertAdjacentHTML("afterbegin", markup)
	}
	_goSlider() {
		this.#lengthSlide = this.slides.length

		this.slides.forEach((el, i) => {
			el.style.transform =
				"translateX(" + 100 * (i - this.#currentSlide) + "%)"
		})
	}
	_activeDot() {
		const dots = document.querySelectorAll(".logoslider-btn")
		dots.forEach(el => {
			el.classList.remove("active-slider-btn")
		})
		dots[this.#currentSlide].classList.add("active-slider-btn")
	}
}
