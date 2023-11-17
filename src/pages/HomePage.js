import RevealSections from "../components/RevealSections.js"
import HeroSlider from "../components/HeroSlider.js"
import LogoSlider from "../components/LogoSlider.js"
import SmoothScroll from "../components/SmoothScroll.js"
import ScrollAnimation from "../components/ScrollAnimation.js"

class HomePage {
	constructor() {
		if (window.location.pathname !== "/") return

		new SmoothScroll(".header-down-btn", ".section-history")
		new ScrollAnimation(".section-why")
		new HeroSlider()
		new LogoSlider()
		new RevealSections(
			".header, .section-history, .section-why, .section-about, .section-logoslider",
			true
		)
	}
}

new HomePage()
