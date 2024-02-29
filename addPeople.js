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

	.tab
	{
		position:absolute;
		top: 50%;
		left: 50%;
		width: 90%;
		height: 85%;
		transform:translate(-50%,-50%);
		padding:10px 30px;
		overflow:hidden;
		margin-left:1%;
		margin-right: 5%;
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
	
	table.viewTable td
	{
		textAlign: center;
		padding: 15px;
		color:black;
		border-top: 0.5px black solid;
	}

	table.viewTable tr:nth-child(even)
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
	}

	table
	{
		//table-layout-fixed;
		height:50px;
		width:100%;
		border:black;
		
	}
	
	#title
	{
		background-color:#305781;
 
	}
	
	div#commonbtn button
	{
		border-radius: 25px;
		border-color: #98d6d8;
		background-color: #305781;
		color: white;
		width:120px;
		//margin-left:0;
	}
	
	#cancelbtn:hover,#addbtn:hover,#btnaddEmp:hover,#btnaddTask:hover, #btndelEmp:hover, 
	{
		background-color: #c5e9ea;
		color : #305781;
		
	}
	#cancelbtn,#addbtn,#btnaddEmp,#btnaddTask,#btndelEmp,#addbtnforTask,#taskcancelbtn,#delcancelbtn,#delbtn
	{
		border-radius: 25px;
		border-color: #98d6d8;
		background-color: #305781;
		color: white;
		width:120px;
		float:left;
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
	  width:276px;
	}

	.dropdown-check-list ul.items li {
	  list-style: none;
	}

	.dropdown-check-list.visible .anchor {
	  color: #0094ff;
	}

	.dropdown-check-list.visible .items {
	  display: block;
	}
	.items
	{
		height: 130px;
		overflow-y: scroll;
	}
	.anchor
	{
		color: #105587;
		width: 220px;
		background: white;
	}
	#posdrpdown
	{
		position:relative
		width: 200px;
	}
	
	.popup
	{
		width: 30%;
		height: 70%;
		background:#f5f5f5;
		border-radius:6px;
		position:absolute;
		top:0%;
		left:70%;
		transform:translate(-50%,-50%)scale(0.1);
		text-allign:center;
		padding:0 30px 30px;
		color:#333;
		visibility:hidden;
		transition:transform 0.4s,top 0.4s;
	}
	
	.popup img
	{
		width:100px;
		margin-top:3px;
		border-radius:50%;
		box-shadow:0 2px 5px rgba(0,0,0,0.2)
	}
	.openPopup
	{
		visibility:visible;
		top:42%;
		transform:translate(-50%,-50%)scale(1);
		overflow-y:scroll;
		overflow-x:hidden;
	}
	.openTaskpopUp
	{
		visibility:visible;
		top:45%;
		transform:translate(-50%,-50%)scale(1);
		overflow-y:scroll;
		overflow-x:hidden;
	}
	
	#crntSub
	{
		display: block;
		margin-top:2%;
		overflow-y:scroll;
		width:96%
		margin-left:2%;
		overflow-y:scroll;
		height:86%;
		border: 1px solid black;
	}
	
	#myInput 
	{
	  box-sizing: border-box;
	  background-image: url('https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SiteAssets/searchicon2.png');
	  background-position: 14px 12px;
	  background-repeat: no-repeat;
	  font-size: 16px;
	  padding: 14px 20px 12px 45px;
	  border: none;
	  border-bottom: 1px solid #ddd;
	}
	
	#myInput:focus {outline: 3px solid #ddd;}
	
	#requiredSyn
	{
		color: red;
		font-size: x-large;
		margin-left: 2px;
	}
	
	thead
	{
		position:sticky;
		top:0;
		z-index:4;
		background-color:rgb(216,216,216);
	}
	
	.viewAfterpopup
	{
		height:89%;
		width:50%;
	}
	
	.deleteviewpopup
	{
		width:51%;
	}
	li
	{
		color: black;
		font-size: 16px;
	}
	
	.addTask
	{
		width: 40%;
		height: 70%;
		background:#f5f5f5;
		border-radius:6px;
		position:absolute;
		top:42%;
		left:75%;
		text-allign:center;
		padding:0 30px 30px;
		color:#333;
		transform:translate(-50%,-50%)scale(1);
		overflow-y:scroll;
		overflow-x:hidden;
	}
	.addTask img
	{
		width:60px;
		margin-top:3px;
	}
	
	#taskTable td
	{
		text-allign:centre;
		padding: 20px;
	}
	
	#taskTable tr:nth-child(odd)
	{
		//background-color: white;
		//background-color: white;
		background-color:rgb(216,216,216);
	}
	
	#engdrpdown
	{
		text-align: center;
		padding: 4px;
		width:182px;
	}
	
	#followuptable td
	{
		border: 1px solid black;
		padding: 13px;
	}
	
	#followupHeader
	{
		position:sticky;
		top:0;
		z-index:3;
		font-weight: bold;
		background-color: #305781;
		color: white;
	}
	
	#followuptable td:first-child 
	{
	  position: sticky;
	  left: 0;
	  z-index:2;
	  background-color: #305781;
	  color:white;
	  font-weight:bold;
	}
	
	#viewfollow
	{
		overflow: scroll;
		/* width: 50%; */
		height: 105%;
		margin-top: 3%;
	}
	
	.deleteEmployee
	{
		width: 30%;
		height: 70%;
		background:#f5f5f5;
		border-radius:6px;
		position:absolute;
		top: 42%;
		left:75%;
		text-allign:center;
		padding:0 30px 30px;
		color:#333;
		transform:translate(-50%,-50%)scale(1);
		overflow-y:scroll;
		overflow-x:hidden;
		z-index:4;
	}
	.deleteEmployee img
	{
		width: 90px;
		margin-top: 5px;
		height: 100px;
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
	
	
	<div class="tab">
		<div class="tab-header" style = "align-items:center;">
			<select id="mangerdrpdown" style="margin-left:4px">
					 <option value="none" selected disabled hidden>Select an Option</option>
			</select>
		</div>
		<div class="tab-body" style="height: 85%;">
			<div id="crntSub" style="top:3%;">
			
			</div>
			
			<div id="addNewemp" class="popup"  >
				<img src="https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SiteAssets/UserIcon.png" alt="usericon">
				<p>Employee Details</p>
				<br>
				<div class='tdTitle' style='width:100%'><p title='Employee' style="font-size:large">Employee Name<font color='red'>*</font> </p></div>
				<div class='tdContents2'>  <div id="peoplePickerDiv"></div></div><span id="mails"></span>
				<br><br><br><br><br>
				<div id="list1" class="dropdown-check-list" tabindex="100">
				  <span class="anchor">Select Task</span>
				    <div>
					    <ul class="items">
						<input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()"/>
							<li><font-weight='bold'>Management</font> 
								<ul class ="mnglist"></ul>
							</li>
							<li><font-weight='bold'>PL</font>
								<ul class="plslist"></ul>
							</li>
							<li><font-weight='bold'>Engineer</font>
								<ul class="englist"></ul>
							</li>
							<li><font-weight='bold'>CFT</font>
								<ul class="cftlist"></ul>
							</li>
						</ul>
					</div>
				</div>
				<div id="commonbtn" style="margin-top: 8%;">
					<input type="button" value="Add" id="addbtn" onclick="validation()">
					<input type="button" onclick="closePopup()" value="Cancel" id="cancelbtn">
				</div>
				<br>
			</div>
			
			<div id="addNewTask" class="addTask" style="font-size:large">
				<img src="https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SiteAssets/taskimg.png" alt="Taskicon">
				<p>Task Details</p>
				<label>Engineer Name</lable>
					<select id="engdrpdown" style:"text-align:center padding: 4px;">
					 <option value= "no" selected>Select an Option</option>
					</select>
					<br>
					<div style="padding-top:20px" id="list2" class="dropdown-check-list" tabindex="100">
					  <span class="anchor" style="width: 250px">Select Task</span>
						<div>
							<ul class="items" style="width:305px">
							<input type="text" placeholder="Search.." id="myInputTask" onkeyup="filterFunction()"/>
								<li>Management
									<ul class="mnglist"></ul>
								</li>
								<li>PL
									<ul class ="plslist"></ul>
								</li>
								<li>Engineer
									<ul class="englist"></ul>
								</li>
								<li>CFT
									<ul class="cftlist"></ul>
								</li>
							</ul>
						</div>
					</div>
				<div id="commonbtn" style="margin-top: 8%;">
					<input type="button"  id="addbtnforTask" onclick="updateTask()" value="Add" >
					<input type="button"  value="Cancel" id="taskcancelbtn">
				</div>
				<br><br>
				<div id="existingTask" style="font-size:large;padding-top: 21px;">
					<div style="font-weight:bold;font-size:large">Existing Task</div>
					<br>
					<table id="taskTable" class="tasklistTable">
					</table>
				</div>
			</div>
			
			<div class="deleteEmployee" id="deleteEmp" style="font-size:large">
                <img src="https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SiteAssets/deletesymbol.png" alt="Taskicon">
                <p>Delete Employee<p>
                <label>Engineer Name</lable>
				<select id="delengdrpdown" style:"text-align:center padding: 4px;">
					 <option value="none" selected disabled hidden>Select an Option</option>
				</select>
				<div id="list3" class="dropdown-check-list" tabindex="100">
				  <span class="anchor">Select Task</span>
				    <div>
					    <ul class="items">
						<input type="text" placeholder="Search.." id="myInputDel" onkeyup="filterFunction()"/>
							<li><font-weight='bold'>Management</font> 
								<ul id="mngtasklist"></ul>
							</li>
							<li><font-weight='bold'>PL</font>
								<ul id="plstasklist"></ul>
							</li>
							<li><font-weight='bold'>Engineer</font>
								<ul id="engtasklist"></ul>
							</li>
							<li><font-weight='bold'>CFT</font>
								<ul id="cfttasklist"></ul>
							</li>
						</ul>
					</div>
				</div>
                <div id="commonbtn" style="margin-top: 8%;">
					<input type="button"  onclick="delEmp(currentUser)" value="Delete" id="delbtn">
					<input type="button"  value="Cancel" id="delcancelbtn">
                </div>
            </div>
			<br>
			<input type="button" class="tablinks" id="btnaddEmp" onclick="openPopup()" value="Add Employee" style="width:150px"/>
			<input type="button" class="tablinks" id="btnaddTask" onclick="openAddNewTask()"  style="width:150px" value="Add Task"/>
			<input type="button" class="tablinks" id="btndelEmp" onclick="openDelEmp()"  style="width:170px" value="Delete Task"/>
	    </div>
		
	</div>
	
</div>

<script>


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
	var taskHeadcftTask=[];
	var taskHeadplsTask=[];
	var taskHeadMngTask =[];
	var crntCFTlistdata=[];
	var crntMngelistdata=[];
	var crntPlslistdata=[];
	var crntEnglistdata=[];

	//testing
	var mngvalue=""
	
	$("#deleteEmp").hide();
	$(".switch").hide();
	$("#mangerdrpdown").hide();
	
	$(function(){
		
		var a = new Date();
		//var todaysdate=convert2DigitDate(a);
		var currentYear = a.getFullYear();
		
		initializePeoplePicker('peoplePickerDiv', false, 'People Only', 44);		
		queryUrlTrackerData = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+DataList+"')/items?$top=5000&$filter=Year eq " + currentYear ;
		SharePointListExtractData();
		AssgnTaskExtractData();
		TaskListExtractData();
		getUserDetails();
		loadDropdownDeatils();	
	});
	
	$("#addNewTask").hide();
	
	let popup=document.getElementById("addNewemp");
	let taskPopup=document.getElementById("addNewTask");
	let view=document.getElementById("crntSub")
	let delpopup=document.getElementById("deleteEmp")
	function openPopup()
	{
		$("#addNewemp").show();
		$("#btnaddEmp").hide();
		$("#btnaddTask").hide();
		$("#addNewTask").hide();
		$("#deleteEmp").hide();
		$("#btndelEmp").hide();
		popup.classList.add("openPopup");
		view.classList.add("viewAfterpopup")
	}
	
	function closePopup()
	{
		popup.classList.remove("openPopup");
		taskPopup.classList.remove("openTaskpopUp");
		$("#btnaddEmp").show();
		$("#btnaddTask").show();
		$("#btndelEmp").show();
		view.classList.remove("viewAfterpopup")
	}
	
	let views=document.getElementById("crntSub")
	function openDelEmp()
	{
		views.classList.add("deleteviewpopup")
		$("#deleteEmp").show();
		$("#btnaddEmp").hide();
		$("#btnaddTask").hide();
		$("#btndelEmp").hide();

	}
	
	$("#delcancelbtn").click(function()
	{
		$("#deleteEmp").hide();
		$("#btnaddTask").show();
		views.classList.remove("deleteviewpopup");
		$("#btnaddEmp").show();
		$("#btndelEmp").show();
		
		delengdrpdown
		
	});
	
	//let views=document.getElementById("crntSub")
	function openAddNewTask()
	{
		views.classList.add("viewAfterpopup")
		$("#addNewTask").show();
		$("#btnaddEmp").hide();
		$("#btnaddTask").hide();
		$("#btndelEmp").hide();
	}
	
	$("#taskcancelbtn").click(function()
	{
		$("#addNewTask").hide();
		$("#btnaddTask").show();
		views.classList.remove("viewAfterpopup");
		$("#btnaddEmp").show();
		$("#btndelEmp").show();		
	});
	
//fetch data from tracker data list	
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
			console.log(assgnDataArr);
			assgnDataArr.sort((a, b) => (a.EngineerName > b.EngineerName) ? 1: -1);
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
		console.log(typeof(sharepointemail))
		user_log= currentUser.get_loginName() ;
		user_title= currentUser.get_title();  
		user_email = currentUser.get_email();
		// user_email="aravind.kanade@autoliv.com"
		// sharepointemail="aravind.kanade@autoliv.com"
		user_region = user_log.substring(user_log.indexOf("|")+1,user_log.indexOf("|")+3) ;
		
		user_log=user_log.replace("#","%23");		
		console.log(sharepointemail);
		console.log(user_log);
		console.log(user_title);
		//Testing
		document.getElementById("username").innerHTML = user_title;
		loadSubbordinates(sharepointemail)
		loadManagerDropdown();
		if(user_email=="mallikarjun.banappanavar@autoliv.com" || user_email== "maheshkumar.jagadish@autoliv.com"|| user_email=="aravind.kanade@autoliv.com" || user_email== "mohammed.salahuddin@autoliv.com" || user_email=="amrutha.lakshminarasimha.external@autoliv.com"||user_email=="sudarshan.narayanaswamy@autoliv.com" )
		{
			toggleCheck();	
			$(".switch").show();
			$("#mangerdrpdown").hide();
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
		for(var j=0;j<duplicatelist.length;j++)
		{
			if(!uniqueList.includes(duplicatelist[j])&&duplicatelist[j]!=null)
			{
				// console.log(duplicatelist[j])
				uniqueList.push(duplicatelist[j])
			}
		}
		uniqueList.sort();
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
			document.getElementById("crntSub").innerHTML="";
		} 
		else 
		{
			$("#mangerdrpdown").hide();
			document.getElementById("crntSub").innerHTML="";
			loadSubbordinates(sharepointemail);
			currentUser = sharepointemail;
			document.getElementById("username").innerHTML = user_title;
		}
	}
	
