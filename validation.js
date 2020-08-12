
document.addEventListener ("DOMContentLoaded", () => {
	const nombre = document.querySelector ("#nombre")
	const email = document.querySelector ("#email")
	const enviar = document.querySelector ("#enviar")


	const checkInput = () => {
		if (nombre.value !== "" && email.value !== "") {
			enviar.disabled = ""
		} else {
			enviar.disabled = "disabled"
		}
	}


	nombre.addEventListener ("change", checkInput)
	email.addEventListener ("change", checkInput)

})