const breakpoints =  {
  xs: {
    min: "@media (min-width: 480px)",
    max: "@media (max-width: 767px)",
  },
  sm: {
    min: "@media (min-width: 768px)",
    max: "@media (max-width: 991px)",
  },
  md: {
    min: "@media (min-width: 992px)",
    max: "@media (max-width: 1199px)",
  },
  lg: {
    min: "@media (min-width: 1200px)",
    max: "@media (max-width: 1439px)",
  },
  xl: {
    min: "@media (min-width: 1440px)"
  },
  print: "@media print",
  combine: function (media: Array<string>) {
    return `@media ${media.map((m) => m.replace("@media", "")).join(" and ")}`;
  }
};

export default breakpoints;
