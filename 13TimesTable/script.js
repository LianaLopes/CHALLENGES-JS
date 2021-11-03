function timestables() {
    let num= document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('ERROR 404')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c=1; c <=10; c+=1) {
            let item = document.createElement('option')/*é como se tivesse ido no HTML e feito uma lista de 'options'*/
            item.text=` ${n} x ${c} = ${n*c}`
            item.value=` tab${c}`
            tab.appendChild(item)
        }
    }  
}
