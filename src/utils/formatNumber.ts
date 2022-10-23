interface FormatNumberType {
  value: number;
  locales?: string | string[] | undefined;
  options?: Intl.NumberFormatOptions | undefined;
}

export const formatNumber = ({
  value: number,
  options = {
    currency: 'USD',
    style: 'currency'
  },
  locales = 'en-US'
}: FormatNumberType) => {
  return new Intl.NumberFormat(locales, {
    ...options
  })
    .format(number)
    .replace(/^(\D+)/, '$1 '); // add space between symbol and value
};
