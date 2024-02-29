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
		padding-top: 20px;
		float:right;
		font-size:initial;
	}
	input[type=button]
	{
		position: absolute;
		outline: none;
		border: none;
		background-color: #305781;
		cursor: pointer;
		padding: 14px 16px;
		transition: 0.3s;
		font-size: 17px;
		font-weight: bold;
		color: white;
		border-radius: 25px;
		margin-right: 30px;
		margin-top: 25em;
		left: 30%;	
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

*{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
body{
    font-family: Helvetica;
    -webkit-font-smoothing: antialiased;
    background: rgba( 71, 147, 227, 1);
}
h2{
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    padding: 30px 0;
	font-weight: bold;
}


	
</style>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<div id="ContainerDiv"> 
	<div class="bootstrap-iso">
	
		<div id="titlebar" >
			<i class="fa fa-user fa-xs" style="padding-top:20px"></i>
			<div id="username"> </div>
			
			
			<div><img id="logo" src="https://autoliv.sharepoint.com/:i:/r/sites/alvgtsc/ZeroFollowup/SiteAssets/Logo.png?csf=1&web=1&e=gePRmE" alt="Autoliv logo"><a href="https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SitePages/Home.aspx"><i style="float:none;font-size:x-large"class="fa fa-home" aria-hidden="true"></i></a></div>
				
		</div>
	</div>

	<div id=removeemployeeButton>
		<input type="button" id="RemoveEmployee" class="removeemployee" onclick="checkUser()"  style="margin-left: 17em"value="Remove Employee" />
		<input type="button" id="UpdateMng" class="updatemng" onclick="updateReportingMng()"  value="Update Reporting Manager" />
	</div>
	
</div>

<script>
var listOfEngineer=[];

	var VisterList = "ManagerVisitingHistory";
	var assgnTaskList = "AssignTask";
	var VisitererDataArr =[];
	var emailid =[];
	var assgnDataArr =[];
	var assgnDataArrExist =[];
	var sharepointemail = "";
	var user_log=  "";
    var user_title=  "";
    var user_email =  "";
	var user_region =  "";
	var queryUrlVisiterData = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+VisterList+"')/items?$top=5000" ;
	var queryUrlAssignTask = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+assgnTaskList+"')/items?$top=5000" ;
	var RalfReportsData=[];
	var engExist=[];
	var EmployNameData
	
	// GetAccountName("Sachin Chitragar");	
	GetAccountName("Kiran Sheelavant");	
	GetAccountName("Yuvaraj Rangasamy");
	GetAccountName("Mallikarjun Banappanavar");
	// GetAccountName("Pushkal Litoria");
	
	VisitertExtractData();
	getUserDetails();
	
function GetAccountName(displayName){
	
	var deferred = jQuery.Deferred();
	
	var accountName="";
	var requestUri = _spPageContextInfo.webAbsoluteUrl +
				  "/_api/web/siteusers?$select=LoginName&$filter=title eq '"+displayName+"'";
				  
	//var requestUri =  "https://lifenet.alv.autoliv.int/_api/web/siteusers?$select=LoginName&$filter=title eq '"+displayName+"'";		  
	//execute AJAX request
	$.ajax({
		url: requestUri,
		type: "GET",
		headers: { "ACCEPT": "application/json;odata=verbose" },
		async: false,
		success: function (data) {
			if(data.d.results.length>0){
				
				//console.log(data);
				
				accountName=data.d.results[0].LoginName.replace("#","%23");	
				console.log(accountName);
				
				// GetUserProfilePropertiesOffice(accountName);
				GetUserProfilePropertiesOfficeExtends(accountName);
				deferred.resolve(accountName);
				//return deferred.promise();
			}
			
		},
		error: function () {
			console.log("Err: ---");
			//alert("Failed to get details");                
		}
	});
	//return accountName;
	//console.log("presss...");
	return deferred.promise();
	
}
function GetUserProfilePropertiesOfficeExtends(user) {  
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
				console.log(data);
			
				console.log(data['d']['DirectReports']['results']);
				console.log(data['d']['ExtendedReports']['results']);
				RalfReportsData = data['d']['ExtendedReports']['results'];
				for (m=0;m<RalfReportsData.length;m++)
				{
					if (!engExist.includes(RalfReportsData[m].split("|")[2]))
					{
					engExist.push(RalfReportsData[m].split("|")[2])
					}
				}
				console.log(engExist)
				
			},  
			error: function(data1) {  
				//alert("ERROR");  
				console.log("Errororo1");
			}  
		});  
	
	return deferred.promise();
	
}
function getReportingManager(user) {  
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
				var AccountName=data['d']["AccountName"]
				var AccountMail=AccountName.split("|")[2];
				console.log(AccountMail)
				var lengthofresultsdata=data['d']['ExtendedManagers']['results']
				var lengthofresults=lengthofresultsdata.length
				var getlen=lengthofresults-1
				var ExtendedManager=data['d']['ExtendedManagers']['results'][getlen];
				var ExtendedManagerMail= ExtendedManager.split("|")[2];
				console.log(ExtendedManagerMail)
				updateTheData(AccountMail,ExtendedManagerMail)
				
			},  
			error: function(data1) {  
				//alert("ERROR");  
				console.log("Errororo1");
			}  
		});  
	
	return deferred.promise();
	
}

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
			assgnDataArr = data['d']['results'];
			demoassgnDataArr = data['d']['results'];
			
				for(i=0;i<demoassgnDataArr.length;i++)
				{
					if(demoassgnDataArr[i]["EmployeeLeftOrg"]!="Yes")
					{
						assgnDataArrExist.push(demoassgnDataArr[i])
					}
				}
			console.log(assgnDataArrExist );
			},
			error: function(errorMsg) {
			// console.log(errorMsg.responseText);
			}			
		}); 
	} 	
	
	function VisitertExtractData()
	{	
		$.ajax({
			url: queryUrlVisiterData,
			type: "GET",
			async: false,
			headers: {
				"Accept": "application/json;odata=verbose"
			},
			success: function(data) {
				if (data.d.results.length > 0)
				{
					VisitererDataArr = VisitererDataArr.concat(data.d.results);					
				}
				VisitererDataArr.sort((a, b) => (a.Modified < b.Modified) ? 1: -1);
				// console.log(VisitererDataArr );
			},
			error: function(errorMsg) {
				// console.log(errorMsg.responseText);
			}			
		}); 
	}
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
		initializePeoplePicker('peoplePickerDiv', false, 'People Only', 44);
		head=["maheshkumar.jagadish@autoliv.com","mohammed.salahuddin@autoliv.com","aravind.kanade@autoliv.com","mallikarjun.banappanavar@autoliv.com","amrutha.lakshminarasimha.external@autoliv.com","sudarshan.narayanaswamy.external@autoliv.com"]
		//console.log("user details....");
		sharepointemail = currentUser.get_email().toLowerCase();
		// sharepointemail = "mallikarjun.banappanavar@autoliv.com";
		user_log= currentUser.get_loginName() ;
		user_title= currentUser.get_title();  
		user_email = currentUser.get_email();
		user_region = user_log.substring(user_log.indexOf("|")+1,user_log.indexOf("|")+3) ;
		user_log=user_log.replace("#","%23");	
		console.log(user_log);
		console.log(user_title);
		document.getElementById("username").innerHTML = user_title;
		AssgnTaskExtractData()
		// AssgnTaskExtractData();
		// checkUser()
	}
	function onQueryFailed(sender, args) 
	{  
		alert('Request failed. \nError: ' + args.get_message() + '\nStackTrace: ' + args.get_stackTrace());  
	} 
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
	function checkUser()
	{
		var leftDatatest=[]
		
		for(i=0;i<assgnDataArr.length;i++)
		{
			emailid.push(assgnDataArr[i]["EngineerName"])
			if (!engExist.includes(assgnDataArr[i]["EngineerName"]))
			{
				console.log(assgnDataArr[i]["EngineerName"])
				leftDatatest.push(assgnDataArr[i]["EngineerName"])
				markLeft(assgnDataArr[i]["EngineerName"])
			}
		}
		// console.log(emailid)
		// console.log(leftDatatest)
		// console.log(engExist)
	}
	function markLeft(emailid)
	{
		var temp1 = assgnDataArr.filter(function(item) { return item['EngineerName'] == emailid })
			// console.log(temp1)
			
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
			
			asigorginListItem.set_item("EmployeeLeftOrg","Yes");
			asigorginListItem.update();
			clientContext.load(asigorginListItem);
			clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededAssignlist), Function.createDelegate(this, this.onQueryFailedAssignlist));
