const ufSelect = document.querySelector('#uf')
const cidadeSelect = document.querySelector('#cidade')
const btnSalvar = document.querySelector('#btnSalvar')

const cidades = new Map()
  cidades.set(0, ['Selecione'])
  cidades.set(1, ['Picos', 'Teresina', 'Inhuma', 'Parnaíba', 'Oeiras'])
  cidades.set(2, ['Recife', 'Petrolina', 'Salgueiro'])
  cidades.set(3, ['Brasília', 'Gama', 'Taguatinga', 'Paranoá'])

ufSelect.addEventListener('change', () => { // Capta escolha de UF e popula a lista de cidades de acordo.
  clearSelect()
  const listaCidades = (cidades.get(parseInt(ufSelect.value)))
  for(i = 0; i < listaCidades.length; i++) {
    let opt = document.createElement('option')
    opt.value = i
    opt.text = listaCidades[i]
    cidadeSelect.appendChild(opt)
  }
})

function clearSelect() {  // Limpa a lista dinâmica após troca de opção de UF e coloca a opção 'selecione' como a primeira sempre.
  const clearCidadeSelect = cidadeSelect.length
  for(i = clearCidadeSelect; i > 0; i--) {
    cidadeSelect.remove(cidadeSelect[i])
  }
  const select = document.createElement('option')
  select.value = 0
  select.text = cidades.get(0)
  cidadeSelect.appendChild(select)
}

btnSalvar.addEventListener('click', () => {  // Salvando e mostrando opções escolhidas ao apertar botão
  const ufSelected = ufSelect.options[ufSelect.selectedIndex]
  const cidadeSelected = cidadeSelect.options[cidadeSelect.selectedIndex]
  window.alert(`UF: ${ufSelected.text}\nCidade: ${cidadeSelected.text}\nSalvo com sucesso!`)
})