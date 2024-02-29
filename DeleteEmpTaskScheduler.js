<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>    
	<script type="text/javascript" src="/_layouts/15/sp.js"></script> 
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	
	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	

	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js"></script>
	
	<script src="/_layouts/15/1033/strings.js"></script>  
<script src="/_layouts/15/clienttemplates.js"></script>  
<script src="/_layouts/15/clientforms.js"></script>  
<script src="/_layouts/15/clientpeoplepicker.js"></script>  
<script src="/_layouts/15/autofill.js"></script> 



<style>
.se-pre-con {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 5;
	background: url('https://autoliv.sharepoint.com/sites/VIR/SiteAssets/Preloader_1.gif') center no-repeat;
}


#ContainerDiv
{
	display: inline-block;
    position: fixed;
    top: 0%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
	width: 100%
    //background-color: #f3f3f3;
	background-color: white;
	overflow-y: scroll ;
	//overflow-x: hidden ;
	z-index: 2;
}



</style>

	

<div id="ContainerDiv">   
<br>
<br>
<br>
<br>
<center>
<b>Code Library</b>
<br>
<br>
	<div id="peoplePickerDiv"></div>
		<input type="text" value="Get User Info" id="user"></input>
		<br /><br />
		<h1>User info:</h1>
		<p id="resolvedUsers"></p>
		<h1>User keys:</h1>
		<p id="userKeys"></p>
		<h1>User ID:</h1>
		<p id="userId"></p>		
	</div>

</center>			

</div>


<script>

	var assgnTaskList = "AssignTask";
	var assgnDataArr =[];
	var queryUrlAssignTask = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+assgnTaskList+"')/items?$top=5000" ;
	var count=0;
	$(function()
	{
		// //var todaysdate=convert2DigitDate(a);
		AssgnTaskExtractData();
		// loadValues();
		GetAccountName("Mohammed Salahuddin");
		
	});
	
	// function sleep(ms)
	// {
        // return new Promise(resolve => setTimeout(resolve, ms));
    // }
	
	// //fetch Assign task list data 
	
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
			console.log(assgnDataArr );
			},
			error: function(errorMsg) {
			console.log(errorMsg.responseText);
			}			
		}); 
		
	} 
	
	// SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () 
	// {
		// SP.SOD.executeFunc('userprofile', 'SP.UserProfiles.PeopleManager', function () {
        // getUserData();
    // });
	// });

// function getUserData(){

    // var targetUser = "i:0#.f|membership|kiran.sheelavant@autoliv.com";
    // var clientContext = new SP.ClientContext.get_current();
    // var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
    // personProperties = peopleManager.getPropertiesFor(targetUser);
    // clientContext.load(personProperties);
    // clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
// }

// function onRequestSuccess() {
    // console.log(personProperties.get_userProfileProperties());

    // var manager = personProperties.get_userProfileProperties()["Manager"];

    // console.log(manager);

// }

// function onRequestFail(sender, args) {
    // console.log("Error: " + args.get_message());
// }   
	
// $(document).ready(function () {
	// initializePeoplePicker('peoplePickerDiv');
// });

var accountName = "i:0#.f|membership|mohammed.salahuddin@autoliv.com";
jQuery.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v='" + encodeURIComponent(accountName) + "'",
    method: "GET",
    headers: { "Accept": "application/json; odata=verbose" },
    success: function (data) {  

        var managers = data.d.ExtendedManagers.results;
        var extendedReports = data.d.ExtendedReports.results;
        var directReports = data.d.DirectReports.results;
        var peers = data.d.Peers.results;
		console.log(extendedReports)
		console.log(managers)
		console.log(directReports)
		console.log(peers)
        console.log(data.d);

    },
    error: function (data) {
        console.log(JSON.stringify(data));
    }
});




