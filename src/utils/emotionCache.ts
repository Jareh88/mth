import createCache from "@emotion/cache";

const isBrowser = typeof document !== "undefined";

export const createEmotionCache = () =>
  createCache({
    key: "css",
    prepend: true,
    container: isBrowser ? document.head : undefined,
  });
