// ignore_for_file: avoid_dynamic_calls

import "dart:async";

import "package:hive_flutter/hive_flutter.dart";
import "package:template/app/shared/config/constants.dart";
import "package:template/app/shared/models/auth/auth.model.dart";

class DatabaseService {
  DatabaseService() {
    initialize();
  }

  static Future initialize() async {
    await Hive.initFlutter();

    Hive.registerAdapter<Auth>(AuthAdapter());

    await Hive.openBox<Auth>(getTableName<Auth>());
  }

  Future close() async {
    await Hive.close();
  }

  List<T> searchAll<T>() {
    final box = initBox<T>();
    final result = box.values.map<T>((e) => e).toList();
    return result;
  }

  T search<T>(String? key) {
    final box = initBox<T>();
    return key != null ? box.get(key) : box.values.map<T>((e) => e).first;
  }

  Future<void> create<T>(dynamic model) async {
    final box = initBox<T>();
    await box.put(model.key as dynamic, model);
  }

  Future<void> update<T>(dynamic model) async {
    final box = initBox<T>();
    await box.put(model.key, model);
  }

  void delete<T>(dynamic key) {
    initBox<T>().delete(key);
  }

  void clear<T>() {
    initBox<T>().clear();
  }

  Box initBox<T>() {
    final tableName = getTableName<T>();
    return Hive.box<T>(tableName);
  }

  static String getTableName<T>() {
    switch (T) {
      case Auth:
        return Constants.hiveBoxAuth;

      default:
        throw Exception("Error in finding table name.");
    }
  }
}
