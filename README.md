# sofilovelace-md-links

![GitHub package.json version](https://img.shields.io/github/package-json/v/SofiLovelace/DEV003-md-links?logo=GitHub)  ![npm](https://img.shields.io/npm/v/sofilovelace-md-links?color=red&label=npm) ![Tests](https://img.shields.io/badge/test-ok-green)

The solution to review the links contained in the markdown documentation of our projects.
Find repeated links, dead links, and get statistics quickly [Markdown](https://es.wikipedia.org/wiki/Markd).

 - [Installation](#installation)
  - [Quick Start](#quick-start)
  - [Options](#options)

## Installation
### Installation via npm
``
npm install sofilovelace-md-links -g
``
### Installation via github
``
git clone https://github.com/SofiLovelace/DEV003-md-links.git
``
## Quick Start
You can run the module directly from powershell or your preferred terminal, you just have to go to the path where the file or directory to validate and execute is located:
``
md-links
``.
As the first argument, you specify a relative path to a file with the md extension or a directory containing files with the md extension. The program will return an array of objects.
``
 md-links <relative path>
``

##### Example
In the following example we have a "README.md" file in the root of the project where the dependency is installed.
```
$ md-links README.md
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md
  Text   ->   Markdown
  Href   ->   https://es.wikipedia.org/wiki/Markd
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md
  Text   ->   GitHub package.json version
  Href   ->   https://img.shields.io/github/package-json/v/SofiLovelace/DEV003-md-links?logo=GitHub
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md
  Text   ->   Tests
  Href   ->   https://img.shields.io/badge/test-ok-green
```
To search for documents in a directory, just pass the relative path of the directory.

## Options
The program admits 3 options: validate, stats and brokens.

### --validate
When executing the program with the validate option, the dependency will perform an http query, and will return information about the status of our links.
``
 md-links <relative path> --validate
``
##### Example
```
$ md-links README.md --validate
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md
  Text   ->   Markdown
  Href   ->   https://es.wikipedia.org/wiki/Markd
  Status ->   404
  Ok     ->   fail
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md
  Text   ->   GitHub package.json version
  Href   ->   https://img.shields.io/github/package-json/v/SofiLovelace/DEV003-md-links?logo=GitHub
  Status ->   200
  Ok     ->   ok
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md
  Text   ->   Tests
  Href   ->   https://img.shields.io/badge/test-ok-green
  Status ->   200
  Ok     ->   ok
  ```

### --stats
When running the program with the stats option, the dependency will return information about our links and quick stats.
``
 md-links <relative path> --stats
``
##### Example
```
$ md-links README.md --stats
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md  
  Text   ->   Markdown
  Href   ->   https://es.wikipedia.org/wiki/Markd
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md  
  Text   ->   GitHub package.json version
  Href   ->   https://img.shields.io/github/package-json/v/SofiLovelace/DEV003-md-links?logo=GitHub
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md  
  Text   ->   Tests
  Href   ->   https://img.shields.io/badge/test-ok-green

******STATS*******
  -> Total: 3
  -> Unique: 3
```

### --validate --stats
We can combine the options validate and stats
``
 md-links <relative path> --validate --stats
``
##### Example
```
$ md-links README.md --validate --stats
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md  
  Text   ->   Markdown
  Href   ->   https://es.wikipedia.org/wiki/Markd
  Status ->   404
  Ok     ->   fail
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md  
  Text   ->   GitHub package.json version
  Href   ->   https://img.shields.io/github/package-json/v/SofiLovelace/DEV003-md-links?logo=GitHub
  Status ->   200
  Ok     ->   ok
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md
  Text   ->   Tests
  Href   ->   https://img.shields.io/badge/test-ok-green
  Status ->   200
  Ok     ->   ok

******STATS*******
  -> Total:  3
  -> Unique: 3
  -> Broken: 1
  ```

### --validate --stats --brokens
We can add the brokens option, and we will be able to easily find out about our broken links
``
md-links <relative path> --validate --stats --brokens
``
##### Example
```
$ md-links README.md --validate --stats --brokens
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md  
  Text   ->   Markdown
  Href   ->   https://es.wikipedia.org/wiki/Markd
  Status ->   404
  Ok     ->   fail
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md  
  Text   ->   GitHub package.json version
  Href   ->   https://img.shields.io/github/package-json/v/SofiLovelace/DEV003-md-links?logo=GitHub
  Status ->   200
  Ok     ->   ok
=================================================================================================================================
  File   ->   C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md
  Text   ->   Tests
  Href   ->   https://img.shields.io/badge/test-ok-green
  Status ->   200
  Ok     ->   ok

*******STATS*******
  -> Total:  3
  -> Unique: 3
  -> Broken: 1

******BROKENS******
  ==========================================================================================================================
  > file:  C:\Users\Winney\Documents\desarrollo-web\proyectos laboratoria\Bootcamp\DEV003-md-links\DEV003-md-links\README.md
  > href:  https://es.wikipedia.org/wiki/Markd
```

