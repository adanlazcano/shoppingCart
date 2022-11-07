const CURRENCY_FORMATTER = new Intl.NumberFormat("es-MX", {
  currency: "MXN",
  style: "currency",
});

export const formatCurrency = (number: number) =>
  CURRENCY_FORMATTER.format(number);
