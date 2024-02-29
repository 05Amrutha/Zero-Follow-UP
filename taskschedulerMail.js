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
	
	#Viewfeedback
	{
		position:absolute;
		top: 5%;
		width: 100%;
		overflow:hidden;
		box-shadow: 4px 3px 5px -3px #9696a0;
		overflow-y: scroll;
		overflow-x: scroll;
		height: 50%;
	}
	text
	{
		justify-content: space-evenly;
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
	
	.timeline {
	  position: relative;
	  width: 660px;
	  margin: 0 auto;
	  padding: 1em 0;
	  list-style-type: none;
	}

	.timeline:before {
	  position: absolute;
	  left: 128px;
	  top: 0;
	  content: ' ';
	  display: block;
	  width: 6px;
	  height: 100%;
	  margin-left: -3px;
	  background: rgb(80,80,80);
	  background: -moz-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
	  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));
	  background: -webkit-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
	  background: -o-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
	  background: -ms-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
	  background: linear-gradient(to bottom, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
	  
	  z-index: 5;
	}

	.timeline li {
	  padding: 1em 0;
	}

	.timeline li:after {
	  content: "";
	  display: block;
	  height: 0;
	  clear: both;
	  visibility: hidden;
	}



	.direction-r {
	  position: relative;
	}

	.flag-wrapper {
	  position: relative;
	  display: inline-block;
	  
	  text-align: center;
	}

	.flag {
	  position: relative;
	  display: inline;
	  color: white;
	  font-size:12px;
	  background: rgb(48,87,129);
	  padding: 6px 10px;
	  border-radius: 5px;
	  
	  font-weight: 600;
	  text-align: left;
	}

	.direction-r .flag {
	  -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
	  -moz-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
	  box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
	}
	


	.direction-r .flag:before {
	  position: absolute;
	  top: 50%;
	  right: -40px;
	  content: ' ';
	  display: block;
	  width: 12px;
	  height: 12px;
	  margin-top: -10px;
	  background: #fff;
	  border-radius: 10px;
	  border: 4px solid rgb(173,216,230);
	  z-index: 10;
	}

	.direction-r .flag:before {
	  left: -37px;
	}



	.direction-r .flag:after {
	  content: "";
	  position: absolute;
	  right: 100%;
	  top: 50%;
	  height: 0;
	  width: 0;
	  margin-top: -8px;
	  border: solid transparent;
	  border-right-color: rgb(48,87,129);
	  border-width: 8px;
	  pointer-events: none;
	}

	.time-wrapper {
	  display: inline;
	  font-size: 12px;
	  padding-left:10px;
	  color: rgb(248,248,248);
	  vertical-align: middle;
	}



	.direction-r .time-wrapper {
	  float: right;
	}

	.time {
	  display: inline-block;
	  padding: 7px 7px;
	  background: rgb(48,87,127);
	  border-radius: 6px;
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
		border-radius: 15px;
		border-color: #98d6d8;
		background-color: #305781;
		color: white;
		width:120px;
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
		<div id="Maintab">
		<div id="Viewfeedback">	
		
		</div>
		<div>
		<input type="button" class="FBlinks" id="btnWeekFb" onclick="WeekFbMail()" value="Weekly Mail" style="width:150px; position: absolute;top: 600px;left: 35%;"/>
		<input type="button" class="FBlinks" id="btnMonthFb" onclick="MonthFbMail()"  style="width:150px; position: absolute;top: 600px;left: 48%;" value="Monthly Mail"/>
		</div>
	</div>
</div>


<script>
//get user details 
	var feedbacklist = "feedback"
	var fedbackArr = [];
	var sharepointemail = "";
	var user_log=  "";
    var user_title=  "";
    var user_email =  "";
	var user_region =  "";
	var queryUrlFeedback = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+feedbacklist+"')/items?$top=5000" ;
	$(function(){
		
		var a = new Date();
		var currentYear = a.getFullYear();
		var currentMonth = a.getMonth()+1;
		var currentDay = a.getDate();
		todaydate = currentMonth +"/"+ currentDay + "/"+ currentYear
		// console.log(currentYear)
		// console.log(currentMonth)
		// console.log(currentDay)
		// console.log(todaydate)
		FeedbackExtractData();
		getUserDetails();
	});
//fetch data from tracker data list	
	function FeedbackExtractData()
	{
			
		$.ajax({
			url: queryUrlFeedback,
			type: "GET",
			async: false,
			headers: {
			"Accept": "application/json;odata=verbose"
			},
			success: function(data) {
			if (data.d.results.length > 0)
			{
				fedbackArr = fedbackArr.concat(data.d.results);					
			}
			// console.log(fedbackArr );
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

		
		// console.log(fedbackArr);
		sharepointemail = currentUser.get_email().toLowerCase();
		user_log= currentUser.get_loginName() ;
		user_title= currentUser.get_title();  
		user_email = currentUser.get_email();
		user_region = user_log.substring(user_log.indexOf("|")+1,user_log.indexOf("|")+3) ;
		user_log=user_log.replace("#","%23");	
		// console.log(user_log);
		// console.log(user_title);
		document.getElementById("username").innerHTML = user_title;
		ViewFbButton();
		WeekFbMail();
	}
	function onQueryFailed(sender, args) 
	{  
		alert('Request failed. \nError: ' + args.get_message() + '\nStackTrace: ' + args.get_stackTrace());  
	} 
	function ViewFbButton()
	{
		
		document.getElementById("Viewfeedback").innerHTML="";
		var val="<ul class='timeline'>"
		// console.log(fedbackArr);		
		var myFeedback = fedbackArr
		datalength = myFeedback.length
		// console.log(datalength)
		for (l = datalength; l>0;l--)
		{
			var i=l-1
			var dateOfSubmit = myFeedback[i].dateofsubmit.slice(0,-10)
			// console.log(myFeedback[i].dateofsubmit)
			// console.log(dateOfSubmit)
			var feedbackData = myFeedback[i].feedback
			var subject = myFeedback[i].Title
			var engnames = myFeedback[i].submitter.charAt(0).toUpperCase()+myFeedback[i].submitter.slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
			val+="<li><div class='direction-r'><div class='flag-wrapper'><span class='flag' style='float: right;margin-left: 71px;'>"+subject+"</span><span class='time-wrapper'><span class='time'>"+dateOfSubmit+"</span></span></div><div class='desc'style='float: left;margin-left: 166px;width:50vh;font-size:15px'>"+feedbackData+"</div></div></li> "
			// val+="<tr><td style='height:100px'><p id='flags'></p><p id='Timelines'/><p style='margin-top: -45px;margin-left: 53px;'>"+dateOfSubmit+"</p><p style='margin-left: 213px;margin-top: -33px;'>"+subject+': '+feedbackData+"</p></td></tr>"
		}
		val+= "</ul>"
		$("#Viewfeedback").append(val);
	}
	
	function WeekFbMail()
	{
		var myFeedback = fedbackArr
		datalength = myFeedback.length
		// console.log(datalength)
		var tomail=[];
		
		tomail.push("mallikarjun.banappanavar@autoliv.com")
		tomail.push("aravind.kanade@autoliv.com")
		tomail.push("mohammed.salahuddin@autoliv.com")
		tomail.push("sudarshan.narayanaswamy@autoliv.com")
		// console.log(tomail);
		console.log("Weekly Mail trigger");
		var mailsubject = "Zero Follow Up Feedback";
		var mailbody="<html>"
		mailbody+= "<div style='padding: 10px;'><p>Hello Admins,</p>"
		
		var no=0;
		var myDate = new Date();
		
		myDate.setDate(myDate.getDate() -8);
		myDate = myDate.toISOString()
		for (l = datalength; l>0;l--)
		{
			var i=l-1
			var Fbdate = myFeedback[i].dateofsubmit;
			// console.log(Fbdate)
			if (Fbdate > myDate)
			{
				// console.log("enterdinsideIF");
				no +=1;
				var feedbackData = myFeedback[i].feedback
				var subject = myFeedback[i].Title
				var submitterMail = myFeedback[i].submitter
				var submitter= submitterMail.toString().charAt(0).toUpperCase()+submitterMail.toString().slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
				var dateOfSubmit = myFeedback[i].dateofsubmit.slice(0,-10)
				mailbody+= "<p style='margin-bottom: 0px;'>"+no+". Subject: "+subject+"</p><p style='margin: 0px;'>FeedBack: "+ feedbackData+"</p><p style='margin: 0px;'>Submitter: "+submitter+"</p>"
			}
			
		}
		// mailbody +="<p style='margin-bottom: 0px;'>Thanks,</p><p style='margin: 0px;'>Zero Followup,</p></div>"
		mailbody +="<p style='margin-bottom: 0px;'>Thanks,</p><p style='margin: 0px;'><a href='https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SitePages/Home.aspx'>Zero Followup,</a></p></div>"
		mailbody +="</html>"
		var siteurl = _spPageContextInfo.webServerRelativeUrl;
		var urlTemplate = siteurl + "/_api/SP.Utilities.Utility.SendEmail";
		var suc=0;
		// console.log(tomail)
		// console.log(mailbody)
		if (no>0)
		{
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
					console.log("Weekly Mail triggered");
				},
					
				error: function (err)
				{		
					console.log(err);
				}
			});
		}
	}
	function MonthFbMail()
	{
		var myFeedback = fedbackArr
		datalength = myFeedback.length
		// console.log(datalength)
		var tomail=[];
		
		tomail.push("mallikarjun.banappanavar@autoliv.com")
		tomail.push("aravind.kanade@autoliv.com")
		tomail.push("mohammed.salahuddin@autoliv.com")
		tomail.push("sudarshan.narayanaswamy.external@autoliv.com")
		console.log("Monthly Mail trigger");
		var mailsubject = "Zero Follow Up Feedback";
		var mailbody="<html>"
		mailbody+= "<div style='padding: 10px;'><p>Hello Admins,</p>"
		var no=0;
		var myDate = new Date();
		
		myDate.setDate(myDate.getDate() -31);
		myDate = myDate.toISOString()
		for (l = datalength; l>0;l--)
		{
			var i=l-1
			var Fbdate = myFeedback[i].dateofsubmit;
			// console.log(Fbdate)
			if (Fbdate > myDate)
			{
				// console.log("enterdinsideIF");
				no +=1;
				var feedbackData = myFeedback[i].feedback
				var subject = myFeedback[i].Title
				var submitterMail = myFeedback[i].submitter
				var submitter= submitterMail.toString().charAt(0).toUpperCase()+submitterMail.toString().slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
				var dateOfSubmit = myFeedback[i].dateofsubmit.slice(0,-10)
				mailbody+= "<p style='margin-bottom: 0px;'>"+no+". Subject: "+subject+"</p><p style='margin: 0px;'>FeedBack: "+ feedbackData+"</p><p style='margin: 0px;'>Submitter: "+submitter+"</p>"
			}
			
		}
		mailbody +="<p style='margin-bottom: 0px;'>Thanks,</p><p style='margin: 0px;'><a href='https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SitePages/Home.aspx'>Zero Followup,</a></p></div>"
		mailbody +="</html>"
		var siteurl = _spPageContextInfo.webServerRelativeUrl;
		var urlTemplate = siteurl + "/_api/SP.Utilities.Utility.SendEmail";
		var suc=0;
		// console.log(tomail)
		// console.log(mailbody)
		if (no>0)
		{
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
					console.log("Monthly Mail triggered");					
				},
					
				error: function (err)
				{		
					console.log(err);
				}
			});
		}
	}
	
</script>








