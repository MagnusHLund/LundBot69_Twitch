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

namespace LundBot69_Client.Views
{
	/// <summary>
	/// Interaction logic for SrView.xaml
	/// </summary>
	public partial class SrMainView : UserControl
	{
		public SrMainView()
		{
			InitializeComponent();
			RetrieveRequestedSongs();
			RetriveDefaultSongs();
		}

		private void RetrieveRequestedSongs()
		{

		}

		private void RetriveDefaultSongs()
		{

		}

		private void RequestedSongList_Loaded(object sender, RoutedEventArgs e)
		{
			ListView listView = (ListView)sender;
			GridView gridView = listView.View as GridView;

			if (gridView != null)
			{
				double totalWidth = listView.ActualWidth;

				gridView.Columns[0].Width = totalWidth * 0.25; // Username column
				gridView.Columns[1].Width = totalWidth * 0.5;  // Link column
				gridView.Columns[2].Width = totalWidth * 0.25; // Buttons column
			}
		}

		private void DefaultSongList_Loaded(object sender, RoutedEventArgs e)
		{
			ListView listView = (ListView)sender;
			GridView gridView = listView.View as GridView;

			if (gridView != null)
			{
				double totalWidth = listView.ActualWidth;

				gridView.Columns[0].Width = 0;				   // Id column
				gridView.Columns[1].Width = totalWidth * 0.5;  // Username column
				gridView.Columns[2].Width = totalWidth * 0.25; // Link column
				gridView.Columns[3].Width = totalWidth * 0.25; // Buttons column
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

		private void AddDefaultSong(object sender, RoutedEventArgs e)
		{

		}
	}
}
