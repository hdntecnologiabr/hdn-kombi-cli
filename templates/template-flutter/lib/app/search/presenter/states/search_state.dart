import "package:template/app/search/domain/entities/result.dart";
import "package:template/app/search/domain/errors/errors.dart";

abstract class SearchState {}

class EmptyState implements SearchState {
  const EmptyState();
}

class LoadingState implements SearchState {
  const LoadingState();
}

class ErrorState implements SearchState {
  const ErrorState(this.error);
  final Failure error;
}

class SuccessState implements SearchState {
  const SuccessState(this.list);
  final List<Result> list;
}
