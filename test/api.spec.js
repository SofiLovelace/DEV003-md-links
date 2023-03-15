/* eslint-disable no-undef */
const api = require('../src/api')
const { dataTest, dataArrayLinksTest, dataArrayLinksTestFail } = require('./data-tests')

describe('pathIsValid with path src\\index.js', () => {
  it('should return the resolved path to absolute', () => {
    expect(api.pathIsValid('README.md')).toBe('C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md')
  })
})
describe('pathIsValid with path src\\indexando.js', () => {
  it('should return an error', () => {
    const error = { error: `Path "${'src\\indexando.js'}" does not exist enter a path the path of an md file, or of a directory containing md files` }
    expect(api.pathIsValid('src\\indexando.js').error).toBe(error.error)
  })
})

describe('isFileMd with path README.md', () => {
  it('should return an object with a boolean of true', () => {
    const pathAbsolute = 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md'
    expect(api.isFileMd(pathAbsolute).boolean).toBe(true)
  })
})

describe('readMd with path README.md', () => {
  it('should return a promise inside an object', () => {
    const pathAbsolute = 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md'
    expect(typeof api.readMd(pathAbsolute)).toBe('object')
  })
})

describe('getLinksPathText with dummyData of README.md', () => {
  it('should return an array with objects', () => {
    const pathAbsolute = 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md'
    const prueba = {
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: pathAbsolute
    }
    expect(api.getLinksPathText(pathAbsolute, dataTest)).toContainEqual(prueba)
  })
})

describe('validateLinks with dummyArrayLinksTest of README.md', () => {
  it('should return an array of objects', () => {
    const prueba = 'https://es.wikipedia.org/wiki/Markdown'
    return api.validateLinks(dataArrayLinksTest).then(result => {
      expect(result[0].href).toBe(prueba)
    })
  })
})

/* describe('validateLinks with dummyArrayLinksTest of README.md', () => {
  it('should return an array of objects', () => {
    return api.validateLinks(dataArrayLinksTest).then(result => {
      expect(result[0].status).toBe(200)
    })
  })
}) */

describe('validateLinks with dummyArrayLinksTestFail of README.md', () => {
  it('should return an array of objects', () => {
    return api.validateLinks(dataArrayLinksTestFail).then(result => {
      expect(result[0].ok).toBe('fail')
    })
  })
})

describe('readAllFiles with path directory-test', () => {
  it('should return an array of md files', () => {
    const pathTest = 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\directory-test'
    const arrayFilesMd = []
    expect(api.readAllFiles(pathTest, arrayFilesMd)).toContain('C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\directory-test\\directory-test-4\\README.md')
  })
})
