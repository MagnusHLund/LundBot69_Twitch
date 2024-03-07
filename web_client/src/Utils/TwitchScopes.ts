export default function twitchScopes() {
  return [
    // https://dev.twitch.tv/docs/authentication/scopes/
    // 'moderator:manage:shoutouts',
    // 'moderator:read:shoutouts',
    'moderator:read:followers',
    'moderator:read:chatters',
    // 'moderator:manage:chat_messages',
    'channel:read:vips',
    'channel:read:subscriptions',
    'channel:read:goals',
    // 'channel:manage:broadcast',
  ]
}
