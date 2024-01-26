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

		private void PointsMultiplierTextChanged(object sender, RoutedEventArgs e)
		{ 
			// This probably works, but testing is required.
			// Cant test because the textbox got invalid text in it, according to my Regex.
			// Program crashes, in current state.

			/*
			string pointsMultiplierText = (sender as TextBox).Text;

			if (!System.Text.RegularExpressions.Regex.IsMatch(pointsMultiplierText, @"^[0-9.]{0,5}$"))
			{
				byte textLength = (byte)pointsMultiplierText.Length;
				string validStringInput = pointsMultiplierText.Remove(textLength-1);

				(sender as TextBox).Text = validStringInput;

				(sender as TextBox).SelectionStart = validStringInput.Length;
			}

			if(pointsMultiplierText.Length > 2 && !pointsMultiplierText.Contains("."))
			{
				(sender as TextBox).Text = pointsMultiplierText + ".";
			} */
		}
	}
}
