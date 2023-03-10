const dataTest = `
#gan y reportar
algunas estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Resumen del proyecto

En este proyecto crearás una herramienta de línea de comando (CLI) así como tu
propia librería (o biblioteca - library) en JavaScript.

En esta oportunidad nos alejamos un poco del navegador para construir un
programa que se ejecute usando Node.js. Aprenderemos sobre procesos
(process.env, process.argv, ...), cómo interactuar con el sistema archivos,
cómo hacer consultas de red, etc.

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)
</p></details>
recursi%C3%B3n-o-recursividad-ec8f1a359727)
</p></details>

- [ ] **Módulos de CommonJS**

  <details><summary>Links</summary><p>

  * [Modules: CommonJS modules - Node.js Docs](https://nodejs.org/docs/latest/api/modules.html)
</p></details>

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [ ] **Callbacks**

  <details><summary>Links</summary><p>

  * [Función Callback - MDN](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
</p></details>

- [ ] **Promesas**

  <details><summary>Links</summary><p>

  * [Promise - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  * [How to Write a JavaScript Promise - freecodecamp (en inglés)](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Pruebas asíncronas**

  <details><summary>Links</summary><p>

  * [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
</p></details>

- [ ] **Uso de mocks y espías**

  <details><summary>Links</summary><p>

  * [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
</p></details>

- [ ] **Pruebas de compatibilidad en múltiples entornos de ejecución**

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Node.js

- [ ] **Instalar y usar módulos con npm**

  <details><summary>Links</summary><p>

  * [Sitio oficial de npm (en inglés)](https://www.npmjs.com/)
</p></details>

- [ ] **Configuración de package.json**

Si nunca has hecho un diagrama de flujo revisa este [recurso](https://www.youtube.com/watch?v=Lub5qOmY4JQ).
`
const dataArrayLinksTest = [{ file: 'C:\\Users\\black\\OneDrive\\Documentos\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md', href: 'https://es.wikipedia.org/wiki/Markdown', text: 'Markdown' }, { file: 'C:\\Users\\black\\OneDrive\\Documentos\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md', href: 'https://nodejs.org/', text: 'Node.js' }, { file: 'C:\\Users\\black\\OneDrive\\Documentos\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md', href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg', text: 'md-links' }, { file: 'C:\\Users\\black\\OneDrive\\Documentos\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md', href: 'https://nodejs.org/es/', text: 'Node.js' }]

const dataArrayLinksTestFail = [{ file: 'C:\\Users\\black\\OneDrive\\Documentos\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md', href: 'https://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175', text: 'Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?' }]

module.exports = { dataTest, dataArrayLinksTest, dataArrayLinksTestFail }
