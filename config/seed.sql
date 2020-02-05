USE db_downstream;

INSERT INTO usertypes (type, is_admin)
VALUES ("admin", 1)
, ("user", 0);

INSERT INTO rafttypes (type)
VALUES ("General");
