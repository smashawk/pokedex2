export const fetchData = () => ({
  type: "FETCH_DATA",
});

export const fetchSucceeded = result => ({
  type: "FETCH_SUCCEEDED",
  result
});

export const fetchFailed = result => ({
  type: "FETCH_FAILED",
  result
});