///testing
//on change of manager drop down value 

	document.getElementById("mangerdrpdown").onchange = testing;
	
	function testing()
	{
		///testing
		document.getElementById("crntSub").innerHTML="";
		
		selectmanager = document.querySelector('#mangerdrpdown');
        mngvalue = selectmanager.value;
		console.log(mngvalue)
		if(mngvalue.length==0)
		{
			document.getElementById("crntSub").innerHTML="";
			console.log("IN else OF TESTING")
			loadSubbordinates(sharepointemail);
			currentUser = sharepointemail;
			document.getElementById("username").innerHTML = user_title;
		}
		else
		{
			document.getElementById("crntSub").innerHTML="";
			loadSubbordinates(mngvalue);
			currentUser = mngvalue;
			document.getElementById("username").innerHTML = mngvalue.replaceAll("@autoliv.com"," ").replaceAll("."," ");
		}
	}

//People picker function	
	function initializePeoplePicker(peoplePickerElementId, AllowMultipleValues, PeopleorGroup, GroupID) {  
        // Create a schema to store picker properties, and set the properties.  
        var schema = {};  
        schema['SearchPrincipalSource'] = 15;  
        schema['ResolvePrincipalSource'] = 15;  
        schema['MaximumEntitySuggestions'] = 50;  
        schema['Width'] = '254px';  
        schema['AllMultipleValues'] = AllowMultipleValues;  
        if (PeopleorGroup == 'PeopleOnly') schema['PrincipalAccountType'] = 'User';  
        else schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';  
        if (GroupID > 0) {  
            schema['SharePointGroupID'] = GroupID  
        }  
        // Render and initialize the picker.  
        // Pass the ID of the DOM element that contains the picker, an array of initial  
        // PickerEntity objects to set the picker value, and a schema that defines  
        // picker properties.  
        this.SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, null, schema);  
    }
	
	function validation()
	{
	
		var empname = getUserInfo("peoplePickerDiv");
		console.log(empname)
		var insub = document.getElementById("mails").innerHTML;
		insub = insub.replace("<br>","");
		if (empname == "" && insub == "" )
		{
			flag= true;
			alert("Employee name should not be blank.!!");
			return;
		}
		//testing
		if(document.getElementById("myCheckbox").checked === true)
		{
			currentUser = mngvalue
			// console.log("in to the button ............")
			// console.log(mngvalue)
			addNewEmployee(mngvalue)
			
		} 
		else 
		{
			currentUser = sharepointemail;
			// console.log("in to the button ............")
			// console.log(sharepointemail)
			addNewEmployee(sharepointemail);
			
		}
		
	}
	
	
	function getUserInfo(PeoplepickerId) 
	{  

		// Get the people picker object from the page.  
		var peoplePicker = this.SPClientPeoplePicker.SPClientPeoplePickerDict[PeoplepickerId + "_TopSpan"];  
		var arr=[];
		var emailsid="";
		
		if (!peoplePicker.IsEmpty())
		{  
			if (peoplePicker.HasInputError) return false; // if any error   
			    
			var users = peoplePicker.GetAllUserInfo();  
			var userInfo = '';  
			var promise = '';  
			if(users.length==0)
			{
				alert("No such user found in the directory");
				uncheck();
			}
			else
			{
				console.log(users);
				emailid = users[0]['EntityData']['Email'];
					
				for (var i = 0; i < users.length; i++) 
				{  
					console.log(users[i]['DisplayText']) ;
					arr.push (users[i]['DisplayText']) ;
					emailsid +=users[i]['DisplayText'] + ";";
				} 
				console.log(arr,emailsid)
			}
			
		}
		if (arr.length>=1 )
		{
			return emailsid;
			//return arr[0];
		}
		else
		{
			return "";
		}
	}
	
	function clearPeopleFieldValue(colName)
	{
		// Select the People Picker DIV
		var peoplePickerDiv = $("[id$='ClientPeoplePicker'][title='" + colName + "']");
		// Get the instance of the People Picker from the Dictionary
		//var spPeoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[peoplePickerDiv[0].id];
		var spPeoplePicker = this.SPClientPeoplePicker.SPClientPeoplePickerDict[colName + "_TopSpan"];  
		if (spPeoplePicker) {
			var ResolvedUsersList = $(document.getElementById(spPeoplePicker.ResolvedListElementId)).find("span[class='sp-peoplepicker-userSpan']");
			$(ResolvedUsersList).each(function (index) {
				spPeoplePicker.DeleteProcessedUser(this);
			});
		}
	}

