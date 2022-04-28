import "dart:convert";

import "package:dio/dio.dart";
import "package:faker/faker.dart";
import "package:flutter_modular/flutter_modular.dart";
import "package:flutter_test/flutter_test.dart";
import "package:mocktail/mocktail.dart";
import "package:modular_test/modular_test.dart";
import "package:template/app/app_module.dart";
import "package:template/app/search/domain/entities/result.dart";
import "package:template/app/search/domain/usecases/search_by_text.dart";

class DioMock extends Mock implements Dio {}

void main() {
  final dio = DioMock();

  initModule(AppModule(), replaceBinds: [Bind((i) => dio)]);

  test("Should run useCase search_by_text", () async {
    when(() => dio.get(faker.internet.httpsUrl())).thenAnswer(
      (_) async => Response(
        data: jsonDecode(jsonResponse),
        statusCode: 200,
        requestOptions: RequestOptions(path: faker.internet.httpsUrl()),
      ),
    );

    final useCase = Modular.get<SearchByText>();
    final result = await useCase(faker.internet.userName());
    expect(result.isRight(), true);
    expect(result, isA<List<Result>>());
  });
}

String jsonResponse = '''
{
  "total_count": ${faker.randomGenerator.integer(100)},
  "incomplete_results": ${faker.randomGenerator.boolean()},
  "items": [
    {
      "login": ${faker.lorem.word()},
      "id": ${faker.randomGenerator.integer(100)},
      "node_id": ${faker.guid.guid()},
      "avatar_url": ${faker.internet.httpsUrl()},
      "gravatar_id": ${faker.guid.guid()},
      "url": ${faker.internet.httpsUrl()},
      "html_url": ${faker.internet.httpsUrl()},
      "followers_url": ${faker.internet.httpsUrl()},
      "following_url": ${faker.internet.httpsUrl()},
      "gists_url": ${faker.internet.httpsUrl()},
      "starred_url": ${faker.internet.httpsUrl()},
      "subscriptions_url": ${faker.internet.httpsUrl()},
      "organizations_url": ${faker.internet.httpsUrl()},
      "repos_url": ${faker.internet.httpsUrl()},
      "events_url": ${faker.internet.httpsUrl()},
      "received_events_url": ${faker.internet.httpsUrl()},
      "type": ${faker.lorem.word()},
      "site_admin": ${faker.randomGenerator.boolean()},
      "score": ${faker.randomGenerator.integer(100)}
    }
  ]
}''';
