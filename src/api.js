const path = require('path')
const fs = require('fs')
const fsPromise = require('fs').promises

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

// Función que valida si el path lleva a un archivo .md, retorna un onjeto con un boleano, y files md que almacena un array con el path
function isFileMd (pathResolved) {
  const boolean = path.parse(pathResolved).ext === '.md'
  return { boolean, filesMd: [pathResolved] }
}

// Función que lee un path y retorna una promisa con la data del archivo en 'utf-8'
function readMd (pathMd) {
  return fsPromise.readFile(pathMd, 'utf-8')
}

// Funcion que obtiene los links de una data en formato 'utf-8'
function getLinksPathText (pathResolved, data) {
  const regex = /\[.*\]\((http|https):\/\/.+\)/g // Usamos una expresión para buscar los links
  const arrayLinks = []
  data.match(regex).forEach(element => { // Aplicamos un ciclo al array de coincidencias
    arrayLinks.push({ // Agregamos por cada elemento, un objeto a nuestro array
      href: element.slice(element.indexOf('(') + 1, -1),
      text: element.slice(1, element.indexOf(']')),
      file: pathResolved
    })
  })
  return arrayLinks
}

readMd(pathResolve)
  .then((result) => console.log(getLinksPathText(pathResolve, result)))
