const defaultWsUrl = "ws://localhost:5000";

export const getWsUrl = (urlParam: string = "url") => {
  const url = new URL(window.location.href);
  const c = url.searchParams.get(urlParam);

  return c || defaultWsUrl;
};
