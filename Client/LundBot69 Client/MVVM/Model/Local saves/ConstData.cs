using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;

namespace LundBot69_Client.MVVM.Model.Local_saves
{
	internal class ConstData : MainWindow
	{
		internal readonly string[] pageIdentifiers =
		{
			"home",
			"sr",
			"srbans",
			"gambling",
			"commands"
		};

		internal readonly string[] viewUris = {
			"MVVM/View/HomeView.xaml",
			"MVVM/View/SrView.xaml",
			"MVVM/View/SrBansView.xaml",
			"MVVM/View/GamblingView.xaml",
			"MVVM/View/CommandsView.xaml"
		};
	}
}
