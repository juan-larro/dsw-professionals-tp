create database if not exists veterinary;

use veterinary;

create user if not exists dsw@'%' identified by 'dsw';
grant select, update, insert, delete on veterinary.* to dsw@'%';


create table if not exists `veterinary`.`professionals` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `dni` INT UNSIGNED NULL,
  `name` VARCHAR(255) NULL,
  `lastname` VARCHAR(255) NULL,
  `adress` VARCHAR(255) NULL,
  `phone_number` INT UNSIGNED NULL,
  `mail` VARCHAR(255) NULL,
  `birthdate` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));




insert into veterinary.professionals values(1,'44021044','Juan Bautista','Larroquette','Izarra 1212',9122018,'juanlarroquette@gmail.com','08/08/2002');
