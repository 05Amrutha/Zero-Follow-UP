

    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js"></script>

    <script type="text/javascript" src="https://autoliv.sharepoint.com/sites/VIR/SiteAssets/FileSaver.js"></script>
    <script type="text/javascript" src="https://autoliv.sharepoint.com/sites/VIR/SiteAssets/myexcel.js"></script>
	<script type="text/javascript" src="https://autoliv.sharepoint.com/sites/VIR/SiteAssets/jszip.js"></script>


	<link rel="stylesheet" href="https://autoliv.sharepoint.com/sites/VIR/SiteAssets/bootstrap-iso.css">
	<link rel="stylesheet" href="https://autoliv.sharepoint.com/sites/VIR/SiteAssets/bootstrap-iso-Custom.css">
	
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	 
	<!-- Individual files: Add only what's needed to avoid clobbering loaded libraries -->
	
	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css">


	<script type="text/javascript" charset="utf8" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-3-typeahead/4.0.2/bootstrap3-typeahead.min.js"></script>
	<script src="https://cdn.jsdelivr.net/gh/xcash/bootstrap-autocomplete@master/dist/latest/bootstrap-autocomplete.min.js"></script>

	

	<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'></script>

	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css">
	<script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js"></script>
	
   
   <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>    
   <script type="text/javascript" src="/_layouts/15/sp.js"></script> 
   
   <script type="text/javascript" src="/_layouts/15/clienttemplates.js"></script> 
   <script type="text/javascript" src="/_layouts/15/clientforms.js"></script> 
   <script type="text/javascript" src="/_layouts/15/clientpeoplepicker.js"></script> 
   <script type="text/javascript" src="/_layouts/15/autofill.js"></script> 
   
   
      
   
	
<style>


	#ContainerDiv
	{
		display: inline-block;
		position: fixed;
		top: 0%;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		//background-color: #f3f3f3;
		background-color: white;
		z-index: 2;
		
	}

	#titlebar 
	{
	  width: 100%;
	  background-color: #305781;
	  //overflow: hidden;
	  display:block;
	  position: fixed;
	  z-index: 2;
	  height:50px;
	}
	
	#logo
	{
		padding-bottom: 5px;
		height: 60px;
	}
	
	.fa 
	{
		color: white;
		padding-left: 5px;
		float: right;
		padding-right:80px;
		font-size:large;
	}
	
	#username
	{
		color:white;
		font-weight:bold;
		padding-top: 18px;
		float:right;
		font-size:initial;
	}

	.tab
	{
		position:absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		height: 85%;
		transform:translate(-50%,-50%);
		padding:10px 30px;
			
	}
	
	input[type=button]
	{
		color : #305781;
		float: right;
		outline: none;
		border:none;
		background-color: inherit;
		cursor: pointer;
		padding: 14px 16px;
		transition: 0.3s;
		font-size: 17px;
		font-weight:bold;
	}
	

	.tablinks:focus, .tablinks:active
	{
		background-color: #305781;
		border-radius:0px;
		color: white;
	}

	.tablinks:hover 
	{
		background-color: #c5e9ea;
		border-bottom-right-radius: 50px;
		border-top-left-radius: 50px;
		border-bottom-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	
	.tabs .tabs-header
	{
		//height:60px;
		display:flex;
		align-items:center;
	}
	.tab-header > div
	{
		width:calc(100%/4);
		text-align: centre;
	}
	
	thead
	{
		position:sticky;
		top: -1px;;
		z-index:3;
	}
	
	td
	{
		border-bottom: 0.5px black solid;
		textAlign: center;
		padding: 15px;
		color:black;
		//border: 0.5px black solid;
	}
	#Eng-006{
		border: 0.5px black solid;
		textAlign: center;
		padding: 5px;
		width:100px;
	}

	tr:nth-child(odd)
	{
		//background-color: white;
		background-color:rgb(216,216,216);
	}

	.heading,#headers
	{
		font-weight:bold;
		padding: 15px;
		background-color:#305781;
		color: white;
		padding:20px;
		//border-color:#305781;
	}
	
	
	input[type=checkbox] 
	{
		margin-left: 20px;
		outline: 1px solid dimgray;
	}

	table
	{
		//table-layout-fixed;
		height:50px;
		width:100%;
		
	}
	
	
	#title
	{
		background-color:#305781;
 
	}
	
	#clearVal,#sendMail
	{
		border-radius: 25px;
		border-color: #98d6d8;
		background-color: #305781;
		color: white;
		width:120px;
		margin-top:1%;
	}
	
	#clearVal:hover,#sendMail:hover
	{
		background-color: #c5e9ea;
		color : #305781;
		
	}
	.tab-body
	{
		overflow-y:scroll;
		overflow-x:scroll;
		width:100%;
		height:93%;
	}
	
	td:first-child 
	{
	  position: sticky;
	  left: 0;
	  z-index:2;
	  color:white;
	  z-index:2;
	  background-color:#305781;
	  border-bottom:1px solid white;
	  border-top:1px solid white;
	}
	#mangerdrpdown
	{
		color: black;
		float:right;
		margin-right: 4px;
	}
	
	.checkboxes
	{
		width: 20px;
		height: 20px;
	}
	input[disabled]
	{
		outline:1px solid white; 
	}
	
		/* SUPER USER */
	.switch {
	  position: relative;
	  display: inline-block;
	  width: 60px;
	  height: 34px;
	}

	.switch input {
	  display: none;
	}

	.slider {
	  position: absolute;
	  cursor: pointer;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background-color: #ccc;
	  -webkit-transition: .4s;
	  transition: .4s;
	}

	.slider:before {
	  position: absolute;
	  content: "";
	  height: 26px;
	  width: 26px;
	  left: 4px;
	  bottom: 4px;
	  background-color: white;
	  -webkit-transition: .4s;
	  transition: .4s;
	}

	input:checked+.slider {
	  background-color: #2196F3;
	}

	input:focus+.slider {
	  box-shadow: 0 0 1px #2196F3;
	}

	input:checked+.slider:before {
	  -webkit-transform: translateX(26px);
	  -ms-transform: translateX(26px);
	  transform: translateX(26px);
	}


	/* Rounded sliders */

	.slider.round {
	  border-radius: 34px;
	}

	.slider.round:before {
	  border-radius: 50%;
	}
