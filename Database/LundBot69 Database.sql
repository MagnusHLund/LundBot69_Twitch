-- --------------------------------------------------------
-- Host:                         192.168.1.249
-- Server version:               10.4.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for lundbot69
CREATE DATABASE IF NOT EXISTS `lundbot69` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `lundbot69`;

-- Dumping structure for table lundbot69.bannedaccounts
CREATE TABLE IF NOT EXISTS `bannedaccounts` (
  `BannedAccountID` int(11) NOT NULL AUTO_INCREMENT,
  `CreatorID` int(11) DEFAULT NULL,
  `TwitchUsername` varchar(255) NOT NULL,
  PRIMARY KEY (`BannedAccountID`),
  KEY `CreatorID` (`CreatorID`),
  CONSTRAINT `bannedaccounts_ibfk_1` FOREIGN KEY (`CreatorID`) REFERENCES `creators` (`CreatorID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.bannedsongs
CREATE TABLE IF NOT EXISTS `bannedsongs` (
  `BannedSongID` int(11) NOT NULL AUTO_INCREMENT,
  `CreatorID` int(11) DEFAULT NULL,
  `SongLink` varchar(255) NOT NULL,
  PRIMARY KEY (`BannedSongID`),
  KEY `CreatorID` (`CreatorID`),
  CONSTRAINT `bannedsongs_ibfk_1` FOREIGN KEY (`CreatorID`) REFERENCES `creators` (`CreatorID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.commands
CREATE TABLE IF NOT EXISTS `commands` (
  `CommandID` int(11) NOT NULL AUTO_INCREMENT,
  `CreatorID` int(11) DEFAULT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Output` varchar(512) DEFAULT NULL,
  `Active` tinyint(1) DEFAULT NULL,
  `Permission` tinyint(1) DEFAULT NULL,
  `OutputType` tinyint(1) DEFAULT NULL,
  `Cost` int(11) DEFAULT NULL,
  `UserCooldown` int(11) DEFAULT NULL,
  `GlobalCooldown` int(11) DEFAULT NULL,
  `Repeat` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`CommandID`),
  KEY `CreatorID` (`CreatorID`),
  CONSTRAINT `commands_ibfk_1` FOREIGN KEY (`CreatorID`) REFERENCES `creators` (`CreatorID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.creators
CREATE TABLE IF NOT EXISTS `creators` (
  `CreatorID` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(25) NOT NULL,
  PRIMARY KEY (`CreatorID`),
  UNIQUE KEY `Username` (`Username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.defaultsongs
CREATE TABLE IF NOT EXISTS `defaultsongs` (
  `SongID` int(11) NOT NULL AUTO_INCREMENT,
  `CreatorID` int(11) NOT NULL,
  `SongLink` varchar(255) NOT NULL,
  `SongTitle` varchar(50) NOT NULL,
  PRIMARY KEY (`SongID`),
  KEY `CreatorID` (`CreatorID`),
  CONSTRAINT `defaultsongs_ibfk_1` FOREIGN KEY (`CreatorID`) REFERENCES `creators` (`CreatorID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.giveaways
CREATE TABLE IF NOT EXISTS `giveaways` (
  `GiveawayID` int(11) NOT NULL AUTO_INCREMENT,
  `CreatorID` int(11) DEFAULT NULL,
  `Participants` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`GiveawayID`),
  KEY `CreatorID` (`CreatorID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.points
CREATE TABLE IF NOT EXISTS `points` (
  `PointID` int(11) NOT NULL AUTO_INCREMENT,
  `CreatorID` int(11) DEFAULT NULL,
  `TwitchUsername` varchar(255) NOT NULL,
  `Points` int(11) DEFAULT NULL,
  PRIMARY KEY (`PointID`),
  UNIQUE KEY `TwitchUsername` (`TwitchUsername`),
  KEY `CreatorID` (`CreatorID`),
  CONSTRAINT `points_ibfk_1` FOREIGN KEY (`CreatorID`) REFERENCES `creators` (`CreatorID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.ratelimiting
CREATE TABLE IF NOT EXISTS `ratelimiting` (
  `RateLimitingID` int(11) NOT NULL AUTO_INCREMENT,
  `IpAddress` varchar(45) DEFAULT NULL,
  `LastAttemptTime` bigint(20) unsigned DEFAULT 0,
  PRIMARY KEY (`RateLimitingID`),
  UNIQUE KEY `UNIQUE` (`IpAddress`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.settings
CREATE TABLE IF NOT EXISTS `settings` (
  `SettingsID` int(11) NOT NULL AUTO_INCREMENT,
  `CreatorID` int(11) NOT NULL,
  `BotEnabled` tinyint(1) DEFAULT NULL,
  `GamblingEnabled` tinyint(1) DEFAULT NULL,
  `SongRequestsEnabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`SettingsID`) USING BTREE,
  KEY `CreatorID` (`CreatorID`),
  CONSTRAINT `settings_ibfk_1` FOREIGN KEY (`CreatorID`) REFERENCES `creators` (`CreatorID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.songrequests
CREATE TABLE IF NOT EXISTS `songrequests` (
  `RequestID` int(11) NOT NULL AUTO_INCREMENT,
  `CreatorID` int(11) DEFAULT NULL,
  `RequestUser` varchar(25) NOT NULL,
  `SongLink` varchar(255) NOT NULL,
  PRIMARY KEY (`RequestID`),
  KEY `CreatorID` (`CreatorID`),
  CONSTRAINT `songrequests_ibfk_1` FOREIGN KEY (`CreatorID`) REFERENCES `creators` (`CreatorID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
