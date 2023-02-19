- [Historial de GIT](#historial-de-git)
  - [Limitando la salida del histórico](#limitando-la-salida-del-histórico)

[Regresar](./README.md)

# Historial de GIT

El comando `git-log` nos muestra el historial de confirmaciones.

Entre las opciones del comando podemos encontrar:
* `--oneline`: nos muestra el historial abreviado
* `--graph` añade un pequeño gráfico ASCII mostrando el historial de ramificaciones y uniones.
```
git log --oneline
git log --graph
git log --oneline --graph
```

Para limitar cuantos commits queremos ver usamos `git log -n`, por ejemplo las 2 ultimas confirmaciones:
```
git log -2
```

Podemos ver infinidad de combinaciones de como queremos ver nuestro historial, para eso se puede revisar el comando `git log --help` un ejemplo:
```
git log --pretty=format:"%h - %an, %ar : %s"
```
Para usar los comodines de %h - hash, %an - autor, %ar - fecha, %s - mensaje, debemos revisar la documentación.
```
649f588 - jdpoccorie, 2 days ago : Update gitgnore secreto.md
e7f52dc - jdpoccorie, 2 days ago : Creado el gitignore
c725d76 - jdpoccorie, 2 days ago : Flujo de trabajo modificado
70d0279 - jdpoccorie, 2 days ago : Commit inicial
```

Listar los commits con un rango de fechas usamos:
```
git log --after="2020-11-14 00:00:00"
git log --before="2020-11-14 00:00:00"
git log --after="2020-11-14 11:00:00 --before="2020-11-15 11:30:00"
```
Otra opción realmente útil es `--pretty`, que modifica el formato de la salida. Tienes unos cuantos estilos disponibles. La opción `oneline` imprime cada confirmación en una única línea, lo que puede resultar útil si estás analizando gran cantidad de confirmaciones. Otras opciones son `short`, `full` y `fuller`, que muestran la salida en un formato parecido, pero añadiendo menos o más información, respectivamente:
```
git log --pretty=oneline
```
La opción más interesante es `format`, que te permite especificar tu propio formato. Esto resulta especialmente útil si estás generando una salida para que sea analizada por otro programa — como especificas el formato explícitamente, sabes que no cambiará en futuras actualizaciones de Git
```
git log --pretty=format:"%h - %an, %ar : %s"
ca82a6d - Scott Chacon, 11 months ago : changed the version number
085bb3b - Scott Chacon, 11 months ago : removed unnecessary test code
a11bef0 - Scott Chacon, 11 months ago : first commit
```

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

```
git log --pretty=format:"%h %s" --graph
```

existen muchas mas:

|Opción | Descripción de la salida |
|------ | ------------------------ |
| `-p` | Muestra el parche introducido en cada confirmación. |
| `--stat` | Muestra estadísticas sobre los archivos modificados en cada confirmación. |
| `--shortstat` | Muestra solamente la línea de resumen de la opción `--stat`.           |
| `--name-only` | Muestra la lista de archivos afectados |
| `--name-status` | Muestra la lista de archivos afectados, indicando además si fueron añadidos, modificados o eliminados. |
| `--abbrev-commit` | Muestra solamente los primeros caracteres de la suma SHA-1, en vez de los 40 caracteres de que se compone. |
| `--relative-date` | Muestra la fecha en formato relativo (por ejemplo, “2 weeks ago” (“hace 2 semanas”)) en lugar del formato completo. |
| `--graph` | Muestra un gráfico ASCII con la historia de ramificaciones y uniones. |
| `--pretty` | Muestra las confirmaciones usando un formato alternativo. Posibles opciones son `oneline`, `short`, `full`, `fuller`, y format (mediante el cual puedes especificar tu propio formato). |

## Limitando la salida del histórico

Además de las opciones de formateo, `git log` acepta una serie de opciones para limitar su salida — es decir, opciones que te permiten mostrar únicamente parte de las confirmaciones. Ya has visto una de ellas, la opción `-2`, que muestra sólo las dos últimas confirmaciones. De hecho, puedes hacer `-<n>`, siendo `n` cualquier entero, para mostrar las últimas n confirmaciones. En realidad es poco probable que uses esto con frecuencia, ya que Git por defecto pagina su salida para que veas cada página del histórico por separado.

Sin embargo, las opciones temporales como `--since` (desde) y `--until` (hasta) sí que resultan muy útiles. Por ejemplo, este comando lista todas las confirmaciones hechas durante las dos últimas semanas:
```
git log --since=2.weeks
```
Este comando acepta muchos formatos. Puedes indicar una fecha concreta (“2008-01-15”), o relativa, como _“2 years 1 day 3 minutes ago”_ (“hace 2 años, 1 día y 3 minutos”).

También puedes filtrar la lista para que muestre sólo aquellas confirmaciones que cumplen ciertos criterios. La opción `--author` te permite filtrar por autor, y `--grep` te permite buscar palabras clave entre los mensajes de confirmación. (Ten en cuenta que si quieres aplicar ambas opciones simultáneamente, tienes que añadir `--all-match`, o el comando mostrará las confirmaciones que cumplan cualquiera de las dos, no necesariamente las dos a la vez.)

La última opción verdaderamente útil para filtrar la salida de git log es especificar una ruta. Si especificas la ruta de un directorio o archivo, puedes limitar la salida a aquellas confirmaciones que introdujeron un cambio en dichos archivos. Ésta debe ser siempre la última opción, y suele ir precedida de dos guiones (--) para separar la ruta del resto de opciones.

En la Tabla se listan estas opciones, y algunas otras bastante comunes, a modo de referencia.

|Opción | Descripción de la salida |
|------ | ------------------------ |
| `-(n)` | Muestra solamente las últimas n confirmaciones |
| `--since, --after` | Muestra aquellas confirmaciones hechas después de la fecha especificada. |
| `--until, --before` | Muestra aquellas confirmaciones hechas antes de la fecha especificada. |
| `--author` | Muestra sólo aquellas confirmaciones cuyo autor coincide con la cadena especificada. |
| `--committer` | Muestra sólo aquellas confirmaciones cuyo confirmador coincide con la cadena especificada. |

Por ejemplo, si quieres ver cuáles de las confirmaciones hechas sobre archivos de prueba del código fuente de Git fueron enviadas por el usuario **gitster**, y no fueron fusiones, en el mes de octubre de 2008, ejecutarías algo así:
```
git log --pretty="%h - %s" --author=gitster --since="2008-10-01" \
   --before="2008-11-01" --no-merges -- t/
```