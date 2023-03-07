const path = require('path')
const fs = require('fs')
const fsPromise = require('fs').promises
// const arrayLinksM = require('./array-links')

/* Validar si el path es valido, si es valido retorna el path resuelto a absoluto, sino retorna un error */
function pathIsValid (pathUser) {
  if (fs.existsSync(pathUser)) {
    return path.resolve(pathUser)
  } else {
    return { error: `La ruta "${pathUser}" no existe ingresa un path la ruta de un archivo md, o de un directorio que contenga archivos md` }
  }
}

const path4 = 'README.md'
const pathResolve = pathIsValid(path4)
const path5 = 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\directory-test'

/* Función que valida si el path lleva a un archivo .md, retorna un onjeto con un boleano, y files md que almacena un array con el path */
function isFileMd (pathResolved) {
  const boolean = path.parse(pathResolved).ext === '.md'
  return { boolean, filesMd: [pathResolved] }
}

/* Función que lee un path y retorna una promisa con la data del archivo en 'utf-8' */
function readMd (pathMd) {
  return fsPromise.readFile(pathMd, 'utf-8')
}

/* Funcion que obtiene los links de una data en formato 'utf-8' */
function getLinksPathText (pathResolved, data) {
  const regex = /\[.*\]\((http|https):\/\/.+\)/g // Usamos una expresión para buscar los links
  const arrayLinks = []
  data.match(regex).forEach(element => { // Aplicamos un ciclo al array de coincidencias
    arrayLinks.push({ // Agregamos por cada elemento, un objeto a nuestro array
      href: element.slice(element.indexOf('](h') + 2, -1),
      text: element.slice(1, element.indexOf(']')),
      file: pathResolved
    })
  })
  return arrayLinks
}

/* Ejecutamos un forEach sobre el array de objetos, por cada elemento realizar una consulta http usando la propiedad href de cada objeto */
function validateLinks (arrayAllLinks) {
  return new Promise((resolve) => { // retornamos el resultado como promesa, dado que trabajamos con codigo asyncrono al usar fetch
    const arrayPromises = [] // Declaramos un array para concatenar todas las promesas de fetch
    arrayAllLinks.forEach((object) => { // ejecutamos un ciclo sobre los links para poder validarlos
      arrayPromises.push(fetch(object.href)) // ingresamos cada promesa al array declarado anteriormente
    })
    Promise.allSettled(arrayPromises) // resolvemos hasta tener todas las proms resueltas o rechazadas
      .then((result) => {
        for (let i = 0; i < result.length; i++) { //  iteramos el resultado y el array de todos links, para modificarlo
          let valueOk
          if (result[i].status === 'fulfilled') { // validamos el estado de la petición http
            result[i].value.ok ? valueOk = 'ok' : valueOk = 'fail'
            arrayAllLinks[i].status = result[i].value.status
            arrayAllLinks[i].ok = valueOk
          } else {
            valueOk = 'fail' // gestionamos los errores
            arrayAllLinks[i].status = result[i].reason.cause
            arrayAllLinks[i].ok = valueOk
          }
        }
        resolve(arrayAllLinks) // la promesa se resuelve devolviendo el array de objetos modificado
      })
  })
}
/* validateLinks(arrayLinksM)
  .then((result) => console.log(result)) */

/* función para leer todos los directorios y extraer archivos de los directorios */
function readAllFiles (pathDirectory, arrayOfFiles) { // le pasamos una ruta de un directorio y un array para agregar los archivos
  fs.readdirSync(pathDirectory).forEach(file => { // leemos un directorio y aplicamos un for each sobre cada elemento
    if (fs.statSync(`${pathDirectory}\\${file}`).isDirectory()) { // validamos por medio de statSync si es un directorio
      readAllFiles(`${pathDirectory}\\${file}`, arrayOfFiles) // entramos en recursividad si es un directorio
    } else if (file.includes('.md')) { // si no es un directorio, validamos si es md,
      arrayOfFiles.push(`${pathDirectory}\\${file}`) // lo añadimos a nuestro array de archivos md
    }
  })
  return arrayOfFiles // returnamos este array
}

// const filesDirectory = []
// console.log(readAllFiles(path5, filesDirectory))

module.exports = {
  path5,
  pathIsValid,
  isFileMd,
  readMd,
  getLinksPathText,
  validateLinks,
  readAllFiles
}
