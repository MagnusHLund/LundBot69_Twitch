
using LundBot69_Client.Classes.Model.DTOs;
using LundBot69_Client.Classes.Model.Properties;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace LundBot69_Client.Classes.Model.Database
{
    class SongRequestHandler
    {
        internal async Task<List<Song>> GetCreatorSongs(string inviteCode)
        {
            try
            {
                string apiUrl = "https://lundbotapi.magnuslund.com/api/getCreatorSongs";

                CancellationTokenSource cts = new CancellationTokenSource();
                cts.CancelAfter(TimeSpan.FromSeconds(10));

                string json = JsonConvert.SerializeObject(new InviteCodeDto
                {
                    inviteCode = inviteCode
                });

                HttpClient httpClient = new HttpClient();
                StringContent content = new StringContent(json, Encoding.UTF8, "application/json");

                HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content, cts.Token);

                if (response.IsSuccessStatusCode)
                {
                    string responseContent = await response.Content.ReadAsStringAsync();
                    var creatorSongsResponse = JsonConvert.DeserializeObject<CreatorSongs>(responseContent);

                    if (creatorSongsResponse != null && creatorSongsResponse.creatorSongs != null)
                    {
                        return creatorSongsResponse.creatorSongs;
                    }
                }
                else if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
                {
                    // Handle unauthorized access
                }
                else
                {
                    // Handle other errors
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return new List<Song>();
        }


        internal async Task<RequestedSong> GetSongUrl(string inviteCode)
        {
            try
            {
                string apiUrl = "https://lundbotapi.magnuslund.com/api/getRequestedSongs";

                CancellationTokenSource cts = new CancellationTokenSource();
                cts.CancelAfter(TimeSpan.FromSeconds(10));

                // experimenting with DTOs
                string json = JsonConvert.SerializeObject(new InviteCodeDto
                {
                    inviteCode = inviteCode
				});

                HttpClient httpClient = new HttpClient();

                StringContent content = new StringContent(json, Encoding.UTF8, "application/json");

                HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content, cts.Token);

                if (response.IsSuccessStatusCode)
                {
                    string responseContent = await response.Content.ReadAsStringAsync();
                    RequestedSong gamblingUsers = JsonConvert.DeserializeObject<RequestedSong>(responseContent);

                    return gamblingUsers;
                }
                else if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
                {

                }
                else
                {

                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return new RequestedSong();
        }

        internal async Task BanUser(string inviteCode, string username)
        {

        }

        internal async Task UnbanUser(string inviteCode, string username)
        {

        }

        internal async Task BanSong(string inviteCode, string SongUrl)
        {

        }

        internal async Task UnbanSong(string inviteCode, string SongUrl)
        {

        }

        internal async Task GetAllBannedUsers(string inviteCode)
        {

        }

        internal async Task GetAllBannedSongs(string inviteCode)
        {

        }

        internal async Task AddDefaultSong(string inviteCode, string title, string link)
        {
            try
            {
                string apiUrl = "https://lundbotapi.magnuslund.com/api/addDefaultSong";

                CancellationTokenSource cts = new CancellationTokenSource();
                cts.CancelAfter(TimeSpan.FromSeconds(10));

                string json = JsonConvert.SerializeObject(new
                {
                    inviteCode,
                    title,
                    link
                });

                HttpClient httpClient = new HttpClient();
                StringContent content = new StringContent(json, Encoding.UTF8, "application/json");

                HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content, cts.Token);

                if (response.IsSuccessStatusCode)
                {
                    // Handle success 

                }
                else if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
                {
                    // Handle unauthorized access
                }
                else
                {
                    // Handle other errors
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        internal async Task RemoveDefaultSong(string inviteCode, string link) // Remember to Limit 1 in query for API
        {

        }


    }
}
