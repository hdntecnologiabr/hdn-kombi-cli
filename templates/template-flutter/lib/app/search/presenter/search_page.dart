import "package:flutter/material.dart";
import "package:flutter_mobx/flutter_mobx.dart";
import "package:flutter_modular/flutter_modular.dart";
import "package:template/app/search/domain/entities/result.dart";
import "package:template/app/search/domain/errors/errors.dart";
import "package:template/app/search/presenter/search_store.dart";
import "package:template/app/search/presenter/states/search_state.dart";

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
      return const Center(
        child: Text("Nothing found"),
      );
    } else if (error is ErrorSearch) {
      return const Center(
        child: Text("Error on github"),
      );
    } else {
      return const Center(
        child: Text("Internal error"),
      );
    }
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
          title: const Text("Github Search"),
        ),
        body: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.only(top: 8, right: 8, left: 8),
              child: TextField(
                onChanged: controller.setSearchText,
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                  labelText: "Search...",
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
                    return const Center(
                      child: Text("Type something..."),
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
