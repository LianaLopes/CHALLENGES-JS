alert('Lets se if you are a minor or major of age')

function checkit() {
    let date = new Date()
    let year = date.getFullYear()
    let fyear = document.getElementById('textyear')
    let res = document.querySelector('div#res')

    if(fyear.value == 0 || Number(fyear.value) > year) {
        window.alert('[ERROR] 404 - Try again')
} else {
    let age = year - Number(fyear.value) 
  
    if ( age >= 0 && age < 10 ) {
        alert('Hey you are a kid, so you are a minor of age.')
    } else if ( age >= 10 && age < 18) {
        alert('Hey you are a teen, so you are a minor of age.')
    } else if ( age >= 18 && age < 50 ) {
        alert('Nice! You are a major of age.')
    } else {
        alert('Nice! You are a major of age.')
}
}
}
/*function checkit(data) {
	var now = new Date()
	var today = new Date(now.getYear(),now.getMonth(),now.getDate())

	var yearNow = now.getYear()
	var monthNow = now.getMonth()
	var dateNow = now.getDate()
	var dob = new Date(data.substring(6,10),
			data.substring(3,5)-1,                    
			 data.substring(0,2)                
			)

	var yearDob = dob.getYear()
	var monthDob = dob.getMonth()
	var dateDob = dob.getDate()
	var age = {}
	yearAge = yearNow - yearDob;

	if (monthNow >= monthDob)
		var monthAge = monthNow - monthDob;
	else {
		yearAge--
		var monthAge = 12 + monthNow -monthDob
	}

	if (dateNow >= dateDob)
		var dateAge = dateNow - dateDob
	else {
		monthAge--
	    var dateAge = 31 + dateNow - dateDob

	    if (monthAge < 0) {
	      monthAge = 11
	      yearAge--
	    }
	  }

	age = {
			years: yearAge,
			months: monthAge,
			days: dateAge
		}
	return age.years
}*/

/*alert('Put you age on input')

function checkit() {
let today = new Date()
let today = newDatetoday.getFullYear()
let birthDate = new Date()
let birthDate = birthDate.getFullYear('input#textagenumber')
let age = birthDate.getFullYear() - today.getFullYear()
let res = document.getElementById('div#res')

if (age <= 17) {
    alert('You are minor of age')
} else if(age >= 18) {
    alert('You are major of age')
}
}*/