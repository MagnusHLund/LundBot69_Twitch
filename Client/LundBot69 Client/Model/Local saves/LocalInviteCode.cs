using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LundBot69_Client.Model.Local_saves
{
    class LocalInviteCode
    {
        private static string path = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData) + @"\MagnusLund\LundBot69\");
        private string filePath = path + @"Login.txt";

        internal void CreateSaveFile()
        {
            if (!File.Exists(filePath))
            {
                Directory.CreateDirectory(path);
                File.Create(filePath).Close();
            }
        }

        internal void SaveLogin(string password)
        {
            using StreamWriter sw = new StreamWriter(filePath);
            {
                sw.WriteLine(password);
            }
        }

        internal string ReadLogin()
        {
            try
            {
            using (StreamReader sr = new StreamReader(filePath))
            {
                return sr.ReadToEnd().Trim();
            }
            } catch
            {
                return "failure";
            }
        }
    }
}
