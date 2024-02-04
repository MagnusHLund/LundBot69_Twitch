using LundBot69_Client.Classes.Model.DTOs;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace LundBot69_Client.MVVM.ViewModel
{
	public class LoginViewModel : INotifyPropertyChanged
	{
		private string _inviteCode;

		public string InviteCode
		{
			get { return _inviteCode; }
			set
			{
				_inviteCode = value;
				OnPropertyChanged(nameof(InviteCode));
			}
		}

		public ICommand SignInCommand { get; }

		public LoginViewModel()
		{
			SignInCommand = new RelayCommand(SignIn, CanSignIn);
		}

		private bool CanSignIn(object parameter)
		{
			return !string.IsNullOrEmpty(InviteCode);
		}

		private void SignIn(object parameter)
		{
            Console.WriteLine(InviteCode);
        }

		public event PropertyChangedEventHandler PropertyChanged;

		protected virtual void OnPropertyChanged(string propertyName)
		{
			PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
		}
	}
}
