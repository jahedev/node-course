const validator = require('validator')
const chalk = require('chalk')

const getNotes = require('./notes.js')
const msg = getNotes()
console.log(getNotes())

console.log(chalk.blue('hello world!', chalk.underline(' hey!')))
