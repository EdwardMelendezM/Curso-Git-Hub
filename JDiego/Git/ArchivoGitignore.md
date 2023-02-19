- [.gitignore](#gitignore)
  - [Patrones Glob](#patrones-glob)

[Regresar](./README.md)

# .gitignore

A menudo tendrás un tipo de archivos que **no** quieras que Git añada automáticamente o te muestre como no versionado.

Suelen ser archivos generados automáticamente, como archivos:
* de log
* archivos generados por tu compilador. 

Para estos casos puedes crear un archivo llamado `.gitignore`, en el que listas los patrones de nombres que deseas que sean ignorados. He aquí un archivo `.gitignore` de ejemplo:
```
*.[oa]
*~
```
La primera línea le dice a Git que ignore cualquier archivo cuyo nombre termine en `.o` o `.a` — archivos objeto que suelen ser producto de la compilación de código. 

La segunda línea le dice a Git que ignore todos los archivos que terminan en tilde (`~`).

> Configurar un archivo `.gitignore` antes de empezar a trabajar suele ser una buena idea, para así no confirmar archivos que no quieres en tu repositorio Git.

Las reglas para los patrones que pueden ser incluidos en el archivo `.gitignore` son:
* Las líneas en blanco, o que comienzan por `#`, son ignoradas.
* Puedes usar patrones `glob estándar`.
* Puedes indicar un directorio añadiendo una barra hacia delante (`/`) al final.
* Puedes negar un patrón añadiendo una exclamación (`!`) al principio.

## Patrones Glob

Los patrones glob son expresiones regulares simplificadas que pueden ser usadas por las shells. 
* Un asterisco (`*`) reconoce cero o más caracteres; 
* `[abc]` reconoce cualquier carácter de los especificados entre corchetes (en este caso, `a`, `b`, o `c`); 
* una interrogación (`?`) reconoce un único carácter; 
* y caracteres entre corchetes separados por un guión (`[0-9]`) reconoce cualquier carácter entre ellos (en este caso, de `0` a `9`).

He aquí otro ejemplo de archivo `.gitignore`:

```
# a comment – this is ignored
*.a       # no .a files
!lib.a    # but do track lib.a, even though you're ignoring .a files above
/TODO     # only ignore the root TODO file, not subdir/TODO
build/    # ignore all files in the build/ directory
doc/*.txt # ignore doc/notes.txt, but not doc/server/arch.txt
```
> Una buena herramienta para generar estos arvhivos es https://www.gitignore.io/