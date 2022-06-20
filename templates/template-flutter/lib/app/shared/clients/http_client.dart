// ignore_for_file: prefer_foreach
import "package:dio/dio.dart";

abstract class IClient {
  Future<Response<T>> get<T>(
    String? uri, {
    String? query,
    Map<String, dynamic>? headers,
  });

  Future<Response<T>> post<T>(
    String? uri, {
    dynamic data,
    String? query,
    Map<String, dynamic>? headers,
  });

  Future<Response<T>> update<T>(
    String? uri, {
    dynamic data,
    String? query,
    Map<String, dynamic>? headers,
  });

  Future<Response<T>> delete<T>(
    String? uri, {
    dynamic data,
    String? query,
    Map<String, dynamic>? headers,
  });
}

class DioClientImpl implements IClient {
  DioClientImpl({
    required String baseUrl,
    this.queryAuth = "",
    List<InterceptorsWrapper>? interceptors,
  }) {
    _dio = Dio(
      BaseOptions(
        baseUrl: baseUrl,
        contentType: "application/json",
        validateStatus: (status) => status! < 500,
      ),
    );

    _setupInterceptors(interceptors: interceptors);
  }

  late Dio _dio;
  final String queryAuth;

  /// Setting up the DioClient with some [interceptors]
  void _setupInterceptors({required List<InterceptorsWrapper>? interceptors}) {
    if (interceptors == null) {
      return;
    }

    _dio.interceptors.clear();

    for (final interceptor in interceptors) {
      _dio.interceptors.add(interceptor);
    }
  }

  @override
  Future<Response<T>> get<T>(
    String? uri, {
    String? query = "",
    Map<String, dynamic>? headers = const {},
  }) async =>
      _dio.get(uri! + queryAuth + query!);

  @override
  Future<Response<T>> post<T>(
    String? uri, {
    dynamic data = "",
    String? query = "",
    Map<String, dynamic>? headers = const {},
  }) async {
    // return await _dio.post(uri! + queryAuth + query!, data: data!);
    throw UnimplementedError("This method was not implemented yet.");
  }

  @override
  Future<Response<T>> update<T>(
    String? uri, {
    dynamic data = "",
    String? query = "",
    Map<String, dynamic>? headers = const {},
  }) async {
    // return await _dio.put(uri! + queryAuth + query!, data: data!);
    throw UnimplementedError("This method was not implemented yet.");
  }

  @override
  Future<Response<T>> delete<T>(
    String? uri, {
    dynamic data = "",
    String? query = "",
    Map<String, dynamic>? headers = const {},
  }) async {
    // return await _dio.delete(uri! + queryAuth + query!, data: data!);
    throw UnimplementedError("This method was not implemented yet.");
  }
}
