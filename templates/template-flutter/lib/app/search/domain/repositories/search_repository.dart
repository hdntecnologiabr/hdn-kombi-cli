import "package:dartz/dartz.dart";
import "package:template/app/search/domain/entities/result.dart";
import "package:template/app/search/domain/errors/errors.dart";

abstract class SearchRepository {
  Future<Either<Failure, List<Result>>> getUsers(String searchText);
}
