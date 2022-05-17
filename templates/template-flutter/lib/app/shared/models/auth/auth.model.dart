import 'package:hive/hive.dart';
import 'package:json_annotation/json_annotation.dart';
import 'package:template/app/shared/config/constants.dart';

part 'auth.model.g.dart';

@JsonSerializable()
@HiveType(typeId: Constants.hiveTypeAuth)
class Auth extends HiveObject {
  @HiveField(0)
  late String accessToken;

  @HiveField(1)
  late int? userId;

  @HiveField(2)
  late String? userName;

  @HiveField(3)
  late String? profile;

  @HiveField(4)
  late String? profileType;

  @HiveField(5)
  late String? email;

  @HiveField(6)
  late String? password;

  Auth({
    required this.accessToken,
    this.userId,
    this.userName,
    this.profile,
    this.profileType,
    this.email,
    this.password,
  });

  factory Auth.fromJson(Map<String, dynamic> json) => _$AuthFromJson(json);
}
