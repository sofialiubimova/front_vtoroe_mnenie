export const getPageNumber = (
  page: string | unknown | number | undefined | null
): number => (page ? Number(page) : 1);
