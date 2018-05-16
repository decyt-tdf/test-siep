# test-siep
Suit de tests e2e para el sistema siep

Basado en [Puppeteer](https://github.com/GoogleChrome/puppeteer) y [Tape](https://github.com/substack/tape)

## Contribuyendo

Nuestra manera de trabajar está basada en el workflow conocido como [Github flow](https://guides.github.com/introduction/flow/).

### Descripción paso a paso

1. Clonamos el repositorio en nuestra máquina de trabajo: `git clone https://github.com/decyt-tdf/test-siep.git`. 
2. Descargamos los ultimos cambios a nuestra máquina para trabajar sobre el código más reciente: `git pull origin master`.
3. Creamos un *feature branch* (una rama para realizar nuestros aportes de manera segura sin afectar master): `git checkout -b nombredelbranch`. Lo ideal es que nombre del branch refleje en qué vamos a trabajar. Por ejemplo fixIssue23, validacionEntrada, cargaDeAlumnos, etc.
4. Relizamos cualquier modificación necesaria. Esta es la parte en la que programamos, refactorizamos, etc.
5. Agregamos nuestros cambios para el próximo commit: `git add cada.js archivo.js que.js modificamos.js`.
5. Hacemos un commit incluyendo una descripción lo más clara posible de los cambios y sus razones en el mensaje: `git commit`
6. Hacemos el push al repositorio para subir nuestro código: `git push origin nombredelbranch`
7. Creamos el pull request: En la interface de Github, en la página principal del repositorio, va a aparecer un mensaje tipo flash que nos ofrece crear un pull request basado en el código que acabamos de subir a nuestro branch. Le damos a "create pull request" y seguimos las instrucciones.
8. Automáticamente el resto del equipo va a ser notificado mediante una integración con nuestro grupo de telegram. La idea es que un par tome la posta de revisar el código, sugerir modificaciones si fuera necesario y hacer el merge cuando lo considere oportuno.
9. Festejamos unos segundos el logro.
10. Volvemos a master: `git checkout master`
11. Retomamos el trabajo desde el paso 2 (una vez hecho el pull es recomendable eliminar el feature branch anterior para mantener limpio nuestro repo local `git branch -d nombredelbranch`.

