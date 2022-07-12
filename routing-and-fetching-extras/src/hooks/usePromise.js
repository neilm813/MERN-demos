// See views/Launches/Launches-with-custom-hook.js for example usage.
// react-query package is a robust solution to use in serious projects.

import { useEffect, useState } from 'react';

/**
 * @callback PromiseMakingCallback An async callback that has been memoized by
 *    `React.useCallback` that returns a `Promise` when called.
 * If a non-memoized function is passed in, it will cause an infinite loop.
 * @returns {Promise}
 */

/**
 * Helps manage promises / async tasks by return the common desired related
 * states.
 * @see https://beta-reactjs-org-git-you-might-not-fbopensource.vercel.app/learn/you-might-not-need-an-effect#fetching-data
 * @param {PromiseMakingCallback} promiseMakingCallback
 * @example
 * ```
 * const {
 *  isLoading,
 *  data,
 *  error,
 *  refresh
 * } = usePromise(
 *  useCallback(() => getUserById(id), [])
 * );
 * ```
 */
export const usePromise = (promiseMakingCallback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [requestCount, setRequestCount] = useState(1);

  useEffect(() => {
    let isStaleRequest = false;

    setIsLoading(true);

    promiseMakingCallback()
      .then((res) => {
        // console.log('usePromise .then, is request stale?', isStaleRequest);
        if (isStaleRequest === false) {
          setData(res);
        }
      })
      .catch((e) => {
        if (isStaleRequest === false) {
          setError(e);
        }
      })
      .finally(() => setIsLoading(false));

    /* 
    A 'cleanup' callback returned to useEffect will be called before the next
    useEffect. If our useEffect is about to run again, we know a new request
    is about to happen--if a previous request is still pending, it should be
    ignored to prevent race conditions because want the newest data.
    See https://beta-reactjs-org-git-you-might-not-fbopensource.vercel.app/learn/you-might-not-need-an-effect#fetching-data
    */
    return () => {
      isStaleRequest = true;
    };
  }, [promiseMakingCallback, requestCount]);

  return {
    isLoading,
    data,
    error,
    requestCount,
    // increasing requestCount will rerun useEffect to get fresh data.
    refresh: () => setRequestCount(requestCount + 1),
  };
};
