function buscar() {
    // Essa função é responsável por buscar dados e exibir os resultados na página.

    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos.

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Por favor, digite o título do livro desejado ou o nome do autor.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados da busca.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    
    // Itera sobre cada dado e cria um elemento HTML para exibir o resultado.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        let tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
           if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a> 
                </h2>
                <p class="descricao meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Adquira seu livro</a>
            </div>
        `;             
          }
           }
    
        if (!resultados) {
            resultados = "<p>Nada foi encontrado</p>"
        }
    
    // Atribui o HTML gerado à seção de resultados.
    section.innerHTML = resultados;
}