</style>

<div id="ContainerDiv"> 


	<div class="bootstrap-iso">
	
		<div id="titlebar" >
			<i class="fa fa-user fa-xs" style="padding-top:20px"></i>
			<div id="username"> </div>
			<label class="switch" style="margin-right: 4px;float: right;margin-top: 10px;">
				<input type="checkbox" id="myCheckbox" onchange="toggleCheck()">
				<span class="slider round"></span>
			</label>
			<div><img id="logo" src="https://autoliv.sharepoint.com/:i:/r/sites/alvgtsc/ZeroFollowup/SiteAssets/Logo.png?csf=1&web=1&e=gePRmE" alt="Autoliv logo"><a href="https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SitePages/Home.aspx"><i style="float:none;font-size:x-large" class="fa fa-home" aria-hidden="true"></i></a></div>

		</div>
	</div>
	<br><br>
	
	
	<div class="tab">
		<div id="mainbody" style="height: 82%;">
			<div class="tab-header" style = "align-items:center;">
				<input type="button" class="tablinks" id="btnManagement" value="Management" style="float:left; margin-left: 0;">
				<input type='button' class="tablinks" id="btnPls" value="PL" style="float:left">
				<input type="button" class="tablinks" id="btnEng" value="Engineer" style="float:left">
				<input type="button" class="tablinks" id="btnCtf" value="CFT" style="float:left">
				<select id="mangerdrpdown" style:"text-align:center;padding: 4px; color: black;">
						 <option value="none" selected disabled hidden>Select an Option</option>
				</select>
				
			</div>
			<br><br>
			<div class="tab-body">
				<div id="Management"></div>
				<div id="PLS"></div>
				<div id="Engineer"></div>
				<div id="CFT"></div>
			</div>
		</div>
		<div id="commonButtons">
			<input type="button" id="clearVal" class="cbtns" onclick="clearAll()" value="Clear" />
			<input type="button" id="sendMail" class="cbtns" onclick="triggermail()" value="Send Mail"/>
		</div>
	</div>
</div>

<script type="text/javascript">

$(".switch").hide();
$("#PLS,#Engineer,#CFT,#Management").hide();
$("#commonButtons").hide();
	//fetch the data from the Tracker Data list 
	var DataList = "TrackerData";
	var trackerDataArr =[];
	var taskDataList = "Task";
	var taskDataArr =[];
	var assgnTaskList = "AssignTask";
	var mngVistList="ManagerVisitingHistory";
	var assgnDataArr =[];	
    var manageListDataArr=[];	

	var sharepointemail = "";
	var user_log=  "";
    var user_title=  "";
    var user_email =  "";
	var user_region =  "";
	var mngvalue="";
	var queryUrlTrackerData = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+DataList+"')/items?$top=5000" ;
	var queryUrlTask = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+taskDataList+"')/items?$top=5000" ;
	var queryUrlAssignTask = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+assgnTaskList+"')/items?$top=5000" ;
	var queryUrlTaskScheduler= _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+mngVistList+"')/items?$top=5000" ;
	var engineerNames="";
	
	var keyval=[];
	
	$("#mangerdrpdown").hide();
	$(function()
	{
		var a = new Date();
		//var todaysdate=convert2DigitDate(a);
		var currentYear = a.getFullYear();	
		queryUrlTrackerData = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+DataList+"')/items?$top=5000&$filter=Year eq " + currentYear ;
		SharePointListExtractData();
		TaskListExtractData();
		AssgnTaskExtractData();
		getUserDetails();
		taskSchedulerList()
	
	});
	
	function taskSchedulerList()
	{
		$.ajax({
			url: queryUrlTaskScheduler,
			type: "GET",
			async: false,
			headers: {
				"Accept": "application/json;odata=verbose"
			},
			success: function(data) {
				if (data.d.results.length > 0)
				{
					manageListDataArr = manageListDataArr.concat(data.d.results);						
				}
				console.log(manageListDataArr);
			},
			error: function(errorMsg) {
				console.log(errorMsg.responseText);
			}			
		}); 
	}
		

	function SharePointListExtractData()
	{
	
		$.ajax({
			url: queryUrlTrackerData,
			type: "GET",
			async: false,
			headers: {
				"Accept": "application/json;odata=verbose"
			},
			success: function(data) {
				if (data.d.results.length > 0)
				{
					trackerDataArr  = trackerDataArr.concat(data.d.results);					
				}
				console.log(trackerDataArr );
			},
			error: function(errorMsg) {
				console.log(errorMsg.responseText);
			}			
		}); 
	} 	
	
	

//fetch task list data 

		function TaskListExtractData()
		{
			
			$.ajax({
				url: queryUrlTask,
				type: "GET",
				async: false,
				headers: {
					"Accept": "application/json;odata=verbose"
				},
				success: function(data) {
					if (data.d.results.length > 0)
					{
						taskDataArr = taskDataArr.concat(data.d.results);					
					}
					console.log(taskDataArr );
				},
				error: function(errorMsg) {
					console.log(errorMsg.responseText);
				}			
			}); 
		}

