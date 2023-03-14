/* eslint-disable no-undef */
const { mdLinks } = require('../src/index')
const path = require('path')
const api = require('../src/api')
const dummyData = `
* [Función Callback - MDN](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
</p></details>

- [ ] **Promesas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (en inglés)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>
`
/* jest.mock('../src/api.js', () => ({
  readMd: jest.fn(() => Promise.resolve(dummyData)),
  pathIsValid: jest.fn((paht) => path.resolve(path)),
  isFileMd: jest.fn((pahtResolved) => { return { boolean: true, filesMd: [pahtResolved] } }),
  getLinksPathText: jest.fn(),
  validateLinks: jest.fn(),
  readAllFiles: jest.fn()
})) */

describe('mdLinks with path invalid', () => {
  it('should return to string with error', () => {
    return mdLinks('readme.cs').catch(error => {
      expect(typeof error).toBe('string')
    })
  })
})

describe('mdLinks with empty directory ', () => {
  it('should return to string with error', () => {
    return mdLinks('test').catch(error => {
      expect(typeof error).toBe('string')
    })
  })
})

describe('md-links without validate option, with valid directory', () => {
  it('should return an array of objects with', () => {
    jest.spyOn(api, 'readMd').mockReturnValue(dummyData)
    return mdLinks('directory-test', { validate: false }).then(result => {
      expect(typeof result[1]).toBe('string')
      jest.spyOn(api, 'readMd').mockRestore()
    })
  })
})

// El directorio proporcionado no tiene ningun archivo .md, favor de proporcionar un directorio valido
