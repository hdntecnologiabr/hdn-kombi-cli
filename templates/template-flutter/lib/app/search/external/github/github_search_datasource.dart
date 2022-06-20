import "package:flutter_modular/flutter_modular.dart";
import "package:template/app/search/infra/datasources/search_datasource.dart";
import "package:template/app/search/infra/models/result_model.dart";
import "package:template/app/shared/clients/http_client.dart";

part "github_search_datasource.g.dart";

@Injectable(singleton: false)
class GithubSearchDataSource implements SearchDataSource {
  GithubSearchDataSource(this.client);

  final IClient client;

  @override
  Future<List<ResultModel>> searchText(String textSearch) async {
    final result = await client.get<Map<String, dynamic>>(
      "/search/users?q=${textSearch.trim().replaceAll(' ', '+')}",
    );
    if (result.statusCode == 200) {
      final List<Map<String, dynamic>> jsonList = result.data!["items"];
      final list = jsonList
          .map(
            (item) => ResultModel(
              nickname: item['login'],
              image: item["avatar_url"],
              url: item["url"],
            ),
          )
          .toList();
      return list;
    } else {
      throw Exception();
    }
  }
}
