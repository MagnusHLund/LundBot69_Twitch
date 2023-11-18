using LundBot69_Client.Classes.DTOs;
using LundBot69_Client.Classes.Properties;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace LundBot69_Client.Classes.Model
{
    class SongRequestHandler
	{
		internal async Task<RequestedSong> GetCreatorSongs(string inviteCode)
		{
			try
			{
				string apiUrl = "https://lundbotapi.magnuslund.com/api/getCreatorSong";

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
					inviteCode = inviteCode
				});

				HttpClient httpClient = new HttpClient();

				StringContent content = new StringContent(json, Encoding.UTF8, "application/json");

				HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content, cts.Token);

				if (response.IsSuccessStatusCode)
				{

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
