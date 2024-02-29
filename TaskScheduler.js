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
	
	.tab-body
	{
		overflow-y: scroll;
		width: 70%;
		height: 65vh;
	}
	#mangerTable td
	{
		border: 1px solid black;
		padding: 13px;
	}
	
	tr:nth-child(odd)
	{
		//background-color: white;
		background-color:rgb(216,216,216);
	}
	
	th
	{
		position:sticky;
		top:0;
		z-index:4;
		background-color: #305781;
		color: white;
		padding: 30px;
		font-size: large;
	}
	
	
</style>

	

<div id="ContainerDiv">   
	<div class="bootstrap-iso">
	
		<div id="titlebar" >
			<i class="fa fa-user fa-xs" style="padding-top:20px"></i>
			<div id="username"> </div>
			<div><img id="logo" src="https://autoliv.sharepoint.com/:i:/r/sites/alvgtsc/ZeroFollowup/SiteAssets/Logo.png?csf=1&web=1&e=gePRmE" alt="Autoliv logo"><a href="https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SitePages/Home.aspx"><i style="float:none;font-size:x-large"class="fa fa-home" aria-hidden="true"></i></a></div>
		</div>
	</div>
	<center>
	<br><br>
	<div class="tab-body" id="viewTable" style="margin-top:111px;">
		<table id="mangerTable" style="width: 100%;">
			<thead>
				<th>Manger name</th>
				<th>Last Visited</th>
			</thead>
			<tbody id="mangerTBody">
			</tbody>
		
		</table>
	</div>
</center>			

</div>


<script>
//get user details 
	var mngVistList="ManagerVisitingHistory";
    var manageListDataArr=[];	
	var currentuserMail='';
	var sharepointemail = "";
	var user_log=  "";
    var user_title=  "";
    var user_email =  "";
	var user_region =  "";
	var mailTriggerList=[];
	var tomail=[];
	var queryUrlTaskScheduler= _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+mngVistList+"')/items?$top=5000" ;
	
	$(function()
	{
		getUserDetails();
		taskSchedulerList();
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
		sharepointemail = currentUser.get_email();
		user_log= currentUser.get_loginName() ;
		user_title= currentUser.get_title();  
		user_email = currentUser.get_email();
		user_region = user_log.substring(user_log.indexOf("|")+1,user_log.indexOf("|")+3) ;
		
		user_log=user_log.replace("#","%23");	
		console.log(user_log);
		console.log(user_title);
		
		document.getElementById("username").innerHTML = user_title;
		
		///Testing
		dateUpdate(sharepointemail)
	}
	
	function dateUpdate(currentuserMail)
	{
		var mangername="";
		var rowID='';
		mailTriggerList=[];
		var days_difference;
		var total_seconds;
		var date2 ;
		console.log("In user name")
		//var curdate = new Date();
		let curdate = new Date().toUTCString().slice(5, 16);
		let logdate = new Date().toLocaleDateString('en-GB');
		var mangername = manageListDataArr.filter(function(item) { return item['ReportingManager'] == currentuserMail});
		var clientContext = new SP.ClientContext.get_current();
		var oList = clientContext.get_web().get_lists().getByTitle('ManagerVisitingHistory');
		console.log(curdate)
		console.log(logdate+"-----"+typeof(logdate))
		$.each(mangername, function (key, value)
		{
			rowID= value.ID ;
			console.log(rowID)
		});

		this.oListItem = oList.getItemById(rowID);
		console.log(manageListDataArr)
		console.log(rowID)
		
		var date1 = new Date();  
        
		var val=""
		for(i=0;i<manageListDataArr.length;i++)
		{
			val+="<tr><td>"+manageListDataArr[i]["ReportingManager"]+"</td>";
			if(manageListDataArr[i]["LastVisitedOn"]== null)
			{
				val+= "<td> </td>"
			}
			else
			{
				val+="<td>"+manageListDataArr[i]["LastVisitedOn"]+"</td></tr>"
			}
		}
		val+="</table>"
		$("#mangerTBody").append(val)
		console.log(manageListDataArr.length)
		for(j=0;j<manageListDataArr.length;j++)
		{
			console.log(j)
			console.log(manageListDataArr[j]['ReportingManager'])
			if(manageListDataArr[j]['LastVisitedOn']!=null)
			{
				date2 = new Date (manageListDataArr[j]['LastVisitedOn']); 
				console.log(date2)
				total_seconds = Math.abs(date1 - date2) / 1000;  
				console.log(total_seconds)
				
				//calculate days difference by dividing total seconds in a day  
				days_difference = Math.floor (total_seconds / (60 * 60 * 24)); 
				
				console.log(days_difference)
				if(days_difference>7)
				{
					console.log("In if of days count")
					mailTriggerList.push(manageListDataArr[j]['ReportingManager']);
				}
			}
			
		}
		
		for(i=0;i<mailTriggerList.length;i++)
		{
			tomail=[];
			tomail.push(mailTriggerList[i]);
			sendmail(tomail);
		}
			
	}
	
	function sendmail(tomail)
	{
		console.log(tomail)
		var tomail;
		var userName= mailTriggerList[i].toString().charAt(0).toUpperCase()+mailTriggerList[i].toString().slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
		var index = userName.indexOf(" ")
		console.log(index)
		userName=userName.slice(0,index)
		console.log(userName);
		var mailsubject = "Reminder to send the Follow-Up";
		var mailbody = "Hello "+userName+","+'<br>'+'<br>'+"This is a follow up mail to remind you to kindly please check and send follow up to your subordinates for this week."+"<br>"+"https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SitePages/Edit.aspx"+'<br>'+'<br>'+"Thanks,"+'<br>'+"Zero-followup Team." ;
		var siteurl = _spPageContextInfo.webServerRelativeUrl;
		var urlTemplate = siteurl + "/_api/SP.Utilities.Utility.SendEmail";
		var suc=0;
		console.log(tomail)
		console.log(mailbody)
			
		$.ajax({
			contentType: 'application/json',
			url: urlTemplate,
			type: "POST",
			data: JSON.stringify({
				'properties': {
					'__metadata': { 'type': 'SP.Utilities.EmailProperties' },
					'From': 'R-ALV-NoReply@autoliv.com',
					'To': { 'results': tomail},
					'Body': mailbody,
					'Subject': mailsubject
				}
			}
			),
			headers: {
				"Accept": "application/json;odata=verbose",
				"content-type": "application/json;odata=verbose",
				"X-RequestDigest": $("#__REQUESTDIGEST").val()
				},
			success:  function (data) 
			{
				var result = data.d.results;
				console.log(result);
				//suc = 1;				
			},
				
			error: function (err)
			{		
				console.log(err);
			}
		});
	}
</script>







