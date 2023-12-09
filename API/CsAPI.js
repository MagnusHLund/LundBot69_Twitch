const express = require('express');
const router = express.Router();
const db = require('./Database');

router.post('/api/login', (req, res) => {
    const { inviteCode } = req.body;

    // Replace 'your_query' with your SQL query to check the invite code
    const query = 'SELECT Username FROM creators WHERE InviteCode = ? LIMIT 1';

    db.query(query, [inviteCode], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length > 0) {
                const username = results[0].Username;
                res.status(200).json({ success: true, username: username });
            } else {
                res.status(401).json({ success: false, message: 'Invalid invite code' });
            }
        }
    });
});

router.post('/api/getSongRequest', (req, res) => {
    const { inviteCode } = req.body;

    // Initialize response parameters
    let requestUser = '';
    let songLink = '';

    // Get CreatorID based on InviteCode
    const getCreatorIdQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1';

    db.query(getCreatorIdQuery, [inviteCode], (error, creatorResults) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const creatorId = creatorResults[0] ? creatorResults[0].CreatorID : null;

            if (creatorId !== null) {
                // Get the first matching row in songrequests based on CreatorID
                const getSongRequestQuery = 'SELECT RequestUser, SongLink FROM songrequests WHERE CreatorID = ? LIMIT 1';

                db.query(getSongRequestQuery, [creatorId], (error, songRequestResults) => {
                    if (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Internal Server Error' });
                    } else {
                        if (songRequestResults[0]) {
                            requestUser = songRequestResults[0].RequestUser;
                            songLink = songRequestResults[0].SongLink;
                        }

                        // Respond with the song request data
                        res.status(200).json({ requestUser, songLink });
                    }
                });
            } else {
                // No matching CreatorID found
                res.status(404).json({ error: 'No matching CreatorID found for the given InviteCode' });
            }
        }
    });
});

router.post('/api/getGamblingTop5Leaderboard', (req, res) => {
    const { inviteCode } = req.body;

    // Initialize response parameters
    let topPoints = [];

    // Get CreatorID based on InviteCode
    const getCreatorIdQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1';

    db.query(getCreatorIdQuery, [inviteCode], (error, creatorResults) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const creatorId = creatorResults[0] ? creatorResults[0].CreatorID : null;

            if (creatorId !== null) {
                // Get the top 5 points based on CreatorID from the points table
                const getTopPointsQuery = 'SELECT TwitchUsername, Points FROM points WHERE CreatorID = ? ORDER BY Points DESC LIMIT 5';

                db.query(getTopPointsQuery, [creatorId], (error, pointsResults) => {
                    if (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Internal Server Error' });
                    } else {
                        // Iterate through the results and create an array of top points data
                        topPoints = pointsResults.map(result => ({
                            twitchUsername: result.TwitchUsername,
                            points: result.Points
                        }));

                        // Respond with the top points data
                        res.status(200).json(topPoints);
                    }
                });
            } else {
                // No matching CreatorID found
                res.status(404).json({ error: 'No matching CreatorID found for the given InviteCode' });
            }
        }
    });
});

router.post('/api/getSpecificGambler', (req, res) => {
    const { inviteCode, searchTerm } = req.body;

    // Get CreatorID from creators table based on InviteCode
    const getCreatorIDQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1';
    db.query(getCreatorIDQuery, [inviteCode], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: 'Creator not found for the given InviteCode' });
            return;
        }

        const creatorID = results[0].CreatorID;

        // Get top 5 points entries for the given CreatorID and searchTerm, sorted by Points in descending order
        const searchPointsQuery = 'SELECT TwitchUsername, Points FROM points WHERE CreatorID = ? AND TwitchUsername LIKE ? ORDER BY Points DESC LIMIT 5';
        const searchValue = `%${searchTerm}%`;

        db.query(searchPointsQuery, [creatorID, searchValue], (error, results) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            res.status(200).json(results);
        });
    });
});

router.post('/api/updateGamblingPoints', (req, res) => {
    const { inviteCode, twitchUsername, points } = req.body;

    // Get CreatorID from creators table based on InviteCode
    const getCreatorIDQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1';

    db.query(getCreatorIDQuery, [inviteCode], (error, creatorResults) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        if (creatorResults.length === 0) {
            res.status(404).json({ error: 'Creator not found for the given InviteCode' });
            return;
        }

        const creatorID = creatorResults[0].CreatorID;

        // Update Points column in the points table
        const updatePointsQuery = 'UPDATE points SET Points = ? WHERE CreatorID = ? AND TwitchUsername = ?';

        db.query(updatePointsQuery, [points, creatorID, twitchUsername], (error, updateResults) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            // Check if any rows were affected (i.e., if the update was successful)
            if (updateResults.affectedRows === 1) {
                res.status(200).json({ message: 'Gambling points updated successfully' });
            } else {
                res.status(404).json({ error: 'No matching row found for the given CreatorID and TwitchUsername' });
            }
        });
    });
});


