using LundBot69_Client.Classes.DTOs;
using LundBot69_Client.Classes.Properties;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace LundBot69_Client.Classes.Model
{
    class SongRequestHandler
	{
		internal async Task<List<string>> GetCreatorSongs(string inviteCode)
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

			return new List<string>();
		}

		internal async Task<RequestedSong> GetSongUrl(string inviteCode)
		{
			try
			{
				string apiUrl = "https://lundbotapi.magnuslund.com/api/getRequestedSong";

				CancellationTokenSource cts = new CancellationTokenSource();
				cts.CancelAfter(TimeSpan.FromSeconds(10));

				// experimenting with DTOs
				string json = JsonConvert.SerializeObject(new InviteCodeDto
				{
					inviteCode = "gg"
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
	}
}
