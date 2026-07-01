# DEVLINKS 🔗

Uma página de "link in bio" desenvolvido como projeto da Rocketseat, com suporte a **tema claro/escuro**, totalmente responsiva.

## ✨ Funcionalidades

- 🌗 Alternância entre tema claro e escuro (com persistência via `next-themes`)
- 🖼️ Avatar e imagem de fundo que se adaptam ao tema selecionado
- 🔘 Botões de call-to-action (inscrição, e-book, portfólio, curso)
- 🌐 Ícones de redes sociais (GitHub, YouTube, Instagram, LinkedIn)
- 📱 Layout responsivo (mobile-first)

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [next-themes](https://github.com/pacocoursey/next-themes) — controle de tema claro/escuro
- [lucide-react](https://lucide.dev/) — ícones

## 📦 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── globals.css       # Estilos globais e variáveis de tema
│   ├── layout.tsx        # Layout raiz com ThemeProvider
│   └── page.tsx          # Página principal (link in bio)
├── components/
│   ├── ThemeProvider.tsx # Wrapper do next-themes
│   └── ui/
│       ├── button.tsx        # Componente de botão reutilizável
│       └── theme-toggle.tsx  # Switch de alternância de tema
public/
├── avatar-light-mode.svg
├── avatar-dark-mode.svg
├── bg-desktop-light.jpg
├── bg-desktop.jpg
└── logo-icons/
```

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

## 💜 Autor

Feito com ♥ por [Leyvison Menezes](https://github.com/Leyvison-Menezes)
