import lodashDebounce from "lodash.debounce";
const DEFAULT_WAIT = 500 as const;

export function debounce<T = unknown>(
  cb: (...params: T[]) => void,
  wait: number = DEFAULT_WAIT
) {
  return lodashDebounce(cb, wait);
}
