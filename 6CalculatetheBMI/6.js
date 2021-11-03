window.onload = () => {
	let button = document.querySelector("#btn")

	
	button.addEventListener("click", calculateBMI)
}

function calculateBMI() {

	
	let height = parseInt(document
			.querySelector("#height").value)

	
	let weight = parseInt(document
			.querySelector("#weight").value)

	let result = document.querySelector("#result")

	
	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!"

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!"

	else {

		let bmi = (weight / ((height * height)/ 10000)).toFixed(2)

		
		if (bmi < 18.6) result.innerHTML =
		`Your BMI is <span>${bmi}</span>, so your classification are <strong>Under Weight</strong>`

		else if (bmi >= 18.6 && bmi < 24.9) 
		`Your BMI is <span>${bmi}</span>, so your classification are <strong>Ideal Weight</strong>`

        else result.innerHTML =
        `Your BMI is <span>${bmi}</span>, so your classification are <strong> Grade a obesity</strong>`

}
}
