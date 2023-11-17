export default class ScrollAnimation {
	constructor(observingElement) {
		this.observingElement = document.querySelector(observingElement)
		this.events()
	}
	events() {
		window.addEventListener(
			"scroll",
			this.executeScrollAnimation.bind(this)
		)
	}
	executeScrollAnimation(e) {
		const docElement = document.documentElement
		const winHeight = docElement.clientHeight

		const r = this.observingElement.getBoundingClientRect()
		const rHeight = Math.ceil(r.height)
		const rTop = r.top

		if (rTop - winHeight < 0 && rTop + rHeight > 0) {
			docElement.style.setProperty(
				"--scrollWhy",
				(Math.min(Math.abs(rTop - winHeight), rHeight + winHeight) *
					100) /
					(rHeight + winHeight)
			)
		}
	}
}
