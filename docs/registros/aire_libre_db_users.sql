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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `rolId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail` (`mail`),
  KEY `rolId` (`rolId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`rolId`) REFERENCES `rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Juan','Pérez','juan.perez@example.com','$2b$10$7cCeVprWQEi0tShEfUOJLOZmZl2YgIBoc7WdIL5GTPayzvZFODuh2','https://example.com/images/juan.jpg',1,'2025-03-30 16:11:21','2025-03-30 16:11:21'),(2,'María','Gómez','maria.gomez@example.com','$2b$10$1fREAa2T0hbo9EFy.lLI2uE.dLvz02fSqh8CPbi7YRUn5Y10sgodK','https://example.com/images/maria.jpg',2,'2025-03-30 16:11:21','2025-03-30 16:11:21'),(3,'Carlos','López','carlos.lopez@example.com','$2b$10$MtmrdzW//cnnwCo9KJLE7OqEv8KaWzNN.MeXsMiDQF6m2L2AacH8G','https://example.com/images/carlos.jpg',2,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(4,'Ana','Martínez','ana.martinez@example.com','$2b$10$7kJP/k7MOVXj.RePVzow.uWObqYv10mBi8e0Bvv8exWKLwesi7aMO','https://example.com/images/ana.jpg',2,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(5,'victor ','ferreira','victor@hotmail.com','$2b$10$vY.1k.FbnA7l2OjW/zE42eqUm7aDAvHj8PpG8hpH/0iYpCcROuxU2',NULL,1,'2025-03-30 16:11:22','2025-03-30 16:11:22'),(6,'manuel','torrez','loro@gmail.com','$2b$10$9EgWlbAKD9elu4LmSzDehepNckZ.7SCh1.6XF6gYxK4XI7c1k7YjC',NULL,2,'2025-03-30 16:11:22','2025-03-30 16:11:22');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
