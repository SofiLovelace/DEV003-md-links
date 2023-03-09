#!/usr/bin/env node
const { mdLinks } = require('./index')
// console.log(process.argv); [0] = node.exe, [1] = cli.js, [2] = pathUser, [3 && 4] = options

function validateOptions (arrayOfArguments) {
  const pathUser = arrayOfArguments[2]
  const booleanValidate = arrayOfArguments.includes('--validate')
  mdLinks(pathUser, { validate: booleanValidate })
    .then((result) => {
      console.log(result)
      if (arrayOfArguments.includes('--stats')) {
        const arrayUniquesUrls = []
        const arrayBrokenUrls = []
        result.forEach(element => {
          if (!arrayUniquesUrls.includes(element.href)) {
            arrayUniquesUrls.push(element.href)
          }
          if (element.ok === 'fail') {
            arrayBrokenUrls.push(element.href)
          }
        })
        if (arrayOfArguments.includes('--validate') && arrayOfArguments.includes('--stats')) {
          console.log('\n==========================================================')
          console.log('Total:', result.length, '\nUnique:', arrayUniquesUrls.length, '\nBroken:', arrayBrokenUrls.length)
          if (arrayOfArguments.includes('--brokens')) {
            console.log('==========================================================', '\nBROKENS LINKS')
            arrayBrokenUrls.forEach(element => {
              console.log('>', element)
            })
          }
        } else {
          console.log('\n==================================================================================')
          console.log('Total:', result.length, '\nUnique:', arrayUniquesUrls.length)
        }
      }
      process.exit()
    })
    .catch((error) => console.log(error))
}

validateOptions(process.argv)

/* program.version('0.0.1').description('npm library developed to validate search for md files within a directory, find the links in md format and check if they are still valid')

program.command('<path>').action((path) => {
  console.log(path)
})

program.parse(process.argv) */
