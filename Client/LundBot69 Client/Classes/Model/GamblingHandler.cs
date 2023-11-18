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
    class GamblingHandler
	{
		internal async Task<GamblingUser[]> GambleLeaderboard(string search, string inviteCode)
		{
			try
			{
				CancellationTokenSource cts = new CancellationTokenSource();
				cts.CancelAfter(TimeSpan.FromSeconds(10));

				HttpClient httpClient = new HttpClient();

				if (search == "")
				{
					StringContent content = new StringContent($"{{\"inviteCode\":\"{inviteCode}\"}}", Encoding.UTF8, "application/json");
					string apiUrl = "https://lundbotapi.magnuslund.com/api/getGamblingTop5Leaderboard";
					HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content, cts.Token);

					if (response.IsSuccessStatusCode)
					{
						string responseContent = await response.Content.ReadAsStringAsync();
						List<GamblingUser> gamblingUsers = JsonConvert.DeserializeObject<List<GamblingUser>>(responseContent);

						return gamblingUsers.ToArray();
					}
					else if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
					{
						// Connected but cant get data
					}
					else
					{
						// Cant connect
					}
				}
				else
				{
					StringContent content = new StringContent($"{{\"inviteCode\":\"{inviteCode}\", \"searchTerm\":\"{search}\"}}", Encoding.UTF8, "application/json");
					string apiUrl = "https://lundbotapi.magnuslund.com/api/getSpecificGambler";
					HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content, cts.Token);

					if (response.IsSuccessStatusCode)
					{
						string responseContent = await response.Content.ReadAsStringAsync();
						List<GamblingUser> gamblingUsers = JsonConvert.DeserializeObject<List<GamblingUser>>(responseContent);
						return gamblingUsers.ToArray();
					}
					else if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
					{
						// Connected but cant get data
					}
					else
					{
						// Cant connect
					}
				}
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.ToString());
			}

			return Array.Empty<GamblingUser>();
		}

		internal async void UpdateGamblingPoints(string username, int points, string inviteCode)
		{
			try
			{
				string apiUrl = "https://lundbotapi.magnuslund.com/api/updateGamblingPoints";

				CancellationTokenSource cts = new CancellationTokenSource();
				cts.CancelAfter(TimeSpan.FromSeconds(10));

				HttpClient httpClient = new HttpClient();

				StringContent content = new StringContent($"{{\"inviteCode\":\"{inviteCode}\", \"twitchUsername\":\"{username}\", \"points\":\"{points}\"}}", Encoding.UTF8, "application/json");

				HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content, cts.Token);

				if (response.IsSuccessStatusCode)
				{
					// Data updated
				}
				else if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
				{
					// Connected by cant update data
				}
				else
				{
					// Cant connect
				}
			}
			catch (Exception e)
			{
				Console.WriteLine(e);
			}
		}
	}
}
