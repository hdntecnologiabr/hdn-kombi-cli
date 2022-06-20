import "package:flutter/material.dart";
import "package:template/app/shared/localizations/localizations_app.dart";

class LocalizationsAppDelegate extends LocalizationsDelegate<LocalizationsApp> {
  const LocalizationsAppDelegate();
  static List<String> supported = ["pt", "en"];

  @override
  bool isSupported(Locale locale) => supported.contains(locale.languageCode);

  @override
  Future<LocalizationsApp> load(Locale locale) async {
    final localizations = LocalizationsApp(locale);
    await localizations.load();
    return localizations;
  }

  @override
  bool shouldReload(LocalizationsDelegate<LocalizationsApp> old) => false;
}
