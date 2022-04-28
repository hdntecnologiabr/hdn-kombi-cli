import "package:dartz/dartz.dart";
import "package:faker/faker.dart";
import "package:flutter_test/flutter_test.dart";
import "package:mocktail/mocktail.dart";
import "package:template/app/search/domain/entities/result.dart";
import "package:template/app/search/domain/errors/errors.dart";
import "package:template/app/search/domain/repositories/search_repository.dart";
import "package:template/app/search/domain/usecases/search_by_text.dart";

class SearchRepositoryMock extends Mock implements SearchRepository {}

void main() {
  final repository = SearchRepositoryMock();
  final useCase = SearchByTextImpl(repository);

  test("Should return a list with results", () async {
    when(() => repository.getUsers(faker.internet.userName())).thenAnswer(
      (_) async => right(<Result>[
        Result(
          image: faker.internet.httpsUrl(),
          name: faker.lorem.word(),
          nickname: faker.lorem.word(),
          url: faker.internet.httpsUrl(),
        )
      ]),
    );

    final result = await useCase(faker.internet.userName());
    expect(result, isA<List<Result>>());
  });
  test("Should return an InvalidSearchText if the text is invalid", () async {
    final result = await useCase("");
    expect(result.fold(id, id), isA<InvalidSearchText>());
  });
  test("Should return an EmptyList if the response is empty", () async {
    when(() => repository.getUsers(faker.internet.userName()))
        .thenAnswer((_) async => right(<Result>[]));

    final result = await useCase(faker.internet.userName());
    expect(result.fold(id, id), isA<EmptyList>());
  });
}
