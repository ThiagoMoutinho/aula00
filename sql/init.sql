CREATE EXTENTION IF NOT EXISTS "uuid-ossp";
CREATE EXTENTION IF NOT EXISTS "pgcrypto"

CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL, 
    PRIMARY KEY (uuid)
);

INSERT INTO application_user (username, password) VALUES ('thiago', crypt('admin', 'my_salt'))

select * from application_user