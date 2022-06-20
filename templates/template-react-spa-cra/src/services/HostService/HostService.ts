export const getApiHost = (): string | undefined => {
  if (process.env.NODE_ENV === "development") {
    return process.env.REACT_APP_API_HOST;
  }
  return "";
};