//Search for Dropdown
	function filterFunction() 
	{
	  var input, filter, ul, li, a, i, b,c;
	  var filterTask,filterDel,inputTask,inputDel;
	  input = document.getElementById("myInput");
	  inputTask = document.getElementById("myInputTask");
	  inputDel = document.getElementById("myInputDel");
	  filter = input.value.toUpperCase();
	  filterTask = inputTask.value.toUpperCase();
	  filterDel = inputDel.value.toUpperCase();rw
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
	  
	  div2 = document.getElementById("list2");
	  b = div2.getElementsByTagName("li");
	  for (i = 0; i < b.length; i++) 
	  {
		txtValue = b[i].textContent || b[i].innerText;
		if (txtValue.toUpperCase().indexOf(filterTask) > -1) {
		  b[i].style.display = "";
		} else {
		  b[i].style.display = "none";
		}
	  }
	  
	  div3 = document.getElementById("list3");
	  c = div3.getElementsByTagName("li");
	  for (i = 0; i < c.length; i++) 
	  {
		txtValue = c[i].textContent || c[i].innerText;
		if (txtValue.toUpperCase().indexOf(filterDel) > -1) {
		  c[i].style.display = "";
		} else {
		  c[i].style.display = "none";
		}
	  }
	}

	
//Load Drop down values containing  tasks
	function loadDropdownDeatils()
	{
		for(i=0;i<taskDataArr.length;i++)
		{
			keyval[taskDataArr[i].TaskCode]=taskDataArr[i].Task;
		}
		console.log(keyval)
		var mangval="";
		var plsval="";
		var cftval="";
		var engval="";
		var j;
		Object.keys(keyval).forEach(el=> 
		{
			if(el.includes("PLS"))
			{
				plsval+="<li><input type='checkbox' class='chkbox' id='"+el+"' name='PLS'/>"+keyval[el]+"</li>"
				
			}
			if(el.includes("Mgmt"))
			{
				mangval+="<li><input type='checkbox' class='chkbox' id='"+el+"' name='Management'/>"+keyval[el]+"</li> "
				
			}
			if(el.includes("CFT"))
			{
				cftval+="<li><input type='checkbox' class='chkbox' id='"+el+"' name='CFT'/>"+keyval[el]+"</li> "
		
			}
			if(el.includes("Eng"))
			{
				engval+="<li><input type='checkbox' class='chkbox' id='"+el+"' name='Engineer'/>"+keyval[el]+"</li> "
			}	
		});
		$(".plslist").append(plsval)
		$(".cftlist").append(cftval)
		$(".mnglist").append(mangval)
		$(".englist").append(engval)
		
		var checkList = document.getElementById('list1');
		checkList.getElementsByClassName('anchor')[0].onclick = function(evt) 
		{
		  if (checkList.classList.contains('visible'))
			checkList.classList.remove('visible');
		  else
			checkList.classList.add('visible');
		}
		
		var checkListsval = document.getElementById('list2');
		checkListsval.getElementsByClassName('anchor')[0].onclick = function(evt) 
		{
		  if (checkListsval.classList.contains('visible'))
			checkListsval.classList.remove('visible');
		  else
			checkListsval.classList.add('visible');
		}
	}
	
