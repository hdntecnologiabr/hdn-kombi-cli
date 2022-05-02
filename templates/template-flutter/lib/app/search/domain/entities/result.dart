import "package:equatable/equatable.dart";

class Result extends Equatable {
  const Result({
    required this.image,
    required this.nickname,
    required this.url,
  });

  final String image;
  final String nickname;
  final String url;

  @override
  List<Object> get props => [image, nickname, url];
}
