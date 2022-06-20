// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'auth.model.dart';

// **************************************************************************
// TypeAdapterGenerator
// **************************************************************************

class AuthAdapter extends TypeAdapter<Auth> {
  @override
  final int typeId = 0;

  @override
  Auth read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return Auth(
      accessToken: fields[0] as String,
      userId: fields[1] as int?,
      userName: fields[2] as String?,
      profile: fields[3] as String?,
      profileType: fields[4] as String?,
      email: fields[5] as String?,
      password: fields[6] as String?,
    );
  }

  @override
  void write(BinaryWriter writer, Auth obj) {
    writer
      ..writeByte(7)
      ..writeByte(0)
      ..write(obj.accessToken)
      ..writeByte(1)
      ..write(obj.userId)
      ..writeByte(2)
      ..write(obj.userName)
      ..writeByte(3)
      ..write(obj.profile)
      ..writeByte(4)
      ..write(obj.profileType)
      ..writeByte(5)
      ..write(obj.email)
      ..writeByte(6)
      ..write(obj.password);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is AuthAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Auth _$AuthFromJson(Map<String, dynamic> json) => Auth(
      accessToken: json['accessToken'] as String,
      userId: json['userId'] as int?,
      userName: json['userName'] as String?,
      profile: json['profile'] as String?,
      profileType: json['profileType'] as String?,
      email: json['email'] as String?,
      password: json['password'] as String?,
    );

Map<String, dynamic> _$AuthToJson(Auth instance) => <String, dynamic>{
      'accessToken': instance.accessToken,
      'userId': instance.userId,
      'userName': instance.userName,
      'profile': instance.profile,
      'profileType': instance.profileType,
      'email': instance.email,
      'password': instance.password,
    };