//load engineer names 
	function loadSubbordinates(currentUser)
	{
		var names;
		var engdrpval;
		var cftdata=[];
		var plsdata=[];
		var managedata=[];
		var engineerNames=[];
		//Testing;
		document.getElementById("engdrpdown").innerHTML="";
		document.getElementById("delengdrpdown").innerHTML="";
		document.getElementById("crntSub").innerHTML="";
		engdrpval = "<option value='none' selected disabled hidden>Select an Option</option>"
		$("#engdrpdown").append(engdrpval)
		$("#delengdrpdown").append(engdrpval)
		var val="<table class='viewTable' id='engnamesTable'><thead><tr><td><p style='font-size: xx-large;'><i style='color:black;float:none;padding-right:1%' class='fa fa-th-list' aria-hidden='true'></i>Employee List<p></td></tr></thead>"
		var tasktemparray = taskDataArr.filter(function(item) { return item['TaskHead'] == currentUser});
		console.log(tasktemparray)
		
		var temp= assgnDataArr.filter(function(item) { return item['ReportingManager'] == currentUser});
		console.log(temp);
		temp.sort()
		for(var i=0;i<temp.length;i++)
		{
			if(temp[i]["Engineer"]!= null)
			{
				
				
				names=temp[i].EngineerName.charAt(0).toUpperCase()+temp[i].EngineerName.slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
				val+="<tr class='engNames'><td>"+names+"</td></tr>"
				engdrpval="<option value='"+temp[i].EngineerName+"'>"+names+"</option>"
				$("#engdrpdown").append(engdrpval)
				$("#delengdrpdown").append(engdrpval)
			}
		}		
		
		
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
						console.log(datainMainList)
						if(!managedata.includes(datainMainList))
						{
							managedata=datainMainList.toString().split(",")
						}
						var taskval = tasktemparray[j]["TaskCode"]
						console.log(managedata)
						console.log(taskval)
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
						console.log(names)
						
						// $("#delengdrpdown").append(engdrpval)		
					}
					
					if(assgnDataArr[i]["PLS"]!= null && tasktemparray[j]["TaskCode"].includes("PLS"))
					{
						
						
						taskval = tasktemparray[j]["TaskCode"]
						var datainMainList= assgnDataArr[i]["PLS"]
						console.log(datainMainList)
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
						console.log(datainMainList)
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
					}
				}
			}	
			cftdata=[];
			plsdata=[];
		    managedata=[];
		}
		console.log(engineerNames)
		engineerNames.sort();
		for(i=0;i<engineerNames.length;i++)
		{
			
			names=engineerNames[i].charAt(0).toUpperCase()+engineerNames[i].slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
			val+="<tr class='engNames'><td>"+names+"</td></tr>"
			engdrpval="<option value='"+engineerNames[i]+"'>"+names+"</option>"
			$("#engdrpdown").append(engdrpval)
			$("#delengdrpdown").append(engdrpval)
		}
		val+="</table>"
		$("#crntSub").append(val); 
	}
	
//unchek selected boxes
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
	
///ADD NEW Employee

