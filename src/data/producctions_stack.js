const grammar = {
  R: [
    { regex: /^mientras$/, isTerminal: true },
    { symbol: "C", isTerminal: false },
  ],
  C: [
    { regex: /^\($/, isTerminal: true },
    { symbol: "E", isTerminal: false },
    { symbol: "O", isTerminal: false},
    { regex: /^\)$/, isTerminal: true},
  ],
  E: [
    { symbol: "V", isTerminal: false },
    { symbol: "O", isTerminal: false },
    { symbol: "V", isTerminal: false},
  ],
  V: [
    { symbol: "L", isTerminal: false },
    { symbol: "RE", isTerminal: false},
  ],
  RE: [
    { symbol: "L", isTerminal: false },
    { symbol: "RE", isTerminal: false},
  ],
  L: [
    { regex:  /^[a-z]+$/, isTerminal: true},
  ],
  O: [
    { regex: /^<$/, isTerminal: true },
    { regex: /^>$/, isTerminal: true },
    { regex: /^==$/, isTerminal: true },
    { regex: /^>=$/, isTerminal: true },
    { regex: /^<=$/, isTerminal: true },
  ],
  OP: [{ symbol: "LO", isTerminal: false },
    { symbol: "E", isTerminal: false },],
  LO: [{ regex: /^and$/, isTerminal: true },
    { regex: /^or$/, isTerminal: true }],
  vacio: [],
};
const preddict_table = {
  col: [/mientras/, /\(/, /[a-z]/, /and/, /or/, /\)/, /</, />/, /==/, />=/, /<=/],
  R: ["R", null, null, null, null, null, null, null, null, null, null],
  C: [null, "C", null, null, null, null, null, null, null, null, null],
  E: [null, null, "E", null, null, null, null, null, null, null, null],
  V: [null, null, "V", null, null, null, null, null, null, null, null],
  RE: [null, null, "RE", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio", "vacio","vacio"],
  L: [null, null, "L", null, null, null, null, null, null, null, null],
  O: [null, null, null, null, null, null, "O", "O", "O", "O", "O"],
  OP: [null, null, null, "OP", "OP", "vacio", null, null, null, null, null],
  LO: [null, null, null, "LO", "LO", null, null, null, null, null, null],
};

export { grammar, preddict_table };
