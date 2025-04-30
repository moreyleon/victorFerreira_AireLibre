-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: aire_libre_db
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` int NOT NULL,
  `size` int DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `news` varchar(255) DEFAULT NULL,
  `offers` varchar(255) DEFAULT NULL,
  `categoryId` int NOT NULL,
  `brandId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  KEY `brandId` (`brandId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Botines borussia classic','Los botines de fútbol Borussia, como los botines Puma Borussia FG están diseñados para césped natural y ofrecen tecnología de amortiguación en la entresuela,lo que proporciona mayor comodidad',150000,1,'products/botines-de-futbol-puma-borussia-classic-fg-negro1-640010104657001-1.jpg','','offers',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(2,'Botines Adidas Predator 20.3','Botines con tecnología de control de pelota, ideales para jugadores creativos.',90000,1,'products/predator.jpg','','offers',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(3,'Botines Puma Future Z 1.1','Botines flexibles que ofrecen un ajuste perfecto para movimientos exp1losivos.',110000,1,'products/puma.jpeg','','offers',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(4,'Botines New Balance Furon v6','Botines ligeros diseñados para velocidad y precisión en el campo.',95000,1,'products/botinnewbalance.jpeg','','offers',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(5,'Botines Umbro Medusae 14','Botines suaves y cómodos, ideales para jugadores que buscan el control del balón.',85000,1,'products/umbromedusa.jpg','news','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(6,'Zapatillas Adidas Ultraboost','Zapatillas altamente cómodas con tecnología de energía de retorno, perfectas para correr.',110000,1,'products/zapaultra.jpg','news','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(7,'Zapatillas Puma RS-X','Zapatillas con un diseño retro moderno, combinan comodidad y estilo.',110000,1,'products/zapatillapuma.jpeg','news','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(8,'Zapatillas New Balance 990v5','Zapatillas de running que ofrecen una mezcla perfecta de soporte y comodidad.',175000,1,'products/zapanewbalance.jpg','news','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(9,'Zapatillas Reebok Nano X1','Zapatillas versátiles diseñadas para entrenamiento funcional y crossfit.',120000,1,'products/zaparebook.jpeg','news','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(10,'calzado para trekking','Las botas de trekking son un calzado de montaña que se caracteriza por su robustez, resistencia y durabilidad. Están diseñadas para caminar por terrenos irregulares y difíciles, como montañas, bosques, ríos, etc.',140000,1,'products/trekking.jpeg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(11,'Pelota de Baloncesto','La pelota de baloncesto Molten, que se utiliza en competiciones oficialescomo la FIBA y la Liga Nacional de Básquet, tiene un peso de 510 gramos.Además cuenta con una estructura de 12 paneles y su circunferencia es de 75 a 78 cm.',120000,1,'products/pelotabasquet.jpeg','','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(12,'Pelota de Fútbol Adidas Tango España','Pelota oficial de fútbol, ideal para partidos y entrenamientos, con diseño icónico.',30000,1,'products/pelotafutbol.jpeg','','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(13,'Pelota de Voleibol Mikasa V300W','Pelota de voleibol de alta calidad, perfecta para entrenamiento y competición.',25000,1,'products/pelotavoley.jpg','','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(14,'Pelota de Tenis Wilson Pro Staff','Pelota de tenis premium, ideal para jugadores competitivos que buscan rendimiento.',15000,1,'products/tenispelota.jpg','','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(15,'Pelota de Rugby Gilbert Match','Pelota de rugby diseñada para partidos, con una excelente durabilidad y agarre.',50000,1,'products/rugby.jpeg','','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(16,'Remera runnig dama','La remera de running para mujer Nike Dri-FIT Miler es una prenda de manga cortaque te mantiene seca y cómoda durante tu carrera. Su tejido de malla transpirable y su tecnología Dri-FIT te ayudan a mantener la frescura y',150000,1,'products/mujer-rosa1-9abe260a5c14ccecab16560082133737-480-0.png','','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(17,'Pantalones Adidas Tiro 21','Pantalones deportivos con corte ajustado y tecnología de secado rápido.',50000,1,'products/pantalon.jpg','','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(18,'Sudadera Puma Essentials','Sudadera cómoda para entrenamiento y diario, con capucha y bolsillo frontal.',60000,1,'products/sudadera.jpeg','','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(19,'Calza Reebok Speedwick','Mallas largas de compresión, ideales para running y entrenamiento de alta intensidad.',40000,1,'products/calza.jpg','','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(20,'Campera Under Armour Rival','Campera ligera y cómoda, perfecta para calentamiento o actividades al aire libre.',55000,1,'products/campera-6.jpeg','','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(21,'Casco para bici','El casco para mountain bike Montagne cuenta con características como una luz LED con 4 destellos diferentes, un sistema de ajuste para mayor comodidad y un peso de aproximadamente 230 gramos. ',50000,1,'products/casco-bike-con-luz-blanca.jpg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(22,'Kayak','El kayak de aventura es un kayak de travesía diseñado para aguas abiertas y rápidos. Cuenta con un diseño estable y resistente, ideal para explorar ríos y lagos.',200000,1,'products/kayak.jpg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(23,'Combo caña y reel','Combo Caña 2,40 Mts Red Fish + Reel SL500-8 Red Fish IDEAL PARA PESCA DE MAR Y RIO Caña Red Fish 2,40 Mts: -Confeccionada en Fibra de Vidrio -2 Tramos ',200000,1,'products/pesca.png','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(24,'Guantes para escalar','Los guantes de escalada y alpinismo para mujer de Orbea están diseñados para ofrecer una buena protección y agarre, siendo ideales tanto para escalar  como para actividades de rappel. ',80000,1,'products/guantes.jpg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(25,'Bicicleta de montaña','La bicicleta de montaña Orbea Alma H50 es una bicicleta de montaña de alta calidad, diseñada para ofrecer un rendimiento excepcional en terrenos difíciles. Cuenta con un cuadro de aluminio ligero y resistente, una horquilla de suspensión RockShox Judy Silver TK de 100 mm de recorrido y un grupo de transmisión Shimano Deore de 12 velocidades.',1000000,1,'products/bicicleta.jpeg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(26,'Raqueta de tenis Wilson Pro Staff','Raqueta de tenis de alta calidad, diseñada para jugadores avanzados que buscan precisión y control.',20000,1,'products/raqueta.jpeg','','',1,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(27,'Carpa','Tienda de campaña de 4 personas, resistente al agua y fácil de montar.',89599,1,'products/carpa4.jpg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(28,'Mochila de Senderismo','Mochila ligera de 40 litros, ideal para excursiones largas.',55000,1,'products/mochila.jpg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(29,'Saco de Dormir','Saco de dormir térmico, adecuado para temperaturas de hasta -5°C.',37000,1,'products/bolsa1.jpg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(30,'Linterna LED','Linterna LED recargable con 5 modos de iluminación y resistencia al agua.',25000,1,'products/linterna.jpg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(31,'Cuchillo de Supervivencia','Cuchillo multifuncional de acero inoxidable con funda y herramientas adicionales.',25000,1,'products/cuchillo.jpg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(32,'Barbacoa Portátil','Barbacoa portátil de acero inoxidable, perfecta para asados en el campo.',210000,1,'products/barbacoa.jpeg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(33,'Toalla de Microfibra','Toalla de microfibra ultra absorbente y de secado rápido, ligera y compacta.',15000,1,'products/toalla.jpeg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(34,'Bote Inflable','Bote inflable de 2 personas, perfecto para paseos en lagos y ríos.',250000,1,'products/bote.jpeg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(35,'Gafas de Sol Polarizadas','Gafas de sol con lentes polarizados, perfectas para actividades al aire libre.',12000,1,'products/gafas.jpg','','',2,1,'2025-03-30 16:11:22','2025-03-30 16:11:22');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-30 16:41:49
