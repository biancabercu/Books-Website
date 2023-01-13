CREATE TABLE IF NOT EXISTS rooms (
    id serial PRIMARY KEY,
    seats_nr integer NOT NULL,
    rows_nr integer NOT NULL,
    room_nr integer NOT NUll

);

CREATE TABLE IF NOT EXISTS tickets (
    id serial PRIMARY KEY,
    nume varchar NOT NULL,
    email varchar NOT NULL,
    movie_id varchar NOT NULL,
    movie_name varchar NOT NULL,
    row_nr integer NOT NULL,
    seat_nr integer NOT NULL,
    room_id integer REFERENCES rooms(id), 
    date_time Date NOT NULL, 
    hour_time TIME NOT NULL

);

CREATE TABLE IF NOT EXISTS movies (
    id serial PRIMARY KEY,
    movie_name varchar NOT NULL,
    movie_image_url varchar NOT NULL,
    movie_description varchar NOT NULL,
    movie_description_en varchar NOT NULL,
    movie_format varchar NOT NULL,
    movie_cast varchar NOT NULL,
    room_id integer  REFERENCES rooms(id), 
    date_time Date NOT NULL, 
    hour_time TIME NOT NULL,
    gen varchar NOT NULL, 
    trailer varchar NOT NULL

);

CREATE TABLE IF NOT EXISTS reservation (
    id serial PRIMARY KEY,
    movie_id integer REFERENCES movies(id),
    movie_name varchar NOT NULL,
    row_nr integer NOT NULL,
    seat_nr integer NOT NULL,
    room_id integer  REFERENCES rooms(id), 
    date_time Date NOT NULL, 
    hour_time TIME NOT NULL

);
CREATE TABLE IF NOT EXISTS qa (
    id serial PRIMARY KEY,
    question varchar NOT NULL,
    answer varchar,
    subiect varchar NOT NULL,
    show integer
);
INSERT INTO rooms (seats_nr, rows_nr, room_nr) VALUES (1, 1, 1);
INSERT INTO rooms (seats_nr, rows_nr, room_nr) VALUES (2, 1, 2);
INSERT INTO rooms (seats_nr, rows_nr, room_nr) VALUES (3, 1, 3);
INSERT INTO movies (movie_name, movie_image_url, movie_description, movie_description_en, movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Scoob', 'https://m.media-amazon.com/images/M/MV5BZTJmODM0MDQtMTRjYy00YWZjLThjODItMzQ5N2I2NDBjYzA1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
 'Aceasta este prima aventură animată de lungă durată a lui Scooby-Doo, care dezvăluie modul în care el și cel mai bun prieten al său, Shaggy, au devenit doi dintre cei mai iubiți demascatori de rau făcători din lume. Povestea ne duce înapoi la locul în care totul a început
  atunci când un tânăr pe nume Shaggy se întâlnește pentru prima dată cu Scooby și fac echipă cu Velma, Daphne și Fred pentru a lansa Echipa Misterelor.', 'Scooby and the gang face their most challenging mystery ever: a plot to unleash the ghost dog Cerberus upon the world. As they race to stop this dogpocalypse,
   the gang discovers that Scooby has an epic destiny greater than anyone imagined', '2D', 'Mark Wahlberg, Amanda Seyfried, Zac Efron, Gina Rodriguez', 1, '2021-05-27', '14:05', 'comedie', 'https://www.youtube.com/watch?v=P9mSVDm1GeM');
 INSERT INTO movies (movie_name, movie_image_url, movie_description, movie_description_en, movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Scoob', 'https://m.media-amazon.com/images/M/MV5BZTJmODM0MDQtMTRjYy00YWZjLThjODItMzQ5N2I2NDBjYzA1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
 'Aceasta este prima aventură animată de lungă durată a lui Scooby-Doo, care dezvăluie modul în care el și cel mai bun prieten al său, Shaggy, au devenit doi dintre cei mai iubiți demascatori de rau făcători din lume. Povestea ne duce înapoi la locul în care totul a început
  atunci când un tânăr pe nume Shaggy se întâlnește pentru prima dată cu Scooby și fac echipă cu Velma, Daphne și Fred pentru a lansa Echipa Misterelor.', 'Scooby and the gang face their most challenging mystery ever: a plot to unleash the ghost dog Cerberus upon the world. As they race to stop this dogpocalypse,
   the gang discovers that Scooby has an epic destiny greater than anyone imagined.','2D', 'Mark Wahlberg, Amanda Seyfried, Zac Efron, Gina Rodriguez', 2, '2021-05-26', '17:05', 'comedie', 'https://www.youtube.com/watch?v=P9mSVDm1GeM');
 INSERT INTO movies (movie_name, movie_image_url, movie_description, movie_description_en, movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Scoob', 'https://m.media-amazon.com/images/M/MV5BZTJmODM0MDQtMTRjYy00YWZjLThjODItMzQ5N2I2NDBjYzA1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
 'Aceasta este prima aventură animată de lungă durată a lui Scooby-Doo, care dezvăluie modul în care el și cel mai bun prieten al său, Shaggy, au devenit doi dintre cei mai iubiți demascatori de rau făcători din lume. Povestea ne duce înapoi la locul în care totul a început
  atunci când un tânăr pe nume Shaggy se întâlnește pentru prima dată cu Scooby și fac echipă cu Velma, Daphne și Fred pentru a lansa Echipa Misterelor.', 'Scooby and the gang face their most challenging mystery ever: a plot to unleash the ghost dog Cerberus upon the world. As they race to stop this dogpocalypse,
   the gang discovers that Scooby has an epic destiny greater than anyone imagined', '2D', 'Mark Wahlberg, Amanda Seyfried, Zac Efron, Gina Rodriguez', 1, '2021-05-25', '16:05', 'comedie', 'https://www.youtube.com/watch?v=P9mSVDm1GeM');
 INSERT INTO movies (movie_name, movie_image_url, movie_description, movie_description_en, movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Scoob', 'https://m.media-amazon.com/images/M/MV5BZTJmODM0MDQtMTRjYy00YWZjLThjODItMzQ5N2I2NDBjYzA1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
 'Aceasta este prima aventură animată de lungă durată a lui Scooby-Doo, care dezvăluie modul în care el și cel mai bun prieten al său, Shaggy, au devenit doi dintre cei mai iubiți demascatori de rau făcători din lume. Povestea ne duce înapoi la locul în care totul a început
  atunci când un tânăr pe nume Shaggy se întâlnește pentru prima dată cu Scooby și fac echipă cu Velma, Daphne și Fred pentru a lansa Echipa Misterelor.', 'Scooby and the gang face their most challenging mystery ever: a plot to unleash the ghost dog Cerberus upon the world. As they race to stop this dogpocalypse,
   the gang discovers that Scooby has an epic destiny greater than anyone imagined', '2D', 'Mark Wahlberg, Amanda Seyfried, Zac Efron, Gina Rodriguez', 1, '2021-05-28', '14:00', 'comedie', 'https://www.youtube.com/watch?v=P9mSVDm1GeM');
 INSERT INTO movies (movie_name, movie_image_url, movie_description, movie_description_en, movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Scoob', 'https://m.media-amazon.com/images/M/MV5BZTJmODM0MDQtMTRjYy00YWZjLThjODItMzQ5N2I2NDBjYzA1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
 'Aceasta este prima aventură animată de lungă durată a lui Scooby-Doo, care dezvăluie modul în care el și cel mai bun prieten al său, Shaggy, au devenit doi dintre cei mai iubiți demascatori de rau făcători din lume. Povestea ne duce înapoi la locul în care totul a început
  atunci când un tânăr pe nume Shaggy se întâlnește pentru prima dată cu Scooby și fac echipă cu Velma, Daphne și Fred pentru a lansa Echipa Misterelor.', 'Scooby and the gang face their most challenging mystery ever: a plot to unleash the ghost dog Cerberus upon the world. As they race to stop this dogpocalypse,
   the gang discovers that Scooby has an epic destiny greater than anyone imagined', '2D', 'Mark Wahlberg, Amanda Seyfried, Zac Efron, Gina Rodriguez', 1, '2021-05-29', '16:35', 'comedie', 'https://www.youtube.com/watch?v=P9mSVDm1GeM');
 INSERT INTO movies (movie_name, movie_image_url, movie_description, movie_description_en, movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Wonder Woman 1984', 'https://upload.wikimedia.org/wikipedia/en/4/4e/Wonder_Woman_1984.png', 'Soarta lumii este din nou în pericol și doar 
 Femeia Fantastică o poate salva. Diana Prince trăiește în liniște printre muritori în perioada vibrantă anilor 1980 – o perioadă a excesului în care țelul e să ai tot. Deși și-a recăpătat complet puterile, ea își ține identitatea ascunsă lucrând drept curator pentru artefacte
  antice. Însă curând, Diana e nevoită să își adune toată puterea, înțelepciunea și curajul când trebuie să îi confrunte pe Max Lord și Cheetah, o răufăcătoare cu o putere și agilitate ieșite din comun.','Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down
   a path of destruction, after an ancient artifact that grants wishes goes missing.', '2D', 'Gal Gadot, Chris Pine, Kristen Wiig, Jonathan Ajayi', 2, '2021-05-27', '19:00', 'comedie', 'https://www.youtube.com/watch?v=XW2E2Fnh52w' );
  INSERT INTO movies (movie_name, movie_image_url, movie_description, movie_description_en, movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Wonder Woman 1984', 'https://upload.wikimedia.org/wikipedia/en/4/4e/Wonder_Woman_1984.png', 'Soarta lumii este din nou în pericol și doar 
 Femeia Fantastică o poate salva. Diana Prince trăiește în liniște printre muritori în perioada vibrantă anilor 1980 – o perioadă a excesului în care țelul e să ai tot. Deși și-a recăpătat complet puterile, ea își ține identitatea ascunsă lucrând drept curator pentru artefacte
  antice. Însă curând, Diana e nevoită să își adune toată puterea, înțelepciunea și curajul când trebuie să îi confrunte pe Max Lord și Cheetah, o răufăcătoare cu o putere și agilitate ieșite din comun.', 'Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down 
  a path of destruction, after an ancient artifact that grants wishes goes missing.', '2D', 'Gal Gadot, Chris Pine, Kristen Wiig, Jonathan Ajayi', 2, '2021-05-28', '19:00', 'comedie', 'https://www.youtube.com/watch?v=XW2E2Fnh52w' );
  INSERT INTO movies (movie_name, movie_image_url, movie_description,  movie_description_en,movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Wonder Woman 1984', 'https://upload.wikimedia.org/wikipedia/en/4/4e/Wonder_Woman_1984.png', 'Soarta lumii este din nou în pericol și doar 
 Femeia Fantastică o poate salva. Diana Prince trăiește în liniște printre muritori în perioada vibrantă anilor 1980 – o perioadă a excesului în care țelul e să ai tot. Deși și-a recăpătat complet puterile, ea își ține identitatea ascunsă lucrând drept curator pentru artefacte
  antice. Însă curând, Diana e nevoită să își adune toată puterea, înțelepciunea și curajul când trebuie să îi confrunte pe Max Lord și Cheetah, o răufăcătoare cu o putere și agilitate ieșite din comun.', 'Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down 
  a path of destruction, after an ancient artifact that grants wishes goes missing.', '2D', 'Gal Gadot, Chris Pine, Kristen Wiig, Jonathan Ajayi', 2, '2021-05-29', '19:00', 'comedie', 'https://www.youtube.com/watch?v=XW2E2Fnh52w' );
  INSERT INTO movies (movie_name, movie_image_url, movie_description,  movie_description_en,movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Wonder Woman 1984', 'https://upload.wikimedia.org/wikipedia/en/4/4e/Wonder_Woman_1984.png', 'Soarta lumii este din nou în pericol și doar 
 Femeia Fantastică o poate salva. Diana Prince trăiește în liniște printre muritori în perioada vibrantă anilor 1980 – o perioadă a excesului în care țelul e să ai tot. Deși și-a recăpătat complet puterile, ea își ține identitatea ascunsă lucrând drept curator pentru artefacte
  antice. Însă curând, Diana e nevoită să își adune toată puterea, înțelepciunea și curajul când trebuie să îi confrunte pe Max Lord și Cheetah, o răufăcătoare cu o putere și agilitate ieșite din comun.', 'Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down
   a path of destruction, after an ancient artifact that grants wishes goes missing.', '2D', 'Gal Gadot, Chris Pine, Kristen Wiig, Jonathan Ajayi', 2, '2021-05-26', '21:00', 'comedie', 'https://www.youtube.com/watch?v=XW2E2Fnh52w' );
  INSERT INTO movies (movie_name, movie_image_url, movie_description,  movie_description_en, movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Wonder Woman 1984', 'https://upload.wikimedia.org/wikipedia/en/4/4e/Wonder_Woman_1984.png', 'Soarta lumii este din nou în pericol și doar 
 Femeia Fantastică o poate salva. Diana Prince trăiește în liniște printre muritori în perioada vibrantă anilor 1980 – o perioadă a excesului în care țelul e să ai tot. Deși și-a recăpătat complet puterile, ea își ține identitatea ascunsă lucrând drept curator pentru artefacte
  antice. Însă curând, Diana e nevoită să își adune toată puterea, înțelepciunea și curajul când trebuie să îi confrunte pe Max Lord și Cheetah, o răufăcătoare cu o putere și agilitate ieșite din comun.',  'Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down
   a path of destruction, after an ancient artifact that grants wishes goes missing.', '2D', 'Gal Gadot, Chris Pine, Kristen Wiig, Jonathan Ajayi', 2, '2021-05-25', '18:00', 'comedie', 'https://www.youtube.com/watch?v=XW2E2Fnh52w' );
  INSERT INTO movies (movie_name, movie_image_url, movie_description, movie_description_en, movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Wonder Woman 1984', 'https://upload.wikimedia.org/wikipedia/en/4/4e/Wonder_Woman_1984.png', 'Soarta lumii este din nou în pericol și doar 
 Femeia Fantastică o poate salva. Diana Prince trăiește în liniște printre muritori în perioada vibrantă anilor 1980 – o perioadă a excesului în care țelul e să ai tot. Deși și-a recăpătat complet puterile, ea își ține identitatea ascunsă lucrând drept curator pentru artefacte
  antice. Însă curând, Diana e nevoită să își adune toată puterea, înțelepciunea și curajul când trebuie să îi confrunte pe Max Lord și Cheetah, o răufăcătoare cu o putere și agilitate ieșite din comun.', 'Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down 
  a path of destruction, after an ancient artifact that grants wishes goes missing.','2D', 'Gal Gadot, Chris Pine, Kristen Wiig, Jonathan Ajayi', 2, '2021-05-27', '22:00', 'comedie', 'https://www.youtube.com/watch?v=XW2E2Fnh52w' );
  INSERT INTO movies (movie_name, movie_image_url, movie_description, movie_description_en, movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Wonder Woman 1984', 'https://upload.wikimedia.org/wikipedia/en/4/4e/Wonder_Woman_1984.png', 'Soarta lumii este din nou în pericol și doar 
 Femeia Fantastică o poate salva. Diana Prince trăiește în liniște printre muritori în perioada vibrantă anilor 1980 – o perioadă a excesului în care țelul e să ai tot. Deși și-a recăpătat complet puterile, ea își ține identitatea ascunsă lucrând drept curator pentru artefacte
  antice. Însă curând, Diana e nevoită să își adune toată puterea, înțelepciunea și curajul când trebuie să îi confrunte pe Max Lord și Cheetah, o răufăcătoare cu o putere și agilitate ieșite din comun.', 'Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down
   a path of destruction, after an ancient artifact that grants wishes goes missing.', '2D', 'Gal Gadot, Chris Pine, Kristen Wiig, Jonathan Ajayi', 2, '2021-05-28', '16:00', 'comedie', 'https://www.youtube.com/watch?v=XW2E2Fnh52w' );
  INSERT INTO movies (movie_name, movie_image_url, movie_description,  movie_description_en, movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Wonder Woman 1984', 'https://upload.wikimedia.org/wikipedia/en/4/4e/Wonder_Woman_1984.png', 'Soarta lumii este din nou în pericol și doar 
 Femeia Fantastică o poate salva. Diana Prince trăiește în liniște printre muritori în perioada vibrantă anilor 1980 – o perioadă a excesului în care țelul e să ai tot. Deși și-a recăpătat complet puterile, ea își ține identitatea ascunsă lucrând drept curator pentru artefacte
  antice. Însă curând, Diana e nevoită să își adune toată puterea, înțelepciunea și curajul când trebuie să îi confrunte pe Max Lord și Cheetah, o răufăcătoare cu o putere și agilitate ieșite din comun.', ' Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down
  a path of destruction, after an ancient artifact that grants wishes goes missing.', '2D', 'Gal Gadot, Chris Pine, Kristen Wiig, Jonathan Ajayi', 2, '2021-05-26', '16:00', 'comedie','https://www.youtube.com/watch?v=XW2E2Fnh52w' );
  INSERT INTO movies (movie_name, movie_image_url, movie_description,  movie_description_en,movie_format, movie_cast, room_id, date_time, hour_time, gen, trailer) VALUES ('Wonder Woman 1984', 'https://upload.wikimedia.org/wikipedia/en/4/4e/Wonder_Woman_1984.png', 'Soarta lumii este din nou în pericol și doar 
 Femeia Fantastică o poate salva. Diana Prince trăiește în liniște printre muritori în perioada vibrantă anilor 1980 – o perioadă a excesului în care țelul e să ai tot. Deși și-a recăpătat complet puterile, ea își ține identitatea ascunsă lucrând drept curator pentru artefacte
  antice. Însă curând, Diana e nevoită să își adune toată puterea, înțelepciunea și curajul când trebuie să îi confrunte pe Max Lord și Cheetah, o răufăcătoare cu o putere și agilitate ieșite din comun.', 'Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down
   a path of destruction, after an ancient artifact that grants wishes goes missing.', '2D', 'Gal Gadot, Chris Pine, Kristen Wiig, Jonathan Ajayi', 2, '2021-05-29', '16:00', 'comedie', 'https://www.youtube.com/watch?v=XW2E2Fnh52w' );

-- CREATE TABLE IF NOT EXISTS authors (
--     id serial PRIMARY KEY,
--     first_name varchar NOT NULL,
--     last_name varchar NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS publishers (
--     id serial PRIMARY KEY,
--     name varchar NOT NULL UNIQUE
-- );

-- CREATE TABLE IF NOT EXISTS books (
--     id serial PRIMARY KEY,
--     name varchar NOT NULL,
--     author_id integer REFERENCES authors(id)
-- );

-- CREATE TABLE IF NOT EXISTS publishers_books (
--     book_id integer REFERENCES books(id),
--     publisher_id integer REFERENCES publishers(id),
--     price integer NOT NULL,
--     PRIMARY KEY (book_id, publisher_id) 
-- );

CREATE TABLE IF NOT EXISTS roles (
    id serial PRIMARY KEY,
    value varchar NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    username varchar NOT NULL UNIQUE,
    password varchar NOT NULL,
    role_id integer REFERENCES roles(id)
);

INSERT INTO roles (value) VALUES ('ADMIN');
INSERT INTO roles (value) VALUES ('SUPPORT');
INSERT INTO roles (value) VALUES ('USER');
INSERT INTO users (username, password, role_id) VALUES ('admin', '$2y$10$BLMZFAnCPXX0cVRmdPP3Meu3NR/xWucAyQ4aAW2z57RlLdLPvH0Hi', 1);