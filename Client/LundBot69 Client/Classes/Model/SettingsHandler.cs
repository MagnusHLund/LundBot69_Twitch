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
    class SettingsHandler
	{
		internal async Task<Settings> RetrieveSettings(string inviteCode)
		{
			try
			{
				string apiUrl = "https://lundbotapi.magnuslund.com/api/ensureSettings";

				CancellationTokenSource cts = new CancellationTokenSource();
				cts.CancelAfter(TimeSpan.FromSeconds(10));

				HttpClient httpClient = new HttpClient();

				StringContent content = new StringContent($"{{\"inviteCode\":\"{inviteCode}\"}}", Encoding.UTF8, "application/json");

				HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content, cts.Token);

				if (response.IsSuccessStatusCode)
				{
					string responseContent = await response.Content.ReadAsStringAsync();
					Settings gamblingUsers = JsonConvert.DeserializeObject<Settings>(responseContent);
					return gamblingUsers;
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
			catch (Exception ex)
			{
				Console.WriteLine(ex);
			}

			return new Settings();
		}

		internal async Task UpdateSettings(string inviteCode, int botEnabled, int srEnabled, int gamblingEnabled)
		{
			try
			{
				string apiUrl = "https://lundbotapi.magnuslund.com/api/updateSettings";

				CancellationTokenSource cts = new CancellationTokenSource();
				cts.CancelAfter(TimeSpan.FromSeconds(10));

				HttpClient httpClient = new HttpClient();
				StringContent content = new StringContent($"{{\"inviteCode\":\"{inviteCode}\", \"botEnabled\":{botEnabled}, \"songRequestsEnabled\":{srEnabled}, \"gamblingEnabled\":{gamblingEnabled}}}", Encoding.UTF8, "application/json");
				HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content, cts.Token);

				Console.WriteLine($"{{\"BotEnabled\":{botEnabled}, \"SongRequestsEnabled\":{srEnabled}, \"GamblingEnabled\":{gamblingEnabled}}}");

				if (response.IsSuccessStatusCode)
				{
					string responseContent = await response.Content.ReadAsStringAsync();
					Console.WriteLine($"Response Content: {responseContent}");
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
			catch (Exception ex)
			{
				Console.WriteLine(ex);
			}
		}
	}
}