router.post('/api/getCreatorSettings', (req, res) => {
    const { inviteCode } = req.body;

    // Initialize response parameters
    let startupAuthData = {};

    // Get CreatorID based on InviteCode
    const getCreatorIdQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1';

    db.query(getCreatorIdQuery, [inviteCode], (error, creatorResults) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const creatorId = creatorResults[0] ? creatorResults[0].CreatorID : null;

            if (creatorId !== null) {
                // Get startup authentication data based on CreatorID from the settings table
                const getStartupAuthQuery = 'SELECT BotEnabled, GamblingEnabled, SongRequestsEnabled FROM settings WHERE CreatorID = ? LIMIT 1';

                db.query(getStartupAuthQuery, [creatorId], (error, authResults) => {
                    if (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Internal Server Error' });
                    } else {
                        if (authResults[0]) {
                            // Assign the values to the response parameters
                            startupAuthData = {
                                botEnabled: authResults[0].BotEnabled,
                                gamblingEnabled: authResults[0].GamblingEnabled,
                                songRequestsEnabled: authResults[0].SongRequestsEnabled
                            };

                            // Respond with the startup authentication data
                            res.status(200).json(startupAuthData);
                        } else {
                            // No matching data found in the settings table
                            res.status(404).json({ error: 'No matching data found in the settings table for the given CreatorID' });
                        }
                    }
                });
            } else {
                // No matching CreatorID found
                res.status(404).json({ error: 'No matching CreatorID found for the given InviteCode' });
            }
        }
    });
});

router.post('/api/getDefaultSongs', (req, res) => {
    const { inviteCode } = req.body;

    // Get CreatorID based on InviteCode
    const getCreatorIDQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1';
    db.query(getCreatorIDQuery, [inviteCode], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length === 0) {
                res.status(404).json({ error: 'Creator not found for the provided InviteCode' });
            } else {
                const creatorID = results[0].CreatorID;

                // Get defaultSongs based on CreatorID
                const getDefaultSongsQuery = 'SELECT SongID, SongLink, SongTitle FROM defaultSongs WHERE CreatorID = ?';
                db.query(getDefaultSongsQuery, [creatorID], (error, songsResults) => {
                    if (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Internal Server Error' });
                    } else {
                        // Return the SongLinks
                        const songLinks = songsResults.map(song => song.SongLink);
                        res.status(200).json({ defaultSongs: songLinks });
                    }
                });
            }
        }
    });
});

router.post('/api/getCommands', (req, res) => {
    const { inviteCode } = req.body;

    // Get CreatorID based on InviteCode
    const getCreatorIDQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1';
    db.query(getCreatorIDQuery, [inviteCode], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length === 0) {
                res.status(404).json({ error: 'Creator not found for the provided InviteCode' });
            } else {
                const creatorID = results[0].CreatorID;

                // Get commands based on CreatorID
                const getCommandsQuery = 'SELECT Active, Command, Action FROM commands WHERE CreatorID = ?';
                db.query(getCommandsQuery, [creatorID], (error, commandsResults) => {
                    if (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Internal Server Error' });
                    } else {
                        // Return the commands data
                        res.status(200).json({ commands: commandsResults });
                    }
                });
            }
        }
    });
});

router.post('/api/getBannedSongs', (req, res) => {
    const { inviteCode } = req.body;

    // Get CreatorID based on InviteCode
    const getCreatorIDQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1';
    db.query(getCreatorIDQuery, [inviteCode], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length === 0) {
                res.status(404).json({ error: 'Creator not found for the provided InviteCode' });
            } else {
                const creatorID = results[0].CreatorID;

                // Get banned songs based on CreatorID
                const getBannedSongsQuery = 'SELECT SongLink FROM bannedsongs WHERE CreatorID = ?';
                db.query(getBannedSongsQuery, [creatorID], (error, bannedSongsResults) => {
                    if (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Internal Server Error' });
                    } else {
                        // Return the banned songs data
                        res.status(200).json({ bannedSongs: bannedSongsResults });
                    }
                });
            }
        }
    });
});

router.post('/api/getBannedAccounts', (req, res) => {
    const { inviteCode } = req.body;

    // Get CreatorID based on InviteCode
    const getCreatorIDQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1';
    db.query(getCreatorIDQuery, [inviteCode], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            if (results.length === 0) {
                res.status(404).json({ error: 'Creator not found for the provided InviteCode' });
            } else {
                const creatorID = results[0].CreatorID;

                // Get banned accounts based on CreatorID
                const getBannedAccountsQuery = 'SELECT TwitchUsername FROM bannedaccounts WHERE CreatorID = ?';
                db.query(getBannedAccountsQuery, [creatorID], (error, bannedAccountsResults) => {
                    if (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Internal Server Error' });
                    } else {
                        // Return the banned accounts data
                        res.status(200).json({ bannedAccounts: bannedAccountsResults });
                    }
                });
            }
        }
    });
});