//Add new employee function	
	function addNewEmployee(currentUser)
	{
		let date =  new Date().getFullYear();
		console.log(currentUser)
		var counter=0;
		var clientContext = new SP.ClientContext.get_current();
		var oList = clientContext.get_web().get_lists().getByTitle('TrackerData');	
		var itemCreateInfo = new SP.ListItemCreationInformation();
		
    //find if it already exists in the list
		engineeremails=[];
		//var temp= trackerDataArr.filter(function(item) { return item['ReportingManager'] == "currentUser"});
		for(var i=0;i<trackerDataArr.length;i++)
		{
			engineeremails.push(trackerDataArr[i].EngineerName)
		}
		//check if the task is selected 
		var checkedBoxes=document.getElementsByClassName('chkbox');
		for(element of checkedBoxes)
		{
			if(element.checked)
			{
				counter++;
			}		
		}
		
		if(counter<=0)
		{
			alert("Please select the task!");			
		}
		
		else
		{
            if(!engineeremails.includes(emailid))
            {
				console.log(emailid)
				this.oListItem = oList.addItem(itemCreateInfo);
				//Testing		
				// oListItem.set_item('ReportingManager', sharepointemail);
				console.log(currentUser + "................")
				oListItem.set_item('ReportingManager', currentUser);			
				oListItem.set_item('EngineerName', emailid);
				oListItem.set_item('Year', date);			
				oListItem.update();
				clientContext.load(oListItem);
				clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));	
			}
			else
			{
				this.onQuerySucceeded()
				
			}
		}
	}
	
		
	function onQuerySucceeded()
	{

		//alert('Item Added: ' + oListItem.get_id());
		addNewEmpAssignList()
	}

	function onQueryFailed(sender, args) 
	{

		alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
	}

	///add new employee data to AssignTask list
	function addNewEmpAssignList()
	{
		var selectedTask=[];
		var managementTask=[];
		var plsTask=[];
		var engTask=[];
		var cftTask=[];
		var englistAssignData=[];
		var listvalues="";
		var checkedBoxes=document.getElementsByClassName('chkbox');
		var rowID;
		// console.log(checkedBoxes)
		for(element of checkedBoxes)
		{
			if(element.checked)
			{
				selectedTask.push([element.id,element.name])
			}
		}
		console.log(selectedTask)
		//var temp= assgnDataArr.filter(function(item) { return item['ReportingManager'] == currentUser});
		for(var i=0;i<assgnDataArr.length;i++)
		{
			englistAssignData.push(assgnDataArr[i].EngineerName)
		}
		if(englistAssignData.includes(emailid))
		{
			// console.log("IN iffffffff")
			if(selectedTask.length!=0)
			{
				for(i=0;i<selectedTask.length;i++)
				{
					if(selectedTask[i].includes("Management"))
					{
						managementTask.push([selectedTask[i][0]])	
					}
					if(selectedTask[i].includes("PLS"))
					{
						plsTask.push([selectedTask[i][0]])	
					}
					if(selectedTask[i].includes("Engineer"))
					{
						engTask.push([selectedTask[i][0]])
							
					}
					if(selectedTask[i].includes("CFT"))
					{
						cftTask.push([selectedTask[i][0]])	
					}
					
				}	
				
				console.log(managementTask,plsTask,engTask,cftTask)
			}
			
			var temp1 = assgnDataArr.filter(function(item) { return item['EngineerName'] == emailid })
			console.log(temp1)
			
			//get the row id for temp1
			$.each(temp1, function (key, value)
			{
				rowID= value.ID ;
				// console.log(rowID)
			});
			// console.log(temp1)
			var asigorginList = clientContext.get_web().get_lists().getByTitle('AssignTask');
			this.asigorginListItem = asigorginList.getItemById(rowID);		
			console.log(asigorginListItem)
			// console.log("In forrrr")
			if(managementTask.length!=0)
			{
				listvalues = temp1[0]["Management"];
				console.log(listvalues)
				if(listvalues==null)
				{
					console.log("In here ")
					asigorginListItem.set_item("Management",managementTask.toString()+",");
				}
				else
				{
					asigorginListItem.set_item("Management",managementTask.toString().concat(listvalues)+",");
				}
				asigorginListItem.update();
				clientContext.load(asigorginListItem);
				clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededAssignlist), Function.createDelegate(this, this.onQueryFailedAssignlist));				
			}
			if(plsTask.length!=0)
			{
				listvalues = temp1[0]["PLS"];
				if(listvalues==null)
				{
					asigorginListItem.set_item("PLS",plsTask.toString()+",");	
				}
				else
				{
					asigorginListItem.set_item("PLS",plsTask.toString().concat(listvalues)+",");
				}	
				asigorginListItem.update();
				clientContext.load(asigorginListItem);
				clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededAssignlist), Function.createDelegate(this, this.onQueryFailedAssignlist));
					
			}
			if(cftTask.length!=0)
			{
				listvalues = temp1[0]["CFT"];
				if(listvalues==null)
				{
					asigorginListItem.set_item("CFT",cftTask.toString()+",");
				}
				else
				{
					asigorginListItem.set_item("CFT",cftTask.toString().concat(listvalues)+",");
				}
				asigorginListItem.update();
				clientContext.load(asigorginListItem);
				clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededAssignlist), Function.createDelegate(this, this.onQueryFailedAssignlist));
			}
			if(engTask.length!=0)
			{
				listvalues = temp1[0]["Engineer"];
				if(listvalues==null)
				{
					console.log(engTask)
					console.log(engTask.toString()+",")
					
					asigorginListItem.set_item("Engineer",engTask.toString()+",");
				}	
				asigorginListItem.update();
				clientContext.load(asigorginListItem);
				clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededAssignlist), Function.createDelegate(this, this.onQueryFailedAssignlist));
			}			
		}
		
		else
		{
			//get the selected drop down value
			console.log(selectedTask)
			var asigorginList = clientContext.get_web().get_lists().getByTitle('AssignTask');
			var itemCreate = new SP.ListItemCreationInformation();
			this.asigorginListItem = asigorginList.addItem(itemCreate);		
			//testing
			// asigorginListItem.set_item('ReportingManager', sharepointemail);
			console.log(currentUser)			
			asigorginListItem.set_item('ReportingManager', currentUser);	
			asigorginListItem.set_item('EngineerName', emailid);
			if(selectedTask.length!=0)
			{
				for(i=0;i<selectedTask.length;i++)
				{
					if(selectedTask[i].includes("Management"))
					{
						managementTask.push([selectedTask[i][0]])	
					}
					if(selectedTask[i].includes("PLS"))
					{
						plsTask.push([selectedTask[i][0]])	
					}
					if(selectedTask[i].includes("Engineer"))
					{
						engTask.push([selectedTask[i][0]])
							
					}
					if(selectedTask[i].includes("CFT"))
					{
						cftTask.push([selectedTask[i][0]])	
					}
					
				}	
			}
			if(managementTask.length>0)
			{
				var managementTaskdata=managementTask.toString()+","
			}
			if(plsTask.length>0)
			{
				var plsTaskdata=plsTask.toString()+","
			}
			if(engTask.length>0)
			{
				 var engTaskdata=engTask.toString()+","
			}
			if(cftTask.length>0)
			{
				var cftTaskdata=cftTask.toString()+","
			}
			asigorginListItem.set_item('Management',managementTaskdata);
			asigorginListItem.set_item('PLS',plsTaskdata);
			asigorginListItem.set_item('Engineer',engTaskdata);
			asigorginListItem.set_item('CFT',cftTaskdata);
			
			asigorginListItem.update();
			clientContext.load(asigorginListItem);
			clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededAssignlist), Function.createDelegate(this, this.onQueryFailedAssignlist));
		}
	}
	
	function onQuerySucceededAssignlist()
	{

		alert('User added successfully');
		selectedTask=[];
		clearPeopleFieldValue("peoplePickerDiv")		
		uncheck();
		location.reload(true);
	}

	function onQueryFailedAssignlist(sender, args) 
	{

		alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
		selectedTask=[];
	}

