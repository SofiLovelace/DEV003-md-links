const api = require('./api')
function mdLinks (path, validate) {
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
        // console.log(result)
        allLinks = allLinks.concat(api.getLinksPathText(file, result))
        resolve(allLinks)
      }))
  })
}

mdLinks('README.md')
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
