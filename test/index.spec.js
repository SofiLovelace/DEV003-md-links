/* eslint-disable no-undef */
const { mdLinks } = require('../src/index')

describe('mdLinks with path inexistente', () => {
  it('should return the resolved path to absolute', () => {
    expect(api.pathIsValid('README.md')).toBe('C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md')
  })
})
