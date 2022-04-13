<!-- PROJECT LOGO -->
<br />
<div style="display: flex; flex-direction:column; align-items:center;">
  <a href="">
    <img src="" alt="Logo" width="250" >
  </a>
  <h2><%= fullName %></h2>
   <span>Design System.</span>
</div>

## <img class="emoji" alt="art" height="18" width="18" src="https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png"> Sobre o Projeto

<div style="display: flex; flex-direction:column; align-items:center;">
  <a href="">
    <img src="" alt="Logo" width='500px'>
  </a>
</div>

**<%= fullName %>** é um design system (DS).

É uma biblioteca de Design System, agnóstica e escalável para o desenvolvimento de novos produtos, seguindo as guias de estilos.

### Funcionalidades

#### Design Tokens

Definimos e escrevemos **Tokens** pensando em escalabilidade e uso de temas.

#### Componentes

Os componentes foram desenhados de acordo com as necessidades de uso, pensando em escalibilidade, acessibilidade, variáveis e suas propriedades.

### Construído com

- [StyleDictionary](https://amzn.github.io/style-dictionary/#/README)
- [Stitches](https://stitches.dev/docs/installation)

- [RadixUI](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [React-aria](https://react-spectrum.adobe.com/react-aria/)
- [React.js](https://reactjs.org/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)

## Começando

<%= fullName %> esta disponível como pacotes npm.

### 🚀 Instalando

Para instalar o <%= fullName %> execute o comando abaixo:

```bash
yarn add @<%= fullName %>/core

// ou

npm install @<%= fullName %>/core
```

Se desejar utilizar um pacote específico basta executar o seguinte comando:

```bash
// yarn add @<%= fullName %>/package-name
yarn add @<%= fullName %>/web

// ou

// npm install @<%= fullName %>/package-name
npm install @<%= fullName %>/react
```

## ☕ Usando

O Design System <%= fullName %> é organizado em 5 packages.

📦 Core

📦 React

📦 Styles

📦 Utils

📦 Web

O package `📦 Core` possui todos os packages dentro de um só, além de exportar algumas funcionalidades base para o Design system.

📦 Core

┣ 📦 React

┣ 📦 Styles

┣ 📦 Utils

┗ 📦 Web

O Package `📦 React` possui componentes com suporte para a biblioteca React.

Exemplo de uso:

```jsx
import { Button } from '@<%= fullName %>/react';

export const Wrapper = () => {
  return <Button>Click me</Button>;
};
```

O Package `📦 Styles` é reponsável pelos estilos dos componentes, é agnóstico de framework, funcionando em qualquer tecnologia web, bem como, React, Angular, Vue, Vanilla.

Exemplo de uso:

```jsx
import { ButtonStyles } from '@<%= fullName %>/styles';

const ButtonBase = styled('button', ButtonStyles);

export const Wrapper = () => {
  return <ButtonBase>Click me</ButtonBase>;
};
```

O Package `📦 Utils` é responsavel por funções úteis ao Design System, tal como capitalize, formatação de data, acessibilidade entre outras.

Exemplo de uso:

```jsx
import { ariaAttr, dataAttr } from '@<%= fullName %>/utils';

return (
  <Button
    data-active={dataAttr(isPressed)}
    data-loading={dataAttr(isLoading)}
    aria-disabled={ariaAttr(isDisabled || isLoading)}
  >
    Clique Aqui
  </Button>
);
```

O Package `📦 Web` é responsavel por funcionalidades para web, ao instalar este pacote você tem acesso a todos os tokens e também algumas funções do Design system.

Exemplo de uso:

```jsx
import { styled } from '@<%= fullName %>/web';

const ButtonStyle = styled('button', {
  background: '$palette-bright-pink-50',
});
```

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<h4>Devs</h4>
<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="mailto:">
          <img src="" width="100px;" alt="Foto do Nome"/><br>
          <sub>
            <b>Nome do Dev</b>
          </sub>
        </a>
      </td>
    </tr>
  </tbody>
</table>
<h4>UI/UX</h4>
<p>Em breve</p>
<h4>Produtos</h4>
Em breve