///Add New Task 	
//update the task in the main list 
	function updateTask()
	{
		var selectedTask=[];
		var managementTask=[];
		var plsTask=[];
		var engTask=[];
		var cftTask=[];
		var rowID;
		
		var selectElement = document.querySelector('#engdrpdown');
        output = selectElement.value;
		// console.log(output)
		
		if(output=="none")
		{
			alert("Please select the engineer name")
		}
		else
		{
			//testing mngvalue
			var temp1 = assgnDataArr.filter(function(item) { return item['EngineerName'] == output })
			// console.log(temp1)
			
			//get the row id for temp1
			$.each(temp1, function (key, value)
			{
				rowID= value.ID ;
				// console.log(rowID)
			});
			
			var clientContext = new SP.ClientContext.get_current();
			var oList = clientContext.get_web().get_lists().getByTitle('AssignTask');
			this.oListItem = oList.getItemById(rowID);
			
			//to add to a particular task in the list 
				
			var chckedBox= document.getElementsByClassName("chkbox");
			for(element of chckedBox)
			{
				if(element.checked)
				{
					selectedTask.push([element.id,element.name])
				}
			}
			if(selectedTask.length==0)
			{
				alert("Please select a task to be added")
			}
			
			else
			{
				  //console.log(selectedTask)
				for(i=0;i<selectedTask.length;i++)
				{
					if(selectedTask[i].includes("Management"))
					{
						managementTask.push([selectedTask[i][0]])	
						// console.log(managementTask)
					}
					else if(selectedTask[i].includes("PLS"))
					{
						plsTask.push([selectedTask[i][0]])	
						// console.log(plsTask)
					}
					else if(selectedTask[i].includes("Engineer"))
					{
						engTask.push([selectedTask[i][0]])
						console.log(engTask)					
					}
					else if(selectedTask[i].includes("CFT"))
					{
						cftTask.push([selectedTask[i][0]])
						console.log(cftTask)
					}
				}
				
				if(managementTask.length!=0)
				{
					var mangeAppend=[];
					//console.log(temp1[0]["Management"])
					if(temp1[0]["Management"]!= null)
					{
						mangeAppend=temp1[0]["Management"].toString().split(",")
						// console.log("before splice"+mangeAppend)
					}
					if(mangeAppend.length!= 0)
					{
						// console.log(mangeAppend)
						for(i=0;i<mangeAppend.length;i++)
						{
							for(j=0;j<managementTask.length;j++)
							{
								// console.log(managementTask[j])
								// console.log(mangeAppend[i])
								if(managementTask[j]==mangeAppend[i])
								{
									mangeAppend.splice(i,1)
									// console.log(mangeAppend)
								}
							}
						}
						// console.log("After splice"+ mangeAppend)
						// console.log("Selected taskkk" +managementTask)
						// console.log(mangeAppend.concat(","+managementTask.toString())+",")
						// console.log(mangeAppend+managementTask.toString()+",")
						// console.log(mangeAppend.toString()+","+managementTask.toString()+",")

						oListItem.set_item("Management",mangeAppend+managementTask.toString()+",");
					}
					else
					{
						oListItem.set_item("Management",managementTask.toString()+",");
					}
					
				}
				
				if(plsTask.length!=0)
				{
					var plsAppend=[];
					if(temp1[0]["PLS"]!= null)
					{
						plsAppend=temp1[0]["PLS"].toString().split(",")
						console.log("before splice"+mangeAppend)
					}
					//console.log(temp1[0]["PLS"])
					
					if(plsAppend.length!= 0)
					{
						for(i=0;i<plsAppend.length;i++)
						{
							for(j=0;j<plsTask.length;j++)
							{
								// console.log(plsTask[j])
								// console.log(plsAppend[i])
								if(plsTask[j]==plsAppend[i])
								{
									plsAppend.splice(i,1)
									// console.log(plsAppend)
								}
							}
								
						}
						// console.log("After splice"+ plsAppend)
						// console.log("Selected taskkk" +plsAppend)
						oListItem.set_item("PLS", plsAppend+plsTask.toString()+",");
					}
					else
					{
						// console.log("In else"+plsTask)
						oListItem.set_item("PLS",plsTask.toString()+",");
					}
				}
				
				if(engTask.length!=0)
				{
					var engAppend=[];
					console.log(temp1[0]["Engineer"])
					if(temp1[0]["Engineer"]!=null)
					{
						engAppend=temp1[0]["Engineer"].toString().split(",")
					}
	//CHECK IF NO TASK WAS PRESNT IN THAT COLUMN PREVIOUSLY 
					if(engAppend.length!= 0)
					{
						for(i=0;i<engAppend.length;i++)
						{
							for(j=0;j<engTask.length;j++)
							{
								console.log(engTask[j])
								console.log(engAppend[i])
								if(engTask[j]==engAppend[i])
								{
									engAppend.splice(i,1)
									console.log(engAppend)
								}
							}
								
						}
						oListItem.set_item("Engineer", engAppend+engTask.toString()+",");
					}
					else
					{
						oListItem.set_item("Engineer",engTask.toString()+",");
					}
				}
				
				if(cftTask.length!=0)
				{
					var cftAppend=[];
					if(temp1[0]["CFT"]!=null)
					{
						cftAppend=temp1[0]["CFT"].toString().split(",")
						// console.log(temp1[0]["CFT"])
					}
					
					if(cftAppend.length!= 0)
					{
						for(i=0;i<cftAppend.length;i++)
						{
							for(j=0;j<cftTask.length;j++)
							{
								// console.log(cftTask[j])
								// console.log(cftAppend[i])
								if(cftTask[j]==cftAppend[i])
								{
									cftAppend.splice(i,1)
									// console.log(cftAppend)
								}
							}
								
						}
						oListItem.set_item("CFT", cftAppend+cftTask.toString()+",");
					}
					else
					{
						oListItem.set_item("CFT",cftTask.toString()+",");
					}
				}
				oListItem.update();
				clientContext.load(oListItem);
				clientContext.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceededTaskupdated),Function.createDelegate(this,this.onQueryFailedTaskupdated));
			}
		}
				
	}
	function onQuerySucceededTaskupdated()
	{

		alert('Task Added successfully');
		uncheck();
		location.reload(true);
	}

	function onQueryFailedTaskupdated(sender, args) 
	{

		alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
		selectedTask=[];
	}
	
