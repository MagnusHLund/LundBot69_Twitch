
using LundBot69_Client.Classes.Model.DTOs;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace LundBot69_Client.Classes.Model.Database
{
    class LoginHandler
    {
        internal async Task<bool> Login(string inviteCode)
        {
            try
            {
                string apiUrl = "https://lundbotapi.magnuslund.com/api/login";

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
                    return true;
                }
                else if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
                {
                    return false;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
        }
    }
}
