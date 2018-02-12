import formatNumber from "./formatNumber";

export default function(number: number): string {
  return `$${formatNumber(number)}`;
}
