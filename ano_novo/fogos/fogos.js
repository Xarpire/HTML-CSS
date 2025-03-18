// Configurações
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const fogos = [];
const particulas = [];

// Função para criar fogos
function criarFogo(x, y) {
  const fogo = {
    x: x,
    y: y,
    vx: Math.random() * 2 - 1,
    vy: Math.random() * -2,
    cor: `hsl(${Math.random() * 360}, 100%, 50%)`,
  };
  fogos.push(fogo);
}

// Função para criar particulas
function criarParticula(x, y, cor) {
  const particula = {
    x: x,
    y: y,
    vx: Math.random() * 2 - 1,
    vy: Math.random() * 2 - 1,
    cor: cor,
    tamanho: Math.random() * 2 + 1,
  };
  particulas.push(particula);
}

// Loop principal
function atualizar() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, width, height);

  // Atualizar fogos
  for (let i = fogos.length - 1; i >= 0; i--) {
    const fogo = fogos[i];
    fogo.x += fogo.vx;
    fogo.y += fogo.vy;
    ctx.beginPath();
    ctx.arc(fogo.x, fogo.y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = fogo.cor;
    ctx.fill();

    if (fogo.y < 0) {
      fogos.splice(i, 1);
      criarParticula(fogo.x, height / 2, fogo.cor);
    }
  }

  // Atualizar particulas
  for (let i = particulas.length - 1; i >= 0; i--) {
    const particula = particulas[i];
    particula.x += particula.vx;
    particula.y += particula.vy;
    ctx.beginPath();
    ctx.arc(particula.x, particula.y, particula.tamanho, 0, 2 * Math.PI);
    ctx.fillStyle = particula.cor;
    ctx.fill();

    if (particula.y > height) {
      particulas.splice(i, 1);
    }
  }

  // Criar novos fogos
  if (Math.random() < 0.1) {
    criarFogo(width / 2, height);
  }

  requestAnimationFrame(atualizar);
}

atualizar();
