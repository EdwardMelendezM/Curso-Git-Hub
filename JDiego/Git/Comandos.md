# Algunos Comandos Git

[Regresar](./README.md)

## Flujo de trabajo básico en Git

1. Modificas
2. Preparas
3. Confirmas

## El ciclo de vida del estado de nuestros archivos
* Untracked (No Rastreados | Sin seguimiento)
* Unmodified
* Modified
* Stanged

UNTRACKED | UNMODIFIED | MODIFIED | STAGED
------------ | ------------- | ------------- | -------------
Por defecto los archivos de nuestra carpeta no estaran marcados o rastreados por asi decirlo. | Una vez pasados por Untracked estos archivos estaran como no modificados, al estar asi nosotros no podremos enviarlos al staged area. | Nuestros archivos al ser editados pasan a modified. | Haciendo un stage the file pasan a staged area.

![Ciclo de vida de los estados en Git](./img/cicloVida.png)

1. Al estar en el **staged area**.
   1. Hacemos un commit y estos archivos se registraran pasando al repositorio a estar como archivos unmodified(no modificados) de una nueva version 
   2. Finalmente si nosotros queremos dejar de ver algunos archivos podemos eliminarlos de nuestro repositorio y pasar nuevamente a estar no marcados untracked...
2. Tambien veremos un comando `status` que nos permitira saber el estado de nuestros archivos.

## Primeras configuraciones

* `git --version` Nos dice la versión instalada de Git
* `git config --global user.name "JDiegoPoccoriE"`
* `git config --global user.email "juandiego.poccori@gmail.com"`
* `git config --global core.editor "'c:/program files/sublime text 2/sublime_text.exe' -w"`
* `git config --global core.editor "'c:/program files/sublime text 3/subl.exe' -w"`
* `git config --list` Nos muestra todas las configuraciones de git
* `git config --global --list` Listar mis configuraciones
* `git config user.name` Mostrar mi user.name

## Comandos para obtener ayuda

* `git help <comando>`
* `git <comando> --help` Nos brinda detalladamente la guía de uso _comando_
* `man git-<comando>`

## Comandos usados para iniciar

Comandos que usaremos
* `git init`
* `git status`
* `git add [archivo]`
* `git add .` agrega todos los archivos a la zona de preparacion esten o no en dicha zona
* `git add -A` agrega todos los archivos que ya estamos siguiendo
* `git commit -m "mssge"`
* `git commit` Hacer un commit escribiendo el mensaje en el editor configurado en git
* `git log`
* `git diff` Para ver los cambios en la zona de archivos no preparados
* `git diff <file>` Para ver las diferencias actuales con las del repositorio del *file* que queremos
* `git diff --stat <file>` Nos muestra una simple estadistica que nos indica con signos `+` y `-` el numero de lineas agregadas y eliminadas
* `git diff --staged` Para ver los cambios en la zona de preparacion
* `git reset HEAD Readme.md` Para quitar de la zona de preparación, tambien se puede usar `git restore --staged <file>`
* `git commit --amend` Nos permite cambiar el mensaje del último commit que se hizo
* `git commit -a -m` o `git commit -am` Lo usamos para hacer una confirmación saltando el area de preparación(solo archivos seguidos no los untracked nuevos archivos)

### Eliminando Archivos

