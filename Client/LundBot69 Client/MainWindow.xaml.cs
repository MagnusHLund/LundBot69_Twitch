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
using System.IO;
using LundBot69_Client.Model.Local_saves;
using System.Windows.Markup;
using LundBot69_Client.Views;

namespace LundBot69_Client
{
    public partial class MainWindow : Window
	{
		HomeView homeview = new HomeView();
		LoginView loginView = new LoginView();
		SrMainView srMainView = new SrMainView();
		SrBansView srBansView = new SrBansView();
		GamblingView gamblingView = new GamblingView();
		CommandsView commandsView = new CommandsView();


		public MainWindow()
		{
			InitializeComponent();
			loginView.GridVisibilityChanged += LoginFrameVisibilityChanged;

			InitLogin();
			InitUIStartup();

		}

		private void InitLogin()
		{
			LoginFrame.Navigate(loginView);
		}

		private void InitUIStartup()
		{
			HomePage.Navigate(new Uri("Views/HomeView.xaml", UriKind.Relative));
			HomeButton.IsChecked = true;
        }

		private void ChangePageButton(object sender, RoutedEventArgs e)
		{
			if(sender is CheckBox checkbox)
			{
				string page = checkbox.Tag as string;
				SetNewView(page);
				EnsureCorrectViewCheckbox(page);
			}
		}

		private void SetNewView(string page)
		{
			object[] views = new object[]
			{
				homeview, srMainView, srBansView, gamblingView, commandsView
			};

			string test = srMainView.ToString();

			foreach (object view in views)
			{
				if (view.ToString().ToLower().Contains(page) && !page.Contains("home"))
				{
					VariableContentFrame.Visibility = Visibility.Visible;
					HomePage.Visibility = Visibility.Hidden;

					VariableContentFrame.Navigate(view);
					return;
				}
			}

			VariableContentFrame.Visibility = Visibility.Hidden;
			HomePage.Visibility = Visibility.Visible;
		}

		private void EnsureCorrectViewCheckbox(string page)
		{
			DisableViewCheckboxes();

            CheckBox[] viewCheckbox = viewCheckboxes();

			foreach (CheckBox checkbox in viewCheckbox)
			{
				if (checkbox.Tag as string == page)
				{
                    checkbox.IsChecked = true;
					break;
				}
            }
        }

		private void DisableViewCheckboxes()
		{
			CheckBox[] viewCheckbox = viewCheckboxes();

			foreach (CheckBox checkbox in viewCheckbox)
			{
				checkbox.IsChecked = false;
			}
		}

		private CheckBox[] viewCheckboxes()
		{
			CheckBox[] viewCheckbox = { HomeButton, SRButton, SRBansButton, GamblingButton, CommandsButton };

			return viewCheckbox;
		}

		private void LoginFrameVisibilityChanged(object sender, EventArgs e)
		{
			Console.WriteLine("test");
			homeview.GetAllCreatorSongs();
		}
	}
}
