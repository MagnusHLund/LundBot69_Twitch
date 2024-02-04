using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LundBot69_Client.Classes.Model.DTOs
{
    class InviteCodeDto
    {
        [JsonProperty("inviteCode")]
        public string inviteCode { get; set; }
    }
}

