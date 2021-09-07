const ufSelect = document.querySelector('#uf')
const cidadeSelect = document.querySelector('#cidade')
const btnSalvar = document.querySelector('#btnSalvar')

const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

function populaEstados() {
  fetch(urlUF)
    .then(res => res.json())
    .then(estados => {

      estados.map(estado => {
        const opt = document.createElement('option')
        opt.setAttribute('value', estado.sigla)
        opt.textContent = estado.nome
        ufSelect.appendChild(opt)
      })
    })
    .catch(() => {console.log('ERRO! A API está inoperante!')})
}

function populaCidades() {
  ufSelect.addEventListener('change', () => { // Capta escolha de UF e popula a lista de cidades de acordo.
    clearSelect()
    const urlCidade = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelect.value}/municipios`

    fetch(urlCidade)
      .then(res => res.json())
      .then (cidades => {
        
        cidades.map(cidade => {
          const opt = document.createElement('option')
          // opt.setAttribute('value', cidade.nome)
          opt.textContent = cidade.nome
          cidadeSelect.appendChild(opt)
        })
      })
      .catch(() => {console.log('ERRO! A API está inoperante!')})
  })
}

function clearSelect() {
  const clearCidadeSelect = cidadeSelect.length
  for(i = clearCidadeSelect; i > 0; i--) {
    cidadeSelect.remove(cidadeSelect[i])
  }
  select = document.createElement('option')
  select.value = ''
  select.textContent = 'Selecione'
  cidadeSelect.appendChild(select)
}

function salvarEndereco() {
btnSalvar.addEventListener('click', () => {  // Salvando e mostrando opções escolhidas ao apertar botão
  let ufSelected = ufSelect.options[ufSelect.selectedIndex].text
  let cidadeSelected = cidadeSelect.options[cidadeSelect.selectedIndex].text
  window.alert(`UF: ${ufSelected}\nCidade: ${cidadeSelected}\nSalvo com sucesso!`)
})
}

populaEstados()
populaCidades()
salvarEndereco()