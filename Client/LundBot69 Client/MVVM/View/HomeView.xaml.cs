﻿using LundBot69_Client.Classes.Model.Database;
using LundBot69_Client.Classes.Model.Properties;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Timers;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using YoutubeExplode;
using YoutubeExplode.Videos;
using YoutubeExplode.Videos.Streams;
using LundBot69_Client.MVVM.Model.LocalSaves;

namespace LundBot69_Client.MVVM.View
{
	/// <summary>
	/// Interaction logic for HomeView.xaml
	/// </summary>
	public partial class HomeView : UserControl
	{
		string _inviteCode;
		bool _isPlayingMusic;

		int _creatorSongCounter;
		List<Song> _creatorSongs;

		bool _isDragging;

		bool _StartupSettings = true;

		SettingsHandler settingsHandler = new SettingsHandler();
		SongRequestHandler SongRequestHandler = new SongRequestHandler();

		public HomeView()
		{
			InitializeComponent();

			LocalInviteCode local = new LocalInviteCode();
			_inviteCode = local.ReadLogin();

			GetAllCreatorSongs();

			InitializeTimer();

			_StartupSettings = false;
		}

		private async void GetAllCreatorSongs()
		{
			_creatorSongs = await SongRequestHandler.GetCreatorSongs(_inviteCode);
		}

		private async void GetAllSettings()
		{ /*
			Settings settings = await settingsHandler.RetrieveSettings(_inviteCode);

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
			} */
		}

		private void InitializeTimer()
		{
			System.Timers.Timer timer = new System.Timers.Timer(1000);
			timer.Elapsed += MusicTimeCounter;
			timer.Enabled = true;
		}

		private void DefaultSongsButton(object sender, RoutedEventArgs e)
		{
			//SrDefault defaultSongsWindow = new SrDefault(_creatorSongs);
			//defaultSongsWindow.Show();
		}

		private void UnbanButton(object sender, RoutedEventArgs e)
		{
			//SrBanned srBannedWindow = new SrBanned();
			//srBannedWindow.Show();
		}

		private void BanSongButton(object sender, RoutedEventArgs e)
		{

		}

		private void PauseResumeButton(object sender, RoutedEventArgs e)
		{
			if (_isPlayingMusic)
			{
				MusicPlayer.Pause();
				SetPauseResumeImage("Images/Resume.png");
			}
			else
			{
				MusicPlayer.Play();
				SetPauseResumeImage("Images/Pause.png");

				if (MusicPlayer.Source == null)
				{
					MusicPlayer_MediaEnded(sender, e);
				}
			}

			_isPlayingMusic = !_isPlayingMusic;
		}

		private async void MusicLengthSlider_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
		{
			if (!_isDragging)
			{
				UpdateMusicPosition();
			}
		}

		private void MusicVolumeSlider_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
		{
			MusicPlayer.Volume = MusicVolumeSlider.Value / 100;
		}

		private void MusicLengthSlider_DragStarted(object sender, DragStartedEventArgs e)
		{
			_isDragging = true;
		}

		private void MusicLengthSlider_DragCompleted(object sender, DragCompletedEventArgs e)
		{
			_isDragging = false;
			UpdateMusicPosition();
		}

		private void UpdateMusicPosition()
		{
			MusicPlayer.Position = TimeSpan.FromSeconds(MusicLengthSlider.Value);
		}

		private void MusicPlayer_MediaOpened(object sender, RoutedEventArgs e)
		{
			MusicLengthSlider.Value = 0;
			MusicLengthSlider.Maximum = MusicPlayer.NaturalDuration.TimeSpan.TotalSeconds;
			songLength.Content = MusicPlayer.NaturalDuration.TimeSpan.ToString(@"mm\:ss");

			Button[] songButtons = { BanUser, NextSong, BanSong, PauseResume };

			foreach (var button in songButtons)
			{
				button.IsEnabled = true;
			}

			_isPlayingMusic = true;
			CurrentSongTimestamp.Content = "00:00";
		}

