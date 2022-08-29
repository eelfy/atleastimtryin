import { LocalStorageKeys } from 'consts/localStorage';

const { location } = window;

// TODO add sync for port via env (?)
const apiPath = `${location.protocol}/${location.hostname}:8080`;

interface CustomFetchOptions {
  method?: string;
  headers?: object;
  body?: object;
  params?: Record<string, string | number | boolean>;
  needsToken?: boolean;
}

export const getAuthHeader = () => `Bearer ${localStorage.getItem(LocalStorageKeys.Token)}`;

const customFetch = (
  target: RequestInfo,
  {
    method,
    headers,
    body,
    params,
    needsToken = true,
  }: CustomFetchOptions = {},
) => {
  const nextHeaders: HeadersInit = { ...headers };

  const options: RequestInit = {};

  if (method && method !== 'GET') {
    options.method = method;

    if (method !== 'DELETE') {
      nextHeaders['Content-Type'] = 'application/json';
    }
  }

  if (needsToken) {
    nextHeaders.authorization = getAuthHeader();
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  options.headers = new Headers(nextHeaders);
  const urlToFetch = new URL(`${apiPath}/${target}`);
  const urlParamsAdditional = new URLSearchParams(
    JSON.parse(JSON.stringify(params ?? {})),
  );

  const urlParamsAdditionalStringified = urlParamsAdditional.toString();

  if (urlParamsAdditionalStringified) {
    urlToFetch.search = urlToFetch.search
      ? `${urlToFetch.search}&${urlParamsAdditionalStringified}`
      : urlParamsAdditionalStringified;
  }

  return fetch(urlToFetch.href, options).then(
    (data) => data.json(),
  );
};

export { customFetch };