function onQuerySucceededAssignlist()
	{
		console.log('done');
	}
function onQueryFailedAssignlist(sender, args) 
	{
		alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
		selectedTask=[];
	}
	}
function updateReportingMng()
{
	for(i=0;i<assgnDataArrExist.length;i++)
		{
			engmail=assgnDataArrExist[i]["EngineerName"]
			userMail="i:0%23.f|membership|"+engmail
			// userMail="i:0%23.f|membership|sushritha.bharadwaj.external@autoliv.com"
			// console.log('assgnDataArr[i]["EngineerName"]')
			// console.log(assgnDataArr[i]["EngineerName"])
			getReportingManager(userMail)
		}
}
function updateTheData(emailid,ReportingManagerMail)
{
	console.log(emailid,ReportingManagerMail)
	var temp2 = assgnDataArr.filter(function(item) { return item['EngineerName'] == emailid })
			
	$.each(temp2, function (key, value)
	{
		rowID= value.ID ;
		// console.log(rowID)
	});
	// console.log(temp1)
	var asigorginList = clientContext.get_web().get_lists().getByTitle('AssignTask');
	this.asigorginListItem = asigorginList.getItemById(rowID);		
	console.log(asigorginListItem)
	
	asigorginListItem.set_item("ReportingManager",ReportingManagerMail);
	asigorginListItem.update();
	clientContext.load(asigorginListItem);
	clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededAssignlist), Function.createDelegate(this, this.onQueryFailedAssignlist));
	
	function onQuerySucceededAssignlist()
		{
			console.log('done');
		}
	function onQueryFailedAssignlist(sender, args) 
		{
			alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
			selectedTask=[];
		}
}
function updateTheFolloupData(emailid,ReportingManagerMail)
{
	console.log(emailid,ReportingManagerMail)
	var temp2 = assgnDataArr.filter(function(item) { return item['EngineerName'] == emailid })
			
	$.each(temp2, function (key, value)
	{
		rowID= value.ID ;
		// console.log(rowID)
	});
	// console.log(temp1)
	var asigorginList = clientContext.get_web().get_lists().getByTitle('TrackerData');
	this.asigorginListItem = asigorginList.getItemById(rowID);		
	console.log(asigorginListItem)
	
	asigorginListItem.set_item("ReportingManager",ReportingManagerMail);
	asigorginListItem.update();
	clientContext.load(asigorginListItem);
	clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceededAssignlist), Function.createDelegate(this, this.onQueryFailedAssignlist));
	
	function onQuerySucceededAssignlist()
		{
			console.log('done');
		}
	function onQueryFailedAssignlist(sender, args) 
		{
			alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
			selectedTask=[];
		}
}
</script>