* `git rm`
* (https://uniwebsidad.com/libros/pro-git/capitulo-2/guardando-cambios-en-el-repositorio)

### Moviendo archivos, renombrando archivos

* `git mv file_from file_to`
* (https://uniwebsidad.com/libros/pro-git/capitulo-2/guardando-cambios-en-el-repositorio)

## .gitignore

Archivo que nos permite dejar de seguir algunos archivos.

Las reglas para los patrones que pueden ser incluidos en el archivo `.gitignore` son:
* Las líneas en blanco, o que comienzan por `#`, son ignoradas.
* Puedes usar **patrones glob estándar**.
* Puedes indicar un directorio añadiendo una barra hacia delante (`/`) al final.
* Puedes negar un patrón añadiendo una exclamación (`!`) al principio.

## Viendo el histórico

* `git log`
* `git log -2` muestra las dos ultimas confirmaciones
* `git log -p -2` la opción `-p` muestra las diferencias introducidas en cada confirmación 
* `git log --stat` imprime tras cada confirmaciòn una lista de archivos modificados indicando cantos han sido modificados y cuantas lineas han sido añadidas y eliminadas para cada uno de ellos, y un resumen de toda esta información
* `git log --shortstat` Muestra solamente la línea de resúmen de la opción `--stat`.
* `git log --name-only` Muestra la lista de archivos afectados
* `git log --name-status` Muestra la lista de archivos afectados, indicando además si fueron añadidos, modificados o eliminados.
* `git log --abbrev-commit` Muestra solamente los primeros caracteres de la suma SHA-1, en vez de los 40 caracteres de que se compone.
* `git log --relative-date` Muestra la fecha en formato relativo (por ejemplo, “2 weeks ago” (“hace 2 semanas”)) en lugar del formato completo.
* `git log --pretty=oneline` modifica el formato de salida a una sola línea
* `git log --pretty=short`
* `git log --pretty=full`
* `git log --pretty=fuller`
* `git log --graph` Muestra un gráfico ASCII con la historia de ramificaciones y uniones.
* `git log --decorate`
* `--all` La opción _--all_ nos permite mostrar el historia de todo el repositorio git, sin importat donde estemos.

### format

* `git log --pretty=format:"%h - %an, %ar : %s"`
* `git log --pretty=format:"%h %s" --graph`

La Tabla lista algunas de las opciones más útiles aceptadas por `format`.
|Opción | Descripción de la salida |
|------ | ------------------------ |
|%H     | Hash de la confirmación  |
|%h     | Hash de la confimación abreviado |
|%T     | Hash del árbol           |
|%t     | Hash del arbol abreviado |
|%P     | Hashes de las confirmaciones padre |
|%p     | Hashes de las confirmaciones padre abreviadas |
|%an    | Nombre del autor         |
|%ae    | Dirección de correo del autor |
|%ad    | Fecha de autoría (el formato respeta la opción `--date`) |
|%ar    | Fecha de autoría, relativa |
|%cn    | Nombre del confirmador     |
|%ce    | Dirección de correo del confirmador |
|%cd    | Fecha de confirmación      |
|%cr    | Fecha de confirmación, relativa |
|%s     | Asunto                     |

Puede que te estés preguntando la diferencia entre autor (author) y confirmador (committer). El autor es la persona que escribió originalmente el trabajo, mientras que el confirmador es quien lo aplicó. Por tanto, si mandas un parche a un proyecto, y uno de sus miembros lo aplica, ambos recibiréis reconocimiento — tú como autor, y el miembro del proyecto como confirmador.

### Limitando la salida del histórico

* `git log -(n)` Muestra solamente las últimas n confirmaciones
* `--since, --after` Muestra aquellas confirmaciones hechas después de la fecha especificada.
* `--until, --before` Muestra aquellas confirmaciones hechas antes de la fecha especificada.
* `--author` Muestra sólo aquellas confirmaciones cuyo autor coincide con la cadena especificada.
* `--committer` Muestra sólo aquellas confirmaciones cuyo confirmador coincide con la cadena especificada.

## Deshaciendo cosas

* `git commit --amend` Nos permite sobreescribir nuestra ultima confirmación, puede ser solo el mensaje o toda una confirmacion con archivos y nuevas lineas agregadas
* `git reset HEAD <file>` Para deshacer la preparación de un archivo
* `git restore --staged <file>` Para deshacer la preparación de un archivo
* `git checkout -- <file>` Nos permite deshacer los cambios que le hicimos al archivo
* `git checkou <file>` Nos permite deshacer los cambios que le hicimos al archivo
* `git checkout -f` Nos permite forzar para deshacer los cambios que hicimos a todos los archivos
* `git restore <file>` Nos permite deshacer los cambios que le hicimos al archivo

## Etiquetas (releases)

* `git tag` o `git tag --list` Listas todas las etiquetas del proyecto
* `git tag -l "v1.4.2.*"` Listar etiquetas de acuerdo a un patrón
* `git tag v1.1-dev` Ejemplo de etiqueta ligera
* `git tag -a v1.4 -m "my version 1.4"` Ejemplo de etiqueta anotada
* `git show <tag>` o `git show <hash>` Nos muestra información mas detallada de las etiquetas trabaja mejor con las etiquetas anotadas
* `git checkout <tag>`
* `git checkout --decorate --online --all` Para mostrar todos los commit estando el HEAD en cualquier punto
* `git tag -g <etiqueta>` Elimina la etiqueta
* `git push origin --tags` Publica las etiquetas de local al repositorio remoto

## Clonacion de repositorios

* `git clone https://github.com/escueladigital/EDgrid.git`
* `git clone https://github.com/escueladigital/EDgrid.git <Renombrando>`

## Viajando en el tiempo

* `git diff hash1 hash2`
* `git checkout hash1` Para ir a un hash que queramos
* `git checkout master` Para al presente

> El apuntador se nombra como **HEAD**

> Más adelante veremos como movernos si usar los hash si no mas bien tags esto nos ayudara en la legibilidad usando versiones semver

## Ramas

* `git branch` Para listar las ramas
* `git show <nombre_rama>` Nos muestra detalles del ultimo commit de la rama indicada
* `git branch <nombre_rama>` Para crear una rama
* `git branch -b <nombre_rama>` Nos permite crear la rama y saltar a ella en un solo comando, nos ahorra el **git checkout**
* `git checkout <nombre_rama>` Para cambiar la rama en donde estemos
* `git switch <nombre_rama>` A partir de v2.23. Para cambiar la rama a *nombre_rama*
* `git branch -v` Nos muestra todas las ramas y su ultimo commit que se hizo en cada una de ellas
* `git branch --all` Para ver todas las ramas incluidas las del repositorio remoto

> Puedo crear todas las ramas que quiera o necesite no necesariamente estando en la rama master

> Las ramas nuevas que se crean apuntan al commit actual, donde esta ubicado el apuntador **HEAD**

## Fusión de ramas

* `git merge <nombre_rama>` Nos permite fusionar *nombre_rama* a la rama actual en donde estamos

> Podemos fusionar cualquiera de las ramas, no es necesario que sea la rama master, sin embargo lo recomendable es fusionar la rama más cercana

### Listar ramas fusionadas

* `git branch --no-merged` Lista las ramas que no han sido fusionadas con la rama actual
* `git branch --merged` Lista las ramas que ya han sido fusionadas con la rama actual. (Nos sirve para tomar decisiones al momento de eliminar una rama)

### Eliminar ramas

* `git branch -d <nombre_rama>` Elimina *nombre_rama* si ya ha sido fusionada con la rama actual

> ***-d*** Tener en cuenta de que esta opción solo funcionara si la rama a eliminar ya ha sido fusionada con la rama actual

> ***-D*** Si queremos eliminar la rama aunque no hayamos fusionado osea no nos importe los commits de esa rama podemos formazarlo con esta opción.

### Conflictos

Los conflictos aparacen cuando se modifican la misma linea de un mismo archivo, el conflicto es que git no sabe a que linea hacer caso. Entonces git nos pregunta a que linea hacer caso.

* La solucion de ramas se hace de forma **manual**

```
<<<<<< HEAD (Cambio actual)

CAMBIOES EN EL HEAD

======

CAMBIOS EN <nombre_rama>

>>>>>> nombre rama (Cambio entrante)
```

El archivo sera modificado por el both del repositorio de git y nosotros tendremos que solucionar el conflicto manualmente escogiendo que lineas salvar y que otras eliminar. VSCode nos ayuda bastante con esto, podemos modificar cualquier otra parte del documento.

Una vez solucionado el conflicto podremos hacer el **commit** como siempre

## Git stash (WIP) Work in process

* `git stash` Nos permite guardar en memoria un cambio incompleto que tengamos
* `git stash list` Nos muestra la lista de los stash que hicimos
* `git stash pop` Recupera de memoria los cambios que guardamos

> Este comando nos ayuda cuando por ejemplo queremos revisar otras ramas pero la rama que estabamos trabajando esta incompleta, entonces lo que tendriamos que hacer es guardar los cambios incompletos en memoria con `git stash` y después recien navegar por las otras ramas.

## GitHub

* Creamos un nuevo repositorio en https://github.com/new
* `git remote add origin https://github.com/jdpoccorie/repo.git` Agregamos un repositorio remoto a nuestro repositorio local 
* `git remote --verbose` o `git remote -v` Nos muestra a que servidor remoto estoy conectado, nos muestra a que apunta origin(default).
* `git remote add <nombre_apuntador> https://github.com/user/repo.git` Nos permite agregar un apuntador a un repositorio remoto, ademas podemos sobreescribir *origin* cambiando *nombre_apuntador*

```
$ git remote --verbose
nombre_apuntador      https://github.com/jdpoccorie/jdpoccorie-git.git (fetch)
nombre_apuntador      https://github.com/jdpoccorie/jdpoccorie-git.git (push)
origin  https://github.com/cuscowebdev/jdpoccorie-git.git (fetch)
origin  https://github.com/cuscowebdev/jdpoccorie-git.git (push)
```
* `git remote rename <old(origin)> <new_name>` Renombra el apuntador al repositorio remoto
* `git branch -M main` Renombramos nuestra rama *master* a *main*
* `git push -u origin main` Realizamos la primera publicación de nuestro repositorio local al remoto
* `git push` despues de la primera publicación podemos escribir solo este comando sin el origin para publicar nuestras confirmaciones locales
* `git push origin --delete <nombre_rama>` Comando que nos permite eliminar una rama remota
* `git fetch origin <nombre_rama>` Para actualizar mi repositorio local, si en caso nuestro repositorio remoto tenga cambios
* `git merge origin/main` Para fusionar el main local con los cambios que llegaron con el **fetch**
* `git pull <origin> <nombre_rama>` Es la unión de `git fetch origin <nombre_rama>` y de `git merge origin/main`