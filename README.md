<h1 style="background:#1a1d23; padding: 2rem 0;" align="center">
  <img alt="Logo" src="./public/logo.svg" alt="SpaceTraveling">
</h1>

<h1 align="center">
    SpaceTraveling - Next.js
</h1>
<p align="center">Aplicação em formato de blog utilizando Prismic CMS</p>

<p align="center">
 <a href="#sobre-o-projeto">Sobre o Projeto</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#configurações-necessárias">Configurações necessárias</a> •
 <a href="#licença">Licença</a> •
 <a href="#autor">Autor</a>
</p>

## Sobre o projeto

O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação em ReactJS com NextJS para listagem de posts de um blog.

A aplicação foi desenvolvida utilizando o framework NextJS aplicando os conceitos de Static Site Generation (SSG) e utilizando Prismic CMS para adição e gerenciamento do conteúdo dos posts.

Como desafio complementar foi adicionado sessão de comentários utilizando Utterances, acesso a Preview dos posts do Prismic CMS, controle de navegação dentro do post para ir para o próximo/anterior e adição de tag com data de quando o post sofreu a ultima edição.

O projeto foi desenvolvido como desafio das aulas do modulo 03 do [Ignite da Rocketseat](https://rocketseat.com.br/)

Link do [desafio](https://www.notion.so/Desafio-01-Criando-um-projeto-do-zero-b1a3645d286b4eec93f5f1f5476d0ff7)

Link do [desafio complementar](https://www.notion.so/Desafio-02-Adicionando-features-ao-blog-d466866c02544c79bbada9717c033d0a)

---

## Tecnologias

Abaixo as tecnologias utilizadas para construção da aplicação

- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [Prismic CMS](https://prismic.io/)

---

## 🏃🏾 Testes

Para estar completo, o projeto deve passar pelos seguintes testes quando é entregue na plataforma da rocketseat:

- [x] Header should be able to render logo
- [x] Header should be able to navigate to home page after a click
- [x] Post should be able to return prismic posts documents paths using getStaticPaths
- [x] Post should be able to return prismic post document using getStaticProps
- [x] Post should be able to render post document info
- [x] Post should be able to render loading message if fallback
- [x] Home should be able to return prismic posts documents using getStaticProps
- [x] Home should be able to render posts documents info
- [x] Home should be able to navigate to post page after a click
- [x] Home should be able to load more posts if available
- [x] Home should not be able to load more posts if not available

Resultado do Projeto:

 <img alt="Logo" src="./public/result.png" alt="SpaceTraveling - result">

## Configurações necessárias

### **Requisitos**

Necessário realizar as instalações:

- [Yarn](https://classic.yarnpkg.com)

Criar conta e configurar o serviço do Prismic CMS e Utterances:

- [Prismic CMS](https://prismic.io/)

### **Iniciando o projeto**

```bash
# Execute yarn para instalar as dependências
$ yarn

# Para iniciar a aplicação
$ yarn dev

```

---

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

---

## Autor

Feito por Mauricio Aires 👋🏽
