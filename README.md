## Descripcion arquitectura

Los modulos de la aplicacion tienen utilizar una arquitectura limpia devidida por capas:
1. Infraestructura: Se encuentran conexiones a otros servicio, bases de datos.
2. Aplicacion: Contiene los servicios de la aplicacion y dtos (objetos de transferencia de datos).
3. Dominio: Contiene las entidades de la aplicacion y repositorios.

## Swagger 

Se tiene una ruta con la documentacion para consumir los servicios expuestos http://localhost:3000/api#/

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
