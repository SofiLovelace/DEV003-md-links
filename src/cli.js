#!/usr/bin/env node
const { mdLinks } = require('./index')
// eslint-disable-next-line no-unused-vars
const colors = require('colors')

function validateOptions (arrayOfArguments) {
  const pathUser = arrayOfArguments[2]
  const booleanValidate = arrayOfArguments.includes('--validate')
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
}

validateOptions(process.argv)

/* program.version('0.0.1').description('npm library developed to validate search for md files within a directory, find the links in md format and check if they are still valid')

program.command('<path>').action((path) => {
  console.log(path)
})

program.parse(process.argv) */
