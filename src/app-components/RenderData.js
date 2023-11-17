class Render {
	renderSpinner() {
		const markup = `
            <span>Loading ...</span>
        `
		console.log(this.parentElement)
		this.parentElement.insertAdjacentHTML("afterbegin", markup)
	}
}
export const renderList = new (class RenderList extends Render {
	constructor() {
		super()
		this.parentElement = document.getElementById("root")
	}
})()
