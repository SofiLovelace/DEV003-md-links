const path = require('path')
const fs = require('fs')
const fsPromise = require('fs').promises
// const arrayLinksM = require('./array-links')

// Validar si el path es valido, si es valido retorna el path resuelto a absoluto, sino retorna un error
function pathIsValid (pathUser) {
  if (fs.existsSync(pathUser)) {
    return path.resolve(pathUser)
  } else {
    return { error: `La ruta "${pathUser}" no existe ingresa un path la ruta de un archivo md, o de un directorio que contenga archivos md` }
  }
}
/* const path1 = 'C:/black/OneDrive/Documentos/desarrollo-web/proyectos laboratoria/Bootcamp/DEV003-md-links/DEV003-md-links/index.js'
const path2 = './src/index.js'
const path3 = './src/inde.js' */
/* const path4 = 'README.md'
const pathResolve = pathIsValid(path4) */

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
      href: element.slice(element.indexOf('](h') + 2, -1),
      text: element.slice(1, element.indexOf(']')),
      file: pathResolved
    })
  })
  return arrayLinks
}

// Ejecutamos un forEach sobre el array de objetos, por cada elemento realizar una consulta http usando la propiedad href de cada objeto
function validateLinks (arrayAllLinks) {
  return new Promise((resolve) => { // retornamos el resultado como promesa, dado que trabajamos con codigo asyncrono al usar fetch
    const arrayPromises = [] // Declaramos un array para concatenar todas las promesas de fetch
    arrayAllLinks.forEach((object) => { // ejecutamos un ciclo sobre los links para poder validarlos
      const promiseFetch = fetch(object.href)
      arrayPromises.push(promiseFetch) // ingresamos cada promesa al array declarado anteriormente
    })
    Promise.allSettled(arrayPromises) // resolvemos hasta tener todas las proms resueltas o rechazadas
      .then((result) => {
        for (let i = 0; i < result.length; i++) { // ejecutamos for para poder iterar el resultado y en base a el modificar nuestro array de objetos con la data que devolveremos
          let valueOk
          if (result[i].status === 'fulfilled') { // validamos el estado de la petición http
            result[i].value.ok ? valueOk = 'ok' : valueOk = 'fail'
            arrayAllLinks[i].status = result[i].value.status
            arrayAllLinks[i].ok = valueOk
          } else {
            valueOk = 'fail'
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

module.exports = {
  pathIsValid,
  isFileMd,
  readMd,
  getLinksPathText,
  validateLinks
}
