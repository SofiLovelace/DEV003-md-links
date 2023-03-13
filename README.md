# sofilovelace-md-links
[Markdown](https://es.wikipedia.org/wiki/Markd)
![GitHub package.json version](https://img.shields.io/github/package-json/v/SofiLovelace/DEV003-md-links?logo=GitHub)  ![Tests](https://img.shields.io/badge/test-ok-green)

The solution to review the links contained in the markdown documentation of our projects.
Find repeated links, dead links, and get statistics quickly.

 - [Installation](#installation)
  - [Quick Start](#quick-start)
  - [Options](#options)

## Installation
### Installation via npm
``
npm install sofilovelace-md-links
``
### Installation via github
``
git clone https://github.com/SofiLovelace/DEV003-md-links.git
``
## Quick Start

As the first argument, you specify a relative path to a file with the md extension or a directory containing files with the md extension. The program will return an array of objects.
``
 npm run sofi-lovelace-md-links <relative path>
``

##### Example
In the following example we have a "README.md" file in the root of the project where the dependency is installed.
```
$ npm run sofi-lovelace-md-links README.md
[
{
    href: 'https://es.wikipedia.org/wiki/Markd',
    text: 'Markdown',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md'
  },
  {
    href: 'https://img.shields.io/github/package-json/v/SofiLovelace/DEV003-md-links?logo=GitHub',
    text: 'GitHub package.json version',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md'
  },
  {
    href: 'https://img.shields.io/badge/test-ok-green',
    text: 'Tests',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md'
  }
]
```
To search for documents in a directory, just pass the relative path of the directory.

## Options
The program admits 3 options: validate, stats and brokens.

### --validate
When executing the program with the validate option, the dependency will perform an http query, and will return information about the status of our links.
``
 npm run sofi-lovelace-md-links <relative path> --validate
``
##### Example
```
$ npm run sofi-lovelace-md-links README.md --validate
[
{
    href: 'https://es.wikipedia.org/wiki/Markd',
    text: 'Markdown',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md',
    status: 404,
    ok: 'fail'
  },
  {
    href: 'https://img.shields.io/github/package-json/v/SofiLovelace/DEV003-md-links?logo=GitHub',
    text: 'GitHub package.json version',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://img.shields.io/badge/test-ok-green',
    text: 'Tests',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md',
    status: 200,
    ok: 'ok'
  }]
```

### --stats
When running the program with the stats option, the dependency will return information about our links and quick stats.
``
 npm run sofi-lovelace-md-links <relative path> --stats
``
##### Example
```
$ npm run sofi-lovelace-md-links README.md --stats
[
{
    href: 'https://es.wikipedia.org/wiki/Markd',
    text: 'Markdown',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md'
  },
  {
    href: 'https://img.shields.io/github/package-json/v/SofiLovelace/DEV003-md-links?logo=GitHub',
    text: 'GitHub package.json version',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md'
  },
  {
    href: 'https://img.shields.io/badge/test-ok-green',
    text: 'Tests',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md'
  }
]

==================================================================================
Total: 3
Unique: 3

```

### --validate --stats
We can combine the options validate and stats
``
 npm run sofi-lovelace-md-links <relative path> --validate --stats
``
##### Example
```
$ npm run sofi-lovelace-md-links README.md --validate --stats
[
{
    href: 'https://es.wikipedia.org/wiki/Markd',
    text: 'Markdown',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md',
    status: 404,
    ok: 'fail'
  },
  {
    href: 'https://img.shields.io/github/package-json/v/SofiLovelace/DEV003-md-links?logo=GitHub',
    text: 'GitHub package.json version',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://img.shields.io/badge/test-ok-green',
    text: 'Tests',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md',
    status: 200,
    ok: 'ok'
  }
]

==========================================================
Total: 3
Unique: 3
Broken: 1
```

### --validate --stats --brokens
We can add the brokens option, and we will be able to easily find out about our broken links
``
npm run sofi-lovelace-md-links <relative path> --validate --stats --brokens
``
##### Example
```
$ npm run sofi-lovelace-md-links README.md --validate --stats --brokens
[
  {
    href: 'https://es.wikipedia.org/wiki/Markd',
    text: 'Markdown',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md',
    status: 404,
    ok: 'fail'
  },
  {
    href: 'https://img.shields.io/github/package-json/v/SofiLovelace/DEV003-md-links?logo=GitHub',
    text: 'GitHub package.json version',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://img.shields.io/badge/test-ok-green',
    text: 'Tests',
    file: 'C:\\Users\\Winney\\Documents\\desarrollo-web\\proyectos laboratoria\\Bootcamp\\DEV003-md-links\\DEV003-md-links\\README.md',
    status: 200,
    ok: 'ok'
  }
]

==========================================================
Total: 3 
Unique: 3
Broken: 1
==========================================================

BROKENS LINKS
> file:  C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md     
> href:  https://es.wikipedia.org/wiki/Markd
```