export const parseDate = (datetoConvert: string): string => {
  const date = new Date(datetoConvert);
  return date.toDateString();
}