//Display task on change of engineer name in Drop Down(Add task view)
	function changeTableval()
	{
		document.getElementById("taskTable").innerHTML="";
		// console.log(this.value);
		var engname= this.value
		var temp1 = assgnDataArr.filter(function(item) { return item['EngineerName'] == engname })
		// console.log(temp1)
		
		//get the row id for temp1
		var rowID
		$.each(temp1, function (key, value)
		{
			rowID= value.ID ;
			// console.log(rowID)
		});
		
		var clientContext = new SP.ClientContext.get_current();
		var oList = clientContext.get_web().get_lists().getByTitle('AssignTask');
		this.oListItem = oList.getItemById(rowID);
		
		//display task list
		var taskAssigTab="";
		var mangeAppend=temp1[0]["Management"]
		// console.log(mangeAppend)
		var plsAppend=temp1[0]["PLS"]
		// console.log(plsAppend)
		var engAppend=temp1[0]["Engineer"]
		// console.log(engAppend)
		var cftAppend=temp1[0]["CFT"]
		// console.log(cftAppend)
		var taskList=[];
		finalArray=[];
		
		
		if(mangeAppend !=null)
		{
			// console.log(mangeAppend)
			taskList= mangeAppend.split(",")
			// console.log(taskList)
			for(i=0;i<taskList.length;i++)
			{
				// console.log(keyval)
				// console.log(taskList[i])
				// console.log(keyval[taskList[i]])
				finalArray.push(keyval[taskList[i]])
			}
			taskAssigTab+="<tr><td>Management</td><td>"+finalArray.toString()+"</td></tr>"
			finalArray=[];
		}
		if(plsAppend != null)
		{
			taskList= plsAppend.split(',')
			for(i=0;i<taskList.length;i++)
			{

				// console.log(keyval[taskList[i]])
				finalArray.push(keyval[taskList[i]])
			}
			// console.log(finalArray)
			taskAssigTab+="<tr><td>PLS</td><td>"+finalArray.toString()+"</td></tr>"
			finalArray=[];
		}
		if(engAppend !=null)
		{
			taskList=engAppend.split(",")
			for(i=0;i<taskList.length;i++)
			{
				console.log(keyval[taskList[i]])
				finalArray.push(keyval[taskList[i]])
			}
			taskAssigTab+="<tr><td>Engineer</td><td>"+finalArray.toString()+"</td></tr>"
			finalArray=[];
		}
		if(cftAppend !=null)
		{
			taskList=cftAppend.split(",")
			for(i=0;i<taskList.length;i++)
			{
				console.log(keyval[taskList[i]])
				finalArray.push(keyval[taskList[i]])
			}
			taskAssigTab+="<tr><td>CFT</td><td>"+finalArray.toString()+"</td></tr>"	
			finalArray=[];
		}
		$("#taskTable").append(taskAssigTab)
	}
	document.getElementById("engdrpdown").onchange = changeTableval;
	
	
///Delete functions
	
