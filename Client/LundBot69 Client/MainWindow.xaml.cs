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
			VariableContentFrame.Navigate(new Uri("MVVM/View/HomeView.xaml", UriKind.Relative));
			HomeButton.IsChecked = true;
        }

		private void ChangePageButton(object sender, RoutedEventArgs e)
		{
			if(sender is CheckBox checkbox)
			{
				string clickedView = GetClickedView(checkbox.Tag);
				SetNewView(clickedView);
				EnsureCorrectViewCheckbox(clickedView);
			}
		}

		private string GetClickedView(object tag)
		{
			ConstData data = new ConstData();

			foreach (string pageId in data.pageIdentifiers)
			{
				if (tag.ToString().Contains(pageId))
				{
					return pageId;
				}
			}

			return string.Empty;
		}

		private void SetNewView(string page)
		{
			ConstData data = new ConstData();

			foreach (string uri in data.viewUris)
			{
				if (uri.Contains(page))
				{
					VariableContentFrame.Navigate(new Uri(uri), UriKind.Relative);
					break;
				}
			}
		}

		private void EnsureCorrectViewCheckbox(string page)
		{
			DisableViewCheckboxes();
            Console.WriteLine(page);

            CheckBox[] viewCheckbox = viewCheckboxes();

			foreach (CheckBox checkbox in viewCheckbox)
			{
				if (checkbox.Name.ToLower().Contains(page))
				{
                    checkbox.IsChecked = true;
					break;
				}
                Console.WriteLine(checkbox);
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
