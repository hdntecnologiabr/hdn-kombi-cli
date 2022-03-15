export const getApiHost = (): string | undefined => {
  if (process.env.NODE_ENV === 'development') {
    return process.env.API_HOST;
  }
  return '';
};

export default getApiHost;
