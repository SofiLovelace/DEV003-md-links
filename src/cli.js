#!/usr/bin/env node
const { mdLinks } = require('./index')
// eslint-disable-next-line no-unused-vars
const colors = require('colors')
// const { version } = require('prettier')

function validateOptions (arrayOfArguments) {
  const pathUser = arrayOfArguments[2]
  const booleanValidate = arrayOfArguments.includes('--validate')
  if (pathUser === '--version' || pathUser === '-V' || pathUser === '-v') {
    return console.log('version: ', '0.1.6')
  }
  if (pathUser === '--description' || pathUser === '-D' || pathUser === '-d') {
    return console.log('version: ', 'npm library developed to validate search for md files within a directory, find the links in md format and check if they are still valid')
  }
  // "
  if (pathUser === '--help' || pathUser === '-H' || pathUser === '-h') {
    const help = [{ comands: '--version or -v', use: 'use first paragm to get version' }, { comands: '--help or -h', use: 'use first paragm to get help' }, { comands: '<path>', use: 'use first paragm to path to read' }, { comands: '--validate', use: 'affter of path to get status links' }, { comands: '--stats', use: 'affter of path to get stats of links' }, { comands: '--brokens', use: 'affter of path -- validate and --stats to get brokens links' }, { comands: '--description or -d', use: 'use first paragm to path to get description' }]
    return console.table(help)
  }
  mdLinks(pathUser, { validate: booleanValidate })
    .then((result) => {
      console.group('**********************Information all links**********************'.bgBlue)
      result.forEach(element => {
        console.log('================================================================================================================================='.yellow)
        console.log('File  ', '->  ', element.file)
        console.log('Text  ', '->  ', element.text)
        console.log('Href  ', '->  ', element.href.blue)
        // eslint-disable-next-line no-unused-expressions
        element.status ? console.log('Status', '->  ', element.status) : 'no status'
        // eslint-disable-next-line no-unused-expressions
        element.ok ? console.log('Ok    ', '->  ', element.ok) : 'no ok'
      })
      console.groupEnd()

      if (arrayOfArguments.includes('--stats')) {
        const arrayUniquesUrls = []
        const arrayBrokenUrls = []
        result.forEach(element => {
          if (!arrayUniquesUrls.includes(element.href)) {
            arrayUniquesUrls.push(element.href)
          }
          if (element.ok === 'fail') {
            arrayBrokenUrls.push(element)
          }
        })
        if (arrayOfArguments.includes('--validate') && arrayOfArguments.includes('--stats')) {
          console.group('\n\n******STATS*******'.bgGreen)
          console.log('-> Total: ', result.length, '\n-> Unique:', arrayUniquesUrls.length, '\n-> Broken:', arrayBrokenUrls.length)
          console.groupEnd()
          if (arrayOfArguments.includes('--brokens')) {
            console.group('\n******BROKENS******'.bgRed)
            arrayBrokenUrls.forEach(element => {
              console.log('=========================================================================================================================='.yellow)
              console.log('> file: ', element.file, '\n> href: ', element.href)
            })
            console.groupEnd()
          }
        } else {
          console.group('\n\n******STATS*******'.bgGreen)
          console.log('-> Total:', result.length, '\n-> Unique:', arrayUniquesUrls.length)
          console.groupEnd()
        }
      }
      process.exit()
    })
    .catch((error) => console.error(error))
  process.exit()
}

validateOptions(process.argv)

/* program.version('0.0.1').description('npm library developed to validate search for md files within a directory, find the links in md format and check if they are still valid')

program.command('<path>').action((path) => {
  console.log(path)
})

program.parse(process.argv) */
