import "package:flutter/widgets.dart";
import "package:template/app/shared/localizations/localizations_app.dart";

class TranslateApp {
  TranslateApp(this.context);

  final BuildContext context;

  String text(String key) => LocalizationsApp.of(context)?.translate(key) ?? "";
}
