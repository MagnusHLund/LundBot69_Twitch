using LundBot69_Client.Classes.Model;
using LundBot69_Client.Classes.Properties;
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
using System.Windows.Shapes;

namespace LundBot69_Client
{
    /// <summary>
    /// Interaction logic for SrDefault.xaml
    /// </summary>
    public partial class SrDefault : Window
    {
		string _inviteCode;

		List<Song> _creatorSongs;

		public ObservableCollection<Song> defaultSongsList { get; set; }

		SongRequestHandler SongRequestHandler = new SongRequestHandler();

		public SrDefault(List<Song> creatorSongs)
        {
            InitializeComponent();

			LocalSaves local = new LocalSaves();
			_inviteCode = local.ReadLogin();

			GetAllDefaultSongs(creatorSongs);
		}

		private void GetAllDefaultSongs(List<Song> creatorSongs)
		{
			_creatorSongs = creatorSongs;

			defaultSongsList = new ObservableCollection<Song>(_creatorSongs);
			DataContext = this;
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

		private async void SearchDefaultSongs()
		{
		}

		private async void AddDefaultSong(object sender, RoutedEventArgs e)
		{
			await SongRequestHandler.AddDefaultSong(_inviteCode, SongTitleInput.Text, SongLinkInput.Text);
			await SongRequestHandler.GetCreatorSongs(_inviteCode);
		}

		private void ApplyButton_Click (object sender, RoutedEventArgs e)
		{

		}

		private void DeleteButton_Click (object sender, RoutedEventArgs e)
		{

		}
	}
}