//fetch Assign task list data 
	
		function AssgnTaskExtractData()
		{
			var demoassgnDataArr=[]
			$.ajax({
			url: queryUrlAssignTask,
			type: "GET",
			async: false,
			headers: {
			"Accept": "application/json;odata=verbose"
			},
			success: function(data) {
			console.log(data.d.results);
			demoassgnDataArr = data['d']['results'];
			
				for(i=0;i<demoassgnDataArr.length;i++)
				{
					if(demoassgnDataArr[i]["EmployeeLeftOrg"]!="Yes")
					{
						assgnDataArr.push(demoassgnDataArr[i])
					}
				}
					console.log(assgnDataArr );
					assgnDataArr.sort((a, b) => (a.EngineerName > b.EngineerName) ? 1: -1);
				},
				error: function(errorMsg) {
					console.log(errorMsg.responseText);
				}			
			}); 
		} 	

//get user details 
	function getUserDetails()
	{  

		this.clientContext = new SP.ClientContext.get_current();  
		this.oWeb = clientContext.get_web();  
		currentUser = this.oWeb.get_currentUser();  
		this.clientContext.load(currentUser);  
		this.clientContext.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceededuser), Function.createDelegate(this,this.onQueryFailed)); 		
	}  

	function onQuerySucceededuser()
	{  

		//console.log("user details....");
		sharepointemail = currentUser.get_email().toLowerCase();
		user_log= currentUser.get_loginName() ;
		user_title= currentUser.get_title();  
		user_email = currentUser.get_email().toLowerCase();
		user_region = user_log.substring(user_log.indexOf("|")+1,user_log.indexOf("|")+3) ;
		
		user_log=user_log.replace("#","%23");	
		console.log(user_log);
		console.log(user_title);
		
		document.getElementById("username").innerHTML = user_title;
		///Testing
		loadCurrentUsersReportiesDetails(sharepointemail);
		displaydefaultdetails(sharepointemail)
		dateUpdate(sharepointemail,0)
		
		loadManagerDropdown();
		// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"+user_email)
		// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"+sharepointemail)
		if(user_email=="mallikarjun.banappanavar@autoliv.com" || user_email== "maheshkumar.jagadish@autoliv.com"|| user_email=="aravind.kanade@autoliv.com" || user_email== "mohammed.salahuddin@autoliv.com" || user_email=="somanagouda.patil@autoliv.com"||user_email=="sudarshan.narayanaswamy@autoliv.com" )
		{
			toggleCheck();	
			$(".switch").show();
			
		}

	}
	  
	function onQueryFailed(sender, args) 
	{  
		alert('Request failed. \nError: ' + args.get_message() + '\nStackTrace: ' + args.get_stackTrace());  
	}  

	var item = [];
	
	
	//to uncheck all the checkbox on click of clear
	function clearAll()
	{
		item = document.getElementsByClassName("checkboxes")
		for(var i=0;i<item.length;i++)
		{
			item[i].checked=false;
		}
	}
	
