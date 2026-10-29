# Cleto & Botta — arquivos do site para GitHub Pages

Este pacote contém o site estático e seus arquivos de imagem locais. As páginas internas têm `index.html` próprio para permitir acesso direto pelo GitHub Pages.

## Publicar pelo GitHub Pages

1. Crie um repositório chamado exatamente `SEU-USUARIO.github.io` (substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub). Esse formato permite que os caminhos do site funcionem na raiz do domínio.
2. Extraia este ZIP e envie **o conteúdo** da pasta extraída para a raiz do repositório, incluindo `index.html`, `assets/` e as pastas das páginas.
3. No GitHub, abra **Settings → Pages** e selecione **Deploy from a branch**, branch `main` e pasta `/ (root)`. Salve.
4. Após a publicação, o site ficará em `https://SEU-USUARIO.github.io/`.

Se publicar em um repositório de projeto com URL `seu-usuario.github.io/nome-do-repositorio/`, será necessário adaptar os caminhos absolutos do site para esse subdiretório.

## Observações

O mapa interativo usa MapLibre e OpenFreeMap e requer conexão à internet. Há um link para abrir a rota no Google Maps. O formulário prepara um e-mail no aplicativo do visitante; ele não armazena nem envia mensagens por conta própria.
