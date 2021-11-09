create database db_crema; -- Creates the new database
create user 'cremauser'@'%' identified by 'callme'; -- Creates the user
grant all on db_crema.* to 'cremauser'@'%'; -- Gives all privileges to the new user on the newly created database