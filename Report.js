<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>    
<script type="text/javascript" src="/_layouts/15/sp.js"></script> 
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js"></script>

<link rel="stylesheet" href="https://autoliv.sharepoint.com/sites/VIR/SiteAssets/bootstrap-iso.css">
<link rel="stylesheet" href="https://autoliv.sharepoint.com/sites/VIR/SiteAssets/bootstrap-iso-Custom.css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 
<script type="text/javascript" src="/_layouts/15/clientpeoplepicker.js"></script> 

<script src="/_layouts/15/sp.runtime.js"></script>  
<script src="/_layouts/15/sp.js"></script>  
<script src="/_layouts/15/1033/strings.js"></script>  
<script src="/_layouts/15/clienttemplates.js"></script>  
<script src="/_layouts/15/clientforms.js"></script>  
<script src="/_layouts/15/clientpeoplepicker.js"></script>  
<script src="/_layouts/15/autofill.js"></script>  
<script src="https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SiteAssets/table2excel.js"></script>
<script src="https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SiteAssets/multiselect-dropdown.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.js"></script>

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
	padding-bottom:0.3%;
    height: 60px;
	}

	.fa 
	{
    //padding-top: 18px;
	padding-top: 0.8%;
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
		padding-top: 16px;
		float:right;
		font-size:initial;
	}

	
	table.viewTable th
	{
		textAlign: center;
		padding: 15px;
		color:black;
		border-top: 0.5px black solid;	
		width: 100%;
		margin-left: 2%;
		margin-right: 2%;
		height: 90%;

	}

	table.viewTable tr:nth-child(even)
	{
		//background-color: white;
		background-color:rgb(216,216,216);
	}



	table
	{
		table-layout-fixed;
		height:20%;
		width:100%;
		border:black;
		
	}
	
	
	
	#title
	{
		background-color:#305781;
 
	}
	
	
	
	.items
	{
		height: 130px;
		overflow-y: scroll;
	}
	.anchor
	{
		color: #105587;
		width: 235px;
		background: white;
	}
	
	thead
	{
		position:sticky;
		top:0;
		z-index:4;
		background-color:rgb(216,216,216);
	}
	
	
	li
	{
		color: black;
		margin-top: 1px;
		font-size: 16px;
		text-align: left;
	}
	
	
	#followuptable td
	{
		border: 1px solid black;
		padding: 13px;
	}
	th
	{
		border: 1px solid black;
		padding: 13px;
	}
	
	#followupHeader
	{
		position:sticky;
		top:-2px;
		z-index:3;
		font-weight: bold;
		background-color: #305781;
		color: white;
	}
	
	#followuptable th:first-child 
	{
	  position: sticky;
	  left: 0;
	  z-index:2;
	  background-color: #305781;
	  color:white;
	  font-weight:bold;
	}
	
	// #viewfollow
	// {
		// // overflow: scroll;
		// /* width: 50%; */
	    // height: 850px;
		// margin-top: 1%;
	// }
	#testing
	{
		margin-top: 2%;
	}
	.tab-body
	{
		overflow-y: scroll;
		overflow-x: scroll;
		width: 100%;
		height: 65vh;
	}
	input[type=button]
	{
		color : #305781;
		outline: none;
		border:none;
		background-color: #305781;
		cursor: pointer;
		padding: 14px 16px;
		transition: 0.3s;
		font-size: 17px;
		font-weight:bold;
		color:white;
		float:right;    
		border-radius: 25px;
		margin-right: 30px;
		margin-top: 6px;		
	}
	#mangerdrpdown
	{
		sttext-align:center;
		padding: 4px;
		margin-left: 0%;
		margin-bottom: 10px;
		margin-top: 32px;
		
	}
	.dropdown-check-list {
	  display: inline-block;
	}

	.dropdown-check-list .anchor {
	  position: relative;
	  cursor: pointer;
	  display: inline-block;
	  padding: 5px 50px 5px 10px;
	  border: 1px solid #ccc;
	}

	.dropdown-check-list .anchor:after {
	  position: absolute;
	  content: "";
	  border-left: 2px solid black;
	  border-top: 2px solid black;
	  padding: 5px;
	  right: 10px;
	  top: 20%;
	  -moz-transform: rotate(-135deg);
	  -ms-transform: rotate(-135deg);
	  -o-transform: rotate(-135deg);
	  -webkit-transform: rotate(-135deg);
	  transform: rotate(-135deg);
	}
	.dropdown-check-list .anchor:active:after {
	  right: 8px;
	  top: 21%;
	}

	.dropdown-check-list ul.items {
	  padding: 2px;
	  display: none;
	  margin: 0;
	  border: 1px solid #ccc;
	  border-top: none;
	  width:290px;
	}

	.dropdown-check-list ul.items li {
	  list-style: none;
	}

	.dropdown-check-list:hover .anchor {
	  color: #0094ff;
	}

	.dropdown-check-list:hover .items {
	  display: block;
	}

	#list1
	{
		position: relative;
		position: absolute;
		z-index: 126;
		background: white;
	}
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
	#yearsdrpdown
	{
		position: relative;
		top: 33px;
		left: 20pc;
		width: 100px;
		height: 28px;
		font-size: 16px;
		color: #305781;
	}
	#reportDropDown{
		position: relative;
		top: 33px;
		left: 26em;
		height: 28px;
		color: #305781;
	}
	#ProductLine{
		position: relative;
		top: 33px;
		// left: 37em;
		left: 37em;
		height: 28px;
		color: #305781;
	}
	#allUserdrpdown
	{
		float: right;
		margin-right: 1%;
		margin-top: 4px;
		height: 28px;
		margin-bottom: 18px;
	}
	.dropRep {
			position: relative;
			display: inline-block;
		}

	.dropRep-content {
		display: none;
		position: absolute;
		background-color: #f9f9f9;
		min-width: max-content;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 2;
		height: 256px;
		overflow-y: scroll;
		left: -68px;
		
	}

	#repFollowupheader:hover .dropRep-content  {
		display: block;
	}
	.ReportEnglist
	{
		color: black;
		float: left;
		padding: 5px;
	}
	.Repchkbox{
		float:left;
		margin-top: 5px;
	}
