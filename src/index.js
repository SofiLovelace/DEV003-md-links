const api = require('./api')
function mdLinks (path, options) {
  return new Promise((resolve, reject) => {
    const pathResolveOrError = api.pathIsValid(path)
    if (pathResolveOrError.error) {
      reject(pathResolveOrError.error)
    }
    let arrayFilesMd = api.isFileMd(pathResolveOrError).filesMd
    if (arrayFilesMd[0].includes('.md') === false) {
      const arrayFilesDirectory = []
      api.readAllFiles(pathResolveOrError, arrayFilesDirectory)
      arrayFilesDirectory.length === 0
        ? reject('El directorio proporcionado no tiene ningun archivo .md, favor de proporcionar un directorio valido')
        : arrayFilesMd = arrayFilesDirectory
    }
    let allLinks = []
    const promisesReadMd = []
    arrayFilesMd.forEach((file) => promisesReadMd.push(api.readMd(file)))
    Promise.allSettled(promisesReadMd)
      .then((result) => {
        for (let i = 0; i < result.length; i++) {
          allLinks = allLinks.concat(api.getLinksPathText(arrayFilesMd[i], result[i].value))
        }
        !options.validate
          ? resolve(allLinks)
          : api.validateLinks(allLinks).then((result) => resolve(result))
      })
  })
}

module.exports = { mdLinks }
