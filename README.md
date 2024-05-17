# GestiónJS

## Descripción

App de gestión de Usuarios y Productos.

## Descarga

```bash
$ git clone https://github.com/telejam/GestionJS
```

## Instalación

```bash
$ npm install
```

## Ejecutar la app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Cuestionario

```bash
# ¿Qué es un middleware y cuál es su utilidad en una aplicación backend? 
- Es una función que intercepta el flujo de datos de una solicitud y su respuesta y permite realizar algún proceso (manejo de errores, validación, logs, etc.). Se pueden encadenar uno detras del otro generando una anidación en el proceso.

# ¿Qué es SQL Injection y cómo puede evitarse? 
- Es una técnica que permite ingresar código SQL a través de un formulario para obtener acceso directo a la base de datos.
- Se puede evitar usando un ORM que aisla el acceso a la base de datos, "escapando" los datos ingresados convirtiéndolos en caracteres inofensivos, validando los ingresos, entre otros.

# ¿Cuándo es conveniente utilizar SQL Transactions? Dar un ejemplo. 
- Cuando se requiere que varias operaciones hacia la base de datos se realicen en conjunto o, en caso que alguna falle, no se realice ninguna. 
- Un ejemplo simple es una transferencia bancaria donde se debe debitar de una cuenta y acreditar en otra, o cancelar tora la operación si es que alguna de las dos tareas falla.

# Usando async/await: ¿cómo se puede aprovechar el paralelismo? 
- Generando funciones async que devuelvan promesas y llamandolas mediante await Promise.All(...) para que se ejecuten todas.
```

## Contacto

- Autor - Jorge Mora
- LinkedIn - [https://www.linkedin.com/in/jorge-mora-dev/](https://www.linkedin.com/in/jorge-mora-dev/)