</style>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<div id="ContainerDiv"> 
	<div class="bootstrap-iso">
	
		<div id="titlebar" >
			<i class="fa fa-user fa-xs" style="padding-top:20px"></i>
			<div id="username"> </div>
			<label class="switch" style="margin-right: 4px;float: right;margin-top: 10px;">
				<input type="checkbox" id="myCheckbox" onchange="toggleCheck()">
				<span class="slider round"></span>
			</label>
			
			<div><img id="logo" src="https://autoliv.sharepoint.com/:i:/r/sites/alvgtsc/ZeroFollowup/SiteAssets/Logo.png?csf=1&web=1&e=gePRmE" alt="Autoliv logo"><a href="https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SitePages/Home.aspx"><i style="float:none;font-size:x-large"class="fa fa-home" aria-hidden="true"></i></a></div>
				
		</div>
	</div>
	<br><br>
	<div class="tab-header" style = "align-items:center;text-align:center padding: 4px; margin-left: 2%; margin-bottom: 2%;">
	<div id="list1" class="dropdown-check-list" tabindex="100" style="margin-top: 32px;">
		<div>
			<span class="anchor">Search</span>
			<ul class="items">
				<input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()"/>
				<input type="button" style="margin:-1.5px;padding:0px;padding-bottom:2px;margin-top: 1px;" value="Select"  onclick="checkboxseletlist()"/>
					<li> 
						<ul class ="englist" id="engeerList"></ul>
					</li>
			</ul>
		</div>
	</div>
	<select name="year" id="yearsdrpdown">
		<option value="" selected disabled hidden>Year</option>
		<option value="2022">2022</option>
		<option value="2023">2023</option>
		<option value="2024">2024</option>
		<option value="2025">2025</option>
		<option value="2026">2026</option>
		<option value="2027">2027</option>
		<option value="2028">2028</option>
		<option value="2029">2029</option>
		<option value="2030">2030</option>
	</select>
	<select id="ProductLine">
		<option value="allTaskData">All</option>
		<option value="ManagementData">Management</option>
		<option value="PLSData">PLS</option>
		<option value="EngineerData">Engineer</option>
		<option value="CFTData">CFT</option>
	</select>	
	<select id="reportDropDown">
		<option value="directRep">Direct Reportees</option>
		<option value="allRep">All Reportees</option>
		<option id="allDataOfEng"value="allEngData" hidden>All data</option>
	</select>
	
	<select id="mangerdrpdown" style="float:right;margin-right:1%;position:relative;">
		 <option value="none" selected disabled hidden>Select an Option</option>
	</select>
	<br>
	<!--<div>
		<select id="allUserdrpdown" >
			<option value="dirReortee">Direct Reportees</option>
			<option value="allData">All data</option>
		</select>
	</div>-->
	<div>
		<div class="tab-body" id="viewfollow" style="margin-top:50px">
			<table id="followuptable">
				<thead id="followupHeader">
					<th class="followupheader" style="width:10%;cursor: pointer;" onclick="sortTable(0)">NAMES / MONTHS
					<i class="fa fa-sort" aria-hidden="true" style="position:absolute;padding-top:0"></i>
					</th>
					<th class="followupheader" "width:10%;" id="repFollowupheader" style="cursor: pointer;">
					<div class="dropRep">
						<span>Reportees
						<i class="fa fa-caret-down" style="position: absolute;padding: 2px 7px;"></i>
						</span>
						<div class="dropRep-content">
							<ul class ="ReportEnglist" id="ReportEngeerList"></ul>
						</div>
					</th>
					<th class="followupheader" "width:10%;">JAN</th>
					<th class="followupheader" "width:10%;">FEB</th>
					<th class="followupheader" "width:10%;">MAR</th>
					<th class="followupheader" "width:10%;">APR</th>
					<th class="followupheader" "width:10%;">MAY</th>
					<th class="followupheader" "width:10%;">JUN</th>
					<th class="followupheader" "width:10%;">JUL</th>
					<th class="followupheader" "width:10%;">AUG</th>
					<th class="followupheader" "width:10%;">SEP</th>
					<th class="followupheader" "width:10%;">OCT</th>
					<th class="followupheader" "width:10%;">NOV</th>
					<th class="followupheader" "width:10%;">DEC</th>
					<th class="followupheader" "width:10%;">TOPIC COUNT</th>
					<th class="followupheader" style="width:10%;cursor: pointer;" onclick="sortTable(15)">TOTAL COUNT
					<i class="fa fa-sort" aria-hidden="true" style="position:absolute;padding-top:0"></i>
					</th>
				</thead>	
				<tbody id="followuplist" class="followupBody">
				</tbody>
			</table>
		</div>
	</div>
	<div id=ExportButton>
		<input type="button" id="ExportData" class="expbtn" onclick="ExportData()" value="Export" />
		
	</div>
	<div id=ExportFollowUpButton>
		<input type="button" id="ExportData" class="expbtn" onclick="GenerateReportExtends()" value="View FollowUp Report" />
		
	</div>
	
</div>

<script>

	var listOfEngineer=[];
	var DataList = "TrackerData";
	var trackerDataArr =[];
	var assgnTaskList = "AssignTask";
	var assgnDataArr =[];
	var taskDataList = "Task";
	var taskDataArr=[];
	var sharepointemail = "";
	var user_log=  "";
    var user_title=  "";
    var user_email =  "";
	var user_region =  "";
	var queryUrlTrackerData = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+DataList+"')/items?$top=5000" ;
	var queryUrlTask = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+taskDataList+"')/items?$top=5000" ;
	var queryUrlAssignTask = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+assgnTaskList+"')/items?$top=5000" ;
	var keyval=[];
	var management=[];
	var pls= [];
	var cft=[];
	var engineer=[];
	var engineeremails=[];
	var emailid="";
	var empname;
	var mailarr=[];
	var RalfExtendedmngdata=[]
	var RolesOwners=[]
	//testing
	var mngvalue="";
	$(function(){
		$("#ProductLine").hide();
		// $("#ExportFollowUpButton").hide()
		var a = new Date();
		//var todaysdate=convert2DigitDate(a);
		var currentYear = a.getFullYear();
		queryUrlTrackerData = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+DataList+"')/items?$top=5000&$filter=Year eq " + currentYear ;
		SharePointListExtractData(queryUrlTrackerData);
		TaskListExtractData();
		getUserDetails();
		fnRolesOwner();
		AssgnTaskExtractData();
		setTimeout(function() {
	
			// GenerateReportExtends();
		
	}, 3500);
		
		
	});
	$(document).ready(function() {
      $(document).bind('keydown', function(e) {
        if (e.altKey && e.which == 82) {
		window.open("https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SitePages/usageReport.aspx");
          console.log("ALT+R");
        }
      });
	});

	document.getElementById("ExportData").addEventListener('click',function()
	{
		var table2excel = new Table2Excel();
		table2excel.export(document.querySelectorAll("#followuptable"));
	});	
	
function fnRolesOwner() {
	jQuery.ajax({
	url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/getbyname('ZeroFollowup Owners')/users?",

	type: "GET",
        async: false,
        headers: {
            "Accept": "application/json;odata=verbose"
        },
		
        success: function(data) {
			console.log(data)
	 // if (data.d.results.length > 0) {
	 var tempArr = data.d.results;
	 for (var i=0;i<tempArr.length;i++)
				{	
					RolesOwners.push(tempArr[i]['Title']);
				}
	console.log(RolesOwners);
	 // }
 
		},
        error: function(errorMsg) {
            console.log("Error: " + errorMsg.responseText);
        }
    });
	
}
	
