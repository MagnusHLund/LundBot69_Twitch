﻿#pragma checksum "..\..\..\..\Views\SrBansView.xaml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4C5F3C871991A6BD77B55DE03ACFA00F93383097"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using LundBot69_Client.Views;
using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Controls.Ribbon;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Media.Imaging;
using System.Windows.Media.Media3D;
using System.Windows.Media.TextFormatting;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Shell;


namespace LundBot69_Client.Views {
    
    
    /// <summary>
    /// SrBansView
    /// </summary>
    public partial class SrBansView : System.Windows.Controls.UserControl, System.Windows.Markup.IComponentConnector, System.Windows.Markup.IStyleConnector {
        
        
        #line 33 "..\..\..\..\Views\SrBansView.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox UsernameBan;
        
        #line default
        #line hidden
        
        
        #line 42 "..\..\..\..\Views\SrBansView.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox YoutubeLinkBan;
        
        #line default
        #line hidden
        
        
        #line 51 "..\..\..\..\Views\SrBansView.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox TwitchUsernameSearch;
        
        #line default
        #line hidden
        
        
        #line 59 "..\..\..\..\Views\SrBansView.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox YoutubeLinkSearch;
        
        #line default
        #line hidden
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "8.0.0.0")]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Uri resourceLocater = new System.Uri("/LundBot69 Client;component/views/srbansview.xaml", System.UriKind.Relative);
            
            #line 1 "..\..\..\..\Views\SrBansView.xaml"
            System.Windows.Application.LoadComponent(this, resourceLocater);
            
            #line default
            #line hidden
        }
        
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "8.0.0.0")]
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Never)]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Design", "CA1033:InterfaceMethodsShouldBeCallableByChildTypes")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1800:DoNotCastUnnecessarily")]
        void System.Windows.Markup.IComponentConnector.Connect(int connectionId, object target) {
            switch (connectionId)
            {
            case 1:
            this.UsernameBan = ((System.Windows.Controls.TextBox)(target));
            return;
            case 2:
            
            #line 36 "..\..\..\..\Views\SrBansView.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.BanUser);
            
            #line default
            #line hidden
            return;
            case 3:
            this.YoutubeLinkBan = ((System.Windows.Controls.TextBox)(target));
            return;
            case 4:
            
            #line 45 "..\..\..\..\Views\SrBansView.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.BanSong);
            
            #line default
            #line hidden
            return;
            case 5:
            this.TwitchUsernameSearch = ((System.Windows.Controls.TextBox)(target));
            return;
            case 6:
            
            #line 54 "..\..\..\..\Views\SrBansView.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.UserSearch);
            
            #line default
            #line hidden
            return;
            case 7:
            this.YoutubeLinkSearch = ((System.Windows.Controls.TextBox)(target));
            return;
            case 8:
            
            #line 62 "..\..\..\..\Views\SrBansView.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.SearchSong);
            
            #line default
            #line hidden
            return;
            case 9:
            
            #line 66 "..\..\..\..\Views\SrBansView.xaml"
            ((System.Windows.Controls.ListView)(target)).Loaded += new System.Windows.RoutedEventHandler(this.BannedUsersList_Loaded);
            
            #line default
            #line hidden
            return;
            case 11:
            
            #line 96 "..\..\..\..\Views\SrBansView.xaml"
            ((System.Windows.Controls.ListView)(target)).Loaded += new System.Windows.RoutedEventHandler(this.BannedSongsList_Loaded);
            
            #line default
            #line hidden
            return;
            }
            this._contentLoaded = true;
        }
        
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "8.0.0.0")]
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Never)]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Design", "CA1033:InterfaceMethodsShouldBeCallableByChildTypes")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1800:DoNotCastUnnecessarily")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        void System.Windows.Markup.IStyleConnector.Connect(int connectionId, object target) {
            switch (connectionId)
            {
            case 10:
            
            #line 84 "..\..\..\..\Views\SrBansView.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.UnbanUser);
            
            #line default
            #line hidden
            break;
            case 12:
            
            #line 120 "..\..\..\..\Views\SrBansView.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.UnbanSong);
            
            #line default
            #line hidden
            break;
            }
        }
    }
}

