const path = require('path')
const fs = require('fs')

// Validar si el path es valido, si es valido retorna el path resuelto a absoluto, sino retorna un error
function pathIsValid (pathUser) {
  if (fs.existsSync(pathUser)) {
    return path.resolve(pathUser)
  } else {
    return { error: 'Ingresa un path valido' }
  }
}
const path1 = 'C:/black/OneDrive/Documentos/desarrollo-web/proyectos laboratoria/Bootcamp/DEV003-md-links/DEV003-md-links/index.js'
const path2 = './src/index.js'
const path3 = './src/inde.js'
const path4 = 'README.md'
const pathResolve = pathIsValid(path4)

function isFileMd (pathResolved) {
  return fs.readFileSync(pathResolved, 'utf-8')
}
console.log(isFileMd(pathResolve))
