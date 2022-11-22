#Mostrar commit de forma normal
-> git log --oneline

#Mostrar commit realizados de forma personalizada
-> git log --pretty="%h %an %ar - %s"

#Mostrar commit a detalle
-> git show '(CODIGO)'

#Mostrar las diferencias 
-> git diff

#Mostrar las diferencias luego de una (git add)
-> git diff --staged

#Trabajo remoto
-> git remote add origin https://github.com/
-> git fecth origin 
-> git pull origin main

