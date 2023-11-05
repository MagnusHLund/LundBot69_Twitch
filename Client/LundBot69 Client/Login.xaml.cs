using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using LundBot69_Client.Classes.Model;
using LundBot69_Client.Classes.Properties;
using System.IO;

namespace LundBot69_Client
{
	
	public partial class MainWindow : Window
	{
		static string path = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData) + @"\MagnusLund\LundBot69\");
		string filePath = path + @"Login.txt";

		public MainWindow()
		{
			InitializeComponent();

			FileHandling();
		}

		private void FileHandling()
		{
			// Creates file and directory if file does not exist
			if (!File.Exists(filePath))
			{
				Directory.CreateDirectory(path);
				File.Create(filePath).Close();
			}

			string password;

			using (StreamReader sr = new StreamReader(filePath))
			{
				password = sr.ReadToEnd().Trim();
			}

			if(password.Length > 0)
			{
				Login(password);
			}
		}

		private void Login(string password)
		{
			try
			{
				Database database = new Database();
				LocalSaves local = new LocalSaves();

				database.Login(password);

				local.SaveLogin(password, filePath);

				Close();
			}
			catch 
			{
				// Display error as label
			}
		}

		private void SignInButton(object sender, RoutedEventArgs e)
		{
			Login(Password.Text);
		}
	}
}
