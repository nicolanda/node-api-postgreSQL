## Practica de conexion, crud simple usando node-express y PostgreSQL

  El siguiente repositorio tiene como proposito la practica para el crud (Create, Read, Update, Delete), se creara una tabla en la base de datos para usarla de práctica.

### Requsitos para que el repositorio funcione.

> 1. node.js y express.js, opcional nodemon
> 2. PostgreSQL
> 3. PostMan, thundebird o cualquier programa que permita hacer peticiones
> 4. opcional -- alguna extensión que permita la fácil visualización de JSON en el navegador (mi caso: chrome extensión JSON viewer)..


### Comandos usados y configuración en PostgreSQL(command console)

#### Instalación de postgress

Debido a que, en el momento de crear este repositorio estaba trabajando en el S.O de Windows la obtención de PostgreSQL se realizó por medio de la pagina web: [PostgresSQL Home](https://www.postgresql.org/)

#### PostgreSQL comandos prompt

Si se desea obtener mas información de los comandos en postgres usar el comando de psql -- help, a continuación listare algunos 

- <span style='color:red'>-h : --host=HOSTNAME </span> : el host donde se encuentra alojado el servidor o el directorio del socket.
- <span style='color:red'>-p: --port=PORT</span> : Puerto de la base de datos, por defecto el puerto es 5432.
- <span style='color:red'>-U: --username=USERNAME</span> : El username que se usara para acceder a la base de datos.
- <span style='color:red'>-w: --no-password</span> : No pedir contraseña,
- <span style='color:red'>-W: --password</span> : fuerza la utilización de contraseña, debería pasar automaticamente.

para concetarse a postgreSQL usando la consola de comandos, se usan la siguientes lineas de codigo (puede variar de usaurio a usuario).

```
 psql postgres postgres
 Password for user postgres: *******
 ```
para verificar el usuario en el que nos encontramos para esto se utiliza el commando
 ```
\conninfo
```

![interface con comandos PSQL]()

Si usamos la consola para el ingreso de estos comando se debería observar como la siguiente imagen.


- <span style='color:red'>\q</span> : Comando usado para salir de la conexión psql.
- <span style='color:red'>\c</span> : Comando usado para conectar a una nueva base de datos.
- <span style='color:red'>\dt</span> : Comando usado obtner todos las tablas.
- <span style='color:red'>\du</span> : Comando usado obtener todos los roles
- <span style='color:red'>\list</span> : Comando usado para obtener la lista de base de datos.