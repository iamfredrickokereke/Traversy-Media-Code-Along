
// run code on node REPL
// node
(async (a = 1, ...b) => ({ ...b, a, [a]: `${a}` }))()

//check for npm
which npm