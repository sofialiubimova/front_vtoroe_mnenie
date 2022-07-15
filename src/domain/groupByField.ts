type Data = Record<string, unknown>;

export function groupByField({
  data,
  field,
}: {
  data: Data[];
  field: string;
}): Record<string, Data[]> {
  return data.reduce((accum: Record<string, Data[]>, value: Data) => {
    const index = value[field] as string;
    if (accum[index]) accum[index].push(value);
    else accum[index] = [value];
    return accum;
  }, {});
}
