import "package:flutter_modular/flutter_modular.dart";
import "package:template/app/search/search_module.dart";
import "package:template/app/shared/clients/http_client.dart";

class AppModule extends Module {
  @override
  List<Bind> get binds => [
        Bind((i) => DioClientImpl(baseUrl: "https://api.github.com")),
      ];

  @override
  final List<ModularRoute> routes = [
    ModuleRoute(Modular.initialRoute, module: SearchModule()),
  ];
}
