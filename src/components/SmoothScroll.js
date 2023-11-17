export default class SmoothScroll {
	constructor(btn, target) {
		this.target = target
		this.btnScroll = document.querySelector(btn)
		this.events()
	}
	events() {
		this.btnScroll?.addEventListener(
			"click",
			this.doSmoothScroll.bind(this)
		)
	}
	/* smoothscroll */
	doSmoothScroll(e) {
		e.preventDefault()

		const padding = 90 /* header height */
		let targetPosition =
			this._documentVerticalScrollPosition() +
			this._elementVerticalClientPositionById() -
			padding
		const currentPosition = this._documentVerticalScrollPosition()
		const maximumScrollPosition =
			this._documentBodyHeight() - this._documentViewportHeight()

		if (targetPosition > maximumScrollPosition)
			targetPosition = maximumScrollPosition

		this._scrollVerticalTickToPosition(currentPosition, targetPosition)
	}
	_scrollVerticalTickToPosition(current, target) {
		const filter = 0.2
		const fps = 60
		const difference = parseFloat(target) - parseFloat(current)

		// Snap, then stop if arrived.
		const arrived = Math.abs(difference) <= 0.5
		if (arrived) {
			// Apply target.
			scrollTo(0.0, target)
			return
		}

		// Filtered position.
		current =
			parseFloat(current) * (1.0 - filter) + parseFloat(target) * filter

		// Apply target.
		scrollTo(0.0, Math.round(current))

		// Schedule next tick.
		setTimeout(
			this._scrollVerticalTickToPosition.bind(this, current, target),
			1000 / fps
		)
	}
	_documentVerticalScrollPosition() {
		return document.body
			.scrollTop /* body de - o anki scroll position degerini geriye don */
			? document.body.scrollTop
			: document.documentElement.scrollTop
			? document.documentElement.scrollTop
			: self.pageYOffset
	}
	_elementVerticalClientPositionById(el) {
		const theNode = document.querySelector(this.target)
		const theRectAngel = theNode.getBoundingClientRect()
		return theRectAngel.top
	}
	_documentBodyHeight() {
		return document.height
			? document.height
			: document.body.offsetHeight /* body nin height degri */
	}
	_documentViewportHeight() {
		return document.compatMode === "CSS1Compat"
			? document.documentElement.clientHeight
			: document.body.clientHeight /* viewport - tarayicida forunen aln */
	}
}
