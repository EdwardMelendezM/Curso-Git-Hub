- [Guía GIT](#guía-git)
  - [Estado de archivos](#estado-de-archivos)
  - [Secciones Principales](#secciones-principales)
  - [Ciclo de vida](#ciclo-de-vida)
  - [TEMAS INICIALES](#temas-iniciales)
    - [Configuración inicial GIT](#configuración-inicial-git)
    - [Comandos para obtener ayuda](#comandos-para-obtener-ayuda)
  - [CREANDO PRIMER REPOSITORIO](#creando-primer-repositorio)
    - [Operaciones básicas](#operaciones-básicas)
  - [Comandos para deshacer](#comandos-para-deshacer)
    - [Modificando tu última confirmación](#modificando-tu-última-confirmación)
    - [Deshaciendo la preparación de un archivo](#deshaciendo-la-preparación-de-un-archivo)
    - [Deshaciendo la modificación de un archivo](#deshaciendo-la-modificación-de-un-archivo)
  - [Etiquetas (Tags)](#etiquetas-tags)
    - [Listando tus etiquetas](#listando-tus-etiquetas)
    - [Creando etiquetas](#creando-etiquetas)
    - [Etiquetando más tarde](#etiquetando-más-tarde)


[Regresar](./README.md)

# Guía GIT

## Estado de archivos

Git tiene tres estados principales en los que se pueden encontrar tus archivos: 
* Confirmado (committed)
* Modificado (modified)
* Preparado (staged) 

**Confirmado** significa que los datos están almacenados de manera segura en tu base de datos local.

**Modificado** significa que has modificado el archivo pero todavía no lo has confirmado a tu base de datos.

**Preparado** significa que has marcado un archivo modificado en su versión actual para que vaya en tu próxima confirmación.

## Secciones Principales 

Secciones principales de un proyecto de Git: 
* El directorio de Git (Git directory), 
* El directorio de trabajo (working directory), y 
* El área de preparación (staging area).

![Directorio de trabajo, área de preparación, y directorio de Git](./img/Estados.png)

1. **Working Directory | Directorio de Trabajo**
   * El directorio de trabajo es una copia de una versión del proyecto. Estos archivos se sacan de la base de datos comprimida en el directorio de Git, y se colocan en disco para que los puedas usar o modificar.
   * Contiene todos nuestros archivos de trabajo para añadir a staging area se usa el comando `"git add"`

2. **Staging Area | Area de Preparación**
   * El área de preparación es un sencillo archivo, generalmente contenido en tu directorio de Git, que almacena información acerca de lo que va a ir en tu próxima confirmación. A veces se denomina el índice, pero se está convirtiendo en estándar el referirse a ello como el área de preparación.
   * Observamos algunos archivos de nuestro trabajo que estan en cambios. 
   * Esta es la seccion de actualizaciones para añadir archivos al repositorio se usa el comando `"git commit"`

3. **Repository | Repositorio**
   * El directorio de Git es donde Git almacena los metadatos y la base de datos de objetos para tu proyecto. Es la parte más importante de Git, y es lo que se copia cuando clonas un repositorio desde otro ordenador.
   * Applicando un `"commit"` tenemos nuestro repositorio actualizado

## Ciclo de vida

* Untracked (No Rastreados | Sin seguimiento)
* Unmodified
* Modified
* Stanged

UNTRACKED | UNMODIFIED | MODIFIED | STAGED
------------ | ------------- | ------------- | -------------
Por defecto los archivos de nuestra carpeta no estaran marcados o rastreados por asi decirlo. | Una vez pasados por Untracked estos archivos estaran como no modificados, al estar asi nosotros no podremos enviarlos al staged area. | Nuestros archivos al ser editados pasan a modified. | Haciendo un stage the file pasan a staged area.

![Ciclo de vida de los estados en Git](./img/cicloVida.png)

**FLUJO DE TRABAJO**

1. Modificas una serie de archivos en tu directorio de trabajo.
2. Preparas los archivos, añadiendo instantáneas de ellos a tu área de preparación
3. Confirmas los cambios, lo que toma los archivos tal y como están en el área de preparación, y almacena esa instantánea de manera permanente en tu directorio de Git.

----

## TEMAS INICIALES

### Configuración inicial GIT

1. Accedemos a nuestra terminal para editar nuestra identidad, editor de texto y más. Usaremos el comando `git config`
   * Configuramos el **nombre de usuario**
   ```
   git config --global user.name "jdpoccorie"
   ```
   * Configuramos el **email del Usuario** 
   ```
   git config --global user.email "juandiego.poccori@gmail.com"
   ```
   * Para poner en el **editor** e sublime text2 !Recomendable
   ```
   git config --global core.editor "'c:/program files/sublime text 2/sublime_text.exe' -w"
   ```
   * Para poner en el **editor** de sublime text 3
   ```
   git config --global core.editor "'c:/program files/sublime text 3/subl.exe' -w"
   ```
   * Verificamos si configuramos correctamente
   ```
   git config --global --list
   git config user.name
   ```
   * Listo!!!

### Comandos para obtener ayuda

Si alguna vez necesitas ayuda usando Git, hay tres formas de ver la página del manual (manpage) para cualquier comando de Git:
```
git help <comando>
git <comando> --help
man git-<comando>
```
Por ejemplo, puedes ver la página del manual para el comando config ejecutando:
```
git help config
```
> Podemos ver la info de los comandos incluso sin conexión

## CREANDO PRIMER REPOSITORIO

Para iniciar nuestro repositorio necesitas ir al directorio del proyecto y escribir:
```
git init
```
* Esto crea un nuevo subdirectorio llamado **_.git_** que contiene todos los archivos necesarios del repositorio

**1. Práctica: Entendiendo el flujo de trabajo en Git pasando por las tres secciones**

1. Para empezar crearemos una carpeta llamada _/Proyecto_ y accederemos a ella con la terminal e iniciaremos git con el comando `git init`
2. Crearemos un archivo *README.md* y editaremos el archivo
3. Escribimos `git status` y nos aparecera el archivo Readme como UNTRACKED
4. Preparamos el archivo con `git add README.md`
5. Para confirmar los cambios `git commit -m "Commit inicial"`
6. Para ver mis confirmaciones que hicimos usamos `git log`
7. Volvemos a editar el archivo y para ver las diferencias con el archivo antiguo usamos `git diff`
8. Estos son algunos comando básicos para entender el ciclo de vida de los estados, es muy importante tener claro esto

### Operaciones básicas

**SALTANDO EL ÁREA DE PREPARACIÓN**

Para saltarnos el área de preparación y confirmar las modificaciones usamos el siguiente comando `git commit -a -m`.

> Tener en cuenta de que el comando anterior solo agrega automaticamente al area de preparación todos los archivos que estamos siguiendo actualmente, es decir los archivos nuevos o untracked como arapece no seran agregados al log de git

**ELIMINANDO ARCHIVOS**

Para eliminar un archivo de Git, debes eliminarlo de tus archivos bajo seguimiento (más concretamente, debes eliminarlo de tu área de preparación), y después confirmar. El comando `git rm`se encarga de eso, y también elimina el archivo de tu directorio de trabajo, para que no lo veas entre los archivos sin seguimiento.

Si simplemente eliminas el archivo de tu directorio de trabajo, aparecerá bajo la cabecera “Modificados pero no actualizados” (“Changed but not updated”) (es decir, sin preparar) de la salida del comando `git status`

## Comandos para deshacer

En cualquier momento puedes querer deshacer algo. En esta sección veremos algunas herramientas básicas para deshacer cambios. Ten cuidado, porque no siempre puedes volver atrás después de algunas de estas operaciones. Ésta es una de las pocas áreas de Git que pueden provocar que pierdas datos si haces las cosas incorrectamente.

### Modificando tu última confirmación

Uno de los casos más comunes en el que quieres deshacer cambios es cuando confirmas demasiado pronto y te olvidas de añadir algún archivo, o te confundes al introducir el mensaje de confirmación. Si quieres volver a hacer la confirmación, puedes ejecutar un `commit` con la opción `--amend`:
```
git commit --amend
```

Este comando utiliza lo que haya en tu área de preparación para la confirmación. Si no has hecho ningún cambio desde la última confirmación (por ejemplo, si ejecutas este comando justo después de tu confirmación anterior), esta instantánea será exactamente igual, y lo único que cambiarás será el mensaje de confirmación.

Se lanzará el editor de texto para que introduzcas tu mensaje, pero ya contendrá el mensaje de la confirmación anterior. Puedes editar el mensaje, igual que siempre, pero se sobreescribirá tu confirmación anterior.

Por ejemplo, si confirmas y luego te das cuenta de que se te olvidó preparar los cambios en uno de los archivos que querías añadir, puedes hacer algo así:

```
git commit -m 'initial commit'
git add forgotten_file
git commit --amend
```
Estos tres comandos acabarán convirtiéndose en una única confirmación — la segunda confirmación reemplazará los resultados de la primera

### Deshaciendo la preparación de un archivo

Las dos secciones siguientes muestran como pelearse con las modificaciones del área de preparación y del directorio de trabajo. Lo bueno es que el comando que usas para determinar el estado de ambas áreas te recuerda como deshacer sus modificaciones. Por ejemplo, digamos que has modificado dos archivos, y quieres confirmarlos como cambios separados, pero tecleas accidentalmente `git add *` y preparas ambos. ¿Cómo puedes sacar uno de ellos del área de preparación? El comando `git status` te lo recuerda:
```
Changes to be committed:
    (use "git restore --staged <file>..." to unstage)
    ...
```

### Deshaciendo la modificación de un archivo

¿Qué pasa si te das cuenta de que no quieres mantener las modificaciones que has hecho sobre el archivo? ¿Cómo puedes deshacerlas fácilmente — revertir el archivo al mismo estado en el que estaba cuando hiciste tu última confirmación — (o cuando clonaste el repositorio, o como quiera que metieses el archivo en tu directorio de trabajo)? Afortunadamente, `git status` también te dice como hacer esto. En la salida del último ejemplo, la cosa estaba así:
```
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
```
Antes tambien se usaba `git checkout -- <file>`

> Nunca uses este comando a no ser que estés absolutamente seguro de que no quieres el archivo. Si lo único que necesitas es olvidarte de él momentáneamente, veremos los conceptos de apilamiento (stashing) y ramificación (branching) en el próximo capítulo; en general son formas más adecuadas de trabajar.

## Etiquetas (Tags)

Como muchos VCSs, Git tiene la habilidad de etiquetar (tag) puntos específicos en la historia como importantes. Generalmente la gente usa esta funcionalidad para marcar puntos donde se ha lanzado alguna versión (v1.0, y así sucesivamente). En esta sección aprenderás cómo listar las etiquetas disponibles, crear nuevas etiquetas y qué tipos diferentes de etiquetas hay. (http://semver.org/)

### Listando tus etiquetas

Listas las etiquetas con el comando `git tag`

```
git tag
```
Este comando lista las etiquetas en orden alfabético; el orden en el que aparecen no es realmente importante.

También puedes buscar etiquetas de acuerdo a un patrón en particular. El repositorio fuente de Git, por ejemplo, contiene muchas etiquetas. Si solo estas interesado en la serie 1.4.2, puedes ejecutar esto:
```
git tag -l 'v1.4.2.*'
```

### Creando etiquetas

Git usa dos tipos principales de etiquetas: ligeras y anotadas. Una etiqueta ligera es muy parecida a una rama que no cambia — un puntero a una confirmación específica —. Sin embargo, las etiquetas anotadas son almacenadas como objetos completos en la base de datos de Git. Tienen suma de comprobación; contienen el nombre del etiquetador, correo electrónico y fecha; tienen mensaje de etiquetado; y pueden estar firmadas y verificadas con GNU Privacy Guard (GPG). Generalmente se recomienda crear etiquetas anotadas para disponer de toda esta información; pero si por alguna razón quieres una etiqueta temporal y no quieres almacenar el resto de información, también tiene disponibles las etiquetas ligeras.

* Etiqueta ligera `git tag v1.1-dev` Una etiqueta ligera no es mas que el checksum de un commit guardado en un archivo, no incluye más información. Para crear una etiqueta ligera, no pasamos las opciones `-a`, `-s` ni `-m`.
```
git tag mi-etiqueta
```
* Etiqueta anotada `git tag -a v1.4 -m 'my version 1.4'`, el parámetro -m especifica el mensaje, el cual almacena con la etiqueta, las etiquetas anotadas contienen información es casi como un commit contiene el nombre del etiquetador, correo electronico y fecha ademas de un mensaje asociado. Se puede ver la información de la etiqueta usando el comando `git show`

### Etiquetando más tarde

Puedes incluso etiquetar confirmaciones después de avanzar sobre ellos. 
```
git tag <nombre-etiqueta> <escribir_hash-e7f52dc>
```