import "package:dio/dio.dart";
import "package:flutter_modular/flutter_modular.dart";
import "package:template/app/search/infra/datasources/search_datasource.dart";
import "package:template/app/search/infra/models/result_model.dart";

part "github_search_datasource.g.dart";

@Injectable(singleton: false)
class GithubSearchDataSource implements SearchDataSource {
  GithubSearchDataSource(this.dio);

  final Dio dio;

  @override
  Future<List<ResultModel>> searchText(String textSearch) async {
    final result = await dio.get(
      "https://api.github.com/search/users?q=${textSearch.trim().replaceAll(' ', '+')}",
    );
    if (result.statusCode == 200) {
      final jsonList = result.data["items"] as List;
      final list = jsonList
          .map(
            (item) => ResultModel(
              name: item["name"],
              nickname: item["login"],
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
