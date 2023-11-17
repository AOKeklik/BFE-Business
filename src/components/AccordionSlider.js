export default class AccodionSlider {
	constructor() {
		this.buttons = document.querySelector(".accordion-control")
		this.events()
	}

	events() {
		this.buttons.addEventListener(
			"click",
			this.executeSlideByClick.bind(this)
		)
	}

	executeSlideByClick(e) {
		const theNode = e.target.closest(".accordion-btn")
		if (!theNode) return

		const buttons = document.querySelectorAll(".accordion-btn")
		const panels = document.querySelectorAll(".accordion-panels")
		buttons.forEach(el => el.classList.remove("active-accordion-btn"))

		theNode.classList.add("active-accordion-btn")

		const currentNum = +theNode.dataset.accordion
		panels.forEach(el => el.classList.remove("active-accordion"))
		panels.item(currentNum).classList.add("active-accordion")
	}
}
