using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace LundBot69_Client.Classes.Model
{
    class Database
    {
        internal async void Login(string password1)
        {
			string apiUrl = "https://lundbotapi.magnuslund.com:443/api/login"; // Replace with your API URL
			string password = "your_password"; // Replace with the password you want to check

			var httpClient = new HttpClient();

			// Create a JSON object with the password
			var content = new StringContent($"{{\"password\":\"{password}\"}}", Encoding.UTF8, "application/json");

			// Send a POST request to the API
			HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content);

			if (response.IsSuccessStatusCode)
			{
				Console.WriteLine("Login successful.");
			}
			else if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
			{
				Console.WriteLine("Invalid password.");
			}
			else
			{
				Console.WriteLine("Error: " + response.StatusCode);
			}
		}
    }
}
