Browser("Privileged Account Management").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtusername").Set "Milind.Nikam" @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtusername")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Privileged Account Management").Page("Privileged Account Management").WebList("WebElement").Click @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management").WebList("WebElement")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Privileged Account Management").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtpassword").SetSecure "5d91ebd472447ae650a06efd4e99ea04ccd49e1dfb0a" @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtpassword")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Privileged Account Management").Page("Privileged Account Management").WebTree("select2-ctl00_MainContent_ddld").Select "ARCOSAUTH" @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management").WebTree("select2-ctl00 MainContent ddld")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Privileged Account Management").Page("Privileged Account Management").Image("ctl00$MainContent$imgbtnLogin").Click 18,24

'Browser("Privileged Account Management").Page("Privileged Account Management_2").WebElement("tblData_wrapper").Click @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management 2").WebElement("tblData wrapper")_;_script infofile_;_ZIP::ssf12.xml_;_
'Browser("Privileged Account Management").Page("Privileged Account Management_2").Sync
If Browser("Privileged Account Management").Page("Privileged Account Management_2").Sync OR Browser("Privileged Account Management").Page("Privileged Account Management_2").WebElement("My Services").Exist(30) then
	Browser("Privileged Account Management").CloseAllTabs
	msgbox "LogIn successfull"
	Else
	Browser("Privileged Account Management").CloseAllTabs
	msgbox "LogIn unsuccessfull"
End If @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management_2")_;_script infofile_;_ZIP::ssf17.xml_;_





 @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management").Image("ctl00$MainContent$imgbtnLogin")_;_script infofile_;_ZIP::ssf24.xml_;_
 @@ hightlight id_;_3345466_;_script infofile_;_ZIP::ssf28.xml_;_
 @@ hightlight id_;_134802_;_script infofile_;_ZIP::ssf32.xml_;_
