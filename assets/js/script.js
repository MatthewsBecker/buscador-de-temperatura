function consultarTempo(){
    const apiKey = "2a281aef44e1dcf1df4cd19738e20158"
    let cidade = document.querySelector("#input").value

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`

    fetch(url)
        .then(response => {
            if (!response.ok){
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json()
        }).catch(error => {
            mostarErro(error.message)
        }).then(response => {
            tempo(response)
        })

}


function tempo(dados){
    let resultado = document.querySelector("#resultado")

    let Temperatura = Math.ceil(dados.main.temp)
    let descri = dados.weather[0].description;


    resultado.innerHTML =  `Temperatura: ${Temperatura} °C<br>
        Cidade: ${dados.name} - ${dados.sys.country}<br>
        Humidade: ${dados.main.humidity}%<br>
        Descrição: ${descri}<br>
        Vento: ${dados.wind.speed} Km/h<br>`
}

function mostarErro(erro){
    let resultado = document.querySelector("#resultado")

    resultado.innerHTML =  `Cidade não encontrada.<br>
                            Tente outra Cidade!`
}
