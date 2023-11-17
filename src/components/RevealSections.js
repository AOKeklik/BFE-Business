import SmoothScroll from "./SmoothScroll.js"

export default class RevealSections {
	constructor(sections, addBTN = false, threshold = 0.5) {
		this.threshold = threshold
		this.addBtn = addBTN
		this.headings = document.querySelectorAll(sections)
		this.events()
	}
	events() {
		this.doBrushHeading()
	}
	doBrushHeading() {
		const that = this
		const observingHeadings = new IntersectionObserver(
			(entries, observed) => {
				const entry = entries[0]
				if (entry.isIntersecting) {
					entry.target.classList.add("reveal")
				} else {
					entry.target.classList.remove("reveal")
				}

				if (this.addBtn)
					if (entry.target.classList.contains("header"))
						if (!entry.isIntersecting) addTheButtonInHeader()
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: that.threshold,
			}
		)
		this.headings.forEach(el => observingHeadings.observe(el))
	}
}

function addTheButtonInHeader() {
	const markup = `
        <span class="header-up-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z" />
            </svg>
        </span>
    `
	if (document.querySelector(".header-up-btn") !== null) return
	document.querySelector(".header").insertAdjacentHTML("beforeend", markup)
	new SmoothScroll(".header-up-btn", ".header")
}
