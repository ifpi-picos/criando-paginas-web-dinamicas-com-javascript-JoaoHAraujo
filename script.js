const indexEstados = ['select', 'pi', 'pe', 'df']
const municipios = {
  select: ['Selecione'],
  pi: ['Picos', 'Teresina', 'Inhuma', 'Parnaíba', 'Oeiras'],
  pe: ['Recife', 'Petrolina', 'Salgueiro'],
  df: ['Brasília', 'Gama', 'Taguatinga', 'Paranoá']
}

const uf = document.getElementById('uf')
let cidades = document.getElementById('cidade')

uf.addEventListener('change', handleUf)

function clearSelect() { // Essa função é para limpar o select anterior em caso de troca e manter a option 'Selecione' para evitar que o      usuário mantenha uma cidade selecionada por engano.
  let lista = cidades.length
  for (let i = lista; i > 0; i--) {
    cidades.remove(cidades[i])
  }
  let select = document.createElement('option')
  select.value = 0
  select.textContent = municipios[indexEstados[0]][0]
  cidades.appendChild(select)
}

function handleUf () {   
  const selectUf =  municipios[indexEstados[uf.value]] // Endereço da array do estado selecionado 
  clearSelect()
  for (let i = 0; i < selectUf.length; i++) {
    let opt = document.createElement('option')
    opt.value = i
    opt.textContent = selectUf[i]
    cidades.appendChild(opt)
  }
}