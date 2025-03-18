const form = document.getElementById('form-participantes');
const participantesInput = document.getElementById('participantes');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const participantes = participantesInput.value.split(',');
  const amigosOcultos = gerarAmigosOcultosAleatorios(participantes);
  exibirResultado(amigosOcultos);
});

function gerarAmigosOcultosAleatorios(participantes) {
  const participantesAleatorios = [...participantes];
  const amigosOcultos = {};

  for (let i = 0; i < participantes.length; i++) {
    const amigo = participantes[i].trim();
    const indiceAleatorio = Math.floor(Math.random() * participantesAleatorios.length);
    const amigoOculto = participantesAleatorios[indiceAleatorio].trim();
    
    // Garante que o amigo oculto não seja o próprio usuário
    if (amigo === amigoOculto) {
      i--;
      continue;
    }

    amigosOcultos[amigo] = amigoOculto;
    participantesAleatorios.splice(indiceAleatorio, 1);
  }

  return amigosOcultos;
}

function exibirResultado(amigosOcultos) {
  const html = Object.keys(amigosOcultos).map((amigo) => {
    return `<p>${amigo} -> ${amigosOcultos[amigo]}</p>`;
  }).join('');
  resultadoDiv.innerHTML = html;
}
