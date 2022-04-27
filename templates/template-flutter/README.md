# Template Flutter HDN

## Tecnologias

O aplicativo está sendo desenvolvido utilizando o [Flutter](https://flutter.dev/) que é uma tecnologia híbrida onde é possível gerar versões para diferentes tipos de plataformas ( Android / IOS / Windows / Web ).

Este template foi desenvolvido pensando da seguinte forma:

### **Estrutura** 🧩

Essa arquitetura é inspirada da [Clean Dart](https://github.com/Flutterando/Clean-Dart), uma arquitetura muito famosa na comunidade Flutter em que ela presa pelo desacoplamento, aumentando assim a escalabilidade e a manutenabilidade do projeto.

### **Controle de Estado** 🪄

Para o controle de estado dentro do Flutter, a biblioteca [Mobx](https://mobx.netlify.app) é a que apresenta a menor curva de aprendizagem, e também é amplamente utilizada dentro da comunidade Flutter.

### **Testes** 🔨

O Flutter conta com uma biblioteca de testes nativamente. Mas para auxiliar na construção de mocks para os testes, temos o apoio do pacote [Mockito](https://pub.dev/packages/mockito)

Abaixo estão listadas todas as tecnologias utilizadas dentro desse template:

- [Flutter](https://flutter.dev/)
- [Dart](https://dart.dev/)
- [Mobx](https://balta.io/blog/flutter-mobx)
- [GetIt](https://medium.com/flutterdevs/explore-getit-in-flutter-8db723e9d7cf)
- [REST API](https://www.redhat.com/en/topics/api/what-is-a-rest-api)
- [Dio](https://blog.logrocket.com/networking-flutter-using-dio/)
- [Json Serializable](https://pub.dev/packages/json_serializable)

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
