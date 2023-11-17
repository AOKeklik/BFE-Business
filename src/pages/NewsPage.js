import LoadData from "../components/LoadData.js"
import NewsSlider from "../components/NewsSlider.js"
import RevealSections from "../components/RevealSections.js"

class NewsPage {
	constructor() {
		if (window.location.pathname !== "/") return

		new RevealSections(".header", true)
		new NewsSlider()
		// new LoadData()
	}
}

new NewsPage()
