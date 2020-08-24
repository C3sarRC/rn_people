const DEFAULT_DEBOUNCE_BY = 500;
function debounce(fn, time = DEFAULT_DEBOUNCE_BY) {
  let clearToken;

  return function (...args) {
    if (clearToken) {
      clearTimeout(clearToken);
    }
    clearToken = setTimeout(() => fn(...args), time);
  };
}

export {debounce};
