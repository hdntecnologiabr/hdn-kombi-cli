import "package:template/app/search/infra/models/result_model.dart";

abstract class SearchDataSource {
  Future<List<ResultModel>> searchText(String textSearch);
}
