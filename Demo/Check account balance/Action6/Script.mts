If Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Exist Then

Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebButton("WebButton").Click 5,5 @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Home - Advantage Bank").Page("Dashboard - Advantage").WebMenu("My Profile Managment console").Select "Logout" @@ script infofile_;_ZIP::ssf6.xml_;_
 @@ script infofile_;_ZIP::ssf8.xml_;_
End If
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login").Click 5,5 @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set Parameter("User_Name") @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").Set Parameter("Password")
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Login_2").Click 5,5 @@ script infofile_;_ZIP::ssf4.xml_;_