//fetch data from tracker data list	
	function SharePointListExtractData(queryUrlTrackerData)
	{
	
		$.ajax({
			url: queryUrlTrackerData,
			type: "GET",
			async: false,
			headers: {
				"Accept": "application/json;odata=verbose"
			},
			success: function(data) {
				trackerDataArr=[];
				var currentYear = new Date().getFullYear()
				if (data.d.results.length > 0)
				{
					trackerDataArr  = trackerDataArr.concat(data.d.results);					
				}
				getUsernamesarr = trackerDataArr.filter(function(item) { return item['Year'] == currentYear })
				for(j=0;j<getUsernamesarr.length;j++)
				{
					if(getUsernamesarr[j]["EngineerName"]!= null )
					{
						// allEngNames.push(getUsernamesarr[j]["EngineerName"])
						GetUserProfilePropertiesOffice("i:0%23.f|membership|"+getUsernamesarr[j]["EngineerName"])
					}
				}
				// console.log(trackerDataArr)
			},
			error: function(errorMsg) {
				// console.log(errorMsg.responseText);
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
				// console.log(taskDataArr );
			},
			error: function(errorMsg) {
				// console.log(errorMsg.responseText);
			}			
		}); 
	}
	
	//fetch Assign task list data 
	
	function AssgnTaskExtractData()
	{
			
		$.ajax({
			url: queryUrlAssignTask,
			type: "GET",
			async: false,
			headers: {
			"Accept": "application/json;odata=verbose"
			},
			success: function(data) {
			if (data.d.results.length > 0)
			{
				assgnDataArr = assgnDataArr.concat(data.d.results);					
			}
			// console.log(assgnDataArr );
			},
			error: function(errorMsg) {
			// console.log(errorMsg.responseText);
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

		head=["maheshkumar.jagadish@autoliv.com","mohammed.salahuddin@autoliv.com","aravind.kanade@autoliv.com","mallikarjun.banappanavar@autoliv.com","amrutha.lakshminarasimha@autoliv.com","sudarshan.narayanaswamy@autoliv.com"]
		//console.log("user details....");
		sharepointemail = currentUser.get_email().toLowerCase();
		// sharepointemail = "mallikarjun.banappanavar@autoliv.com";
		user_log= currentUser.get_loginName() ;
		user_title= currentUser.get_title();  
		user_email = currentUser.get_email();
		// user_email = "mallikarjun.banappanavar@autoliv.com";
		user_region = user_log.substring(user_log.indexOf("|")+1,user_log.indexOf("|")+3) ;
		user_log=user_log.replace("#","%23");	
		console.log(user_log);
		console.log(user_title);
		//testing
		document.getElementById("username").innerHTML = user_title;
		//loadSubbordinates(sharepointemail)
		//GetUserProfileProperties(user_log);
		loadManagerDropdown()
		///TESTING
		viewFollowUP(sharepointemail);
		// console.log(head)
		// console.log(head);
		// console.log(sharepointemail)
		
		if(sharepointemail!="mallikarjun.banappanavar@autoliv.com")
		{
			console.log("head");
			// $("#allUserdrpdown").hide();
			document.getElementById("allDataOfEng").hidden = true;
		}
		else
		{
			// $("#allUserdrpdown").show();
			document.getElementById("allDataOfEng").hidden = false;
		}
		console.log(RolesOwners)
		if(head.includes(sharepointemail) || RolesOwners.includes(user_title))
		{
			$(".switch").show();
			$("#mangerdrpdown").show();
			$("#ExportFollowUpButton").show()
			// console.log(head)
			toggleCheck()
		}
		else
		{
				
			$(".switch").hide();
			$("#mangerdrpdown").hide();
			$("#ExportFollowUpButton").hide()
		}
	}
	function onQueryFailed(sender, args) 
	{  
		alert('Request failed. \nError: ' + args.get_message() + '\nStackTrace: ' + args.get_stackTrace());  
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
		duplicatelist.sort()
		for(var j=0;j<duplicatelist.length;j++)
		{
			if(!uniqueList.includes(duplicatelist[j])&&duplicatelist[j]!=null)
			{
				// console.log(duplicatelist[j])
				uniqueList.push(duplicatelist[j])
			}
		}
		// console.log(uniqueList)		
		for(var k=0;k<uniqueList.length;k++)
		{
			
			// console.log(uniqueList[k])	
			value+= "<option value='"+uniqueList[k]+"'>"+uniqueList[k]+"</option>"
			
		}
		$("#mangerdrpdown").append(value)
	}
	
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
			console.log(sharepointemail)
			if(sharepointemail!="mallikarjun.banappanavar@autoliv.com")
			{
				console.log("inside if ");
				// $("#allUserdrpdown").hide();
				document.getElementById("allDataOfEng").hidden = true;
				
				// document.getElementById("allUserdrpdown").style.display = "none";
				// ProductLineDisplay()
				
			}
			else
			{
				console.log("inside else ")
				// $("#allUserdrpdown").show();
				document.getElementById("allDataOfEng").hidden = false;
			}
			document.getElementsByClassName("followupBody").innerHTML="";
			viewFollowUP(sharepointemail);
			document.getElementById("username").innerHTML = user_title;
		}
		// ProductLineDisplay()
	}


///testing
//on change of manager drop down value 
	document.getElementById("mangerdrpdown").onchange = testing;
	
	function testing()
	{
		///testing
		selectmanager = document.querySelector('#mangerdrpdown');
        mngvalue = selectmanager.value;
		viewFollowUP(mngvalue)
		document.getElementById('reportDropDown').getElementsByTagName('option')[0].selected = true;
		//testing
		document.getElementById("username").innerHTML = mngvalue;
		allDataDisplay()
	}
	
//load engineer names 
	function viewFollowUP(currentUser)
	{
		listOfEngineer=[];
		var engineerNames=[];
		var elementss = document.getElementById("followuplist");
		elementss.innerHTML = "";
		var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",]
		var temp = assgnDataArr.filter(function(item) { return item['ReportingManager'] == currentUser});
		console.log(temp)
		var val="";
		var names;
		var cftdata=[];
		var plsdata=[];
		var tasktemparray=[];
		tasktemparray = taskDataArr.filter(function(item) { return item['TaskHead'] == currentUser});
		//console.log(tasktemparray)
		//console.log(temp);
		for(var i=0;i<temp.length;i++)
		{
			if(temp[i]["Engineer"]!= null)
			{
				names=temp[i].EngineerName.charAt(0).toUpperCase()+temp[i].EngineerName.slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
				//console.log(temp[i]["Engineer"])
				engineerNames.push(temp[i]["EngineerName"])
			}
		}
		// console.log(engineerNames)
		for(var i=0;i<assgnDataArr.length;i++)
		{
			for(var j=0;j<tasktemparray.length;j++)
			{
				if(tasktemparray.length!=0)
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
								if(!engineerNames.includes(assgnDataArr[i].EngineerName))
								{
									engineerNames.push(assgnDataArr[i].EngineerName)
								}
							}
						}	
						// console.log("mgmt engineer names"+engineerNames)

						
					}
					
					if(assgnDataArr[i]["PLS"]!= null && tasktemparray[j]["TaskCode"].includes("PLS"))
					{

						taskval = tasktemparray[j]["TaskCode"]
						var datainMainList= assgnDataArr[i]["PLS"]
						// console.log(datainMainList)
						if(!plsdata.includes(datainMainList))
						{
							plsdata=datainMainList.toString().split(",")
						}
						for(k=0;k<plsdata.length;k++)
						{
							if(plsdata[k].includes(taskval.trim()))	
							{
								if(!engineerNames.includes(assgnDataArr[i].EngineerName))
								{
									engineerNames.push(assgnDataArr[i].EngineerName)
								}
							}
						}
						// console.log("mgmt engineer names"+engineerNames)
						// console.log(names)
						// if(!newarray.includes(names))
						// {
							// newarray.push(names)
						// }
						// console.log(newarray)
					}
					
					if(assgnDataArr[i]["CFT"]!= null && tasktemparray[j]["TaskCode"].includes("CFT"))
					{
						var taskval = tasktemparray[j]["TaskCode"]
						var datainMainList= assgnDataArr[i]["CFT"]
						// console.log(datainMainList)
						if(!cftdata.includes(datainMainList))
						{
							cftdata=datainMainList.toString().split(",")
						}
						// console.log(cftdata)
						// console.log(taskval)
						for(k=0;k<cftdata.length;k++)
						{
							if(cftdata[k].includes(taskval.trim()))	
							{
								
								if(!engineerNames.includes(assgnDataArr[i].EngineerName))
								{
									engineerNames.push(assgnDataArr[i].EngineerName)
								}
							}
						}	
						// console.log("mgmt engineer names"+engineerNames)						
					}
				}
			}	
			cftdata=[];
			plsdata=[];
		    managedata=[];
		}
		//console.log(engineerNames)
		listOfEngineer=engineerNames
		loadDropdownDeatils(engineerNames);
		// console.log("before call function"+engineerNames)
		loadTableVal(engineerNames)
		reporteesDropValue(engineerNames)
		document.getElementsByClassName("followupBody").innerHTML="";
	}
	
	function loadTableVal(engineerNames)
	{
		
		// console.log("before call function"+engineerNames)
		// console.log(engineerNames)
		document.getElementsByClassName("followupBody").innerHTML="";
		document.getElementById("followuplist").innerHTML="";
		var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",]
		
		var temp = assgnDataArr.filter(function(item) { return item['ReportingManager'] == currentUser});
		// console.log(temp)
		var val="";
		var TaskSet=new Set();
		var names;
		var reporteesListArr=[];
		var directreporteesListArr=[];
		var engdrpval;
		var cftdata=[];
		var plsdata=[];
		var managedata=[];
		for(a=0;a<engineerNames.length;a++)
		{
			names=engineerNames[a].charAt(0).toUpperCase()+engineerNames[a].slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
			// console.log(names)
			for (i=0;i<taskDataArr.length;i++)
			{
				TaskSet.add(taskDataArr[i]["Task"])
			}
			Tasklist = Array.from(TaskSet)
			// console.log(Tasklist)
			// console.log(trackerDataArr)
			for(var i=0;i<trackerDataArr.length;i++)
			{
				// console.log(engineerNames[a],trackerDataArr[i]["EngineerName"])
				if(engineerNames[a]==trackerDataArr[i]["EngineerName"])
				{	
						directreporteesListArr.push(engineerNames[a])
			
					reporteesnameMail=trackerDataArr[i]["ReportingManager"]
					if (!reporteesListArr.includes(reporteesnameMail))
					{
						reporteesListArr.push(reporteesnameMail)
					}
					// console.log(trackerDataArr[i]["EngineerName"])
					// console.log(reporteesnameMail)
					if (reporteesnameMail != null){
						reporteesname=reporteesnameMail.charAt(0).toUpperCase()+reporteesnameMail.slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
					// console.log(reporteesname)
					}
					else
					{
						reporteesname=""
					}
					
					var count=""
					var countSet=new Set();
					var entireDataList=[];
					var countList=[];
					var totentiredataList=[];
					
					val+="<tr><td>"+names+"</td>"
					val+="<td>"+reporteesname+"</td>"
					
					
					for(j=0;j<month.length;j++)
					{
						var monthCount=0
						// console.log(trackerDataArr[i])
						// console.log(month[j])
						// console.log(trackerDataArr[i][month[j]])
						if(trackerDataArr[i][month[j]]== null)
						{
							val+="<td> </td>";
						}
						else
						{
							datalist=trackerDataArr[i][month[j]]
							countval=datalist.split(";");
							datalist=datalist.replaceAll(";",",");
							listsval=datalist.split(",");
							// console.log(listsval)
							count=count+countval.length-1
							monthCount=listsval.length-1
							// console.log(monthCount)
							monthdatalist=trackerDataArr[i][month[j]]
							countval=monthdatalist.split(";");
							val+="<td>"+countval+";"
							for(k=0;k<listsval.length;k++)
							{
								// console.log(listsval[k])
								entireDataList.push(listsval[k].trim());
								
							}
							totdatalist=monthdatalist.replaceAll(";",",").replaceAll(":",",");
							totListVal=totdatalist.split(",");
							for(n=0;n<totListVal.length;n++)
							{
								// console.log(totListVal[n])
								totentiredataList.push(totListVal[n].trim())
							}
							// console.log(totentiredataList)
							val+="<br>-------------"
							val+="<br>"+"Total = "+monthCount+"<br>"
							val+="-------------"
							val+="</td>";
							
						}
					}	
					if(Tasklist.length!=0)
					{
						// console.log(Tasklist)
						var countlistval=0
						for(m=0;m<Tasklist.length;m++)
						{
							var countls=0
							var taskSet=new Set()
							// console.log(totentiredataList)
							for(l=0;l<totentiredataList.length;l++)
							{
								if(Tasklist[m]==totentiredataList[l])
								{	
									// console.log(Tasklist[m])
									nameslist=Tasklist[m]
									countls=countls+1
									countlistval =countlistval+1	
								}
							}
							if (countls!=0)
							{
								namWithCount=nameslist+" = "+countls;
								// console.log(namWithCount)
								countSet.add(namWithCount)
								countList = Array.from(countSet)
							}
						}
					}
					//console.log(countSet)
					// console.log(countList)
					//console.log(count)
					if (!count==0)
					{
						val+="<td>"
						for(p=0;p<countList.length;p++)
						{
							val+=countList[p]+"<br>"
						}
						if (countlistval!=0)
						{
						val+="</td>";
						val+="<td>"
						val+=countlistval
						val+="</td>";
						}	
					} 
					else
					{
					val+="<td> </td>";
					val+="<td> </td>";
					}
					val+="</tr>"
				}
			}
		}
		val=val.replaceAll(',;','; ')
		val=val.replaceAll(',',', ')
		$("#followuplist").append(val);
		// reporteesDropValue(directreporteesListArr)
		if(mngvalue=="mallikarjun.banappanavar@autoliv.com"|| user_email=="mallikarjun.banappanavar@autoliv.com" || sharepointemail=="mallikarjun.banappanavar@autoliv.com")
		{
			if (sharepointemail!="mallikarjun.banappanavar@autoliv.com" && document.getElementById("myCheckbox").checked === false)
			{
				// $("#allUserdrpdown").hide();
				document.getElementById("allDataOfEng").hidden = true;

			}
			else{
				
				// $("#allUserdrpdown").show();
				document.getElementById("allDataOfEng").hidden = false;
			}
		}
		else
		{
			// $("#allUserdrpdown").hide();
			document.getElementById("allDataOfEng").hidden = true;
		}
		filterFunction() ;
	}
	function reporteesDropValue(reporteeslist)
	{
		document.getElementById("ReportEngeerList").innerHTML="";
		var reporteesEngval='';
		reporteeslist.sort();
		reporteesEngval+="<li><input type='checkbox' class='Repchkbox' id='selectAll' name='Selectall' onchange='toggleCheckbox(this)'>Select all</li>"
		for(i=0;i<reporteeslist.length;i++)
		{
			if (reporteeslist[i] != null){
				var reporteesListName=reporteeslist[i].charAt(0).toUpperCase()+reporteeslist[i].slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
			console.log(reporteesListName)
			}
			else
			{
				reporteesListName="null"
			}
			reporteesEngval+="<li><input type='checkbox' class='Repchkbox' id='"+reporteeslist[i]+"' name='"+reporteesListName+"'onchange='toggleCheckbox(this)'/>"+reporteesListName+"</li>"

		}
		$(".ReportEnglist").append(reporteesEngval);

	}
	function toggleCheckbox(element)
	{
		console.log(element)
		var SelectEngdata=[];
		var repcheckedBoxes=document.getElementsByClassName('Repchkbox');
		
		document.getElementById('reportDropDown').value = 'allRep';
		ReportDisplay()
		if(element.id=="selectAll" && element.checked)
		{
			for(element of repcheckedBoxes)
			{
				if(element.checked)
				{
					if(element.id!="selectAll")
					{
						element.checked=false
					}
				}
				element.checked=true
			}
			// console.log(listOfEngineer)
			ReportDropDisplay(listOfEngineer)
			// console.log(listOfEngineer)
		}
		else{
			if(element.id=="selectAll" && !element.checked)
			{
				for(element of repcheckedBoxes)
				{
					element.checked=false
				}
			}
			for(element of repcheckedBoxes)
			{
				if(element.id=="selectAll")
				{
					element.checked=false
				}
				else
				{
					if(element.checked)
					{
						SelectEngdata.push(element.id)
					}
				}
			}
			// console.log(SelectEngdata)
			ReportDropDisplay(SelectEngdata)
			// console.log(SelectEngdata)
		}
	}
	//Search for Dropdown
	function filterFunction() 
	{
	  var input, filter, ul, li, a, i;
	  input = document.getElementById("myInput");
	  filter = input.value.toUpperCase();
	  div = document.getElementById("list1");
	  a = div.getElementsByTagName("li");
	  for (i = 0; i < a.length; i++) 
	  {
		txtValue = a[i].textContent || a[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  a[i].style.display = "";
		} else {
		  a[i].style.display = "none";
		}
	  }
	}
	
	
