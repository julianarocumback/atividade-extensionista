  // Configurações do jogo
  const canvas = document.getElementById('teste');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let score = 0;

  // Carregar a imagem de fundo local
  const backgroundImage = new Image();
  backgroundImage.src = 'background.jpg'; // Caminho relativo da imagem de fundo

  // Definindo a bola
  const ball = {
      x: Math.random() * canvas.width,
      y: 50,
      radius: 20,
      color: 'white',
      dy: 2
  };

  // Definindo a plataforma
  const platform = {
      width: 150,
      height: 20,
      x: canvas.width / 2 - 75,
      y: canvas.height - 50,
      dx: 10
  };

  // Função para desenhar a bola
  function drawBall() {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = ball.color;
      ctx.fill();
      ctx.closePath();
  }

  // Função para desenhar a plataforma
  function drawPlatform() {
      ctx.fillStyle = 'white';
      ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
  }

  // Função para detectar colisão entre a bola e a plataforma
  function detectCollision() {
      if (ball.y + ball.radius >= platform.y &&
          ball.x > platform.x && ball.x < platform.x + platform.width) {
          score++;
          ball.dy = 2 + score * 0.5; // Aumenta a velocidade da bola
          ball.y = 50;
          ball.x = Math.random() * canvas.width;
      }
  }

  // Função para mover a plataforma com as setas do teclado
  document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft' && platform.x > 0) {
          platform.x -= platform.dx;
      } else if (e.key === 'ArrowRight' && platform.x + platform.width < canvas.width) {
          platform.x += platform.dx;
      }
  });

  // Função principal do jogo
  function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenhar o plano de fundo
      if (backgroundImage.complete) {  // Verifica se a imagem está completamente carregada
          ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      }

      // Desenha os elementos
      drawBall();
      drawPlatform();

      // Atualiza a posição da bola
      ball.y += ball.dy;

      // Detecta colisão
      detectCollision();

      // Se a bola cair no chão, resetar o jogo
      if (ball.y + ball.radius > canvas.height) {
          alert('Game Over! Sua pontuação: ' + score);
          document.location.reload();
      }

      requestAnimationFrame(gameLoop);
  }

  // Espera a imagem carregar e inicia o loop do jogo
  backgroundImage.onload = function() {
      gameLoop();
  };