import "dart:convert";

import "package:template/app/search/domain/entities/result.dart";

class ResultModel extends Result {
  const ResultModel({
    required this.image,
    required this.name,
    required this.nickname,
    required this.url,
  }) : super(image: "", name: "", nickname: "", url: "");

  @override
  final String image;
  @override
  final String name;
  @override
  final String nickname;
  @override
  final String url;

  Map<String, dynamic> toMap() => {
        "image": image,
        "name": name,
        "nickname": nickname,
        "url": url,
      };

  static ResultModel? fromMap(Map<String, dynamic>? map) {
    if (map == null) {
      return null;
    }

    return ResultModel(
      image: map["image"],
      name: map["name"],
      nickname: map["nickname"],
      url: map["url"],
    );
  }

  String toJson() => json.encode(toMap());

  static ResultModel? fromJson(String source) => fromMap(json.decode(source));
}
