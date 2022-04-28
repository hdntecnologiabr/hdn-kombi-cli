import "package:dartz/dartz.dart";
import "package:flutter_modular/flutter_modular.dart";
import "package:template/app/search/domain/entities/result.dart";
import "package:template/app/search/domain/errors/errors.dart";
import "package:template/app/search/domain/repositories/search_repository.dart";

part "search_by_text.g.dart";

mixin SearchByText {
  Future<Either<Failure, List<Result>>> call(String textSearch);
}

@Injectable(singleton: false)
class SearchByTextImpl implements SearchByText {
  SearchByTextImpl(this.repository);

  final SearchRepository repository;

  @override
  Future<Either<Failure, List<Result>>> call(String textSearch) async {
    final option = optionOf(textSearch);

    return option.fold(() => Left(InvalidSearchText()), (text) async {
      final result = await repository.getUsers(text);
      return result.fold(
        left,
        (r) => r.isEmpty ? left(EmptyList()) : right(r),
      );
    });
  }
}
