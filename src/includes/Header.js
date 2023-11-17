class Header {
	constructor() {
		this.header = document.querySelector(".header")
		this.menu = document.querySelector(".menu")
		this.menuItems = this.header.querySelectorAll(".menu-item")
		this.marker = this.header.querySelector(".marker")

		this.events()
	}
	events() {
		this.header.addEventListener("click", this.configHeader.bind(this))
		this.header.addEventListener(
			"mouseenter",
			this.configHeader.bind(this),
			true
		)
		this.menu.addEventListener("mouseleave", this.configHeader.bind(this))
		this.doHeaderSticky()
	}
	configHeader(e) {
		const type = e.type
		if (type === "click") {
			this.doToggleMenuByClick(e)
			this.doActiveItemByClick(e)
		}
		if (type === "mouseenter" || type === "mouseleave")
			this.doActiveItemByHover(e)
	}
	doToggleMenuByClick(e) {
		const theNode = e.target.closest(".burger")
		if (!theNode) return

		document.body.classList.toggle("toggle-menu")
	}
	doActiveItemByClick(e) {
		const theNode = e.target.closest(".menu-item")
		if (!theNode) return

		this.menuItems.forEach(el => el.classList.remove("active-item"))

		theNode.classList.toggle("active-item")
	}
	doActiveItemByHover(e) {
		if (e.type === "mouseleave") {
			this.marker.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)"
			return
		}

		const theNode = e.target.closest(".menu-item a")
		if (!theNode) return

		this.marker.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"

		this.marker.style.left = theNode.offsetLeft + "px"
		this.marker.style.width = theNode.offsetWidth + "px"
		this.marker.style.height = theNode.offsetHeight + "px"
		this.marker.style.top = theNode.offsetTop + "px"
	}
	doHeaderSticky() {
		const that = this
		const headerWrap = document.querySelector(".header-top-wrap")
		const observingHeader = new IntersectionObserver(
			function (entries, observed) {
				const entry = entries[0]
				if (!entry.isIntersecting)
					that.header.classList.add("sticky-menu")
				else that.header.classList.remove("sticky-menu")
			},
			{
				root: null,
				rootMargin: `0px`,
				threshold: 0,
			}
		)
		observingHeader.observe(headerWrap)
	}
}

new Header()
