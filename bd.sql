create database kassakismurf;
use kassakismurf;

create table registro(
email varchar(30),
senha varchar(12),
nome varchar (20)
)engine=innodb;

create table reclamacoes(
email varchar(30),
reclamacao varchar(500)
)engine=innodb;

insert into registro(email,senha,nome) values ("danilo@gmail.com","1234","danilo");
select * from registro;
select * from reclamacoes;

