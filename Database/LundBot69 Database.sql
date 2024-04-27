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
  `banned_accounts_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `twitch_username` varchar(25) NOT NULL,
  PRIMARY KEY (`banned_accounts_id`),
  KEY `twitch_username_index` (`twitch_username`),
  KEY `BannedAccounts_fk_1` (`fk_creator_id`),
  CONSTRAINT `BannedAccounts_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.bannedsongs
CREATE TABLE IF NOT EXISTS `bannedsongs` (
  `banned_song_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `youtube_song_id` varchar(11) NOT NULL,
  PRIMARY KEY (`banned_song_id`),
  KEY `BannedSongs_fk_1` (`fk_creator_id`),
  CONSTRAINT `BannedSongs_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.commands
CREATE TABLE IF NOT EXISTS `commands` (
  `command_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `name` varchar(50) NOT NULL,
  `output` varchar(450) NOT NULL,
  `active` tinyint(1) NOT NULL CHECK (`active` between 0 and 1),
  `permissions` varchar(10) NOT NULL,
  `cost` int(11) unsigned NOT NULL,
  `user_cooldown` int(11) unsigned NOT NULL,
  `global_cooldown` int(11) unsigned NOT NULL,
  `last_used` bigint(20) unsigned NOT NULL,
  `repeat` float unsigned NOT NULL,
  PRIMARY KEY (`command_id`),
  KEY `name_index` (`name`),
  KEY `commands_fk_1` (`fk_creator_id`),
  CONSTRAINT `commands_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.commandsusercooldown
CREATE TABLE IF NOT EXISTS `commandsusercooldown` (
  `command_user_cooldown_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_command_id` int(11) unsigned NOT NULL,
  `twitch_username` varchar(25) NOT NULL,
  `last_used` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`command_user_cooldown_id`),
  KEY `twitch_username_index` (`twitch_username`),
  KEY `UserCommandCooldowns_fk_1` (`fk_command_id`),
  CONSTRAINT `UserCommandCooldowns_fk_1` FOREIGN KEY (`fk_command_id`) REFERENCES `commands` (`command_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.creators
CREATE TABLE IF NOT EXISTS `creators` (
  `creator_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `twitch_username` varchar(25) NOT NULL,
  PRIMARY KEY (`creator_id`),
  UNIQUE KEY `username_unique` (`twitch_username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.defaultsongs
CREATE TABLE IF NOT EXISTS `defaultsongs` (
  `default_song_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `youtube_song_id` varchar(11) NOT NULL,
  `song_title` varchar(50) NOT NULL,
  PRIMARY KEY (`default_song_id`),
  KEY `Default_Songs_fk_1` (`fk_creator_id`),
  CONSTRAINT `Default_Songs_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.giveaways
CREATE TABLE IF NOT EXISTS `giveaways` (
  `giveaway_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `participant` varchar(25) NOT NULL,
  PRIMARY KEY (`giveaway_id`),
  KEY `Giveaways_fk_1` (`fk_creator_id`),
  CONSTRAINT `Giveaways_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.points
CREATE TABLE IF NOT EXISTS `points` (
  `point_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `twitch_username` varchar(25) NOT NULL,
  `points` int(11) unsigned DEFAULT 0,
  PRIMARY KEY (`point_id`),
  UNIQUE KEY `twitch_username_unique` (`twitch_username`),
  KEY `points_index` (`points`),
  KEY `points_fk_1` (`fk_creator_id`),
  CONSTRAINT `points_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.ratelimiting
CREATE TABLE IF NOT EXISTS `ratelimiting` (
  `rate_limiting_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(39) NOT NULL,
  `last_attempted_time` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`rate_limiting_id`),
  UNIQUE KEY `ip_address_unique` (`ip_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.settings
CREATE TABLE IF NOT EXISTS `settings` (
  `settings_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `bot_enabled` tinyint(1) NOT NULL CHECK (`bot_enabled` between 0 and 1),
  `gambling_enabled` tinyint(1) NOT NULL CHECK (`gambling_enabled` between 0 and 1),
  `song_request_enabled` tinyint(1) NOT NULL CHECK (`song_request_enabled` between 0 and 1),
  PRIMARY KEY (`settings_id`),
  KEY `settings_fk_1` (`fk_creator_id`),
  CONSTRAINT `settings_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table lundbot69.songrequests
CREATE TABLE IF NOT EXISTS `songrequests` (
  `song_request_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `requested_by` varchar(25) NOT NULL,
  `youtube_song_id` varchar(11) NOT NULL,
  `requested_at` bigint(20) NOT NULL,
  PRIMARY KEY (`song_request_id`),
  KEY `requested_at_index` (`requested_at`),
  KEY `SongRequests_fk_1` (`fk_creator_id`),
  CONSTRAINT `SongRequests_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