///TESTING
//dropdown for manger names
	function loadManagerDropdown()
	{
		var duplicatelist = [];
		var uniqueList =[];
		var value=""
		for(var i =0;i<assgnDataArr.length;i++)
		{
			duplicatelist.push(assgnDataArr[i]["ReportingManager"])
		}
		for(var j=0;j<duplicatelist.length;j++)
		{
			if(!uniqueList.includes(duplicatelist[j])&&duplicatelist[j]!=null)
			{
				//console.log(duplicatelist[j])
				uniqueList.push(duplicatelist[j])
			}
		}
		//console.log(uniqueList)		
		uniqueList.sort();
		for(var k=0;k<uniqueList.length;k++)
		{
			//console.log(uniqueList[k])	
			value+= "<option value='"+uniqueList[k]+"'>"+uniqueList[k]+"</option>"
		}
		$("#mangerdrpdown").append(value)
	}

	function dateUpdate(currentuserMail,MailSendData)
	{
		var mangername="";
		var rowID='';
		var VisitingCountData='';
		var MailSendCountData='';
		var LastVisitedOnData='';
		console.log("In user name"+MailSendData)
		//var curdate = new Date();
		let curdate = new Date().toUTCString().slice(5, 16);
		let logdate = new Date().toLocaleDateString();
		var mangername = manageListDataArr.filter(function(item) { return item['ReportingManager'] == currentuserMail});
		var clientContext = new SP.ClientContext.get_current();
		var oList = clientContext.get_web().get_lists().getByTitle('ManagerVisitingHistory');
		console.log(curdate)
		console.log(logdate+"-----"+typeof(logdate))
		$.each(mangername, function (key, value)
		{
			rowID= value.ID ;
			VisitingCountData= value.VisitingCount ;
			MailSendCountData= value.MailSendCount ;
			LastVisitedOnData= value.LastVisitedOn ;
			
			
		});
		console.log(rowID)
			console.log(VisitingCountData)
		var CountOfVisit = ++VisitingCountData
		var CountOfMailSend = ++MailSendCountData
			console.log(CountOfVisit)
			console.log(CountOfMailSend)
		console.log(manageListDataArr)
		console.log(rowID)
		this.oListItem = oList.getItemById(rowID);
		if(rowID.length!=0)
		{
			// console.log("In if")
			oListItem.set_item('LastVisitedOn',logdate);
			if (LastVisitedOnData!=logdate)
			{
				console.log("In ifdddddddddddd")
				oListItem.set_item('VisitingCount',CountOfVisit);
			}
			if(MailSendData==1)
			{
				oListItem.set_item('MailSendCount',CountOfMailSend);
			}
			
			oListItem.update();
			clientContext.load(oListItem);
		}
		else
		{
			var itemCreateInfo = new SP.ListItemCreationInformation();
			this.orgListItem = oList.addItem(itemCreateInfo);
			// console.log("In else")
			console.log(currentuserMail)
			orgListItem.set_item('ReportingManager',currentuserMail);
			orgListItem.set_item('LastVisitedOn',logdate);
			orgListItem.set_item('VisitingCount',CountOfVisit);
			orgListItem.update();
			clientContext.load(orgListItem);
		}
		
		clientContext.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceededMngist),Function.createDelegate(this,this.onQuerySucceededMngist)); 
	}
	function onQuerySucceededMngist()
	{
		// console.log("Successful")
	}

	function onQueryFailedMnglist(sender, args) 
	{
		// console.log('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
	}
	
	function displaydefaultdetails(currentuserMail)
	{
		var mangername = taskDataArr.filter(function(item) { return item['TaskHead'] == currentuserMail});
		var mgmtcount=0;
		var plscount=0;
		var cftcount=0;
		if(mangername.length ==0)
		{
			$("#Engineer").show();
			$("#commonButtons").show();
			$("#PLS,#Management,#CFT").hide();
			$("#btnCtf,#btnPls,#btnManagement").css({"background-color":"inherit","color":"#305781"})
			$('#btnEng').css({"background-color":"#305781","color":"white"})
		}
		
		else
		{
			for(i=0;i<mangername.length;i++)
			{
				if(mangername[i]["TaskCode"].includes("Mgmt"))
				{
					mgmtcount=1;
				}
				else if(mangername[i]["TaskCode"].includes("PLS"))
				{
					plscount=1;
				}
				else if(mangername[i]["TaskCode"].includes("CFT"))
				{
					cftcount=1;
				}
			}
			
			if(mgmtcount==1)
			{
				mgmtcount=0;
				// console.log("mangername in mgmt")
				$("#Management").show();
				$("#commonButtons").show();
				$("#PLS,#Engineer,#CFT").hide();
				$("#btnCtf,#btnPls,#btnEng").css({"background-color":"inherit","color":"#305781"})
				$('#btnManagement').css({"background-color":"#305781","color":"white"})
			}
			
			else if(plscount==1 && mgmtcount==0)
			{
				plscount=0;
				$("#PLS").show();
				$("#commonButtons").show();
				$("#Management,#Engineer,#CFT").hide();
				$("#btnCtf,#btnManagement,#btnEng").css({"background-color":"inherit","color":"#305781"})
				$('#btnPls').css({"background-color":"#305781","color":"white"})
			}
			
			
			else if(cftcount==1 && plscount==0 && mgmtcount==0)
			{
				cftcount=0;
				$("#CFT").show();
				$("#commonButtons").show();
				$("#Management,#Engineer,#PLS").hide();
				$("#btnPls,#btnManagement,#btnEng").css({"background-color":"inherit","color":"#305781"})
				$('#btnCtf').css({"background-color":"#305781","color":"white"})
			}
		}
		
		
	}
	
	
	