function loopthrough()
{
	for(i=0;i<assgnDataArr.length;i++)
	{
		var names= assgnDataArr[i]['EngineerName'].toString().replaceAll("@autoliv.com"," ").replaceAll(".external"," ").replaceAll("."," ")
		names=names.charAt(0).toUpperCase()+names.toString().slice(1)
		var lastnameIndex=names.indexOf(" ")
		var lastName=names.charAt(lastnameIndex+1).toUpperCase()+names.slice(lastnameIndex+2,)
		var username=names.slice(0,lastnameIndex)+" "+lastName.trim();
		console.log(username)
		var myDiv = document.getElementById("peoplePickerDiv")
		myDiv.innerHTML=username;
		getUserInfo(username);
	}
	
}

function initializePeoplePicker(peoplePickerElementId) {
// Create a schema to store picker properties, and set the properties.
var schema = {};
schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';

//This value specifies where you would want to search for the valid values
schema['SearchPrincipalSource'] = 15;

//This value specifies where you would want to resolve for the valid values
schema['ResolvePrincipalSource'] = 15;
schema['AllowMultipleValues'] = true;
schema['MaximumEntitySuggestions'] = 50;
schema['Width'] = '280px';

// Render and initialize the picker.
// Pass the ID of the DOM element that contains the picker, an array of initial
// PickerEntity objects to set the picker value, and a schema that defines
// picker properties.
this.SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, null, schema);
}

function getUserInfo(username) 
{
	// Get the people picker object from the page.
	var peoplePicker = this.SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerDiv_TopSpan;

	// Get information about all users.
	var users = peoplePicker.GetAllUserInfo();
	var userInfo = "";
	for (var i = 0; i < users.length; i++) 
	{
		var user = users[i];
		for (var userProperty in user) 
		{
			userInfo += userProperty + ': ' + user[userProperty] + '<br>';
		}

	}
	$('#resolvedUsers').html(userInfo);
	// Get user keys.
	var keys = peoplePicker.GetAllUserKeys();
	// Get the first user's ID by using the login name.
	getUserId(users[0].Key);
}

// Get the user ID.

function getUserId(loginName) {
var context = new SP.ClientContext.get_current();
this.user = context.get_web().ensureUser(loginName);
context.load(this.user);
context.executeQueryAsync(
Function.createDelegate(null, ensureUserSuccess),Function.createDelegate(null, onFail)
);
}

function ensureUserSuccess() {
$('#userId').html(this.user.get_id());
}

