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
	/// Interaction logic for GamblingView.xaml
	/// </summary>
	public partial class GamblingView : UserControl
	{
		public GamblingView()
		{
			InitializeComponent();
		}

		private void GamblingPointsList_Loaded(object sender, RoutedEventArgs e)
		{
			ListView listView = (ListView)sender;
			GridView gridView = listView.View as GridView;

			if (gridView != null)
			{
				double totalWidth = listView.ActualWidth;

				gridView.Columns[0].Width = totalWidth * 0.40; // Username column
				gridView.Columns[1].Width = totalWidth * 0.35;  // Points column
				gridView.Columns[2].Width = totalWidth * 0.25; // Buttons column
			}
		}

		private void ApplyGamblingChangesButton(object sender, RoutedEventArgs e)
		{

		}

		private void SearchLeaderboardButton(object sender, RoutedEventArgs e)
		{

		}
	}
}
