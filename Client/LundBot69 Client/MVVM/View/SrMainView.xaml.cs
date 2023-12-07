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

namespace LundBot69_Client.MVVM.View
{
	/// <summary>
	/// Interaction logic for SrView.xaml
	/// </summary>
	public partial class SrView : UserControl
	{
		public SrView()
		{
			InitializeComponent();
		}

		private void ListView_Loaded(object sender, RoutedEventArgs e)
		{
			ListView listView = (ListView)sender;
			GridView gridView = listView.View as GridView;

			if (gridView != null)
			{
				double totalWidth = listView.ActualWidth;

				// Set proportional widths
				gridView.Columns[0].Width = totalWidth * 0.25; // Username column
				gridView.Columns[1].Width = totalWidth * 0.5; // Points column
				gridView.Columns[2].Width = totalWidth * 0.25; // Apply column
			}
		}

		private void ApplyButton(object sender, RoutedEventArgs e)
		{

		}

		private void ApplyButton_Click(object sender, RoutedEventArgs e)
		{

		}

		private void DeleteButton_Click(object sender, RoutedEventArgs e)
		{

		}

		private void RefreshDataButton(object sender, RoutedEventArgs e)
		{

		}
	}
}
