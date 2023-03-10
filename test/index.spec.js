/* eslint-disable no-undef */
const { mdLinks } = require('../src/index')

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
    return mdLinks('directory-test\\directory-test-2').then(result => {
      expect(typeof result[1]).toBe('object')
    })
  })
})

// El directorio proporcionado no tiene ningun archivo .md, favor de proporcionar un directorio valido