function onFail(sender, args) {
alert('Query failed. Error: ' + args.get_message());
}
	
	
	
	
	
	// async function loadValues()
	// {
		// for(var i=0;i<assgnDataArr.length;i++)
		// {
			// console.log(assgnDataArr[i]['EngineerName'])
			// if ( assgnDataArr[i]['EngineerName']!= null )
			// {    
				// console.log("Seq - " +i);
				// assgnDataArr[i]['EngAccountName']="";
				// var names= assgnDataArr[i]['EngineerName'].toString().replaceAll("@autoliv.com"," ").replaceAll(".external"," ").replaceAll("."," ")
				// names=names.charAt(0).toUpperCase()+names.toString().slice(1)
				// var lastnameIndex=names.indexOf(" ")
				// var lastName=names.charAt(lastnameIndex+1).toUpperCase()+names.slice(lastnameIndex+2,)
				// var username=names.slice(0,lastnameIndex)+" "+lastName.trim();
				// console.log(username)
				// //GetAccountName(username,i);
				// GetAccountName(username,i)
				// await sleep(150);
			// }
		// }
	// }
	
	console.log( _spPageContextInfo.webAbsoluteUrl )
	
	function GetAccountName(displayName)
	{
		var deferred = jQuery.Deferred();
		console.log("In here");
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
					//console.log(accountName);
					
					GetUserProfilePropertiesOffice(accountName);
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
	
	function GetUserProfilePropertiesOffice(user) 
	{  
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
					//console.log(data['d']['ExtendedReports']['results']);
					
					RalfReportsData = data['d']['ExtendedReports']['results'];
					console.log(RalfReportsData)
					for(i=0;i<RalfReportsData.length;i++)
					{
						console.log(RalfReportsData[i])
					}
					//RalfReportsData.push("i:0%23.f|membership|mohammed.salahuddin@autoliv.com");
					//RalfReportsData.push("i:0%23.f|membership|monisha.shankarappa@autoliv.com");
					//console.log(RalfReportsData);
					//CreateDataSet(RalfReportsData);
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
	
	
	function onQuerySucceededuser()
	{  
		console.log("sucess");

	}
	  
	function onQueryFailed(sender, args) 
	{  
		alert('Request failed. \nError: ' + args.get_message() + '\nStackTrace: ' + args.get_stackTrace());  
	} 
	
		var RootSite = "https://autoliv.sharepoint.com/sites/lifenet"
function Get_Groups() {
    var clientContext = new SP.ClientContext(RootSite);
    this.collGroup = clientContext.get_web().get_siteGroups();
    clientContext.load(collGroup);
    clientContext.executeQueryAsync(Function.createDelegate(this, this.DD_GroupsSucceeded), Function.createDelegate(this, this.DD_GroupsFailed));
}
function DD_GroupsSucceeded(sender, args) {
    console.log('DD_GroupsSucceeded');	
    var userInfo = '';
    var groupEnumerator = collGroup.getEnumerator();
    while (groupEnumerator.moveNext()) {
        var oGroup = groupEnumerator.get_current();
		count++;
        var Group_ID=oGroup.get_id();
        var Group_Title=oGroup.get_title();
        console.log(Group_ID +' - ' + Group_Title);
    }
	console.log(count)
}
function DD_GroupsFailed(sender, args) {
    alert('Request failed. DD_GroupsFailed' + args.get_message() + '\n' + args.get_stackTrace());
}
	
	// $(document).ready(function () {

		// // Specify the unique ID of the DOM element where the
		// // picker will render.
		// for(var i=0;i<assgnDataArr.length;i++)
		// {
			// console.log(assgnDataArr[i]['EngineerName'])
			// initializePeoplePicker(assgnDataArr[i]['EngineerName']);
		// }
	// });

	// // Render and initialize the client-side People Picker.
	// function initializePeoplePicker(peoplePickerElementId) {

		// // Create a schema to store picker properties, and set the properties.
		// var schema = {};
		// schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';
		// schema['SearchPrincipalSource'] = 15;
		// schema['ResolvePrincipalSource'] = 15;
		// schema['AllowMultipleValues'] = true;
		// schema['MaximumEntitySuggestions'] = 50;
		// schema['Width'] = '280px';

		// // Render and initialize the picker. 
		// // Pass the ID of the DOM element that contains the picker, an array of initial
		// // PickerEntity objects to set the picker value, and a schema that defines
		// // picker properties.
		// this.SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, null, schema);
	// }

	// // Query the picker for user information.
	// function getUserInfo() {

		// // Get the people picker object from the page.
		// var peoplePicker = this.SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerDiv_TopSpan;

		// // Get information about all users.
		// var users = peoplePicker.GetAllUserInfo();
		// var userInfo = '';
		// for (var i = 0; i < users.length; i++) {
			// var user = users[i];
			// for (var userProperty in user) { 
				// userInfo += userProperty + ':  ' + user[userProperty] + '<br>';
			// }
		// }
		// $('#resolvedUsers').html(userInfo);

		// // Get user keys.
		// var keys = peoplePicker.GetAllUserKeys();
		// $('#userKeys').html(keys);

		// // Get the first user's ID by using the login name.
		// getUserId(users[0].Key);
	// }

	// // Get the user ID.
	// function getUserId(loginName) {
		// var context = new SP.ClientContext.get_current();
		// this.user = context.get_web().ensureUser(loginName);
		// context.load(this.user);
		// context.executeQueryAsync(
			 // Function.createDelegate(null, ensureUserSuccess), 
			 // Function.createDelegate(null, onFail)
		// );
	// }

	// function ensureUserSuccess() {
		// $('#userId').html(this.user.get_id());
	// }

	// function onFail(sender, args) {
		// alert('Query failed. Error: ' + args.get_message());
	// }
	

</script>







