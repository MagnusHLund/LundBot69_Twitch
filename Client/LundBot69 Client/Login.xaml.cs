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
		LocalSaves local = new LocalSaves();

		public MainWindow()
		{
			InitializeComponent();

			FileHandling();
		}

		private void FileHandling()
		{
			local.CreateSaveFile();

			string inviteCode = local.ReadLogin();

			if (inviteCode.Length > 0)
			{
				Login(inviteCode);
			}
		}

		private async void Login(string inviteCode)
		{
			SignIn.IsEnabled = false;

			try
			{
				Database database = new Database();

				if (await database.Login(inviteCode))
				{
					local.SaveLogin(inviteCode);

					Main dashboard = new Main();
					dashboard.Show();

					Close();
				}
				else
				{
					DisplayErrorMessage("Invalid login!");
				}
			}
			catch
			{
				DisplayErrorMessage("Connection issue!");
			}
		}

		private void SignInButton(object sender, RoutedEventArgs e)
		{
			Login(InviteCode.Text);
		}

		private void DisplayErrorMessage(string error)
		{
			ErrorMessage.Visibility = Visibility.Visible;
			ErrorMessage.Text = error;
			SignIn.IsEnabled = true;
		}
	}
}
