import { LANGUAGE } from "./config.js"

export function currentLang() {
	let currentLanguage = "pl"

	if (LANGUAGE === "pl-PL") currentLanguage = "pl"
	if (LANGUAGE === "en-GB") currentLanguage = "en"
	if (LANGUAGE === "de-DE") currentLanguage = "de"

	return currentLanguage
}
