create database MySqlNode;
use MySqlNode;
create table users(
    email varchar(255) primary key,
    created_at timestamp default now()
);