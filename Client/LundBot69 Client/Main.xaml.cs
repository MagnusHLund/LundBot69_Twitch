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
using YoutubeExplode;


namespace LundBot69_Client
{

	public partial class Main : Window
	{
		GamblingHandler gamblingHandler = new GamblingHandler();
		SettingsHandler settingsHandler = new SettingsHandler();

		public ObservableCollection<GamblingUser> Users { get; set; }

		string inviteCode;
		bool isPlayingMusic;

		public Main()
		{
			InitializeComponent();
			Users = new ObservableCollection<GamblingUser>();
			DataContext = this;

			LocalSaves local = new LocalSaves();
			inviteCode = local.ReadLogin();

			GetAllSettings();

			GetAllGamblers();
		}

		private async void GetAllGamblers()
		{
			GamblingUser[] gamblingUsers = await gamblingHandler.GambleLeaderboard("", inviteCode);
			Users.Clear();
			foreach (GamblingUser user in gamblingUsers)
			{
				Users.Add(user);
			}
		}

		private async void GetAllSettings()
		{
			Settings settings = await settingsHandler.RetrieveSettings(inviteCode);

			if (settings.botEnabled == 0)
			{
				DisableOrEnableLundBot.Content = "Enable Lundbot69";
			}

			if (settings.gamblingEnabled == 1)
			{
				GamblingCheckbox.IsChecked = true;
			}

			if (settings.songRequestsEnabled == 1)
			{
				SongRequestCheckbox.IsChecked = true;
			}
		}

		private void ListView_Loaded(object sender, RoutedEventArgs e)
		{
			ListView listView = (ListView)sender;
			GridView gridView = listView.View as GridView;

			if (gridView != null)
			{
				double totalWidth = listView.ActualWidth;

				// Set proportional widths
				gridView.Columns[0].Width = totalWidth * 0.5; // Username column
				gridView.Columns[1].Width = totalWidth * 0.25; // Points column
				gridView.Columns[2].Width = totalWidth * 0.25; // Apply column

			}
		}

		private async void SearchButton(object sender, RoutedEventArgs e)
		{
			Users.Clear();

			GamblingUser[] gamblingUsers = await gamblingHandler.GambleLeaderboard(GamblerSearch.Text, inviteCode);

			foreach (GamblingUser user in gamblingUsers)
			{
				Users.Add(user);
			}
		}

		private void CommandsButton(object sender, RoutedEventArgs e)
		{
			Commands commandWindow = new Commands();
			commandWindow.Show();
		}

		private void DefaultSongsButton(object sender, RoutedEventArgs e)
		{
			SrDefault defaultSongsWindow = new SrDefault();
			defaultSongsWindow.Show();
		}

		private void UnbanButton(object sender, RoutedEventArgs e)
		{
			SrBanned srBannedWindow = new SrBanned();
			srBannedWindow.Show();
		}

		private void BanSongButton(object sender, RoutedEventArgs e)
		{

		}

		private void PauseResumeButton(object sender, RoutedEventArgs e)
		{
			if(isPlayingMusic)
			{
				MusicPlayer.Pause();
			} else
			{
				MusicPlayer.Play();
			}

			isPlayingMusic =! isPlayingMusic;
		}

		private void MusicLengthSlider_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
		{
			MusicPlayer.Position = TimeSpan.FromSeconds(MusicLengthSlider.Value);
		}

		private void MusicPlayer_MediaOpened(object sender, RoutedEventArgs e)
		{
			MusicLengthSlider.Maximum = MusicPlayer.NaturalDuration.TimeSpan.TotalSeconds;
			songLength.Content = MusicPlayer.NaturalDuration.TimeSpan.ToString(@"mm\:ss");
			songTitle.Content = "Cool song title";
		}

		private async void MusicPlayer_MediaEnded(object sender, RoutedEventArgs e)
		{
			try
			{
				var video = await YoutubeExplode.Videos.GetAsync(videoUrl);

				// Get the stream manifest for the video
				var streamManifest = await YoutubeExplode.Videos.Streams.GetManifestAsync(video.Id);

				// Get the highest bitrate audio-only stream
				var audioStreamInfo = streamManifest.GetAudioOnly().WithHighestBitrate();

				if (audioStreamInfo != null)
				{
					// Get the actual stream
					var stream = await YoutubeExplode.Videos.Streams.GetAsync(audioStreamInfo);

					// Download the audio stream to a file
					var fileName = $"audio_{video.Id}.{audioStreamInfo.Container}";
					await YoutubeExplode.Videos.Streams.DownloadAsync(audioStreamInfo, fileName);

					Console.WriteLine($"Audio stream downloaded: {fileName}");
				}
				else
				{
					Console.WriteLine("No audio-only streams found for this video.");
				}
			}
			catch (Exception ex)
			{
				Console.WriteLine($"Error downloading audio stream: {ex.Message}");
			}
		}

		private void BanUserButton(object sender, RoutedEventArgs e)
		{

		}

		private void NextSongButton(object sender, RoutedEventArgs e)
		{

		}

		private void DisableOrEnableLundBotButton(object sender, RoutedEventArgs e)
		{
			if (DisableOrEnableLundBot.Content == "Enable Lundbot69")
			{
				DisableOrEnableLundBot.Content = "Disable Lundbot69";
			}
			else
			{
				DisableOrEnableLundBot.Content = "Enable Lundbot69";
			}

			UpdateSettings(sender, e);
		}

		private void ApplyButton(object sender, RoutedEventArgs e)
		{
			if (sender is Button button && button.Tag is GamblingUser gambler)
			{
				string username = gambler.twitchUsername;
				int points = gambler.points;

				gamblingHandler.UpdateGamblingPoints(username, points, inviteCode);
			}
		}
		private async void UpdateSettings(object sender, RoutedEventArgs e)
		{
			DisableOrEnableLundBot.IsEnabled = false;
			SongRequestCheckbox.IsEnabled = false;
			GamblingCheckbox.IsEnabled = false;

			int botEnabled = DisableOrEnableLundBot.Content == "Enable Lundbot69" ? 0 : 1;
			int srEnabled = (bool)SongRequestCheckbox.IsChecked ? 1 : 0;
			int gamblingEnabled = (bool)GamblingCheckbox.IsChecked ? 1 : 0;

			if (botEnabled != null && srEnabled != null && gamblingEnabled != null)
			{
				await settingsHandler.UpdateSettings(inviteCode, botEnabled, srEnabled, gamblingEnabled);
			}

			DisableOrEnableLundBot.IsEnabled = true;
			SongRequestCheckbox.IsEnabled = true;
			GamblingCheckbox.IsEnabled = true;

			//GetAllSettings();
		}
	}
}
