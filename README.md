# YARD SALE REST API

Esta REST API utiliza tecnologías clave como Express, Docker y PostgreSQL para ofrecer una solución robusta y escalable.

## Diagrama Físico

![Diagrama Físico](https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/YardSaleApi/xttpq1gquzslv2c6d85v)

## Tecnologías

### Dependencias

- [Express](https://expressjs.com/): Framework web para Node.js que simplifica la creación de API RESTful y el manejo de rutas.
- [Dotenv](https://www.npmjs.com/package/dotenv): Carga variables de entorno desde un archivo `.env`, lo que mejora la configuración del proyecto.
- [Sequelize](https://sequelize.org/): ORM (Object-Relational Mapping) para bases de datos SQL, facilitando la interacción con bases de datos.
- [pg](https://www.npmjs.com/package/pg): Cliente de PostgreSQL para Node.js, permitiendo interactuar con bases de datos PostgreSQL.
- [pg-hstore](https://www.npmjs.com/package/pg-hstore): Serializador/deserializador de objetos JSON para datos de PostgreSQL.
- [sequelize-cli](https://sequelize.org/docs/v6/other-topics/migrations/): Herramienta de línea de comandos para Sequelize, que facilita la administración de bases de datos y la generación de código relacionado con el ORM.
- [Boom](https://www.npmjs.com/package/@hapi/boom): Proporciona utilidades para manejar errores HTTP en Node.js.
- [Cors](https://www.npmjs.com/package/cors): Middleware que permite controlar el acceso a tu API desde diferentes orígenes.
- [Helmet](https://www.npmjs.com/package/helmet): Ayuda a proteger tu aplicación Express configurando varios encabezados HTTP relacionados con la seguridad.
- [Joi](https://www.npmjs.com/package/joi): Librería de validación de datos para JavaScript. Permite definir esquemas y validar la forma y el contenido de objetos JavaScript.

### Dependencias de Desarrollo

- [ESLint](https://eslint.org/): Herramienta de linter para identificar y reportar patrones en el código JavaScript.
- [Nodemon](https://nodemon.io/): Monitorear cualquier cambio en su fuente y reinicie automáticamente su servidor.
- [Prettier](https://prettier.io/): Formateador de código para mantener un estilo consistente y legible.

## Variables de Entorno

Antes de ejecutar esta aplicación, asegúrate de tener configuradas las siguientes variables de entorno:

- `NODE_ENV`: Modo de entorno de la aplicación.
- `PORT`: Puerto en el que se ejecutará el servidor.
- `DB_NAME`: Nombre de la base de datos.
- `DB_HOST`: Dirección del host de la base de datos.
- `DB_PORT`: Puerto de la base de datos.
- `DB_USER`: Usuario de la base de datos.
- `DB_PASSWORD`: Contraseña de la base de datos.
- `DATABASE_URL`: URL de conexión a la base de datos.

## Autor

- GitHub: [BranLeeDev](https://github.com/BranLeeDev)
- LinkedIn: [Brandon Aguero](https://www.linkedin.com/in/brandonaguero/)
- Twitter: [@branleedev](https://twitter.com/branleedev)
- FrontendMentor: [Perfil](https://www.frontendmentor.io/profile/BranLeeDev)
