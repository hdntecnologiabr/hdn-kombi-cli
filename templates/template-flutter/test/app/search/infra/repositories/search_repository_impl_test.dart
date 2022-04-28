import "package:dartz/dartz.dart";
import "package:faker/faker.dart";
import "package:flutter_test/flutter_test.dart";
import "package:mocktail/mocktail.dart";
import "package:template/app/search/domain/errors/errors.dart";
import "package:template/app/search/infra/datasources/search_datasource.dart";
import "package:template/app/search/infra/models/result_model.dart";
import "package:template/app/search/infra/repositories/search_repository_impl.dart";

class SearchDataSourceMock extends Mock implements SearchDataSource {}

void main() {
  final dataSource = SearchDataSourceMock();
  final repository = SearchRepositoryImpl(dataSource);
  test("Should return a list of ResultModel", () async {
    when(() => dataSource.searchText(faker.internet.userName())).thenAnswer(
      (_) async => <ResultModel>[
        ResultModel(
          image: faker.internet.httpsUrl(),
          name: faker.lorem.word(),
          nickname: faker.lorem.word(),
          url: faker.internet.httpsUrl(),
        )
      ],
    );

    final result = await repository.getUsers(faker.internet.userName());
    expect(result, isA<List<ResultModel>>());
  });
  test("Should return a ErrorSearch if is thrown on the dataSource", () async {
    when(() => dataSource.searchText(faker.internet.userName()))
        .thenThrow(ErrorSearch());

    final result = await repository.getUsers(faker.internet.userName());
    expect(result.fold(id, id), isA<ErrorSearch>());
  });
  test(
      "Should return a DataSourceResultNull if the response of dataSource is null",
      () async {
    when(() => dataSource.searchText(faker.internet.userName()))
        .thenAnswer((_) async => []);

    final result = await repository.getUsers(faker.internet.userName());
    expect(result.fold(id, id), isA<DataSourceResultNull>());
  });
}
