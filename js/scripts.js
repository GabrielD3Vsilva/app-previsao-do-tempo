const chave = "2eac6084ccf8d2a7617e8a76826c104e";

function mostrarNaTela(dados) {
    const res = document.getElementById('res');
    const temp = document.getElementById('temp');
    const umidade = document.getElementById('umidade');
    const estado = document.getElementById('estado');
    const img = document.getElementById('img');

    umidade.innerHTML = `umidade: ${dados.main.humidity
    } % `;
    img.innerHTML = `<img src="https://openweathermap.org/img/wn/${dados.weather[0].icon}.png" alt="">`
    estado.innerHTML = dados.weather[0].description;
    res.innerHTML = ` clima em ${dados.name}`;
    temp.innerHTML = ` temperatura atual: ${Math.floor(dados.main.temp)} °C`
}

async function buscarCidade(cidade) {
    let dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`)
    .then(res => res.json( ));

    console.log(dados);

    mostrarNaTela(dados);
}

function cliqueiNoBotao( ) {
    const cidade = document.getElementById('input-city').value;

    buscarCidade(cidade);

}