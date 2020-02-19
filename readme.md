
-- Un watcher para no detener el server a cada rato:
--- -D dignifica que solo se instalara en modo de desarrollo
        
        npm i nodemon -D

        - Para ejecuarlo añadir un script al package : nodemon src/index.js, luego correr con :
        npm run dev

# Para postgres instalar

        npm i pg

        -- Ingresamos a postgres:
        sudo -u postgres psql

        -- Cramos la BD
        CREATE DATABASE firstapi;

        -- Creamos la tabla users:
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(40),
            email TEXT
        );

        -- Añadimos algunos datos:
        INSERT INTO users (name, email) VALUES ('joe', 'joe.gmail.com'), ('ryan', 'ryans@gmail.com');