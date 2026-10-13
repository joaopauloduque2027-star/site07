# Meu estúdio de música

Este projeto é um site pessoal em HTML e CSS para apresentar a minha jornada musical, minhas redes sociais e a história por trás do meu trabalho como músico.

## Como visualizar

1. Abra o arquivo `index.html` diretamente no navegador, ou
2. Use um servidor local simples, por exemplo:

```bash
python -m http.server 8000
```

Depois acesse: http://localhost:8000

## Publicar com GitHub Pages

1. Vá em Settings → Pages no repositório.
2. Em "Source" escolha a branch `main` e a pasta `/ (root)`.
3. Salve. O site ficará disponível em: `https://joaopauloduque2027-star.github.io/site07/` (pode demorar 1–5 minutos para propagar).

## Imagens e Open Graph

- Se quiser que o compartilhamento mostre imagem, adicione uma imagem em `assets/og-image.jpg` e atualize o caminho no head (`og:image`).
- Você também pode enviar fotos pessoais (por ex. `assets/foto-apresentacao.jpeg`) e atualizar as tags <img> no `index.html`.

## Observações

- Corrigi links (Instagram, TikTok e LinkedIn) e adicionei botões de compartilhamento (WhatsApp, Facebook, Twitter, Email) e suporte à Web Share API para dispositivos que a suportam.
- Se quiser, posso criar uma pasta `assets/` no repositório e fazer upload das suas imagens para lá.
