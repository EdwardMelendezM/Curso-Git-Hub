- [Configuracion SSH - GitHub](#configuracion-ssh---github)

[Regresar](./README.md)

# Configuracion SSH - GitHub

1. Creamos una carpeta en el dico C: `\llaves-ssh`
2. En consola, OJO: El correo debe de ser el mismo con el que nos registramos en Github,
```
$ ssh-keygen -t rsa -C "juandiego.poccori@gmail.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/JDiegoP/.ssh/id_rsa): /c/llaves-ssh/github_rsa
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/llaves-ssh/github_rsa
Your public key has been saved in /c/llaves-ssh/github_rsa.pub
The key fingerprint is:
SHA256:cIeEzK72XnAG9Wo0XKZSZ4ekIr9ozRn1RyH9yJps8v juandiego.poccori@gmail.com
The key's randomart image is:
+---[RSA 3072]----+
|     o .+.Boo    |
|      += X.o..   |
|    ..= X o..o   |
|     o.O = .o .  |
|     .+ S..o.    |
|    o+ Oo =.     |
|   .o.= .*       |
|   .  ..  E      |
+----[SHA256]-----+
```
Primero debemos escribir el comando `$ ssh-keygen -t rsa -C "juandiego.poccori@gmail.com"` y despues nos pedirá la ruta en este caso escribimos `/c/llaves-ssh/github_rsa` luego nos pedira mas datos pero no los ingresaremos asi que damos enter, Finalmente nos mostrará la key generada.
> Dejamos el passphrase vacio

> Cuando nos pida la ruta escribimos */c/llaves-ssh/github_rsa*

3. Lo que sigue es activar el agente de SSH
```
$ eval "$(ssh-agent -s)"
Agent pid 1113
```
4. Una vez que este corriendo nuestro agente en segundo plano, vamos a registrar nuestra llave SSH en el agente
```
$ ssh-add /c/llaves-ssh/github_rsa
Identity added: /c/llaves-ssh/github_rsa (juandiego.poccori@gmail.com)
```
5. Para mostrar la llave generada escribimos en consola
```
$ cat /c/llaves-ssh/github_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDhKnrARDG3xKPKE7I2kE4kUShXa8k20BTFrZBg7hSFxuVh18XnhAkOnmvQ0Z5luk9xMLkHYfF8f01TX9qK/6Gjac01oUajVBkFoJcCyTr2G1GWwcAtN/5lqeqms68JxE1vM7IqPNS/V2zk2rWr/RfoPsMKlO3fbhNur77E6xV0WOswTszsJHM1Uvqk+XSJPYEmDr9GF3zSWni+aGrj2Sk3augffQ8q2y+tPD3PahFvZBPbdPaKCaiPujwDl0W+hS9xjcm5SukY22Zug+RNjMG9Hv1UApMvlE3v0Yadiv+wY8u3RDcIGWsdq0nxI6AcP+tMP8ZlqYdlSfpyQRZI+syd15K4+3cd5v6ifFWqsDV/m4B8XfbhYKosTmJrcuH/ocr7XIuq8zFPP/c3r2OSyTz49d35ts+CiWeb/b8By9bHPcWt9520T9wmI9I8JcTNncE73yXDbODqfNVo/1d9YMVsqvGuTgsi3nM= juandiego.poccori@gmail.com
```
6. Nos dirigimos a nuestro perfil en GitHub (https://github.com/settings/keys) y en New SSH key pegamos nuestra llave, ademas podremos poner cualquier titulo para nuestra llave.
7. Ahora vamos a nuestro repositorio local y agregaremos un repositorio remoto por medio de SSH
```
$ git remote add githubSSH git@github.com:jdpoccorie/jdpoccorie-git.git
```
Esto nos permitira que ya no nos este pidiendo nuestro usuario y contraseña cada que enviemos un push.

8. Finalmente ejecutamos `git push githubSSH main` y damos escribimos *yes*
9. Desde ahora podemos hacer pull y push sin que Github nos este pidiendo nuestros datos

Lo que tenemos que hacer para agregar nuestro SSH en Bitbucket y Gitlab es lo mismo para Github, nos dirigimos a los settings de nuestro perfil y nos dirigimos las las keys SSH y ahi agregamos el contenido de `cat /c/llaves-ssh/github_rsa.pub`

> Para verificar si nuestra llave fue enlazada con nuestro repositorio remoto podemos escriir en consola `ssh -T git@github.com` o si estamos en gitlab `ssh -T git@gitlab.com` y nos tendra que aparecer un mensaje de bienvenida