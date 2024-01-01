using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace LundBot69_Client.Resources
{
    public static class Placeholder
    {
		public static readonly DependencyProperty PlaceholderProperty =
			DependencyProperty.RegisterAttached("Placeholder", typeof(string), typeof(Placeholder));

		public static string GetPlaceholder(DependencyObject obj)
		{
			return (string)obj.GetValue(PlaceholderProperty);
		}

		public static void SetPlaceholder(DependencyObject obj, string value)
		{
			obj.SetValue(PlaceholderProperty, value);
		}
	}
}
