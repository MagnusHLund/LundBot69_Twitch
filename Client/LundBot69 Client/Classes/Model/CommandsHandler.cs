using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LundBot69_Client.Classes.Model
{
    class CommandsHandler
    {
        internal async Task GetAllComands(string inviteCode)
        {
            // Should return command, action, commandId, response
        }

        internal async Task AddNewCommand(string inviteCode, string command, string response, int action)
		{

		}

        internal async Task DeleteCommand(string inviteCode, int commandId)
        {

        }

        internal async Task EditCommand(string inviteCode, int commandId, string command, string response, int action)
        {

        }
    }
}
