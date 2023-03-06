const api = require('./api')
function mdLinks (path, options) {
  return new Promise((resolve, reject) => {
    const pathResolveOrError = api.pathIsValid(path)
    if (pathResolveOrError.error) {
      reject(pathResolveOrError.error)
    }
    const isFileMd = api.isFileMd(pathResolveOrError)
    if (isFileMd.boolean === false) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('entramos a iterar directorios') // aqui va el camino para recorrer los directorios
    }
    let allLinks = []
    isFileMd.filesMd.forEach((file) => api.readMd(file)
      .then((result) => {
        allLinks = allLinks.concat(api.getLinksPathText(file, result))
        !options
          ? resolve(allLinks)
          : api.validateLinks(allLinks).then((result) => resolve(result))
      }))
  })
}

mdLinks('README.md', { validate: true })
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
