-- SQL (--DDL --DML --DCL)
-- DDL - desenvolvimento (create, drop, alter, show)




drop database if exists academia; -- Apaga a ultima versão do BD se existir
create database academia; -- Cria a nova versão BD
show databases; -- Mostra todos os BDs criados

use academia;

create table telefones(
    id_clientes: int, not null,
    num_telefone: txt(14), not null,
)

create table clientes(
    id_clientes: int, auto_increment
    nome varchar(50) not null primary key,
    nascimento data, not null,
    sexo char, not null,
    peso decimal, not null
    nascimento varchar(14)
);

create table fichas(
    id_clientes: int, not null,
    id_exercicios: int, not null
    dia_semana: txt(15), not null
    objetivo: txt(15), not null
    serie: (20), not null
);

create table id_exercicios(
    id_exercicios int, not null,
    descrição: txt(40), not null,
    grupo_muscular: txt(15),
    aparelho: txt(20),
);