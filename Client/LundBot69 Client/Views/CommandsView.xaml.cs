using System;
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

namespace LundBot69_Client.Views
{
	/// <summary>
	/// Interaction logic for CommandsView.xaml
	/// </summary>
	public partial class CommandsView : UserControl
	{
		public CommandsView()
		{
			InitializeComponent();
		}

		private void CommandsList_Loaded(object sender, RoutedEventArgs e)
		{
			ListView listView = (ListView)sender;
			GridView gridView = listView.View as GridView;

			if (gridView != null)
			{
				double totalWidth = listView.ActualWidth;

				gridView.Columns[0].Width = totalWidth * 0.35; // Command name column
				gridView.Columns[1].Width = totalWidth * 0.25;  // Permission column
				gridView.Columns[2].Width = totalWidth * 0.15;  // Cost column
				gridView.Columns[3].Width = totalWidth * 0.25;  // Buttons column
			}
		}

		private void DiscardChangesButton(object sender, RoutedEventArgs e)
		{
			
		}

		private void ApplyChangesButton(object sender, RoutedEventArgs e)
		{

		}

		private void DeleteButton(object sender, RoutedEventArgs e)
		{

		}

		private void EditButton(object sender, RoutedEventArgs e)
		{

		}

		private void TextBox_TextChanged()
		{

		}
	}
}
