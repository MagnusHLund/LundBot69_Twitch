   M S B A M L   `   `   `  ����K  GLundBot69 Client, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null?$clr-namespace:LundBot69_Client.ViewsLundBot69_Client.Views  5      G(clr-namespace:LundBot69_Client.ResourcesLundBot69_Client.Resources  5      )    #LundBot69_Client.Views.CommandsView   5      W SPresentationCore, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=6.0.2.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=6.0.2.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      6local$clr-namespace:LundBot69_Client.Views     5      @placeholder(clr-namespace:LundBot69_Client.Resources     5        � 	Resources  5       �� 
TargetType �� BasedOn �� Property �� Value �� RelativeSource �� Path �� Triggers �� Binding	 �� Value��%�  '��       7���� 5   
   " ��6   8   .�5      ��  �@�Tag 6$   ��  �� *Self+$+ %(placeholder:Placeholder.Placeholder)� 5      �� 5       6   �� *Text.Length+ �� *Self+	 True6d   .a�5      ��  � ��
 �����63   5      �� 5       6   �� *Text.Length+ �� *Self+		 False6d   .a�5      ��  � ��
 �   �63   5      5      5      .��5      � 
�������
 � ColumnDefinitions
 5   
   �� 5      $��* �6   �� 5      $��* �6   .+�5   
   �� 
���   �$��2q�6%   ._�5       � .+�5!      �� $��Commands��6   $��20(�6+   $��	ExtraBold"�69   $��Center=�6P   $��10q�6m   �� 5#      -   5        $��10 50 10 10q�5#      
�������$��Hidden=�6�   ��6B   �� *CommandsList+ �� View 5$      �� 5%      .P�5&      �� $��Command��6-    �� CellTemplate 5'   "   �� 5(   &   .R�5)   *   ��  �� 
IsReadOnly$
 True��6O   ��62   �� *CommandName+6O   5*   '   5,      �� 5-      $��Permissions��6-    5.   "   �� 5/   &   .R�50   *   �� $
 True��6V   ��62   �� *CommandPermissions+6V   51   '   53      �� 54      $
��Cost��6-    55   "   �� 56   &   .R�57   *   �� $
 True��6O   ��62   �� *CommandCost+6O   58   '   5:      �� 5;      $��Buttons��6-    5<   "   �� 5=   &   .R�5>   *   � .+�5?   .   �� -   5        $
��Edit��5?   5   
 � Tag 6W   �� �� 5@   .   -   5        $��Delete��5@   5    6[   �� 5A   +   5B   '   5D      5E      5G      5H      5I      �� 5K   
   
���   �$��2q�6%   $��1��69   ._�5L      � .+�5M      �� -   5        $��CreateEditCommand��5M   �   $��Create command��6   $��20(�61   $��	ExtraBold"�6?   $��Center=�6V   $��
0,10,0,455q�6s   6�   �� 5O      $��Permissions to use��6   $��15(�65   $
��Bold"�6C   $
��Left=�6U   $��30,51,0,424q�6p   �� 5P      -   5        $��PermissionsDropdown��5P      $��25��66   $��34,86,226,399q�6B   .@�5Q      �� .��6#   
Streamer6-   �� 5R      .��6#   Tester6+   �� 5S      .��6#   
Moderators6/   �� 5T      .��6#   
Subscriber6/   �� 5U      .��6#   VIPs6)   �� 5V      .��6#   
Follower6-   �� 5W       �� 
IsSelected$
 True��6#   .��65   
Everyone6?   5X      �� 5Y      $,��&Permissions are ranked, top to bottom.��6   $��10(�6I   $
��Bold"�6W   $
��Left=�6i   $��3,111,0,360q�6�   �� 5[      $��Bot message type��6   $
��Bold"�63   $��15(�6E   $
��Left=�6S   $��224,51,0,424q�6n   $	��136��6�   �� 5\      -   5        $��MessageTypeDropdown��5\      $��25��66   $��225,86,34,399q�6B   .@�5]      �� $
 True��6#   .��65   Normal6=   �� 5^      .��6#   	Mention6,   �� 5_      .��6#   Reply6*   5`      �� 5b      $ ��Command cooldown (seconds)��6   $
��Bold"�6=   $��15(�6O   $��Center=�6]   $��0,215,0,259q�6z   �� 5c      $��30��6   $��46,271,208,214q�6$   $��25��6<   $��Center=�6I   $��Center=�6m   �� 5d      $��Individual user��6   $��10(�62   $
��Bold"�6@   $
��Left=�6R   $��75,244,0,239q�6m   �� 5e      $��5��6   $��209,271,46,214q�6#   $��25��6;   $��Center=�6G   $��Center=�6k   �� 5f      $��Global��6   $��10(�6)   $
��Bold"�67   $
��Left=�6I   $��272,242,0,240q�6d    J� RenderTransformOrigin$ 
1.77,0.589&�6{   �� 5h      $��Command cost��6   $
��Bold"�6/   $��15(�6A   $
��Left=�6O   $��46,150,0,324q�6j   �� 5i      $��0��6   $��34,184,226,301q�6#   $��25��6;   $��Center=�6H   $��Center=�6l   �� 5l      $��Timer (minutes)��6   $
��Bold"�62   $��15(�6D   $
��Left=�6R   $��231,150,0,324q�6m   �� 5m      $��0��6   $��225,184,34,301q�6#   $��25��6;   $��Center=�6H   $��Center=�6l   �� 5o      $��Command name��6   $
��Bold"�6/   $��15(�6A   $��Center=�6O   $��0,296,0,178q�6l   �� 5p      $��hello there��6   $��46,332,46,153q�6-   $��25��6D   $��Center=�6Q   $��Center=�6u   �� 5r      $��Command output��6   $
��Bold"�61   $��15(�6C   $��Center=�6Q   $��0,362,0,112q�6n   �� 5s      $��46,398,46,87q�6   $��25��60   $��Center=�6=   $��Center=�6a   ,   &LundBot69_Client.Resources.Placeholder   Placeholder$ output��6�   � 5u      -   5        $��EditCommandGrid��5u      $��
0,438,0,19q�6.   .+�5v      �� -   5        $��25��5v      $��Apply changes��6)   $��20,14,200,14q�6\   �� 5w      -	   5        $��25��5w      $��Discard changes��6)   $��200,14,20,14q�6`   5x      5y      5z      5|      5}      