//Load Drop down values containing  tasks
	function loadDropdownDeatils(engineerList)
	{
		// console.log(engineerList)
		document.getElementById("engeerList").innerHTML="";
		
		// console.log(engineerList)
		engineerList.sort()
		var engval="";
		var names;
		for(a=0;a<engineerList.length;a++)
		{
			names=engineerList[a].charAt(0).toUpperCase()+engineerList[a].slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
			engval+="<li><input type='checkbox' class='chkbox' id='"+engineerList[a]+"' name='"+names+"'/>"+names+"</li> "
			// console.log(names)
		}	
		$(".englist").append(engval)
	
		//engineerNames=[];
		var checkList = document.getElementById('list1');
		checkList.getElementsByClassName('anchor')[0].onclick = function(evt) 
		{
		  if (checkList.classList.contains('visible'))
			checkList.classList.remove('visible');
		  else
			checkList.classList.add('visible');
		}
	}
	
	
	function checkboxseletlist()
	{
		var chkedbxList=[];
		var mailid=[];
		var mailbodycontent=[];
		var chkboxemail=[];
		var valueStr;
		var taskcodes;
		
		var checkedBoxes = document.getElementsByClassName('chkbox');
		for(element of checkedBoxes)
		{
			if(element.checked)
			{
				chkedbxList.push(element.id)
			}		
		}
		if(chkedbxList.length!=0)
		{
			loadTableVal(chkedbxList)
			uncheck()
		}
		else
		{
			for(element of checkedBoxes)
			{
				element.checked = true;
				chkedbxList.push(element.id)				
			}
			loadTableVal(chkedbxList)
		}
	}
	function uncheck()
	{
		var checkedBoxes=document.getElementsByClassName('chkbox');
		for(element of checkedBoxes)
		{
			if(element.checked)
			{
				element.checked = false;
			}		
		}
		//console.log(element)
	}
	
	function sortTable(n) 
	{
		var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
		table = document.getElementById("followuptable");
		switching = true;
		dir = "asc"; 
		while (switching) 
		{
			switching = false;
			rows = table.rows;
			for (i = 1; i < (rows.length - 1); i++) 
			{
				shouldSwitch = false;
				x = rows[i].getElementsByTagName("TD")[n];
				y = rows[i + 1].getElementsByTagName("TD")[n];
				if (n == 0)
				{
					if (dir == "asc") 
					{
						if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
						{
							shouldSwitch= true;
						break;
						}
					} 
					else if (dir == "desc") 
					{
						if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
						{
							shouldSwitch = true;
							break;
						}
					}
				}
				else if(n == 15)
				{	
					if (dir == "asc") 
					{
						if (Number(x.innerHTML) > Number(y.innerHTML)) 
						{
							shouldSwitch = true;
							break;
						}
					} 
					else if (dir == "desc") 
					{
						if (Number(x.innerHTML) < Number(y.innerHTML)) 
						{
							shouldSwitch = true;
							break;
						}
					}
				}
			}
			if (shouldSwitch) 
			{
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
				switching = true;
				switchcount ++;      
			} 
			else 
			{
				if (switchcount == 0 && dir == "asc") 
				{
					dir = "desc";
					switching = true;
				}
			}
		}
	}
	function allDataDisplay()
	{
		var drpvalue;
		var outputvalue;
		var allEngNames=[];
		console.log(mngvalue+user_email)
		if(mngvalue!="mallikarjun.banappanavar@autoliv.com"|| user_email!="mallikarjun.banappanavar@autoliv.com")
		{
			// $("#allUserdrpdown").hide();
			document.getElementById("allDataOfEng").hidden = true;
		}
		if(mngvalue=="mallikarjun.banappanavar@autoliv.com"|| user_email=="mallikarjun.banappanavar@autoliv.com")
		{
			// console.log("mngvalue"+mngvalue)
			// $("#allUserdrpdown").show();
			document.getElementById("allDataOfEng").hidden = false;
			// drpvalue= document.querySelector("#allUserdrpdown")
			// outputvalue= drpvalue.value
			var reportAllDrop= document.querySelector("#reportDropDown")
			var reportDropval= reportAllDrop.value	
			// console.log(outputvalue)
			if(reportDropval=="allEngData" )
			{
				// console.log("In iffffff")
				// $(".dropRep-content").hide()
				for(j=0;j<trackerDataArr.length;j++)
				{
					if(trackerDataArr[j]["EngineerName"]!= null )
					{
						allEngNames.push(trackerDataArr[j]["EngineerName"])
					}
				}
				// console.log(allEngNames)
				loadTableVal(allEngNames)
				loadDropdownDeatils(allEngNames)
			}
			else
			{
				// $(".dropRep-content").show()
				// console.log("In elsehmgfk")
				viewFollowUP("mallikarjun.banappanavar@autoliv.com")
			}
		}
	}
	function YearsDisplay()
	{
		drpvalue= document.querySelector("#yearsdrpdown")
		outputvalue= drpvalue.value
		// console.log(outputvalue)
		queryUrlTrackerData = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+DataList+"')/items?$top=5000&$filter=Year eq " + outputvalue ;
		SharePointListExtractData(queryUrlTrackerData)
		toggleCheck()
		
	}
	function ReportDisplay(){
		var reportDrop= document.querySelector("#reportDropDown")
		var reportDropvalue= reportDrop.value
		var reportEngdata=[]
		var oldengNames=[]
		var ManagerName;
		if (document.getElementById("myCheckbox").checked === false)
		{
			var Engdata = assgnDataArr.filter(function(item) { return item['ReportingManager'] == sharepointemail});
			ManagerName=sharepointemail
		}
		else
		{
			var Engdata = assgnDataArr.filter(function(item) { return item['ReportingManager'] == mngvalue});
			ManagerName=mngvalue
		}
		console.log(reportDropvalue)
		console.log(Engdata)
		// Engdata=listOfEngineer

		if (reportDropvalue == "allRep")
		{
			// $(".dropRep-content").show()
			// Create an empty dictionary object
			var dict = {};

			// Loop over the data and build the dictionary
			assgnDataArr.forEach(function(entry) 
			{
				var ReportingManager = entry.ReportingManager;
				var EngineerName = entry.EngineerName;
				if (!dict.hasOwnProperty(ReportingManager)) {
					dict[ReportingManager] = [EngineerName];
				} 
				else {
					dict[ReportingManager].push(EngineerName);
				}
			});
			console.log(dict);
			// for (e=0;e<Engdata.length;e++)
			for (e=0;e<listOfEngineer.length;e++)
			{
				// var namesOfEng=Engdata[e]["EngineerName"]
				var namesOfEng=listOfEngineer[e]
				reportEngdata.push(namesOfEng)
				if (namesOfEng!== "undefined"){
				oldengNames.push(namesOfEng)
				}
				console.log(namesOfEng)	
				if (dict[namesOfEng] !== undefined)
				{
					for (i = 0; i < dict[namesOfEng].length; i++) {
						reportEngdata.push(dict[namesOfEng][i])
					}
				}
				console.log(dict[namesOfEng])
			}
			console.log(reportEngdata)
			console.log(oldengNames)
			var noEngdata=1;
			while(noEngdata != 0){
				noEngdata=0;
				for (i = 0; i < reportEngdata.length; i++) 
				{
					var reportEngdataName=reportEngdata[i]
					if(!oldengNames.includes(reportEngdataName))
					{
						console.log(reportEngdataName);
						oldengNames.push(reportEngdata[i]);
						if (dict[reportEngdataName] !== undefined)
						{
							console.log("inside if")
							for (j = 0; j < dict[reportEngdata[i]].length; j++) {
								reportEngdata.push(dict[reportEngdata[i]][j]);
								noEngdata=noEngdata+1;
							}
						}
					}
				}
			}
			loadTableVal(reportEngdata)
			loadDropdownDeatils(reportEngdata)
			console.log(reportEngdata)
			console.log(oldengNames)
		}
		
		else if(reportDropvalue == "allEngData")
		{
			console.log("allEngData")
			allDataDisplay()
		}
		else{
				// $(".dropRep-content").hide()
				viewFollowUP(ManagerName)
		}
	}
	
	
	function ProductLineDisplay()
	{
		var allEngTaskName=[];
		var mngvalueData;
		var prodectLineDrop= document.querySelector("#ProductLine");
		var prodectLineDropValue= prodectLineDrop.value;
		// var drpvalue= document.querySelector("#allUserdrpdown")
		// var outputvalue= drpvalue.value
		if (document.getElementById("myCheckbox").checked === false)
		{
			 mngvalueData = "";
		}
		else
		{
			mngvalueData = mngvalue;
		}
		if (mngvalueData==""){
			if (outputvalue=="allData" && sharepointemail=="mallikarjun.banappanavar@autoliv.com"){
				var temp= assgnDataArr;
			}
			else{
				var temp = assgnDataArr.filter(function(item) { return item['ReportingManager'] == sharepointemail});
			}
		console.log(temp);
		}
		else{
			if (outputvalue=="allData" && mngvalueData == "mallikarjun.banappanavar@autoliv.com"){
				var temp= assgnDataArr;
			}
			else{
				var temp = assgnDataArr.filter(function(item) { return item['ReportingManager'] == mngvalueData});
			}
		console.log(temp);
		}
		if (prodectLineDropValue=="allTaskData"){
			for(i=0;i<temp.length;i++){
				allEngTaskName=listOfEngineer
				
				console.log(allEngTaskName)
				loadTableVal(allEngTaskName)
				loadDropdownDeatils(allEngTaskName)
			}
		}
		if (prodectLineDropValue=="ManagementData"){
			for(i=0;i<temp.length;i++){
				console.log("...Management")
				if (allEngTaskName.length<1){
					document.getElementsByClassName("followupBody").innerHTML="";
					document.getElementById("followuplist").innerHTML="";
					document.getElementById("engeerList").innerHTML="";
				}
				if( temp[i]["Management"]!=null){
					console.log("Management")
					allEngTaskName.push(names=temp[i]["EngineerName"])
					console.log(allEngTaskName)
					loadTableVal(allEngTaskName)
					loadDropdownDeatils(allEngTaskName)
					
					
				}
			}
		}
		if (prodectLineDropValue=="PLSData"){
			for(i=0;i<temp.length;i++){
				console.log("....PLS")
				if (allEngTaskName.length<1){
					document.getElementsByClassName("followupBody").innerHTML="";
					document.getElementById("followuplist").innerHTML="";
					document.getElementById("engeerList").innerHTML="";
				}
				if( temp[i]["PLS"]!=null){
					console.log("PLS")
					allEngTaskName.push(names=temp[i]["EngineerName"])
					console.log(allEngTaskName)
					loadTableVal(allEngTaskName)
					loadDropdownDeatils(allEngTaskName)
				}
			}			
		}
		if (prodectLineDropValue=="EngineerData"){
			for(i=0;i<temp.length;i++){
				console.log(temp.length)
				if (allEngTaskName.length<1){
					document.getElementsByClassName("followupBody").innerHTML="";
					document.getElementById("followuplist").innerHTML="";
					document.getElementById("engeerList").innerHTML="";
				}
				if( temp[i]["Engineer"]!=null){
					console.log("Engineer")
					allEngTaskName.push(names=temp[i]["EngineerName"])
					console.log(allEngTaskName)
					loadTableVal(allEngTaskName)
					loadDropdownDeatils(allEngTaskName)
				}
			}
		}
		if (prodectLineDropValue=="CFTData"){
			for(i=0;i<temp.length;i++){
				console.log(temp[0])
				if (allEngTaskName.length<1){
					document.getElementsByClassName("followupBody").innerHTML="";
					document.getElementById("followuplist").innerHTML="";
					document.getElementById("engeerList").innerHTML="";
				}
				if( temp[i]["CFT"]!=null){
					console.log("CFT")
					allEngTaskName.push(names=temp[i]["EngineerName"])
					console.log(allEngTaskName)
					loadTableVal(allEngTaskName)
					loadDropdownDeatils(allEngTaskName)
				}
			}
		}
		// console.log(sharepointemail)
		

	}
	
	function ReportDropDisplay(Engdata){
		var reportDrop= document.querySelector("#reportDropDown")
		var reportDropvalue= reportDrop.value
		var reportEngdata=[]
		var oldengNames=[]
		var ManagerName;
		console.log(Engdata)
		if (document.getElementById("myCheckbox").checked === false)
		{
			// var Engdata = assgnDataArr.filter(function(item) { return item['ReportingManager'] == sharepointemail});
			ManagerName=sharepointemail
		}
		else
		{
			// var Engdata = assgnDataArr.filter(function(item) { return item['ReportingManager'] == mngvalue});
			ManagerName=mngvalue
		}
		console.log(reportDropvalue)
		console.log(Engdata)
		var dict = {};

			// Loop over the data and build the dictionary
			assgnDataArr.forEach(function(entry) 
			{
				var ReportingManager = entry.ReportingManager;
				var EngineerName = entry.EngineerName;
				if (!dict.hasOwnProperty(ReportingManager)) {
					dict[ReportingManager] = [EngineerName];
				} 
				else {
					dict[ReportingManager].push(EngineerName);
				}
			});
			console.log(dict);
		if (reportDropvalue == "allRep")
		{
			// Create an empty dictionary object
			
			for (e=0;e<Engdata.length;e++)
			{
				var namesOfEng=Engdata[e]
				reportEngdata.push(namesOfEng)
				if (namesOfEng!== "undefined"){
				oldengNames.push(namesOfEng)
				}
				console.log(namesOfEng)	
				if (dict[namesOfEng] !== undefined)
				{
					for (i = 0; i < dict[namesOfEng].length; i++) {
						reportEngdata.push(dict[namesOfEng][i])
					}
				}
				console.log(dict[namesOfEng])
			}
			console.log(reportEngdata)
			console.log(oldengNames)
			var noEngdata=1;
			while(noEngdata != 0){
				noEngdata=0;
				for (i = 0; i < reportEngdata.length; i++) 
				{
					var reportEngdataName=reportEngdata[i]
					if(!oldengNames.includes(reportEngdataName))
					{
						// console.log(reportEngdataName);
						oldengNames.push(reportEngdata[i]);
						if (dict[reportEngdataName] !== undefined)
						{
							console.log("inside if")
							for (j = 0; j < dict[reportEngdata[i]].length; j++) {
								reportEngdata.push(dict[reportEngdata[i]][j]);
								noEngdata=noEngdata+1;
							}
						}
					}
				}
			}
			loadTableVal(reportEngdata)
			loadDropdownDeatils(reportEngdata)
			console.log(reportEngdata)
			console.log(oldengNames)
		}
		// else{
				// viewFollowUP(ManagerName)
		// }
	}
	allDataDisplay()
	// document.getElementById("allUserdrpdown").onchange = allDataDisplay;
	document.getElementById("yearsdrpdown").onchange   = YearsDisplay;
	document.getElementById("reportDropDown").onchange = ReportDisplay;
	document.getElementById("ProductLine").onchange = ProductLineDisplay;
	
