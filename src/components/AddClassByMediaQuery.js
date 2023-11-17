export default class AddClassByMediaQuery {
	constructor() {
		this.cards = document.querySelectorAll(".col1of4")
		this.events()
	}
	events() {
		const media1000 = window.matchMedia("(max-width: 1000px)")

		if (media1000.matches) this.addRevealClass(1000)
	}

	addRevealClass(media) {
		this.cards.forEach((_, i, arr) => {
			if (i % 2 === 0) {
				arr[i].classList.add(`reveal-${i}`)
				arr[i + 1].classList.add(`reveal-${i}`)
			}
		})
	}
}
