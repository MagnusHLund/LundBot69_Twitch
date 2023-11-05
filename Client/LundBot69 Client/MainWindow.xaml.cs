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
using System.Windows.Shapes;
using LundBot69_Client.Classes.Properties;

namespace LundBot69_Client
{
	
	public partial class MainWindow : Window
	{
		public ObservableCollection<GamblingUser> Users { get; set; }

		public MainWindow()
		{
			InitializeComponent();

			Users = new ObservableCollection<GamblingUser>
			{
				new GamblingUser { Username = "User1", Points = 100 },
				new GamblingUser { Username = "User2", Points = 50 },
				new GamblingUser { Username = "User3", Points = 200 },
				new GamblingUser { Username = "User4", Points = 75 },
				new GamblingUser { Username = "User5", Points = 120 }
			};

			DataContext = this;

		}
	}
}
