# Template Flutter HDN

## Tecnologias

O aplicativo está sendo desenvolvido utilizando o [Flutter](https://flutter.dev/) que é uma tecnologia híbrida onde é possível gerar versões para diferentes tipos de plataformas ( Android / IOS / Windows / Web ).

Este template foi desenvolvido pensando da seguinte forma:

### 🧩 **Estrutura**

Essa arquitetura é inspirada da [Clean Dart](https://github.com/Flutterando/Clean-Dart), uma arquitetura muito famosa na comunidade Flutter em que ela presa pelo desacoplamento, aumentando assim a escalabilidade e a manutenabilidade do projeto.

### 🪄 **Controle de Estado**

Para o controle de estado dentro do Flutter, a biblioteca [Mobx](https://mobx.netlify.app) é a que apresenta a menor curva de aprendizagem, e também é amplamente utilizada dentro da comunidade Flutter.

### 🪄 **Injeção de Dependência**

[Flutter Modular](https://modular.flutterando.com.br/docs/flutter_modular/start/) foi construído usando o motor do modular_core que é responsável pelo sistema de injeção de dependência e gerenciamento de rotas.

### ♾️ **Chamadas API**

Para as chamadas a API dentro do Flutter, o pacote [Dio](https://pub.dev/packages/dio) com suporte a interceptors, FormData, Request Cancellation e etc.

### 🐝 **Persistência de Dados**

O [Hive](https://pub.dev/packages/hive) é um banco de dados de valor-chave leve e extremamente rápido escrito em Dart puro

### 🎉 **Animações**

[Lottie](https://pub.dev/packages/lottie) é uma biblioteca que analisa animações do Adobe After Effects exportadas como json e as renderiza nativamente em dispositivos móveis!

### 🔨 **Testes**

O Flutter conta com uma biblioteca de testes nativamente. Mas para auxiliar na construção de mocks para os testes, temos o apoio do pacote [Mocktail](https://pub.dev/packages/mocktail) e [Faker](https://pub.dev/packages/faker)

---

## Pré-requisitos

- Instale o [JDK](https://chocolatey.org/packages/jdk8). (ps: configuração para Windows 🐱‍🐉)
- Acesse a [documentação](https://flutter.dev/docs/get-started/install) oficial do Flutter e siga as instruções do seu sistema operacional.
- Escolha seu editor de preferência.

---

## Rodando o Projeto

- Execute `flutter pub get` - Execute `flutter pub run build_runner build`
- Para otimizar o fluxo de trabalho é possível executar o build_runner com o comando `watch` (documentação do [build_runner](https://pub.dev/packages/build_runner#built-in-commands))
  - utilize a flag `--delete-conflicting-outputs` caso seja necessário

* Abra o emulador de sua preferência
* E por fim execute o comando `flutter run`
* Se divirta 🎉.

# Gerando builds

### Android

- Execute o comando `flutter build apk --release` ou o `flutter build appbundle --release` para gerar um appbundle
- Após finalizar, o .apk / .aab(appbundle) estarão na pasta `build/app/outputs/apk` ou `build/app/outputs/bundle`

`Mais informações sobre a documentação vão ser adicionadas no futuro 😎`
