   M S B A M L   `   `   `  ����K  GLundBot69 Client, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null?$clr-namespace:LundBot69_Client.ViewsLundBot69_Client.Views  5      )    #LundBot69_Client.Views.GamblingView   5      W SPresentationCore, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      6local$clr-namespace:LundBot69_Client.Views     5      .��5	      � 
�������  � ColumnDefinitions  5   
   �� 5      $��* �6   �� 5      $��* �6   .+�5   
   �  � RowDefinitions 5      �� 5      $��2* �6    �� 5      $��* �6    .+�5      �� 
���   �$��2q�6)   ._�5      � .+�5      �� -   5        $��GamblerSearch��5   5   $��40,60,120,430q�6   6L   �� 5      -   5        $��278,60,40,430q�5      .��6T   Search6\   �� 5      $��Gambling leaderboard��6   $��Center=�6;   $��10q�6X   $��	ExtraBold"�6d   $
��20px(�6{   �� 5      -   5        $��10,50,10,10q�5      
�������$��Hidden=�6�   ��6F   �� *Users+ �� View 5      �� 5      .P�5   "   �� $��Username��61    �� CellTemplate 5    &   �� 5!   *   .R�5"   .   ��  �� 
IsReadOnly$
 True��6V   ��66   �� *twitchUsername+6V   5#   +   5%   #   �� 5&   "   $��Points��61    5'   &   �� 5(   *   .R�5)   .   �� ��66   �� *points+5*   +   5,   #   �� 5-   "   $��Buttons��61    5.   &   �� 5/   *   .R�50   .   �� -   5        $��Apply��50   5   
 � Tag 6h   �� 51   +   53   #   54      56      57      58      �� 5:      
���   �$��2q�6)   $��1��6=   ._�5;      � .+�5<      �� $��Wipe all points!��6   $
��20px(�67   $��	ExtraBold"�6G   $��Center=�6^   $��10 10 10 110q�6{   �� 5=      
���   �$��2q�61   $��75��6E   $	��300��6Q   ._�5>      � 
�������.+�5?      �� $��This can NOT be undone.��6$   $��Center=�6F   $
��Bold"�6c   $��0 0 0 40q�6u   �� 5@      $��Wipe points!��6%   $��20��6<   $	��175��6H   5A      5B      5C      5D      5E      � 5G   
   $��1��6    5I      �� 5J      $��* �6    �� 5K      $��* �6    �� 5L      $��* �6    .+�5O      �� 
���   �$��2q�6)   ._�5P      � .+�5Q      �� $��Add/subtract points��6   $
��20px(�6:   $��	ExtraBold"�6J   $��Center=�6a   $��10q�6~   �� 5R      -   5        $��AddPointsUsername��5R   :   $��Username��6   $��20��6.   $��122,64,122,83q�6S   �� 5S      -   5        $��AddPointsValue��5S   8   $��Points��6   $��20��6,   $��122,96,122,51q�6N   �� 5T      $	��Add��6   $��20��6+   $��122,127,202,20q�67   �� 5U      $��Subtract��6   $��20��60   $��201,127,122,20q�6<   5V      5W      �� 5Y      
���   �$��2q�6)   $��1��6=   ._�5Z      � .+�5[      �� $��Earning points��6   $
��20px(�65   $��	ExtraBold"�6E   $��Center=�6\   $��10q�6y   �� 5]      $
��When��6   $��DemiBold"�6+   $��104,56,194,79q�6A    J� RenderTransformOrigin$ 0.884,1.894&�6X   �� 5^      $��they get��6   $��DemiBold"�6/   $��86,90,204,49q�6E   �� 5_      $��Points��6   $��DemiBold"�6-   $��238,90,98,49q�6C   �� 5a      -   5        $��EarningPointsDropdown��5a      $��25��6<   $��146,59,146,83q�6H   .@�5b      ��  �� 
IsSelected$
 True��6'   .��69   	Following6D   �� 5c      .��6'   Subscribing64   �� 5d      .��6'   	Raiding60   �� 5e      .��6'   
Chatting61   5f      �� 5h      $��Points��6   $	��100��6,   $��20��68   $��146,94,146,53q�6D   �� 5i      $��Apply��6   $	��100��6-   $��146,122,146,21q�69   5j      5k      �� 5m      
���   �$��2q�6)   $��2��6=   ._�5n      � .+�5o      �� $��Multipliers��6   $
��20px(�62   $��	ExtraBold"�6B   $��Center=�6Y   $��10q�6v   �� 5q      $
��When��6   $��DemiBold"�6+   $��104,56,194,79q�6A   $ 0.884,1.894&�6X   �� 5r      $��they get��6   $��DemiBold"�6/   $��86,90,204,49q�6E   �� 5s      $��x��6   $��DemiBold"�6(   $��238,90,98,49q�6>   �� 5u      -   5        $��MultiplierDropdown��5u      $��25��69   $��146,59,146,83q�6E   .@�5v      �� $
 True��6'   .��69   	Following6D   �� 5w      .��6'   Subscribing64   �� 5x      .��6'   	Being VIP62   �� 5y      .��6'   Being moderator68   5z      �� 5}      $��Apply��6   $	��100��6-   $��146,122,146,21q�69   5~      5      5�      5�      5�      