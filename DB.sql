
create table Sajam_automobila(
id int not null auto_increment,
naziv varchar(30) not null,
mesto varchar(30) not null,
primary key(id)
)engine=innodb default charset=utf8;

create table auto(
    id int not null auto_increment,
	naziv varchar(20),
    marka varchar(20) ,
    boja varchar(20) not null,
    poreklo varchar(20) not null,
    ks varchar(30) not null,
    broj_sedista int(20) not null,
    cena varchar(30) not null,
    sajam_id int not null,
    primary key(id),
    foreign key (sajam_id) references Sajam_automobila(id)
)engine=innodb default charset=utf8;

create table Korisnici(
id int not null auto_increment,
username varchar(30),
pasword varchar(30),
ime varchar(30),
prezime varchar(30),
primary key(id)
)engine=innodb default charset=utf8;


INSERT INTO `sajam_automobila`(`naziv`, `mesto`) VALUES ('DDS','Miti');

INSERT INTO `Korisnici`(`username`, `password`,`ime`,`prezime`) VALUES ('admin','admin','Igor','Stojanovic');

INSERT INTO `auto`(`naziv`, `marka`, `boja`, `poreklo`, `ks`, `broj_sedista`, `cena`, `sajam_id`) VALUES ('IMEENEKO','Marka neka','bojaa','dwds','sds',55,'1112',1);
INSERT INTO `auto`(`naziv`, `marka`, `boja`, `poreklo`, `ks`, `broj_sedista`, `cena`, `sajam_id`) VALUES ('I','Marka neka','bojaa','ds','sds',65,'12',1)