///testing
//on change of manager drop down value 
	document.getElementById("mangerdrpdown").onchange = testing;

	function toggleCheck() 
	{
		if(document.getElementById("myCheckbox").checked === true)
		{
			$("#mangerdrpdown").show();
			testing();
		} 
		else 
		{
			$("#mangerdrpdown").hide();
			console.log("In else")
			document.getElementById("Management").innerHTML="";
			document.getElementById("PLS").innerHTML="";
			document.getElementById("CFT").innerHTML="";
			document.getElementById("Engineer").innerHTML="";
			loadCurrentUsersReportiesDetails(sharepointemail);
			document.getElementById("username").innerHTML = user_title;
			// dateUpdate(sharepointemail)
		}
		
	}
	
	
	function testing()
	{
		///testing
		
		document.getElementById("Management").innerHTML="";
		document.getElementById("PLS").innerHTML="";
		document.getElementById("CFT").innerHTML="";
		document.getElementById("Engineer").innerHTML="";
		
		selectmanager = document.querySelector('#mangerdrpdown');
        mngvalue = selectmanager.value;	
		loadCurrentUsersReportiesDetails(mngvalue.toLowerCase())
		displaydefaultdetails(mngvalue)
		document.getElementById("username").innerHTML = mngvalue.replaceAll("@autoliv.com"," ").replaceAll("."," ");	
		// dateUpdate(mngvalue);
	}

	
	function loadCurrentUsersReportiesDetails(currentuserMail)
	{		
	
		var mangHeading=[];
		var plsHeading=[];
		var engHeading=[];
		var ctfHeading=[];
		var tasktemparray = taskDataArr.filter(function(item) { return item['TaskHead'] == currentuserMail});
		
//create a key value pair of task and taskcodes
		
		for(i=0;i<taskDataArr.length;i++)
		{
			keyval[taskDataArr[i].TaskCode]=taskDataArr[i].Task;
		}
		//console.log(keyval);
		//console.log(keyval.length);		
		
//get the PLS task headings for task table 
		Object.keys(keyval).forEach(el=> 
		{
			if(el.includes("PLS"))
			{
				plsHeading.push(keyval[el]);
			}
		});
		//console.log(plsHeading)
		
		Object.keys(keyval).forEach(el=> 
		{
			if(el.includes("Mgmt"))
			{
				mangHeading.push(keyval[el]);
			}
		});
		//console.log(mangHeading)
		
		Object.keys(keyval).forEach(el=> 
		{
			if(el.includes("CFT"))
			{
				ctfHeading.push(keyval[el]);
			}
		});
		//console.log(ctfHeading)
		
		Object.keys(keyval).forEach(el=> 
		{
			if(el.includes("Eng"))
			{
				engHeading.push(keyval[el]);
			}
		});
		//console.log(engHeading)
		
		var temp= assgnDataArr.filter(function(item) { return item['ReportingManager'] == currentuserMail});
		console.log(temp);
		console.log(currentuserMail)
		for(i=0;i<assgnDataArr.length;i++)
		{
			var mange= temp.filter(function(item){return item["Management"]!= null});
			var pls = temp.filter(function(item){return item["PLS"]!=null});
			var eng= temp.filter(function(item){return item["Engineer"]!=null});
			var ctf= temp.filter(function(item){return item["CFT"]!=null});
		}
		//console.log(mange);
		// console.log(pls)
		//console.log(eng)
		//console.log(ctf)
				
//function to load only management data 
		
		function loadMangData(dataarray)
		{
			// console.log(dataarray)	
			var val = "<table class='followupTable' id='MngfollowupTable'><thead><tr id='headers'><th style='width:30%'></th>";
			for(var k=0;k<mangHeading.length;k++)
			{
				val+= "<th class='heading'>"+ mangHeading[k]+"</th>";
			}
			val+="</tr></thead>"
			val+="<tbody id='mngTbody'>"
			$("#Management").append(val);	
		}
		loadMangData(mange);
			
//function to load only PLS engineer data
		function loadPLSdata()
		{
			var val = "<table class='followupTable' id='PlsfollowupTable'><thead><tr id='headers'><th style='width:30%'></th>";
			for(var k=0;k<plsHeading.length;k++)
			{
				val+= "<th class='heading'>"+ plsHeading[k]+"</th>";
			}
			val+="</tr></thead>"
			val+="<tbody id='plsTbody'>"
			$("#PLS").append(val);	
		}
		loadPLSdata();
				
			
//to load only engineer data
		function loadEngData()
		{	
			
			$("#btnEng").click(function(){
				$("#Engineer").show();
				$("#PLS,#Management,#CFT").hide();
				if(eng.length == 0){$("#commonButtons").hide()}
				else
				{	
			// console.log("In else");
					$("#commonButtons").show();
				}
				$("#btnCtf,#btnPls,#btnManagement").css({"background-color":"inherit","color":"#305781"})
				$('#btnEng').css({"background-color":"#305781","color":"white"})
			});
			if(eng.length != 0)
			{
				$("#btnEng").prop('disabled', false);
				var val = "<table class='followupTable' id='EngfollowupTable'><thead><tr id='headers'><th style='width:50%'></th>";
				for(var k=0;k<engHeading.length;k++)
				{
					val+= "<th class='heading' style='width:200px'>"+ engHeading[k]+"</th>";
				}
				val+="</tr></thead>"
				val+="<tbody>"	
				for(var i=0;i<eng.length;i++)
				{
					val+="<tr>"
					engineerNames=eng[i].EngineerName.charAt(0).toUpperCase()+eng[i].EngineerName.slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ');
					val+="<td class='engnames'>"+engineerNames+"</td>";
						
					Object.keys(keyval).forEach(el=>
					{
						if(el.includes("Eng"))
						{
							if (el!="Eng-006"){
								
								val+= "<td><input name='"+eng[i].EngineerName+"' type='Checkbox'  title='"+engineerNames+"' class='checkboxes' id='"+el+"' style='margin-left:40px' disabled/></td>";
							}
							else
							{
								val+= "<td><input name='"+eng[i].EngineerName+"' type='text'  title='"+engineerNames+"' class='textBox' id='"+el+"' /></td>";
							}
						}
						
						});
						val+="</tr>"
				}
				val+="</tbody class='tablebody'>"	
				val+="</table>"
				//console.log(val);
				document.getElementById("Engineer").innerHTML="";
				$("#Engineer").append(val);		
			}
		}
		loadEngData();	
			
		//console.log(eng.length)	
		
//to load only ctf data
		function loadCFTdata()
		{
			var val = "<table class='followupTable' id='CTFfollowupTable'><thead><tr id='headers'><th style='width:30%'></th>";
			for(var k=0;k<ctfHeading.length;k++)
			{
				val+= "<th class='heading'>"+ctfHeading[k]+"</th>";
			}
			val+="</tr></thead>"
			val+="<tbody id='cftTbody'>"
			$("#CFT").append(val);			
		}
		loadCFTdata();
		
				
//task list employee details 
		var managedata;
		var plsdata=[];
		var cfttdisplay =0;
		var plsdisplay =0;
		var mgmtdisplay =0; 
		var taskval
		var requiredTask=[];
		var taskmgmt,taskpls,taskcft;
		// console.log(tasktemparray.length)
		if(tasktemparray.length!=0)
		{
			// console.log(tasktemparray)
			console.log(assgnDataArr)
			assgnDataArr.sort((a, b) => (a.EngineerName > b.EngineerName) ? 1: -1);
			
			for(var i=0;i<assgnDataArr.length;i++)
			{
				for(var j=0;j<tasktemparray.length;j++)
				{
					tasktemparray[j]
					managedata=[];
					if(assgnDataArr[i]["Management"]!= null && tasktemparray[j]["TaskCode"].includes("Mgmt"))
					{
						var datainMainList= assgnDataArr[i]["Management"]
						// console.log(datainMainList)
						if(!managedata.includes(datainMainList))
						{
							managedata=datainMainList.toString().split(",")
						}
						var taskval = tasktemparray[j]["TaskCode"]
						// console.log(managedata)
						// console.log(taskval)
						for(k=0;k<managedata.length;k++)
						{
							if(managedata[k].includes(taskval.trim()))
							{
								//console.log(assgnDataArr[i]["EngineerName"],taskval)
								// console.log(managedata[k])
								requiredTask.push(managedata[k])
								// console.log(requiredTask)
								//addDatatoTable(assgnDataArr[i]["EngineerName"],managedata[i]);
								taskmgmt = 1;
							}
						}
					}
					
					plsdata=[];
					if(assgnDataArr[i]["PLS"]!= null && tasktemparray[j]["TaskCode"].includes("PLS"))
					{
						taskval = tasktemparray[j]["TaskCode"]
						// console.log(assgnDataArr[i]["EngineerName"])
						var datainMainList= assgnDataArr[i]["PLS"]
						// console.log(datainMainList)
						if(!plsdata.includes(datainMainList))
						{
							plsdata=datainMainList.toString().split(",")
						}
						// console.log(plsdata)
						// console.log(taskval)
						for(k=0;k<plsdata.length;k++)
						{
							if(plsdata[k].includes(taskval.trim()))	
							{
								// console.log(taskval,plsdata[k])
								requiredTask.push(plsdata[k])
								taskpls =1;
							}
						}
						// console.log(requiredTask)
					}
					
					cftdata=[];
					if(assgnDataArr[i]["CFT"]!= null && tasktemparray[j]["TaskCode"].includes("CFT"))
					{
						taskval = tasktemparray[j]["TaskCode"]
						var datainMainList= assgnDataArr[i]["CFT"]
						// console.log(datainMainList)
						if(!cftdata.includes(datainMainList))
						{
							cftdata=datainMainList.toString().split(",")
						}
						//console.log(cftdata)
						//console.log(taskval)
						for(k=0;k<cftdata.length;k++)
						{
							if(cftdata[k].includes(taskval.trim()))	
							{
								//console.log(assgnDataArr[i]["EngineerName"],taskval)
								requiredTask.push(cftdata[k])
								//addDatatoTable(assgnDataArr[i]["EngineerName"],managedata[i]);
								taskcft =1;
							}
						}
					}
					
					
				}
				
				
				if(assgnDataArr[i]["Management"]!= null && taskmgmt==1)
				{
					addDatatoTable("#MngfollowupTable","Mgmt",assgnDataArr[i]["EngineerName"],requiredTask)
					requiredTask=[];
				}
				if(assgnDataArr[i]["PLS"]!= null && taskpls==1)
				{
					// console.log("required Task"+requiredTask)
					$("#commonButtons").show();
					addDatatoTable("#PlsfollowupTable","PLS",assgnDataArr[i]["EngineerName"],requiredTask)
					requiredTask=[];
				}
				if(assgnDataArr[i]["CFT"]!= null && taskcft==1)
				{
					// console.log(cftdata)
					addDatatoTable("#CTFfollowupTable","CFT",assgnDataArr[i]["EngineerName"],requiredTask)
					requiredTask=[];
				}
			}	
			
			$("#btnManagement").click(function()
			{
				if(taskmgmt !=1)
				{
					console.log("In mgmt if")
					$("#commonButtons").hide()
					$("#Management").hide();
					$("#PLS,#Engineer,#CFT").hide();
					taskmgmt=0;
				}
				
				else
				{
					$('#Management').show();
					$("#commonButtons").show();
					$("#PLS,#Engineer,#CFT").hide();
				}
				$("#btnCtf,#btnPls,#btnEng").css({"background-color":"inherit","color":"#305781"})
				$('#btnManagement').css({"background-color":"#305781","color":"white"})
			});
			
			$("#btnPls").click(function()
			{
				if(taskpls !=1)
				{
					console.log("IN if of pls")
					$("#commonButtons").hide();
					$("#Management,#Engineer,#CFT").hide();
					$("#PLS").hide();
					taskpls=0;
				}
				else
				{
					console.log("IN else of pls")
					$('#PLS').show();
					$("#commonButtons").show();
					$("#Management,#Engineer,#CFT").hide();
				}
				$("#btnCtf,#btnManagement,#btnEng").css({"background-color":"inherit","color":"#305781"})
				$('#btnPls').css({"background-color":"#305781","color":"white"})
			});	

			
			$("#btnCtf").click(function()
			{
				if(taskcft !=1)
				{
					$("#commonButtons").hide();
					$("#CFT").hide();
					$("#PLS,#Engineer,#Management").hide();
					taskcft=0;
				}
				else
				{
					$("#commonButtons").show();
					$("#CFT").show();
					$("#PLS,#Engineer,#Management").hide();
				}
				$("#btnEng,#btnPls,#btnManagement").css({"background-color":"inherit","color":"#305781"})
				$('#btnCtf').css({"background-color":"#305781","color":"white"})
			});
		}	
		
		
		function addDatatoTable(divid,headingName,EngName,taskListval)
		{
			var rowval;
			var arrayvvalues =[];
			// EngName.sort();
			// const setToArray = Array.from(taskListval);
			console.log("taskvalue"+taskListval)
			if(taskListval.length!=0)
			{
				rowval+="<tr class='rows'>"
				engineerNames=EngName.charAt(0).toUpperCase()+EngName.slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
				rowval+="<td class='engnames'>"+engineerNames+"</td>";
				//console.log(setToArray.length)
				//console.log(setToArray)			
				
				// for(i=0;i<setToArray.length;i++)
				// {
					// arrayvvalues.push(setToArray[i].toString().split(","))
				// }
				var taskHeadingarray = ["Mgmt","PLS","CFT"]
				for(var j=0;j<taskHeadingarray.length;j++)
				{
					if(headingName == taskHeadingarray[j])
					{
						// console.log(taskHeadingarray[j])
						Object.keys(keyval).forEach(el=> 
						{
							if(headingName == "Mgmt")
							{
								if(el.includes("Mgmt"))
								{
									rowval+= "<td><input name='"+EngName+"' title='"+engineerNames+"' type='checkbox' class='checkboxes' id='"+el+"' disabled/></td>";
								}
							}
							if( headingName == "PLS")
							{
								// console.log("inside pls key val")
								
								if(el.includes("PLS"))
								{
									rowval+= "<td><input name='"+EngName+"' title='"+engineerNames+"' type='checkbox' class='checkboxes' id='"+el+"' disabled/></td>";
								}
							}
							if(headingName == "CFT")
							{
								if(el.includes("CFT"))
								{
									rowval+= "<td><input name='"+EngName+"' title='"+engineerNames+"' type='checkbox' class='checkboxes' id='"+el+"' disabled/></td>";
								}
							}							
						});
					}
				}
				rowval+="</tr>"
				rowval+="</tbody>"
				rowval+="</table>"
				//console.log(val);
				$(divid).append(rowval);
				
			}
			
			for(var a=0;a<taskListval.length;a++)
			{
				$('input[type=checkbox]').each(function() 
				{
					chkid = $(this).prop("id");
					engnames= $(this).prop("name");
					// console.log(engnames +"current eng"+ EngName)
					// console.log(taskListval.length)
					// console.log("setToArray value:"+taskListval.length+" "+"THE ELMENT ACCESED:"+" "+arrayvvalues[a]+" "+"type "+typeof(taskListval))
					//console.log("taskListval:"+typeof(taskListval)+" ")					
					//console.log(chkid,taskListval[a].toString().replace(","," ").trim());
					if(chkid.trim()==taskListval[a].replace(","," ").trim() && engnames.toString().trim() == EngName.toString().trim())
					{
						// console.log(chkid,taskListval[a])
						// console.log("in if")	
						$(this).attr('disabled',false);
					}
				});		
			}	
			
		}	
		
//to enable/disable check box
		function diableChkbox()
		{
			var filteredList=[];
			var convertedStrings =[];
			var chkid ;
			var engnames;
			if(eng.length!=0)
			{
				for(j=0;j<eng.length;j++)
				{
					//get string val from assign task and convert to list
					//console.log(eng);
					convertedStrings = eng[j].Engineer.split(',');
					filteredList = convertedStrings.filter(function (el) {
					return String(el).trim();
					});
					//console.log(filteredList)
					for(var a=0;a<filteredList.length;a++)
					{
						$('input[type=checkbox]').each(function () 
						{
							chkid = $(this).prop("id");
							engnames= $(this).prop("name");
							//console.log(chkid,filteredList[a]);
							if(chkid==filteredList[a] && engnames==eng[j].EngineerName)
							{
								//console.log(chkid,filteredList[a])
								$(this).attr('disabled',false);
							}
						});				
					}
				}	
			}

		}
		diableChkbox();	
	}
	
	
	var checkedBoxes = document.getElementsByClassName('checkboxes');
	var	textBoxes = document.getElementsByClassName('textBox');
	//unchek boxes after the mail is sent 	
	function uncheck()
	{
		for(element of checkedBoxes)
		{
			if(element.checked)
			{
				element.checked = false;
			}		
		}
		for(element of textBoxes)
		{
			if(element.value!="")
			{
				element.value = "";
			}		
		}
		console.log(element)
		
	}
		
	window.counter=0;
	function triggermail()
	{
		
		var chkedbxList=[];
		var mailid=[];
		var TaskLists=[];
		var mailbodycontent=[];
		var chkboxemail={};
		var valueStr;
		var taskcodes;
		
		for(element of checkedBoxes)
		{
			// console.log(element)
			if(element.checked)
			{
				chkedbxList.push([element.name,element.id,])
				// chkboxemail.push([element.name])
			}	
			
		}
		for(element of textBoxes)
		{
			if (element.value !="")
			{
			chkedbxList.push([element.name,element.id,])
			chkboxemail[element.name]=element.value
			}

		}
		console.log(chkedbxList)
		console.log(chkboxemail)
		
		
		
		if(chkedbxList.length==0)
		{
			alert("Please select checkboxes to send a mail");
		}
		
		else
		{
			var mappedlist = chkedbxList.reduce(function(a,b){
				if (!a[b[0]]) a[b[0]] = [];
				a[b[0]].push(b[1]);
				return a;
				},{}
			);	
			console.log(mappedlist)
			if(document.getElementById("myCheckbox").checked === true)
			{
				currentUser = mngvalue;
			} 
			
			Object.keys(mappedlist).forEach(function(key)
			{
				console.log(key)
				mailid.push(key);
				console.log(mailid);
				var valStr= mappedlist[key].join();
				console.log(valStr);
				taskcodes= valStr.split(',')
				console.log(taskcodes,taskcodes.length)
				for(i=0;i<taskcodes.length;i++)
				{
					if( taskcodes[i] != "Eng-006") {
						mailbodycontent.push(keyval[taskcodes[i]]);
						TaskLists.push(keyval[taskcodes[i]])
					}
					
					else
					{
						mailbodycontent.push(chkboxemail[mailid])
						TaskLists.push(keyval[taskcodes[i]])
					}
						
				}
				console.log("sent mail "+ mailbodycontent)
				console.log(mailid)
				///Testing
				sendmail(mailid,currentUser,mailbodycontent,TaskLists)
				dateUpdate(sharepointemail,1)
				successmsg();	
				mailbodycontent=[];
				mailid=[]
				taskcodes=[];
				TaskLists=[]
				//console.log(mailbodycontent)
			});
			uncheck();		
		}
	}

	function sendmail(tomail,frommail,mailbodycontent,TaskLists)
	{
		console.log(tomail)
		console.log(frommail)
		console.log(mailbodycontent)
		var teamcount=0;
		var individualcount=0;
		var mailbody;
		var testFlagMail="";
		console.log(frommail)
		if(document.getElementById("myCheckbox").checked === true)
		{
			var user_title= frommail.toString().charAt(0).toUpperCase()+frommail.slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
		}
		else
		{
			user_title= sharepointemail.toString().charAt(0).toUpperCase()+sharepointemail.slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
		}
		console.log(user_title)
		if ( user_title == 'Mohammed Salahuddin' || user_title == 'Kavya Rao' || user_title == 'Sudarshan Narayanaswamy') testFlagMail = "<font color='blue'>Test Mail. Please ignore. </font><br><br>";
		var tempo= tomail.toString().charAt(0).toUpperCase()+tomail.toString().slice(1)
		tempo= tempo.replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
		var indexs=tempo.indexOf(" ")
		var names= tempo.slice(0,indexs)+" "+tempo.charAt(indexs+1).toUpperCase()
		console.log(names)
		var contentlist = '<ul>';
		console.log(mngvalue)
		// console.log(mngvalue)
		if(mngvalue== "mallikarjun.banappanavar@autoliv.com"||sharepointemail=="mallikarjun.banappanavar@autoliv.com")
		{
			for(i=0;i<mailbodycontent.length;i++)
			{
				if(mailbodycontent[i]=="Surveys"||mailbodycontent[i]=="ESR Log hours"||mailbodycontent[i]=="Compliance certifications and trainings"||mailbodycontent[i]=="Quarterly e-PDD")
				{
					teamcount=1;
					// console.log("In if")
					contentlist+= "<li>"+"Note that your team has not followed protocols for the points below " +mailbodycontent[i]+".Make sure your team submit their response by today."+"</li>";
				}
				else
				{
					individualcount=1;
					// console.log(contentlist)
					// console.log("In else")
					contentlist+= "<li>"+"Note that you have not followed protocols for the points below "+mailbodycontent[i]+
					" fully for the completed weeks. Make sure you complete it by today."+"</li>"
				}
			}
			
			contentlist += '</ul>';
			mailbody = "Dear "+names+","+'<br><br>'+contentlist+"<br>"+'<br>'+
			"Regards,"+'<br>'+user_title;
		}
		else
		{
			for(i=0;i<mailbodycontent.length;i++)
			{
				contentlist+= "<li>"+mailbodycontent[i]+"</li>"
			}
			console.log(contentlist)
			contentlist+="</ul>"
			mailbody = "Dear "+names+","+'<br><br>'+"Note that you have not followed protocols for the points below" +contentlist+"<br>"+
			"fully for the completed weeks. Make sure you complete it by today."+'<br>'+
			"Regards,"+'<br>'+user_title;
		}
		var mailsubject = "Follow Up";
		var siteurl = _spPageContextInfo.webServerRelativeUrl;
		var urlTemplate = siteurl + "/_api/SP.Utilities.Utility.SendEmail";
		var suc=0;
		console.log("senderrrrrrrrrrrr."+sharepointemail)
		$.ajax({
			contentType: 'application/json',
			url: urlTemplate,
			type: "POST",
			data: JSON.stringify({
				 'properties': {
					'__metadata': { 'type': 'SP.Utilities.EmailProperties' },
					'From': sharepointemail,
					'To': { 'results': tomail},
					'Body': mailbody,
					'Subject': mailsubject

				}
			 }
		   ),
			 headers: 
			 {

				"Accept": "application/json;odata=verbose",
				"content-type": "application/json;odata=verbose",
				"X-RequestDigest": $("#__REQUESTDIGEST").val()

			 },

			success:  function (data) {
				window.counter++;
				console.log(window.counter)
				var result = data.d.results;
				console.log(result);
//Update a values in the list after the mail is successfully triggered 
				function listFollowupTask(engName,tasks)
				{
					let date = new Date().toUTCString().slice(5, 16);
					console.log(date);
					var month = date.slice(3,6)
					// console.log(month)
					console.log(tasks)
					var currdateTask = date+":"+tasks.toString();
					//console.log("date and new task:"+currdateTask)
					
					//get the details of a single row element
					var temp1 = trackerDataArr.filter(function(item) { return item['EngineerName'] == engName });
					//console.log(temp1);
					
					//get the row id for temp1
					var rowID
					$.each(temp1, function (key, value) {
						rowID= value.ID ;
						console.log(rowID)
						});
						
					var clientContext = new SP.ClientContext.get_current();
					var oList = clientContext.get_web().get_lists().getByTitle('TrackerData');
					this.oListItem = oList.getItemById(rowID);
					console.log(temp1[0][month]);
					var finalUpdate=temp1[0][month]
					
					if(finalUpdate==null)
					{
						console.log()
						oListItem.set_item(month,currdateTask+";");
					}
					else
					{
						oListItem.set_item(month,finalUpdate.concat(currdateTask)+";");
					}
					oListItem.update();
					clientContext.load(oListItem);
					clientContext.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceededID),
					Function.createDelegate(this,this.onQueryFailed)); 
				 }
				listFollowupTask(tomail,TaskLists)
				//alert("Successfully sent")		
			},
			error: function (err) {
				 console.log(err);	
				 alert("Failed to send email to "+ tomail);
			 }

		});
	}

	function successmsg()
	{
		console.log(window.counter)
		if(window.counter>0)
		{
			alert("Mail sent successfully")
			window.counter=0;
		}
	}
	
	setInterval(successmsg, 2000);
	
</script>