//function to delete employee from Assign List
	function delEmp(currentUser)
	{
		var updatedmgmtTask;
		var selectedTask=[];
		var temp1=[]
		console.log(currentUser)
		selectedElement = document.querySelector('#delengdrpdown');
        outputval = selectedElement.value;
		var checkedBoxes=document.getElementsByClassName('checkboxs');
		var rowID;
			//get the selected checkbox values
		console.log(checkedBoxes)
		for(element of checkedBoxes)
		{
			if(element.checked)
			{
				selectedTask.push(element.id)
			}
		}
		console.log(outputval)
		if(outputval=="none" || selectedTask.length==0)
		{
			if(outputval=="none")
			{
				alert("Please select the engineer name")
			}
			if(selectedTask.length==0)
			{
				alert("Please select the task")
			}
			
		}
		else
		{
			console.log(currentUser)
			temp1=[];
			temp1 = assgnDataArr.filter(function(item) {return item['EngineerName'] == outputval})
			// console.log(temp1)
			
			var rowID
			$.each(temp1, function(key, value)
			{
				rowID= value.ID ;
				console.log(rowID)
			});
			var clientContext = SP.ClientContext.get_current();

			var taskheadlist= taskDataArr.filter(function(item){return item["TaskHead"]==currentUser});
			console.log(taskheadlist)
			
			// delete from AssignTask list 
			var oList= clientContext.get_web().get_lists().getByTitle("AssignTask");
			this.oListItem = oList.getItemById(rowID);
			
			
			if(taskheadlist.length!=0)
			{
				console.log("Current task"+crntMngelistdata);
				if(crntMngelistdata.length!=0)
				{
					updatedmgmtTask=[];
					for(i=0;i<taskHeadMngTask.length;i++)
					{
						if(!selectedTask.includes(taskHeadMngTask[i]))
						{
							updatedmgmtTask.push(taskHeadMngTask[i])
						}
					}
					oListItem.set_item("Management",updatedmgmtTask.toString());
				}
				console.log("Current task"+crntPlslistdata);
				if(crntPlslistdata.length!=0)
				{
					updatedmgmtTask=[];
					console.log(taskHeadplsTask)
					for(j=0;j<taskHeadplsTask.length;j++)
					{				
							if(!selectedTask.includes(taskHeadplsTask[j]))
							{
									console.log(taskHeadplsTask[j])
									updatedmgmtTask.push(taskHeadplsTask[j])
							}
					}
					console.log(updatedmgmtTask)
					oListItem.set_item("PLS",updatedmgmtTask.toString());
				}
				console.log("Current task"+crntCFTlistdata);
				if(crntCFTlistdata.length!=0)
				{
					
					updatedmgmtTask=[];
					for(i=0;i<taskHeadcftTask.length;i++)
					{
						if(!selectedTask.includes(taskHeadcftTask[i]))
						{
							updatedmgmtTask.push(taskHeadcftTask[i])
						}
					}
					console.log(updatedmgmtTask.toString())
					oListItem.set_item("CFT",updatedmgmtTask.toString());
				}
				
				if(crntEnglistdata.length!=0 && temp1[0]["ReportingManager"]==currentUser )
				{
					updatedmgmtTask=[];
					for(i=0;i<crntEnglistdata.length;i++)
					{
						if(!selectedTask.includes(crntEnglistdata[i]))
						{
							updatedmgmtTask.push(crntEnglistdata[i])
						}
					}
					oListItem.set_item("Engineer",updatedmgmtTask.toString());
				}
				
				console.log(oListItem)
				oListItem.update();
				clientContext.load(oListItem);
				clientContext.executeQueryAsync(Function.createDelegate(this,this.onQueryDeleteSucceeded),Function.createDelegate(this,this.onQueryDeleteFailed));
			}
			 
			else
			{
				console.log("crntEnglistdata.length"+crntEnglistdata.length)
				console.log("crntEnglistdata"+crntEnglistdata)
				if(crntEnglistdata.length!=0)
				{
					updatedmgmtTask=[];
					for(i=0;i<crntEnglistdata.length;i++)
					{
						console.log(selectedTask)
						console.log(crntEnglistdata[i])
						if(selectedTask.includes(crntEnglistdata[i]))
						{ console.log("yes")}
						if(!selectedTask.includes(crntEnglistdata[i]))
						{
							updatedmgmtTask.push(crntEnglistdata[i])
						}
					}
					oListItem.set_item("Engineer",updatedmgmtTask.toString());
					oListItem.update();
					clientContext.load(oListItem);
					clientContext.executeQueryAsync(Function.createDelegate(this,this.onQueryDeleteSucceeded),Function.createDelegate(this,this.onQueryDeleteFailed));
				}
				if(temp1[0]["Management"] == null && temp1[0]["PLS"] == null && temp1[0]["CFT"] == null && temp1[0]["Engineer"] == null )
				{	
					console.log("In ifff of it")
					oListItem.deleteObject();
					clientContext.executeQueryAsync(Function.createDelegate(this,this.onQueryDeleteSucceeded),Function.createDelegate(this,this.onQueryDeleteFailed));
				}
			}
		}
		
	}

	function onQueryDeleteSucceeded(engName) 
	{
		alert("Task deleted successfully")
		uncheck();
		location.reload(true);
		
	}

	function onQueryDeleteFailed(sender, args)
	{
		alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
	}
	
	function currentTask()
	{
		var mgmtCount=0;
		var plsCount=0;
		var cftCount=0;
		var engCount=0;
		var val="";
		document.getElementById("cfttasklist").innerHTML=" ";
		document.getElementById("mngtasklist").innerHTML=" ";
		document.getElementById("plstasklist").innerHTML=" ";
		document.getElementById("engtasklist").innerHTML=" ";
		var selectedElement = document.querySelector('#delengdrpdown');
        var outputval = selectedElement.value;
		// console.log(outputval)
		var temp1 = assgnDataArr.filter(function(item) {return item['EngineerName'] == outputval})
		// console.log(temp1)
		
		var taskheadlist= taskDataArr.filter(function(item){return item["TaskHead"]==currentUser});
		// console.log(taskheadlist)
		if(document.getElementById("myCheckbox").checked === true)
		{
			currentUser=currentUser
		} 
		else 
		{
			currentUser=sharepointemail
		}
		console.log("test'''''"+currentUser)
		taskHeadMngTask=[];
		if(temp1[0]["Management"] != null)
		{
			taskHeadMngTask=temp1[0]["Management"].toString().split(",")
		}
		// console.log(taskHeadMngTask)
		
		taskHeadcftTask=[];
		if(temp1[0]["CFT"]!= null)
		{
			taskHeadcftTask=temp1[0]["CFT"].toString().split(",")
		}
		// console.log(taskHeadcftTask)
		
		taskHeadplsTask=[]	
		if(temp1[0]["PLS"] != null)
		{			
			taskHeadplsTask=temp1[0]["PLS"].toString().split(",")
		}
		// console.log(taskHeadplsTask)
		
		if(taskheadlist.length!=0)
		{
			for(k=0;k<taskheadlist.length;k++)
			{
				if(taskheadlist[k]["TaskCode"].includes("Mgmt"))
				{
					for(i=0;i<taskHeadMngTask.length;i++)
					{
						if(taskHeadMngTask[i]==taskheadlist[k]["TaskCode"])
						{
							crntMngelistdata.push(taskHeadMngTask[i])
						}
					}
					mgmtCount=1;
				}
				if(taskheadlist[k]["TaskCode"].includes("PLS"))
				{
					for(i=0;i<taskHeadplsTask.length;i++)
					{
						if(taskHeadplsTask[i]==taskheadlist[k]["TaskCode"])
						{
							crntPlslistdata.push(taskHeadplsTask[i])
						}
					}
					plsCount=1;
				}
				if(taskheadlist[k]["TaskCode"].includes("CFT"))
				{
					for(i=0;i<taskHeadcftTask.length;i++)
					{
						if(taskHeadcftTask[i]==taskheadlist[k]["TaskCode"])
						{
							crntCFTlistdata.push(taskHeadcftTask[i])
						}
					}
					cftCount=1;
				}
			}
		
			if(crntMngelistdata.length!=0 && mgmtCount==1)
			{
				// console.log(mgmtCount)
				for(i=0;i<crntMngelistdata.length;i++)
				{
					if(crntMngelistdata[i]!= " ")
					{
						// console.log(keyval[crntMngelistdata[i]])
						val+="<li><input type='checkbox' class='checkboxs' id='"+crntMngelistdata[i]+"'/>"+keyval[crntMngelistdata[i]]+"</li> "						
					}
				}
				document.getElementById("mngtasklist").innerHTML=" "
				$("#mngtasklist").append(val)
				mgmtCount=0;
			}
			
			if(crntPlslistdata.length!=0 && plsCount==1)
			{
				console.log(plsCount)
				for(i=0;i<crntPlslistdata.length;i++)
				{
					if(crntPlslistdata[i]!= "" && keyval[crntPlslistdata[i]]!= undefined )
					{
						// console.log(keyval[crntPlslistdata[i]])
						val+="<li><input type='checkbox' class='checkboxs' id='"+crntPlslistdata[i]+"'/>"+keyval[crntPlslistdata[i]]+"</li> "						
					}
				}
				document.getElementById("plstasklist").innerHTML=" "
				$("#plstasklist").append(val)
				plsCount=0;
			}
				
			// console.log(taskHeadcftTask)
			// console.log(taskHeadplsTask)
			// console.log(taskHeadMngTask)
			
			if(crntCFTlistdata.length!=0 && cftCount==1)
			{
				// console.log(cftCount)
				for(i=0;i<crntCFTlistdata.length;i++)
				{
					if(crntCFTlistdata[i]!= "" && keyval[crntCFTlistdata[i]]!= undefined )
					{
						// console.log(keyval[crntCFTlistdata[i]])
						val+="<li><input type='checkbox' class='checkboxs' id='"+crntCFTlistdata[i]+"'/>"+keyval[crntCFTlistdata[i]]+"</li> "						
					}
				}
				document.getElementById("cfttasklist").innerHTML=" "
				$("#cfttasklist").append(val)
				cftCount=0;
			}
			// console.log(crntCFTlistdata)
		}
		
		
		if(temp1[0]["Engineer"]!= null)
		{
			crntEnglistdata=temp1[0]["Engineer"].toString().split(",")
		}
		// console.log(crntEnglistdata)
		
		if(crntEnglistdata.length!=0 && temp1[0]["ReportingManager"] == currentUser )
		{
			// console.log("In eng del")
			for(i=0;i<crntEnglistdata.length;i++)
			{
				if(crntEnglistdata[i]!= "" && keyval[crntEnglistdata[i]]!= undefined )
				{
					// console.log(keyval[crntEnglistdata[i]])
					val+="<li><input type='checkbox' class='checkboxs' id='"+crntEnglistdata[i]+"'/>"+keyval[crntEnglistdata[i]]+"</li> "						
				}
			}
			document.getElementById("engtasklist").innerHTML=" "
			$("#engtasklist").append(val)
		}
		var checkList = document.getElementById('list3');
		checkList.getElementsByClassName('anchor')[0].onclick = function(evt) 
		{
			if (checkList.classList.contains('visible'))
				checkList.classList.remove('visible');
			else
				checkList.classList.add('visible');
		}						
	}
	document.getElementById("delengdrpdown").onchange = currentTask;
	
</script>


