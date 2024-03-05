## Questão 04
Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser.
  Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

  Sejam L1, L2 e L3 em cada sala e I1, I2 e I3 os interruptores, então faria os seguintes passos:

  1) Ligaria I1 e I2. Esperaria 20 min e desligaria I2.
  2) Então, iria na sala da L1 e depois na Sala de L2.

Com isso, teríamos os seguinte casos
1. Se L1 estivesse ligada e L2 desligada, porém quente ainda, então I1 liga L1, I2 liga L2 e I3 liga L3.
2. Se L1 estivesse ligada e L2 desligada, porém fria, então I1 liga L1, I2 liga L3 e I3 liga L2.
3. Se L1 estivesse desligada, porém quente ainda, e L2 ligada, então I1 liga L2, I2 liga L1 e I3 liga L3.
4. Se L1 estivesse desligada, porém fria e L2 ligada, então I1 liga L2, I2 liga L3 e I3 liga L1.
5. Se L1 estivesse desligada, fria e L2 desligada, porém quente ainda, então I1 liga L3, I2 liga L2 e I3 liga L1.
6. Se L1 estivesse desligada, quente e L2 desligada, porém fria, então I1 liga L3, I2 liga L1 e I3 liga L2.


Então, o resumo do racíocinio, o interruptor energizado diria logo qual lâmpada ela liga. A lâmpada desligada, porém com temperatura quente pertence ao interruptor I2 que foi desligado, e a terceira lâmpada ao interruptor I3 que não foi acionado.
