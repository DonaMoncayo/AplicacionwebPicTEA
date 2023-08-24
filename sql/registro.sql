
/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
DROP DATABASE IF EXISTS `registro`;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`registro` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `registro`;

DROP TABLE IF EXISTS `persona`;


CREATE TABLE `persona` (
  `idpersona` BIGINT(20) NOT NULL AUTO_INCREMENT, 
  `namen` varchar(78) NOT NULL,
  `age` varchar(3) NOT NULL,
  `genero` varchar(10) NOT NULL, 
  `namep` varchar(78) NOT NULL, 
  `mail` varchar(30) NOT NULL,  
  `num` varchar(30) NOT NULL,   
  `usuario` varchar(40) NOT NULL, 
  `pass` varchar(30) NOT NULL,
  
  
  /*`status` INT NOT NULL DEFAULT '1',*/

  
  PRIMARY KEY (`idpersona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;