import MakeList from "../components/MakeList.js"
import RevealSections from "../components/RevealSections.js"

class SingleProductPage {
	constructor() {
		if (window.location.pathname !== "/") return

		new RevealSections(
			".header, .product-bgimage, .container, .product-textbox-right",
			true,
			0.2
		)
		new MakeList(".product-list")
		// new LoadData()
	}
}

new SingleProductPage()
