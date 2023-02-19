# Ejercicio

Para este primer ejemplo nos pondremos el caso de desarrollar un sitio web, los cambios que registraremos con commit son los siguientes:

1. Definir la estructura HTML de del sitio web
2. Añadir Información 
3. Añadir un poco de CSS

Para ello usaremos los comandos:
> * git init (Para crear e iniciar nuesto Repositorio)
> * git add
> * git commit
> * git status

**Pasos:**

1. Creamos nuestra carpeta en el disco local `C:/` llamada `Proyecto`
2. Para iniciar nuestro repositorio entramos en el GitBash y nos ubicamos en la carpeta de nuestro proyecto usando comandos cd
3. Una vez estando en la carpeta escribir "git init" para crear un repositorio.
    > **Nota:** Cuando iniciamos git se creara una carpeta invisible .git que contendra toda la info del proyecto; commit usados, etc.
4. Usamos "git status"
    > git status
   * Nos avisara que estamos en la rama `master`
   * y que tenemos nuestro archivo `index.html` en estado untracked osea no marcado
5. Usaremos el `git add index.html` para llevarlo a unmodified
6. Verificamos con `git status` nuevamente
   * Nos aparecera changes to be committed
7. Para crear nuestro primer commit se escribe el siguiente codigo en el shell que aparte debe de ir aconpañado con una pequeña descripción o mensaje
    > "git commit -m "Proyecto con los archivos base"
8. Listo registramos nuestro primer commit
9. Si editamos nuestro archivo `index.html` de la carpeta y volvemos a escribir `git status` nos aparecera un mensaje de que el archivo `index.html` fue modificado entonces lo que tenemos que hacer es nuevamente añadir con `git add...` etc pero en este caso usaremos:
    > git add -A que significa afectar a todos los archivos modificados pasen al staged area.
10. Ahora podremos hacer nuevamente un commit acampañado de un mensaje
12. Si queremos ver la version actual ponemos igual el checkout con el commit actual o sino escribir:
    > git checkout master
13. para usar el git log es recomendable usar un archivo de texto como en el ejemplo
    > git log > commits-txt
14. Nos vamos a nuestra carpeta y veremos que se creo un archivo commits.txt
15. Por ultimo modificamos nuestro `index.html` y le enlazamos un archivo css y en el shell escribimos nuevamente `git status` y nos aparecera que se modificaron archivos en nuestra carpeta.
16. Entonces analizamos de que el archivo que creamos commits.txt no pertenece a nuestro proyecto pero `estilos.css` si, entonces podemos añadir dos veces `git add` o simplemente poner `git add -A` para agregar ambos a staged area.
17. Entonces escribimos nuevamente git status vemos que ya aparece ya estan en ahi porque estan en verde y ya podriamos hacerle un commit.
18. Veremos que nos aparece el commits.txt pero nosotros no queriamos a ese entonces que podriamos hacer.
19. Usamos el comando `git help` para obtener ayuda
20. Vemos el rm que es para remover archivos.
21. Como queremos saber mas de este archivo escribimos `git help rm` y al presionar enter se nos cargara en nuestro navegador una ayuda o info de este commando
22. Escribimos git rm --cached commits.txt
    > git rm --cached commits.txt
23. Ahora si ponemos nuevamente git status nos apareceran de que commits.txt es untracked.
24. Pero si una vez mas quisieramos usar el `git add -A` veremos que nuevamente aparece el `commits.txt` en el stageg area entonces lo que queremos es que se ignore ese archivo para eso usamos `.gitignore`
25. lo que hacemos es ir a nuestra carpeta de trabajo y para testear creamos un archivo de texto y le ponemos .gitignore pero no funcionara al menos en windows lo que tenemos que hacer es `.gitignore` con eso si funcionara.
26. Entramos a ese documento y escribimos commits.txt
27. Entonces nuevamente ejecutamos el git status y ya no nos aparecera el commits.txt sino el .gitignore que estara bien
28. ¿Cómo agregar y eliminar commits?
    > git reset: Lo que hace es borrar un commit que ya se realizó

    Lo usamos en casos muy graves
    
    Se puede aplicar en tres modalidades
    * --soft
    * --mixed
    * --hard

    **Caso 1.-**

    Si por ejemplo nosostros tenemos los commits:
    > a b c d

    * Sea cual sea el método de modalidad que apliquemos el que se eliminará sera siempre d.
    * Si usamos `soft` no tocamos el index ni el work tree, simplemente eliminamos el commit
    * Si usamos `mixed` nosotros reseteamos el index pero no modificamos el work tree
    * Si usamos `hard` nosostros eliminamos el commit y reseteamos el index y el work tree
    * Si usamos dos veces el mismo archivo con el hard se volvera a tener nuevamente ese repositorio

    **RECORDANDO**
    * Work Tree: Nuestra carpeta de trabajo
    * Staged Areao index: Area de estancia por medio de commit
    * Repository: Constituye una nueva version de nuestro proyecto

    > El `git reset` no es recomendable porque implica eliminar commits y por lo general se ve que los commit avanzan hacia adelante entonces para evitar eso es recomendable generar una rama independiente a la master para que sobre esa rama se trabaje esa particularidad y que cuando esta se haya implementado se fusione a la rama master entonces si hay error solo se elimina de la rama independiente y no afecta a la master
28. Trabajando con ramas
    * `git branch`: Se usa para listar las ramas existentesen nuestro proyecto
    * `git branch nombre`: Se usa para crear una nueva rama con el nombre que le indiquemos
    * `git branch -d nombre`: Se usa para eliminar ramas
    * `git merge`: Nos permite fusionar ramas
    * `git checkout`: Tambien se usa para visualizar ramas distintas
29. Usamos git branch y como observamos solo tenemos la `master`
30. Creamos una nueva rama
31. Usando el git checkout podremos elegir en que rama estaremos
32. `git checkout ejemplo`
33. git branch -> Veremos que nos ubicamos en "ejemplo" ya no es master
34. agregamos un commit en ejemplo
35. Entramos nuevamente en la rama master y en el shell escribimos git log
36. Veremos que no nos aparece el commit agregado en ejemplo entonces nos queda fusionar las ramas
37. Entonces estando ubicados en master escribimos "git merge ejemplo" y acabamos de hacer nuestra primera fusion Nos aparecera fast forward osea que no hubieron conflictos
38. si ponemos git log veremos que en verdad se fusiono con la rama ejemplo.
39. Si ponemos nuevamente git branch veremos que se encuentra sigue la otra rama asi es que si queremos podemos eliminar la rama ejemplo ya que por lo general en git las ramas que ya fueron fusionadas se eliminan entonces usamos
40. git branch -d ejemplo 
41. ponemos git branch y listo estaran eliminados

**Veremos un ejemplo con Conflicto**

1. creamos una nueva rama y nos ubicamos en ella
2. editamos el html
3. creamos el commit en la nueva rama
4. antes de hacer el commit entramos nuevamente en el master para hacer un conflicto.
5. Una vez estando en el master creamos un nuevo commit para ver que se hace en caso de conflicto...
6. Listo!!