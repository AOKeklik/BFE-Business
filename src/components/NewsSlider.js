export default class NewsSlider {
	#prevPageX = 0
	#prevScrollLeft = 0
	#scrollLeft = 0

	#isDraggStart = false
	#onePage = 0

	constructor() {
		this.slider = document.querySelector(".newsslider")
		this.slides = document.querySelector(".newsslider-slides")
		this.events()
		this.init()
	}
	init() {
		this.#setOnePage()
		this.#setButtonPositions()
	}
	events() {
		;["mousedown", "mouseup", "mouseleave"].forEach(e =>
			this.slider.addEventListener(e, this.draggingToggle.bind(this))
		)
		this.slider.addEventListener("click", this.clickSlider.bind(this))
		this.slider.addEventListener("mousemove", this.dragingSlider.bind(this))
	}
	draggingToggle(e) {
		const type = e.type
		if (!this.#isDraggStart && type === "mousedown") {
			this.#isDraggStart = true
		}
		if (
			this.#isDraggStart &&
			(type === "mouseup" || type === "mouseleave")
		) {
			this.#isDraggStart = false
		}

		if (this.#isDraggStart) {
			// console.log(true)
		} else {
			// console.log(false)
		}
	}
	dragingSlider(e) {
		if (!this.#isDraggStart) return
		this.slides.scrollLeft = 10
	}
	clickSlider(e) {
		const theNode = e.target.closest(".newsslider-btn")
		if (!theNode) return

		const direct = theNode.classList.contains("newsslider-left")
			? "left"
			: "right"

		console.log(this.#onePage)
		console.log(this.slides.scrollLeft)

		this.#scrollLeft += direct === "right" ? this.#onePage : -this.#onePage
		this.slides.scrollLeft = this.#scrollLeft

		this.#setButtonPositions()
	}
	#setButtonPositions() {
		const scrollableArea = this.slides.scrollWidth - this.slides.clientWidth

		const left = document.querySelector(".newsslider-left")
		const right = document.querySelector(".newsslider-right")

		if (this.#scrollLeft <= 0) left.classList.add("hide")
		else left.classList.remove("hide")

		if (this.#scrollLeft >= scrollableArea) right.classList.add("hide")
		else right.classList.remove("hide")
	}
	#setOnePage() {
		const width = this.slides.firstElementChild.clientWidth
		const gap = +window
			.getComputedStyle(this.slides)
			.getPropertyValue("column-gap")
			.slice(0, -2)

		this.#onePage = width + gap

		return this.#onePage
	}
}
