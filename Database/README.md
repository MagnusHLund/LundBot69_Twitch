# LundBot69 Database

The database is uses MySQL with the InnoDB engine.
It is using the third normal form.

## Database structure

The database consists of the following tables:

- `bannedaccounts`: Stores users that can not submit song requests.
- `bannedsongs`: Stores songs that can not be submitted for song request.
- `commands`: Stores custom commands created by creators.
- `creators`: Stores information about the twitch channels, using LundBot69.
- `defaultsongs`: Stores default songs, for each creator.
- `giveaways`: Stores which participants are registered for a giveaway.
- `points`: Tracks points earned by users, by interacting with chat.
- `ratelimiting`: Manages rate limiting based on IP address.
- `settings`: Stores bot settings for creators.
- `songrequests`: Stores song requests made by users.

<div style="display: flex; justify-content: center; align-items: center;">
<img src="https://github.com/MagnusHLund/LundBot69_Twitch/assets/124877369/18122a17-44fb-4ea0-883d-e40a4f630531" alt="MySQL icon" />
</div>
