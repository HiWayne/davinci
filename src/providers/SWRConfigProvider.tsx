/* eslint-disable no-console */
import qs from 'qs';
import { SWRConfig } from 'swr';

export const SWRConfigProvider = ({ children }: { children: JSX.Element }) => (
  <SWRConfig
    value={{
      refreshInterval: 0,
      fetcher: (data: {
        url: string;
        method: string;
        params: any;
        config: any;
      }) => {
        try {
          const { url: path, method, params, config = {} } = data;

          let url = '';
          let body;

          if (
            method !== 'get' &&
            method !== 'GET' &&
            params &&
            typeof params === 'object'
          ) {
            body = JSON.stringify(params);
          }
          if (
            (method === 'get' || method === 'GET') &&
            params &&
            typeof params === 'object'
          ) {
            const query = qs.stringify(params);
            url = `${path}?${query}`;
          } else if (
            (method === 'get' || method === 'GET') &&
            params &&
            typeof params === 'string'
          ) {
            url = `${path}?${params}`;
          } else {
            url = path;
          }

          return fetch(url, { method, body, ...config }).then((res) =>
            res.json(),
          );
        } catch (error) {
          console.error(error);
          return Promise.reject(error);
        }
      },
    }}
  >
    {children}
  </SWRConfig>
);