		private async void MusicPlayer_MediaEnded(object sender, RoutedEventArgs e)
		{
			RequestedSong song = await SongRequestHandler.GetSongUrl(_inviteCode);

			bool defaultPlaylist = false;

			if (song.url == null)
			{
				if (_creatorSongCounter >= _creatorSongs.Count)
				{
					_creatorSongCounter = 0;
				}

				song.url = _creatorSongs[_creatorSongCounter].SongLink;
				song.username = "Default playlist";

				_creatorSongCounter++;

				defaultPlaylist = true;
			}

			var youtube = new YoutubeClient();
			var video = await youtube.Videos.GetAsync(song.url);
			var streamManifest = await youtube.Videos.Streams.GetManifestAsync(song.url);
			var audioStreamInfo = streamManifest.GetAudioStreams().GetWithHighestBitrate();

			if (audioStreamInfo != null)
			{
				MusicPlayer.Source = new Uri(audioStreamInfo.Url);

				if (defaultPlaylist)
				{
					songTitle.Content = _creatorSongs[_creatorSongCounter - 1].SongTitle;
				}
				else
				{
					songTitle.Content = video.Title;
				}

				SrUsername.Content = song.username;
				MusicPlayer.Play();
			}
		}

		private void BanUserButton(object sender, RoutedEventArgs e)
		{

		}

		private void NextSongButton(object sender, RoutedEventArgs e)
		{
			Button[] songButtons = { BanUser, NextSong, BanSong, PauseResume };

			foreach (var button in songButtons)
			{
				button.IsEnabled = false;
			}

			MusicPlayer_MediaEnded(sender, e);
		}

		private void DisableOrEnableLundBotButton(object sender, RoutedEventArgs e)
		{ /*
			if (DisableOrEnableLundBot.Content == "Enable Lundbot69")
			{
				DisableOrEnableLundBot.Content = "Disable Lundbot69";
			}
			else
			{
				DisableOrEnableLundBot.Content = "Enable Lundbot69";
			}
			*/
			UpdateSettings(sender, e);
		}

		private async void UpdateSettings(object sender, RoutedEventArgs e)
		{ /*
			if (_StartupSettings)
			{
				DisableOrEnableLundBot.IsEnabled = false;
				SongRequestCheckbox.IsEnabled = false;
				GamblingCheckbox.IsEnabled = false;

				int botEnabled = DisableOrEnableLundBot.Content == "Enable Lundbot69" ? 0 : 1;
				int srEnabled = (bool)SongRequestCheckbox.IsChecked ? 1 : 0;
				int gamblingEnabled = (bool)GamblingCheckbox.IsChecked ? 1 : 0;

				if (botEnabled != null && srEnabled != null && gamblingEnabled != null)
				{
					await settingsHandler.UpdateSettings(_inviteCode, botEnabled, srEnabled, gamblingEnabled);
				}

				DisableOrEnableLundBot.IsEnabled = true;
				SongRequestCheckbox.IsEnabled = true;
				GamblingCheckbox.IsEnabled = true;
			} */
		}

		private void MusicTimeCounter(Object source, ElapsedEventArgs e)
		{
			Dispatcher.Invoke(() =>
			{

				if (_isPlayingMusic)
				{
					if (!_isDragging)
					{
						CurrentSongTimestamp.Content = MusicPlayer.Position.ToString(@"mm\:ss");
						MusicLengthSlider.Value = MusicPlayer.Position.TotalSeconds;

					}

					SetPauseResumeImage("Images/Pause.png");
				}
				else
				{
					SetPauseResumeImage("Images/Resume.png");
				}
			});
		}

		private void SetPauseResumeImage(string path)
		{
			Dispatcher.Invoke(() =>
			{
				BitmapImage pauseResumeBitmap = new BitmapImage();
				pauseResumeBitmap.BeginInit();
				pauseResumeBitmap.UriSource = new Uri(path, UriKind.RelativeOrAbsolute);
				pauseResumeBitmap.EndInit();
				PauseResumeImage.Source = pauseResumeBitmap;
			});
		}
	}
}