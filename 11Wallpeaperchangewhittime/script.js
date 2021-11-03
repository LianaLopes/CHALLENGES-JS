function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Its a  ${hora}:${minutos}`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'imagem/manha1.png'
        document.body.style.background = '#fec58e'
    } else if (hora >= 12 && hora <= 18) { 
        //Boa tarde
        img.src = 'imagens/tarde3.png'
        document.body.style.background = '#d98e62'
    } else {
        //Boa noite
        img.src = 'imagens/noite2.png'
        document.body.style.background = '#061b20'
    }
    }