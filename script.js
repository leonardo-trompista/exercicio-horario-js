function carregar() {
    var secao = document.getElementById('secao')
    var rodape = document.getElementById('rodape')
    var dia2 = document.getElementById('dia2')
    var dia3 = document.getElementById('dia3')
    var dia = document.getElementById('dia')
    var horario = document.getElementById('horario')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //date.getMinutes()<10?'0':'') + date.getMinutes() funcao se interna
    
   if (minuto < 10) {
    horario.innerHTML = `Agora são <strong>${hora}:0${minuto}</strong>`
   } else {
   horario.innerHTML = `Agora são <strong>${hora}:${minuto}</strong>`
   }
    
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        foto.innerHTML = '<img src="dia.png">'
        document.body.style.background = '#40b5eb'
        dia2.innerHTML = `Bom Dia`
        dia.innerHTML = null
        dia3.innerHTML = null
        

        
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        foto.innerHTML = '<img src="tarde.png">'
        document.body.style.background = '#d7c8ec'
        dia.style.color = '#7d47aa'
        dia.innerHTML = `Boa Tarde`
        dia2.innerHTML = null
        dia3.innerHTML = null
        rodape.style.color = 'black'
        
    } else {
        //Boa Noite
        foto.innerHTML = '<img src="noite.png">'
        document.body.style.background = '#131420'
        dia3.innerHTML = `Boa Noite`
        dia.innerHTML = null
        dia2.innerHTML = null

    }
}
