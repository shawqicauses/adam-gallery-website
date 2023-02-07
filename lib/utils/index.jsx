export const classes = (...args) => args.filter(Boolean).join(" ")
export const url = (param) =>
  !/^(https?:)?\/\//.test(param) ? param : `https:${param}`
