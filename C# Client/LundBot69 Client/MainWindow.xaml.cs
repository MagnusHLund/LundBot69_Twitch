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
using LundBot69_Client.Classes.Model.Database;
using LundBot69_Client.MVVM.Model.LocalSaves;
using LundBot69_Client.MVVM.ViewModel;
using LundBot69_Client.MVVM.Model.Local_saves;
using System.Windows.Markup;

namespace LundBot69_Client
{
    public partial class MainWindow : Window
	{
		public MainWindow()
		{
			InitializeComponent();

			InitLogin();
			InitUIStartup();
		}

		private void InitLogin()
		{
			LoginFrame.Navigate(new Uri("MVVM/View/LoginView.xaml", UriKind.Relative));
		}

		private void InitUIStartup()
		{
			HomePage.Navigate(new Uri("MVVM/View/HomeView.xaml", UriKind.Relative));
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
			PageData data = new PageData();

			foreach (string uri in data.viewUris)
			{
				if (uri.ToLower().Contains(page))
				{
					VariableContentFrame.Visibility = Visibility.Visible;
					HomePage.Visibility = Visibility.Hidden;

					VariableContentFrame.Navigate(new Uri(uri, UriKind.Relative));
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
	}
}
