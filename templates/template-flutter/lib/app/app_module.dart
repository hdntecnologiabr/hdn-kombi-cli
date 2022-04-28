import "package:dio/dio.dart";
import "package:flutter_modular/flutter_modular.dart";
import "package:template/app/search/domain/usecases/search_by_text.dart";
import "package:template/app/search/external/github/github_search_datasource.dart";
import "package:template/app/search/infra/repositories/search_repository_impl.dart";
import "package:template/app/search/presenter/search_page.dart";
import "package:template/app/search/presenter/search_store.dart";

class AppModule extends Module {
  @override
  List<Bind> get binds => [
        $SearchByTextImpl,
        $SearchRepositoryImpl,
        $GithubSearchDataSource,
        Bind((i) => Dio()),
        $SearchStore,
      ];

  @override
  List<ModularRoute> get routes => [
        ChildRoute("/", child: (context, args) => const SearchPage()),
      ];
}
