create database db_grp_b;
show databases;
use db_grp_b;

create table users(
 name varchar(50)not null,
 age int not null,
 email varchar(50) not null
);

desc users;

insert into users (name,age,email) values
('raj',23,'raj@gmail.com'),
('shail',24,'s@gmail.com'),
('manish',21,'m@gmail.com');

update users
set email='rahul@gmial.com'
where name='rahul';

SET SQL_SAFE_UPDATES = 0;

select * from users;

truncate users;


delete from users 
where name='manish';

-- delete truncate drop

alter table users ADD gender varchar(10);
alter table users change gender new_gender varchar(20);
desc users;