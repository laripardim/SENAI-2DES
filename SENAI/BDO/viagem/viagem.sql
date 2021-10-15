drop database if exists agenciaViagem;
create database agenciaViagem;
use agenciaViagem;

create table clientes(
    id_cliente integer primary key auto_increment not null,
    nome_completo varchar(50) not null,
    rg varchar(12) not null,
    cpf varchar(11) not null,
    endereco varchar(50) not null,
    idade integer not null,
    observacoes varchar(255)
);

create table login_clientes(
    id_cliente integer not null primary key, 
    email varchar(64) not null,
    senha varchar(64) not null
);

create table pedido(
    id_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    id_pacote integer,
    id_viagem integer,
    id_hospedagem integer,
    id_guia integer
);

create table pacote(
    id_pacote integer not null primary key auto_increment,
    id_hospedagem integer,
    id_viagem integer,
    id_guia integer,
    id_avaliacao integer,
    opcionais varchar(55),
    qntd_pessoas integer not null,
    valor decimal not null
);

create table hospedagem(
    id_hospedagem integer not null primary key auto_increment,
    id_quarto integer not null,
    id_cliente integer not null,
    id_avaliacao integer,
    data_entrada date not null,
    data_saida date not null,
    quartos_reservados varchar(10) not null
);

create table quarto_hospedagem(
    id_quarto integer not null, 
    id_hospedagem integer not null
);

create table quarto(
    id_quarto integer primary key not null auto_increment,
    id_estadia integer not null,
    tipo_quarto varchar(20),
    qntd_quartos_disponiveis integer not null,
    cod_quarto varchar(6) not null,
    valor decimal not null
);

create table estadia(
    id_estadia integer primary key not null auto_increment,
    id_avaliacao integer,
    endereco varchar(100) not null,
    check_in date not null,
    check_out date not null
);

create table estadia_opcional(
    id_estadia integer not null,
    id_opcional integer not null
);

create table opcionais(
    id_opcional integer not null primary key,
    opcional varchar(40)
);

create table viagem(
    id_viagem integer not null primary key auto_increment,
    id_transporte integer not null, 
    id_avaliacao integer, 
    cidade_origem integer,
    cidade_destino integer,
    qntd_pessoas integer not null,
    valor decimal not null
);

create table transporte(
    id_transporte integer not null primary key auto_increment,
    id_avaliacao integer,
    tipo_transporte varchar(20) not null,
    companhia varchar(20) not null,
    valor decimal not null
);

create table guia(
    id_cidade integer not null, 
    ponto_turistico varchar(40)
);

create table cidades(
    id_cidade integer primary key not null auto_increment, 
    nome_cidade varchar(100) not null
);

create table avaliacao(
    id_avaliacao integer not null primary key auto_increment,
    id_cliente integer not null,
    nota decimal not null,
    comentario varchar(255)
);

alter table login_clientes add constraint fk_cliente_login foreign key (id_cliente) references clientes(id_cliente);

alter table viagem add constraint fk_viagem_transporte foreign key (id_transporte) references transporte(id_transporte);
alter table viagem add constraint fk_viagem_avaliacao foreign key (id_avaliacao) references avaliacao(id_avaliacao);
alter table viagem add constraint fk_viagem_origem foreign key (cidade_origem) references cidades(id_cidade);
alter table viagem add constraint fk_viagem_destino foreign key (cidade_destino) references cidades(id_cidade);

alter table guia add constraint fk_guia_cidade foreign key (id_cidade) references cidades(id_cidade);

alter table transporte add constraint fk_transporte_avaliacao foreign key (id_avaliacao) references avaliacao(id_avaliacao);

alter table hospedagem add constraint fk_hospedagem_quarto foreign key (id_quarto) references quarto(id_quarto);
alter table hospedagem add constraint fk_hospedagem_cliente foreign key (id_cliente) references clientes(id_cliente);
alter table hospedagem add constraint fk_hospedagem_avaliacao foreign key (id_avaliacao) references avaliacao(id_avaliacao);

alter table quarto add constraint fk_quarto_estadia foreign key (id_estadia) references estadia(id_estadia);

alter table quarto_hospedagem add constraint fk_quarto_hospedagem_quarto foreign key (id_quarto) references quarto(id_quarto);
alter table quarto_hospedagem add constraint fk_quarto_hospedagem_hospedagem foreign key (id_hospedagem) references hospedagem(id_hospedagem);

alter table estadia_opcional add constraint fk_estadia_opcional_estadia foreign key (id_estadia) references estadia(id_estadia);
alter table estadia_opcional add constraint fk_estadia_opcional_opcional foreign key (id_opcional) references opcionais(id_opcional);

alter table pedido add constraint fk_pedido_cliente foreign key (id_cliente) references clientes(id_cliente);
alter table pedido add constraint fk_pedido_pacote foreign key (id_pacote) references pacote(id_pacote);
alter table pedido add constraint fk_pedido_viagem foreign key (id_viagem) references viagem(id_viagem);
alter table pedido add constraint fk_pedido_hospedagem foreign key (id_hospedagem) references hospedagem(id_hospedagem);
alter table pedido add constraint fk_pedido_guia foreign key (id_guia) references guia(id_cidade);

alter table pacote add constraint fk_pacote_viagem foreign key (id_viagem) references viagem(id_viagem);
alter table pacote add constraint fk_pacote_avaliacao foreign key (id_avaliacao) references avaliacao(id_avaliacao);
alter table pacote add constraint fk_pacote_hospedagem foreign key (id_hospedagem) references hospedagem(id_hospedagem);
alter table pacote add constraint fk_pacote_guia foreign key (id_guia) references guia(id_cidade);

-- select * from login_clientes;

describe clientes;
insert into clientes(nome_completo,rg,cpf,endereco,idade,observacoes) value
("Josefina Andrade", 592551349,49005473878,"rua andorinhas",21,"cardiaca, porem consegue voar");

descibe login_clientes;
insert into login_clientes(email,senha) value
("laripardim@gmail.com", 1234567890);

describe pedido;
insert into pedido(id_cliente,id_pacote,id_viagem,id_hospedagem,id_guia) value
(1,1,1,1,1);


select * from clientes;
select * from login_clientes;
select * from pedido;
select * from pacote;
select * from hospedagem;
select * from quarto_hospedagem;
select * from quarto;
select * from estadia;
select * from estadia_opcional;
select * from opcionais;
select * from viagem;
select * from transporte;
select * from guia;
select * from cidades;
select * from avaliacao;

show tables;

-- Incompleto