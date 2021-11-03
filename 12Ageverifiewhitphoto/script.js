function verifier() {
    var date = new Date()
    
    var year = date.getFullYear()/*4 dígitos*/
    
    
    var fyear = document.getElementById('txtyear')
    
    var res = document.querySelector('div#res')
    
    if (fyear.value == 0 || Number(fyear.value) > year) {
        window.alert('[ERROR] 404 - Try again')
    } else {
        var  fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        //img.setAttribute('id', 'foto')//
        if (fsex[0].checked)/*0*/ {
            gender = 'Male'
            if ( age >= 0 && age < 10 ) {
                //Kid
                img.src = ('foto-boy.png')
                document.body.style.background=`#FF665A`
            } else if ( age >= 10 && age < 18) {
                //Teen
                img.src = ('foto-teenguy.png')
                document.body.style.background=`#705E78`
            } else if ( age >= 18 && age < 50 ) {
                //Guy
                img.src = ('foto-guy.png')
                document.body.style.background=`#FFF587`
            } else {
                // Older
                img.src = ('foto-idoso.png')
                document.body.style.background=`#A3A1A8`
            }
        } else if (fsex[1].checked)/*1*/ {
            gender = 'Woman'
            if ( age >= 0 && age < 10 ) {
                //Kid
                img.src = ('foto-babygirl.png')
                document.body.style.background=`#FF8C64`
            } else if ( age >= 10 && age < 18) {
                //Teen
                img.src = ('foto-teengirl.png')
                document.body.style.background=`#A5AAA3`
            } else if ( age >= 18 && age < 50 ) {
                //Woman
                img.src = ('foto-woman.png')
                document.body.style.background=`#812F33`
            } else {
                // Older
                img.src = ('foto-idosa.png')
                document.body.style.background=`#FEA443`
            }
        }
         res.style.textAlign = 'center'
         res.innerHTML = `We detecteded a ${gender} whit ${age} years.`
         res.appendChild(img)
    }
}