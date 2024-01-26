using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace LundBot69_Client.Classes.Model.Properties
{
    class Settings
    {
        public byte botEnabled { get; set; }
        public byte gamblingEnabled { get; set; }
        public byte songRequestsEnabled { get; set; }
    }
}
