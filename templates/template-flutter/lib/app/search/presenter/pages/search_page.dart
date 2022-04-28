import "package:flutter/material.dart";
import "package:flutter_mobx/flutter_mobx.dart";
import "package:flutter_modular/flutter_modular.dart";
import "package:template/app/search/domain/entities/result.dart";
import "package:template/app/search/domain/errors/errors.dart";
import "package:template/app/search/presenter/states/search_state.dart";
import "package:template/app/search/presenter/stores/search_store.dart";
import "package:template/app/shared/localizations/translate_app.dart";

class SearchPage extends StatefulWidget {
  const SearchPage({Key? key}) : super(key: key);

  @override
  _SearchPageState createState() => _SearchPageState();
}

class _SearchPageState extends ModularState<SearchPage, SearchStore> {
  Widget _buildList(List<Result> list) => ListView.builder(
        itemCount: list.length,
        itemBuilder: (_, index) {
          final item = list[index];
          return ListTile(
            leading: CircleAvatar(
              backgroundImage: NetworkImage(item.image),
            ),
            title: Text(item.nickname),
          );
        },
      );

  Widget _buildError(Failure error) {
    if (error is EmptyList) {
      return Center(
        child: Text(TranslateApp(context).text("error.nothing-found")),
      );
    } else if (error is ErrorSearch) {
      return Center(
        child: Text(TranslateApp(context).text("error.client")),
      );
    } else {
      return Center(
        child: Text(TranslateApp(context).text("error.internal")),
      );
    }
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          title: Text(TranslateApp(context).text("title")),
        ),
        body: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.only(top: 8, right: 8, left: 8),
              child: TextField(
                onChanged: controller.setSearchText,
                decoration: InputDecoration(
                  border: const OutlineInputBorder(),
                  labelText: TranslateApp(context).text("input-label"),
                ),
              ),
            ),
            Expanded(
              child: Observer(
                builder: (_) {
                  final state = controller.state;

                  if (state is ErrorState) {
                    return _buildError(state.error);
                  }

                  if (state is StartState) {
                    return Center(
                      child: Text(TranslateApp(context).text("helper-text")),
                    );
                  } else if (state is LoadingState) {
                    return const Center(
                      child: CircularProgressIndicator(),
                    );
                  } else if (state is SuccessState) {
                    return _buildList(state.list);
                  } else {
                    return Container();
                  }
                },
              ),
            )
          ],
        ),
      );
}
