   M S B A M L   `   `   `  ����K  GLundBot69 Client, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null?$clr-namespace:LundBot69_Client.ViewsLundBot69_Client.Views  5      %    LundBot69_Client.Views.HomeView   5      W SPresentationCore, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      6local$clr-namespace:LundBot69_Client.Views     5      .��5	      � 
�������  � RowDefinitions  5
   
   �� 5      $��* �6   �� 5      $��* �6   .+�5   
   �� 
���   �$��2q�6%   ._�5      � $��0��6   .+�5      �� 
���   �$��2q�6-   $��10,25,482,77q�6A   ._�5      r� -   5        $��MusicPlayer��5   #   $��Stretch=�66   $��Stretch=�6T    r� Stretch$
 Fill=�6p    r� LoadedBehavior$ Manual=�6    r� UnloadedBehavior$
 Stop=�6�   6�   5      �� 5      $��Song title:��6   $��center=�6/   $
��Bold"�6L   $��390,20,0,210q�6^   �� 5      -   5        $��	songTitle��5   Y   $	��n/a��6   $��center=�6&   $��DemiBold"�6C   $��390,47,0,178q�6j   �� 5      -   5        $��MusicLengthSlider��5       �� IsMoveToPointEnabled$
 True��62   $��420,100,55,135q�6�   �� 5      -   5        $��CurrentSongTimestamp��5   C   $
��0:00��6   $
��Left=�6(   $��388,98,0,129q�6_   �� 5      -   5        $��
songLength��5   D   $
��0:00��6   $��center=�6'   $��710,95,0,132q�6V   �� 5      -   5        $��BanSong��5   x   $��214,217,0,10q�6    � ToolTip$ Ban this song��6/   $
��Left=�6G   .��5      �� $��Images/BanSong.png��6   5      �� 5      -   5        $��NextSong��5   u   $��160,217,0,10q�6   $ 	next song��6/   $
��Left=�6C   .��5      �� $��Images/NextSong.png��6   5      �� 5      -   5        $��PauseResume��5   �   $��107,217,0,10q�6   $ Pause/Resume song��6/   $
��Left=�6K   .��5       �� -	   5        $��PauseResumeImage��5    7   $��Images/Resume.png��6   67   5!      �� 5"      -
   5        $��BanUser��5"   �   $��54,217,0,10q�6   $4 .Ban the person that submitted the current song��6.   $
��Left=�6g   $��30��6�    J� RenderTransformOrigin$ 0.5,0.5&�6�   .��5#      �� $��Images/BanUser.png��6   5$      �� 5%      $
��Left=�6   $
��Bold"�63   $��537,185,0,36q�6E   $ 0.687,0.469&�6[   .��6�   requested by6�   �� 5&      -   5        $��
SrUsername��5&   5   $��Center=�6   $��370,215,0,10q�6G   .��6^   
Username6h   5'      5(      � 5*   
   $��1��6    � ColumnDefinitions 5+      �� 5,      $��* �6#   �� 5-      $��* �6#   .+�50      � $��0��6     51      �� 52      $��* �6$   �� 53      $��* �6$   .+�55      �� 
���   �$��2q�6-   ._�56      � .+�57      �� $��Center=�6    $
��Bold"�6=   $��0,0,0,92q�6O   .��6b   Volume settings6s   �� 58      $��Center=�6    $��DemiBold"�6=   $��	0,30,0,68q�6S   .��6f   Music volume6t   �� 59      -   5        $��MusicVolumeSlider��59   !    � Maximum$	 100Q�6:   	 � Minimum$	 0Q�6H   
 � Value$
 50Q�6T   $
 True��6_   $��25,55,25,50q�6�   6�   �� 5:      $��Center=�6    $��DemiBold"�6=   $��	0,72,0,26q�6S   .��6f   Sound volume6t   �� 5;      $��25,95,24,10q�6!   68   5<      5=      �� 5?      
���   �$��2q�6-   $��1��6A   ._�5@      �   5A      �� 5B      $��* �6,   �� 5C      $��* �6,   �� 5D      $��* �6,   .+�5G      �� -   5        $��disableEnableLundBot��5G   g   $��0��6!   $��Disable LundBot69��6.   $
��Bold"�6J   $��2q�6\   6�   �� 5H      -   5        $��disableEnableSongRequest��5H   j   $��1��6!   $��Disable song request��6.   $
��Bold"�6M   $��2q�6_   6�   �� 5I      -   5        $��disableEnableGambling��5I   f   $��2��6!   $��Disable gambling��6.   $
��Bold"�6I   $��2q�6[   6�   5J      5K      5L      �� 5N      
���   �$��2q�6)   $��1��6=   ._�5O      � $��1��6   .+�5P      �� $0��*Most commenting user? What should be here?��6   �� 5Q      $��?��6   $	��175(�6(   $��Center=�67   5R      5S      5T      5U      5V      