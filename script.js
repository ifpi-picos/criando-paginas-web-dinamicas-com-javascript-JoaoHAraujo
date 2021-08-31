function leNotas () {
  const notas = []
  for (let index = 0; index < 3; index++) {
    const nota = Math.random() * 10
    console.log('nota ', index, ': ', nota)
    notas = []
  }
  return notas
}

function calculaMedia (notas) {
  let soma = 0
  for (let index = 0; index < notas.length; index++) {
    soma = soma + notas[index]
  }
  const media = soma / notas.length
  return media
}

function vericaSituacaoDoAluno (media) {
  if (media < 4) {
    return 'Reprovado'
  } else if (media < 7) {
    return 'Recuperação'
  } else {
    return 'Aprovado'
  }
}

const notas = leNotas()
const media = calculaMedia(notas)
console.log('A sua média final é: ', media)
const situacaoDoAluno = vericaSituacaoDoAluno(media)
console.log('Situação do aluno: ', situacaoDoAluno)
