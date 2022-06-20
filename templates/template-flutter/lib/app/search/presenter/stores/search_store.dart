import "package:flutter_modular/flutter_modular.dart";
import "package:mobx/mobx.dart";
import "package:template/app/search/domain/usecases/search_by_text.dart";
import "package:template/app/search/presenter/states/search_state.dart";

part "search_store.g.dart";

@Injectable()
class SearchStore = _SearchStoreBase with _$SearchStore;

abstract class _SearchStoreBase with Store {
  _SearchStoreBase(this.searchByText);

  @observable
  String searchText = "";
  @observable
  SearchState state = const EmptyState();
  final SearchByText searchByText;

  @action
  String setSearchText(String value) => searchText = value;

  @action
  SearchState setState(SearchState value) => state = value;

  @action
  Future onSubmit() async {
    setState(const LoadingState());
    setState(await makeSearch(searchText));
    if (searchText.isEmpty) {
      setState(const EmptyState());
      return;
    }
  }

  Future<SearchState> makeSearch(String text) async {
    final result = await searchByText(text);
    return result.fold(ErrorState.new, SuccessState.new);
  }
}
