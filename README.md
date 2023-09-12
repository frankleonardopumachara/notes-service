## Descripcion arquitectura

Los modulos de la aplicacion tienen utilizar una arquitectura limpia devidida por capas:
1. Infraestructura: Se encuentran conexiones a otros servicio, bases de datos.
2. Aplicacion: Contiene los servicios de la aplicacion.
3. Dominio: Contiene las entidades de la aplicacion y repositorios.

[//]: # (Ejemplo de estructura completa:)

[//]: # ()
[//]: # (1. users/)

[//]: # (    users.module.ts  # Modulo de nestjs)

[//]: # (    application/)

[//]: # (        servicios/)

[//]: # (        dtos/)

[//]: # (        errores/)

[//]: # (    dominio/)

[//]: # (        entidades/)

[//]: # (        repositorios/)

[//]: # (        servicios/)

[//]: # (    infraestructura/)

[//]: # (        adaptadores/)

[//]: # (        controladores/)

## Instalacion

```bash
$ npm ci
```

## Ejecucion

```bash
# local
$ npm run start

# desarrollo
$ npm run start:dev

# produccion
$ npm run start:prod
```

## Pruebas

```bash
# puebas unitarias
$ npm run test

# cobertura de codigo
$ npm run test:cov
```
