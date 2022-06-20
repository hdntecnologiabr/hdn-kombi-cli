import "package:flutter_modular/flutter_modular.dart";
import "package:template/app/search/domain/repositories/search_repository.dart";
import "package:template/app/search/domain/usecases/search_by_text.dart";
import "package:template/app/search/external/github/github_search_datasource.dart";
import "package:template/app/search/infra/datasources/search_datasource.dart";
import "package:template/app/search/infra/repositories/search_repository_impl.dart";
import "package:template/app/search/presenter/pages/search_page.dart";
import "package:template/app/search/presenter/stores/search_store.dart";
import "package:template/app/shared/clients/http_client.dart";

class SearchModule extends Module {
  @override
  final List<Bind> binds = [
    Bind.lazySingleton((i) => SearchByTextImpl(i<SearchRepository>())),
    Bind.lazySingleton((i) => SearchRepositoryImpl(i<SearchDataSource>())),
    Bind.lazySingleton((i) => GithubSearchDataSource(i<IClient>())),
    Bind.lazySingleton((i) => SearchStore(i<SearchByText>())),
  ];

  @override
  final List<ModularRoute> routes = [
    ChildRoute(Modular.initialRoute, child: (_, args) => const SearchPage()),
  ];
}
