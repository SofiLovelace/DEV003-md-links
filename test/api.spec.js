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
    const error = { error: `La ruta "${'src\\indexando.js'}" no existe ingresa un path la ruta de un archivo md, o de un directorio que contenga archivos md` }
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
    const prueba = 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg'
    api.validateLinks(dataArrayLinksTest).catch(result => {
      expect(result[0].href).toBe(prueba)
    })
  })
})

describe('validateLinks with dummyArrayLinksTest of README.md', () => {
  it('should return an array of objects', () => {
    return api.validateLinks(dataArrayLinksTest).then(result => {
      expect(result[0].status).toBe(200)
    })
  })
})

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
    expect(api.readAllFiles(pathTest, arrayFilesMd)).toContainEqual('C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\directory-test\\README.md')
  })
})
