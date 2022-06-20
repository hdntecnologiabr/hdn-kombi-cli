import "package:dartz/dartz.dart";
import "package:flutter_modular/flutter_modular.dart";
import "package:template/app/search/domain/entities/result.dart";
import "package:template/app/search/domain/errors/errors.dart";
import "package:template/app/search/domain/repositories/search_repository.dart";
import "package:template/app/search/infra/datasources/search_datasource.dart";
import "package:template/app/search/infra/models/result_model.dart";

part "search_repository_impl.g.dart";

@Injectable(singleton: false)
class SearchRepositoryImpl implements SearchRepository {
  SearchRepositoryImpl(this.dataSource);

  final SearchDataSource dataSource;

  @override
  Future<Either<Failure, List<Result>>> getUsers(String searchText) async {
    List<ResultModel> list;

    try {
      list = await dataSource.searchText(searchText);
    } on Exception {
      return left(ErrorSearch());
    }

    return list.isEmpty ? left(DataSourceResultNull()) : right(list);
  }
}
