﻿using System;
using System.Collections.Generic;
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
using System.Windows.Shapes;
using LundBot69_Client.MVVM.Model.LocalSaves;
using LundBot69_Client.Classes.Model.Database;

namespace LundBot69_Client.MVVM.View
{
	/// <summary>
	/// Interaction logic for LoginView.xaml
	/// </summary>
	public partial class LoginView : UserControl
	{
		LocalInviteCode local = new LocalInviteCode();

		public LoginView()
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
				LoginHandler loginHandler = new LoginHandler();
					
				if (await loginHandler.Login(inviteCode))
				{
					local.SaveLogin(inviteCode);
					loginGrid.Visibility = Visibility.Hidden;
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