router.post('/api/ensureSettings', (req, res) => {
    const { inviteCode } = req.body;

    // Get CreatorID based on InviteCode
    const getCreatorIdQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1';
    db.query(getCreatorIdQuery, [inviteCode], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: 'Creator not found for the given InviteCode' });
            return;
        }

        const creatorID = results[0].CreatorID;

        // Check if the creator has a row in the settings table
        const checkSettingsQuery = 'SELECT * FROM settings WHERE CreatorID = ? LIMIT 1';
        db.query(checkSettingsQuery, [creatorID], (error, settingsResults) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            if (settingsResults.length === 0) {
                // If no row exists, create a new row with default values
                const insertSettingsQuery = 'INSERT INTO settings (CreatorID, BotEnabled, GamblingEnabled, SongRequestsEnabled) VALUES (?, 1, 1, 1)';
                db.query(insertSettingsQuery, [creatorID], (error) => {
                    if (error) {
                        console.error(error);
                        res.status(500).json({ error: 'Internal Server Error' });
                        return;
                    }

                    // Respond with the default settings
                    res.status(200).json({ BotEnabled: 1, GamblingEnabled: 1, SongRequestsEnabled: 1 });
                });
            } else {
                // If a row exists, respond with the existing settings
                const existingSettings = {
                    BotEnabled: settingsResults[0].BotEnabled,
                    GamblingEnabled: settingsResults[0].GamblingEnabled,
                    SongRequestsEnabled: settingsResults[0].SongRequestsEnabled,
                };
                res.status(200).json(existingSettings);
            }
        });
    });
});

router.post('/api/updateSettings', (req, res) => {
    const { inviteCode, botEnabled, gamblingEnabled, songRequestsEnabled } = req.body;

    // Get CreatorID from creators table based on InviteCode
    const getCreatorIDQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1';

    db.query(getCreatorIDQuery, [inviteCode], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Creator not found for the given InviteCode' });
        } else {
            const creatorID = results[0].CreatorID;

            // Update the settings table based on CreatorID
            const updateSettingsQuery = 'UPDATE settings SET BotEnabled = ?, GamblingEnabled = ?, SongRequestsEnabled = ? WHERE CreatorID = ?';

            db.query(updateSettingsQuery, [botEnabled, gamblingEnabled, songRequestsEnabled, creatorID], (error, updateResults) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    res.status(200).json({ message: 'Settings updated successfully' });
                }
            });
        }
    });
});

router.post('/api/getRequestedSong', (req, res) => {
    const { inviteCode } = req.body

    // Get the creator id, based on the inviteCode 
    const getCreatorIDQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1'

    db.query(getCreatorIDQuery, [inviteCode], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Creator not found for the given InviteCode' });
        } else {
            const creatorID = results[0].CreatorID;

            const getRequestedSongQuery = 'SELECT RequestUser, SongLink FROM songrequests WHERE CreatorID = ? LIMIT 1'

            db.query(getRequestedSongQuery, [creatorID], (error, songResults) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Internal Server Error' });
                } else if (songResults.length === 0) {
                    res.status(404).json({ error: 'No requested song found for this creator' });
                } else {
                    const requestedSong = {
                        requestUser: songResults[0].RequestUser,
                        songLink: songResults[0].SongLink
                    };
                    res.status(200).json({ requestedSong });
                }
            })
        }
    })
})

router.post('/api/getCreatorSongs', (req, res) => {
    const { inviteCode } = req.body;

    // Get the creator id, based on the inviteCode 
    const getCreatorIDQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1'

    db.query(getCreatorIDQuery, [inviteCode], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Creator not found for the given InviteCode' });
        } else {
            const creatorID = results[0].CreatorID;

            const getCreatorSongsQuery = 'SELECT SongLink, SongTitle FROM defaultsongs WHERE CreatorID = ?';

            db.query(getCreatorSongsQuery, [creatorID], (error, songResults) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Internal Server Error' });
                } else if (songResults.length === 0) {
                    res.status(404).json({ error: 'No default songs found for this creator' });
                } else {
                    // Map each song result to an object with SongLink and SongTitle properties
                    const creatorSongs = songResults.map(result => ({
                        SongLink: result.SongLink,
                        SongTitle: result.SongTitle
                    }));
                    res.status(200).json({ creatorSongs });
                }
            });
        }
    });
});

router.post('/api/addDefaultSong', (req, res) => {
    const { inviteCode, songTitle, songLink } = req.body;

    // Get CreatorID from creators table based on InviteCode
    const getCreatorIDQuery = 'SELECT CreatorID FROM creators WHERE InviteCode = ? LIMIT 1';

    db.query(getCreatorIDQuery, [inviteCode], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Creator not found for the given InviteCode' });
        } else {
            const creatorID = results[0].CreatorID;

            // Add a new row to defaultsongs table for the given CreatorID
            const addDefaultSongQuery = 'INSERT INTO defaultsongs (CreatorID, SongLink, SongTitle) VALUES (?, ?, ?)';
            
            db.query(addDefaultSongQuery, [creatorID, songLink, songTitle], (error, addResults) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    res.status(200).json({ message: 'Default song added successfully' });
                }
            });
        }
    });
});


module.exports = router;