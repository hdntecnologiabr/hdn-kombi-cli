import "dart:convert";

import "package:template/app/search/domain/entities/result.dart";

class ResultModel extends Result {
  const ResultModel({
    required String image,
    required String nickname,
    required String url,
  }) : super(image: image, nickname: nickname, url: url);

  Map<String, dynamic> toMap() => {
        "image": image,
        "nickname": nickname,
        "url": url,
      };

  static ResultModel? fromMap(Map<String, dynamic>? map) {
    if (map == null) {
      return null;
    }

    return ResultModel(
      image: map["image"],
      nickname: map["nickname"],
      url: map["url"],
    );
  }

  String toJson() => json.encode(toMap());

  static ResultModel? fromJson(String source) => fromMap(json.decode(source));
}
