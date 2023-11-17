import { currentLang } from "../app-components/utilities.js"
import State from "../app-components/State.js"
import { renderList } from "../app-components/RenderData.js"

const state = new State(
	"http://test-003.weboki.pl/wp-json/wp/v2/products?lang=" + currentLang(),
	"get",
	null
)

export default class LoadData {
	constructor() {
		this.events()
	}
	async events() {
		await state.loadResults()
		renderList.renderSpinner()
		console.log(state.state)
	}
}
