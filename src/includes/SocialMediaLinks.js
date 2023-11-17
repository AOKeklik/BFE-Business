import { LINKS } from "../app-components/config.js"
;(function () {
	const { social_media_links: links } = LINKS

	const renderLinks = `
		<a href="${links.facebook}" target="_blank" class="socialmedia-primary">
			<svg xmlns="http://www.w3.org/2000/svg" class="socialmedia-icon socialmedia-primary" viewBox="0 0 24 24">
				<path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
			</svg>
		</a>
		<a href="${links.linkedin}" target="_blank" class="socialmedia-secondary">
			<svg xmlns="http://www.w3.org/2000/svg" class="socialmedia-icon socialmedia-secondary" viewBox="0 0 24 24">
				<path d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
			</svg>
		</a>
		<a href="${links.youtube}" target="_blank" class="socialmedia-tertiary">
			<svg xmlns="http://www.w3.org/2000/svg" class="socialmedia-icon" viewBox="0 0 24 24">
				<path d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476h.489ZM9.999 8.5v7l6-3.5l-6-3.5Z" />
			</svg>
		</a>
	`

	const markup = `
        <div class="socialmedia-links">
        ${renderLinks}
        </div>
    `
	document.body.insertAdjacentHTML("beforeend", markup)
})()
