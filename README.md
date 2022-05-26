# Prueba Técnica

Repositorio de backend Nodejs + express + typescript + mongodb

## Instalacion y puesta en marcha en local

- Clonar repositorio
- instalar dependencias del proyecto
```bash
npm install
```
- instalar de forma global nodemon para correr el sevidor de forma local
```bash
npm install nodemon --global
```
- Crear build a Javascript
```bash
npm run build
```
- Subir el servidor
```bash
npm run dev
```

Cambiar el nombre de .env.prueba a .env para tomar las variables de entorno en local. El usuario y contraseña de mongodb solo tiene permisos de lectura y escritura para la base de datos de prueba (únicos permisos necesarios).

## Producción en heroku
Este es el link de producción [link](https://prueba-server-rest.herokuapp.com)