function GenerateReportExtends()
{
	
	var uri = 'data:application/vnd.ms-excel;base64,';
				var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'; 
				var base64 = function(s) {
					return window.btoa(unescape(encodeURIComponent(s)))
				};

				var format = function(s, c) {
					return s.replace(/{(\w+)}/g, function(m, p) {
						return c[p];
					})
				};
				
	var result = "<thead>"+
	"<tr>"+
	"<th>Employee name</th>"+
	"<th>Manager Name</th>"+
	"<th>Level 2 senior manager</th>"+
	"<th>Level 3 senior manager</th>"+
	"<th>Level 4 senior manager</th>"+
	"<th>Date of trigger</th>"+
	"<th>Topic</th>"+
	"</tr>"+
	"</thead>";
		
	let currentYear = new Date().getFullYear();
	console.log(trackerDataArr)
	console.log(currentYear)
	currentYeardata = trackerDataArr.filter(function(item) { return item['Year'] == currentYear })
	console.log(currentYeardata)
	
	for (var m = 0;m<currentYeardata.length;m++)
	{
		if(currentYeardata[m]['Dec']!=null)
		{
			// console.log(currentYeardata[m]['Dec'])
			var lastFollowUpdata = currentYeardata[m]['Dec']
		}
		else if(currentYeardata[m]['Nov']!=null)
		{
			// console.log(currentYeardata[m]['Nov'])
			var lastFollowUpdata = currentYeardata[m]['Nov']
		}
		else if(currentYeardata[m]['Oct']!=null)
		{
			// console.log(currentYeardata[m]['Oct'])
			var lastFollowUpdata = currentYeardata[m]['Oct']
		}
		else if(currentYeardata[m]['Sep']!=null)
		{
			// console.log(currentYeardata[m]['Sep'])
			var lastFollowUpdata = currentYeardata[m]['Sep']
		}
		else if(currentYeardata[m]['Aug']!=null)
		{
			// console.log(currentYeardata[m]['Aug'])
			var lastFollowUpdata = currentYeardata[m]['Aug']
		}
		else if(currentYeardata[m]['Jul']!=null)
		{
			// console.log(currentYeardata[m]['Jul'])
			var lastFollowUpdata = currentYeardata[m]['Jul']
		}
		else if(currentYeardata[m]['Jun']!=null)
		{
			// console.log(currentYeardata[m]['Jun'])
			var lastFollowUpdata = currentYeardata[m]['Jun']
		}
		else if(currentYeardata[m]['May']!=null)
		{
			// console.log(currentYeardata[m]['May'])
			var lastFollowUpdata = currentYeardata[m]['May']
		}
		else if(currentYeardata[m]['Apr']!=null)
		{
			// console.log(currentYeardata[m]['Apr'])
			var lastFollowUpdata = currentYeardata[m]['Apr']
		}
		else if(currentYeardata[m]['Mar']!=null)
		{
			// console.log(currentYeardata[m]['Mar'])
			var lastFollowUpdata = currentYeardata[m]['Mar']
		}
		else if(currentYeardata[m]['Feb']!=null)
		{
			// console.log(currentYeardata[m]['Feb'])
			var lastFollowUpdata = currentYeardata[m]['Feb']
		}
		else if(currentYeardata[m]['Jan']!=null)
		{
			// console.log(currentYeardata[m]['Jan'])
			var lastFollowUpdata = currentYeardata[m]['Jan']
		}
		if(lastFollowUpdata!=null)
		{
			var arrayOfLastFolloup= lastFollowUpdata.split(';')
			// console.log(arrayOfLastFolloup)
			// console.log(arrayOfLastFolloup.length)
			// console.log((arrayOfLastFolloup.length)-2)
			var lastFollowUpDate = arrayOfLastFolloup[(arrayOfLastFolloup.length)-2].split(":")[0]
			var lastFollowUpTask = arrayOfLastFolloup[(arrayOfLastFolloup.length)-2].split(":")[1]
			// console.log(lastFollowUpDate)
			// console.log(lastFollowUpTask)
		}
		else
		{
			var lastFollowUpDate = ""
			var lastFollowUpTask = ""
		}
		var usernameFolloup = currentYeardata[m]['EngineerName']
		// console.log(usernameFolloup)
		// GetUserProfilePropertiesOffice("i:0%23.f|membership|sushritha.bharadwaj@autoliv.com")
		CurrentRalfExtendedmngdata = RalfExtendedmngdata.filter(function(item) { return item['Email'] == usernameFolloup })
		// CurrentRalfExtendedmngdata = RalfExtendedmngdata.filter(function(item) { return item['Email'] == "sushritha.bharadwaj@autoliv.com" })
		if (CurrentRalfExtendedmngdata.length!=0 && usernameFolloup!= null){
			// console.log(CurrentRalfExtendedmngdata)
			// console.log(CurrentRalfExtendedmngdata[0]["ExtendedManagers"])
			lengthOfManager = CurrentRalfExtendedmngdata[0]["ExtendedManagers"]["results"].length
			if(lengthOfManager>0){
				managerL1 = CurrentRalfExtendedmngdata[0]["ExtendedManagers"]["results"][lengthOfManager-1].replace("i:0#.f|membership|","")
			}
			else{
				managerL1=""
			}
			if(lengthOfManager>1){
				managerL2 = CurrentRalfExtendedmngdata[0]["ExtendedManagers"]["results"][lengthOfManager-2].replace("i:0#.f|membership|","")
			}
			else{
				managerL2=""
			}
			if(lengthOfManager>2){
				managerL3 = CurrentRalfExtendedmngdata[0]["ExtendedManagers"]["results"][lengthOfManager-3].replace("i:0#.f|membership|","")
			}
			else{
				managerL3=""
			}
			if(lengthOfManager>3){
				managerL4 = CurrentRalfExtendedmngdata[0]["ExtendedManagers"]["results"][lengthOfManager-4].replace("i:0#.f|membership|","")
			}
			else{
				managerL4=""
			}
			// console.log(managerL1)
			// console.log(managerL2)
			// console.log(managerL3)
			// console.log(managerL4)
		}
		else
		{
			managerL1=currentYeardata[m]['ReportingManager']
			managerL2=""
			managerL3=""
			managerL4=""
		}
		var strTxt = "<tr>";
		strTxt += "<td>"+usernameFolloup+ "</td>";
		strTxt += "<td>"+managerL1+ "</td>";
		strTxt += "<td>"+managerL2+ "</td>";
		strTxt += "<td>"+managerL3+ "</td>";
		strTxt += "<td>"+managerL4+ "</td>";
		strTxt += "<td>"+lastFollowUpDate+ "</td>";
		strTxt += "<td>"+lastFollowUpTask+ "</td>";
		strTxt += "</tr>";
		result +=strTxt;
	}
	
	setTimeout(function() {
	
			var ctx = {
					worksheet : 'Worksheet',
					table : result
				}

			
			//if (csv == null) return;
			fileDate = new Date().toLocaleString()
			fileDate=fileDate.replace(/\/|, | |:/g, '_')
			filename = 'folloupReport'+fileDate+' .xls';



			link = document.createElement('a');
			link.setAttribute('href', uri + base64(format(template, ctx)) );
			link.setAttribute('download', filename);
			link.click();
			
		
	}, 2000);
	
}
function GetUserProfilePropertiesOffice(user) {  
			var deferred = jQuery.Deferred();
				$.ajax({  
					asynch: false,  
					url: _spPageContextInfo.webAbsoluteUrl + 
						"/_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v='" + user + "'",  
					method: "GET",  
					headers: {  
						"Accept": "application/json; odata=verbose"  
					},  
					success: function(data) {  
						// console.log(data);
					
						//console.log(data['d']['DirectReports']['results']);
						
						RalfExtendedmngdata =  RalfExtendedmngdata.concat ( data['d']) ;
						
						//RalfExtendedmngdata.push("i:0%23.f|membership|mohammed.salahuddin@autoliv.com");
						//RalfExtendedmngdata.push("i:0%23.f|membership|monisha.shankarappa@autoliv.com");
						// console.log(RalfExtendedmngdata);
						
						//CreateDataSet(RalfExtendedmngdata);
						
						//console.log("Name = " + data.d.GetUserProfilePropertyFor);  
						var testreq_site = data.d.GetPropertiesFor ;
						//console.log(testreq_site);
							
					},  
					error: function(data1) {  
						//alert("ERROR");  
						console.log("Errororo1");
					}  
				});  
			
			return deferred.promise();
			
		}
</script>

