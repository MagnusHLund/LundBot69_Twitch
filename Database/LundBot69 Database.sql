CREATE DATABASE IF NOT EXISTS `lundbot69` ;
USE `lundbot69`;

CREATE TABLE IF NOT EXISTS `Commands` (
  `command_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `name` varchar(50) NOT NULL,
  `output` varchar(500) NOT NULL,
  `active` tinyint(1) NOT NULL CHECK (`active` between 0 and 1),
  `permissions` varchar(10) NOT NULL,
  `cost` int(11) unsigned NOT NULL,
  `user_cooldown_duration` float unsigned NOT NULL,
  `global_cooldown_duration` float unsigned NOT NULL,
  `global_last_used` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`command_id`),
  UNIQUE KEY `name_unique` (`fk_creator_id`,`name`),
  KEY `commands_fk_1` (`fk_creator_id`),
  CONSTRAINT `commands_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `CommandUserCooldowns` (
  `command_user_cooldown_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_command_id` int(11) unsigned NOT NULL,
  `used_by` varchar(25) NOT NULL,
  `last_used` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`command_user_cooldown_id`),
  UNIQUE KEY `used_by_unique` (`fk_command_id`,`used_by`),
  KEY `command_user_cooldowns_fk_1` (`fk_command_id`),
  CONSTRAINT `command_user_cooldowns_fk_1` FOREIGN KEY (`fk_command_id`) REFERENCES `commands` (`command_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Creators` (
  `creator_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `twitch_username` varchar(25) NOT NULL,
  PRIMARY KEY (`creator_id`),
  UNIQUE KEY `username_unique` (`twitch_username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `DefaultSongs` (
  `default_song_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `youtube_video_id` varchar(11) NOT NULL,
  `play_order` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`default_song_id`),
  UNIQUE KEY `play_order_unique` (`fk_creator_id`,`play_order`),
  KEY `Default_Songs_fk_1` (`fk_creator_id`),
  CONSTRAINT `Default_Songs_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Giveaways` (
  `giveaway_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `participant` varchar(25) NOT NULL,
  PRIMARY KEY (`giveaway_id`),
  UNIQUE KEY `participant_unique` (`fk_creator_id`,`participant`),
  KEY `Giveaways_fk_1` (`fk_creator_id`),
  CONSTRAINT `Giveaways_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Messages` (
  `message_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `name` varchar(50) NOT NULL,
  `output` varchar(500) NOT NULL,
  `repeat_message` float unsigned NOT NULL,
  PRIMARY KEY (`message_id`),
  UNIQUE KEY `name_unique` (`fk_creator_id`,`name`),
  KEY `Messages_fk_1` (`fk_creator_id`),
  CONSTRAINT `Messages_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Points` (
  `points_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `twitch_username` varchar(25) NOT NULL,
  `points` int(11) unsigned DEFAULT 0,
  PRIMARY KEY (`points_id`),
  UNIQUE KEY `twitch_username_unique` (`fk_creator_id`,`twitch_username`),
  KEY `points_index` (`points`),
  KEY `points_fk_1` (`fk_creator_id`),
  CONSTRAINT `points_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `RateLimiting` (
  `rate_limiting_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(39) NOT NULL,
  `last_attempted_time` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`rate_limiting_id`),
  UNIQUE KEY `ip_address_unique` (`ip_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `Settings` (
  `settings_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `bot_enabled` tinyint(1) NOT NULL CHECK (`bot_enabled` between 0 and 1),
  `gambling_enabled` tinyint(1) NOT NULL CHECK (`gambling_enabled` between 0 and 1),
  `song_request_enabled` tinyint(1) NOT NULL CHECK (`song_request_enabled` between 0 and 1),
  PRIMARY KEY (`settings_id`),
  KEY `settings_fk_1` (`fk_creator_id`),
  CONSTRAINT `settings_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `SongRequestBannedAccounts` (
  `song_request_banned_account_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `twitch_username` varchar(25) NOT NULL,
  PRIMARY KEY (`song_request_banned_account_id`),
  UNIQUE KEY `twitch_username_unique` (`twitch_username`,`fk_creator_id`),
  KEY `song_request_banned_accounts_fk1` (`fk_creator_id`),
  CONSTRAINT `song_request_banned_accounts_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `SongRequestBannedSongs` (
  `song_request_banned_song_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `youtube_video_id` varchar(11) NOT NULL,
  PRIMARY KEY (`song_request_banned_song_id`),
  UNIQUE KEY `youtube_video_id_unique` (`youtube_video_id`,`fk_creator_id`),
  KEY `song_request_banned_songs_fk_1` (`fk_creator_id`),
  CONSTRAINT `song_request_banned_songs_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `SongRequests` (
  `song_request_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fk_creator_id` int(11) unsigned NOT NULL,
  `requested_by` varchar(25) NOT NULL,
  `youtube_video_id` varchar(11) NOT NULL,
  `requested_at` bigint(20) NOT NULL,
  PRIMARY KEY (`song_request_id`),
  KEY `requested_at_index` (`requested_at`),
  KEY `SongRequests_fk_1` (`fk_creator_id`),
  CONSTRAINT `SongRequests_fk_1` FOREIGN KEY (`fk_creator_id`) REFERENCES `creators` (`creator_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;