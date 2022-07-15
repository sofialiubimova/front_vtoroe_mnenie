export type PaginatinationItemsType = number | null;

export type ListItems<Item> = {
  items: Array<Item>;
  total: PaginatinationItemsType;
  page: PaginatinationItemsType;
  size: PaginatinationItemsType;
};

export type CommonParams = {
  page?: string;
  size?: string;
  order_by?: string;
};

export type CommonItem = Record<string, unknown>;
export type CommonList = ListItems<CommonItem>;
export type UpdateCommonItemParams = {
  data: CommonItem;
  id: string | number;
};
