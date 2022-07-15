type Obj = Record<string, unknown>;

export function getObjectWithoutEmptyValues(obj: Obj): Obj {
  return Object.entries(obj).reduce((accum, item) => {
    const [key, value] = item;
    const isEmpty =
      value !== "" && typeof value !== "undefined" && value !== false;

    if (isEmpty && value !== null) accum[key] = value;
    return accum;
  }, {} as Obj);
}
