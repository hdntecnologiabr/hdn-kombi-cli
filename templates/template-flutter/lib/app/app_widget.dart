import "package:flutter/material.dart";
import "package:flutter_localizations/flutter_localizations.dart";
import "package:flutter_modular/flutter_modular.dart";
import "package:template/app/shared/localizations/localizations_app.dart";

class AppWidget extends StatelessWidget {
  const AppWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => MaterialApp.router(
        title: "My Smart App",
        theme: ThemeData(primarySwatch: Colors.blue),
        routeInformationParser: Modular.routeInformationParser,
        routerDelegate: Modular.routerDelegate,
        supportedLocales: const [
          Locale("en", "US"),
          Locale("pt", "BR"),
        ],
        localizationsDelegates: const [
          LocalizationsApp.delegate,
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
        ],
        localeResolutionCallback: (locale, supportedLocale) =>
            supportedLocale.firstWhere(
          (e) =>
              e.languageCode == locale?.languageCode &&
              e.countryCode == locale?.countryCode,
          orElse: () => supportedLocale.first,
        ),
      );
}
