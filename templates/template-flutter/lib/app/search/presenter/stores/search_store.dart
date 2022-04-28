import "package:async/async.dart";
import "package:flutter_modular/flutter_modular.dart";
import "package:mobx/mobx.dart";
import "package:template/app/search/domain/usecases/search_by_text.dart";
import "package:template/app/search/presenter/states/search_state.dart";

part "search_store.g.dart";

@Injectable()
class SearchStore = _SearchStoreBase with _$SearchStore;

abstract class _SearchStoreBase with Store {
  _SearchStoreBase(this.searchByText) {
    reaction(
      (_) => searchText,
      (text) async {
        await stateReaction(text.toString(), cancellableOperation);
      },
      delay: 500,
    );
  }

  final SearchByText searchByText;
  late CancelableOperation cancellableOperation;

  Future stateReaction(
    String text,
    CancelableOperation? cancellableOperation,
  ) async {
    await cancellableOperation?.cancel();
    cancellableOperation =
        CancelableOperation<SearchState>.fromFuture(makeSearch(text));
    if (text.isEmpty) {
      setState(const StartState());
      return;
    }

    setState(const LoadingState());

    setState(
      await cancellableOperation.valueOrCancellation(const LoadingState()),
    );
  }

  Future<SearchState> makeSearch(String text) async {
    final result = await searchByText(text);
    return result.fold(ErrorState.new, SuccessState.new);
  }

  @observable
  String searchText = "";

  @observable
  SearchState state = const StartState();

  @action
  String setSearchText(String value) => searchText = value;

  @action
  SearchState setState(SearchState value) => state = value;
}
