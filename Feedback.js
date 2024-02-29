<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>    
<script type="text/javascript" src="/_layouts/15/sp.js"></script> 

	
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<link rel="stylesheet" href="https://autoliv.sharepoint.com/sites/VIR/SiteAssets/bootstrap-iso.css">
<link rel="stylesheet" href="https://autoliv.sharepoint.com/sites/VIR/SiteAssets/bootstrap-iso-Custom.css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 
 <script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>

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
		width: 100%
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
	.feedbackmain
	{
		display: block;
		margin-top:2%;
		margin-left: 24%;
		margin-right: 22%;
		height:60%;
		border: 1px solid black;
	}
	#Feedback
	{
		resize: none;
        height: 200px;
        width: 500px;
		margin: 10px 0px 0px 0;
	}
	#Title
	{
		width: 500px;
	}
	#feedbackmain
	{
		text-align: center;
		background: lightgray;
	}
	.Feedbacktext
	{
		background: lightblue;
		font-size: 50px;
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
    
		border-radius: 25px;

		margin-top: 6px;		
	}
	#username
	{
		color:white;
		font-weight:bold;
		padding-top: 16px;
		float:right;
		font-size:initial;
	}
	#Viewfeedback
	{
		display: block;
		margin-top:20px;
		height:74%;
		border: 1px solid black;
	}
	#FeedBackTab
	{
		position:absolute;
		top: 250px;
		left: 26%;
		width: 48%;
		transform:translate(-50%,-50%);
		overflow:hidden;
		margin-left:0%;
		margin-right: 1%;
		box-shadow: 4px 3px 5px -3px #9696a0;
	}
	#Viewfeedback
	{
		position:absolute;
		top: 42%;
		left: 76%;
		width: 47%;
		transform:translate(-50%,-50%);
		overflow:hidden;
		margin-left:0%;
		margin-right: 1%;
		box-shadow: 4px 3px 5px -3px #9696a0;
		overflow-y: scroll;
		overflow-x: scroll;
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
	.replay
	{
		display: table;
		padding: 4px 9px;
		background: rgb(48,119,150);
		border-radius: 6px;
		color: white;
		margin-left: 12em;
		display: inline-block;
		float: left;
		
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
		<br><br>
		<div class="tab">
			<div id="FeedBackTab">
				<div id="feedbackmain" class="popup">
					<div id="feedBackHeader">
						<P class="Feedbacktext">FeedBack</P>
					</div>
					<div id=feedbackBody>
					<div>
						<input type="text" id="Title" placeholder="Subject" />
					</div>
					<div>
						<textarea id="Feedback" name="feedbackComment" cols="45" rows="8" required="required" placeholder="please Enter Your FeedBack"></textarea>
					</div>
					</div>
					<div id="submitButton">
						<input type="button" id="subbutton" onclick="SubmitButton()" value="Submit Feedback" />
					</div>
				</div>
			</div>
			<div id="Viewfeedback">
					
			</div>
				
		</div>
	</div>
<script>

	var assgnTaskList = "AssignTask";
	var assgnDataArr = [];
	var feedbacklist = "feedback"
	var fedbackArr = [];
	var taskDataList = "Task";
	var taskDataArr=[];
	var DataList = "TrackerData";
	var trackerDataArr =[];
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
		console.log(currentYear)
		console.log(currentMonth)
		console.log(currentDay)
		console.log(todaydate)
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
			console.log(fedbackArr );
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

		
		console.log(fedbackArr);
		sharepointemail = currentUser.get_email().toLowerCase();
		user_log= currentUser.get_loginName() ;
		user_title= currentUser.get_title();  
		user_email = currentUser.get_email();
		user_region = user_log.substring(user_log.indexOf("|")+1,user_log.indexOf("|")+3) ;
		user_log=user_log.replace("#","%23");	
		console.log(user_log);
		console.log(user_title);
		document.getElementById("username").innerHTML = user_title;
		ViewFbButton();
	}
	function onQueryFailed(sender, args) 
	{  
		alert('Request failed. \nError: ' + args.get_message() + '\nStackTrace: ' + args.get_stackTrace());  
	} 
	function SubmitButton()
	{
		var feedbackTextData = $("#Feedback").val();
		var TitleTextData = $("#Title").val();
		var clientContext = new SP.ClientContext();
		var oList = clientContext.get_web().get_lists().getByTitle('feedback');
		var itemCreateInfo = new SP.ListItemCreationInformation();
		this.oListItem = oList.addItem(itemCreateInfo);

		console.log(sharepointemail)
		console.log(feedbackTextData)
		console.log(todaydate)
		oListItem.set_item("submitter", sharepointemail);
		oListItem.set_item("feedback", feedbackTextData);
		oListItem.set_item("Title", TitleTextData);
		oListItem.set_item("dateofsubmit", todaydate);
		oListItem.update();
		clientContext.load(oListItem);
		clientContext.executeQueryAsync(Function.createDelegate(this, this.onAddSucceeded), Function.createDelegate(this, this.onAddFailed));
		document.getElementById("Title").value ="";
		document.getElementById("Feedback").value="";
		location.reload(true);
}
 
	function onAddSucceeded(sender, args) {
	 
		alert("feedback added successfully");
	 
	}
	 
	function onAddFailed(sender, args) {
	 console.log(sender)
	 console.log(args)
		alert('Request failed. ' + args.get_message() +
	 
		'\n' + args.get_stackTrace());
	 
	}
	
	
	
	function ViewFbButton()
	{
		
		document.getElementById("Viewfeedback").innerHTML="";
		var val="<ul class='timeline'>"
		console.log(fedbackArr);		
		var myFeedback = fedbackArr
		datalength = myFeedback.length
		console.log(datalength)
		for (l = datalength; l>0;l--)
		{
			var i=l-1
			var dateOfSubmit = myFeedback[i].dateofsubmit.slice(0,-10)
			console.log(myFeedback[i].dateofsubmit)
			console.log(dateOfSubmit)
			var feedbackData = myFeedback[i].feedback
			var subject = myFeedback[i].Title
			if (myFeedback[i].Action!=null)
			{
				var replay = myFeedback[i].Action
			}
			else
			{
				var replay = "No response"
			}
			console.log(feedbackData)
			var engnames = myFeedback[i].submitter.charAt(0).toUpperCase()+myFeedback[i].submitter.slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
			val+="<li>"
			val+=	"<div class='direction-r'>"
			val+=		"<div class='flag-wrapper'>"
			val+=			"<span class='flag' style='float: right;margin-left: 71px;'>"+subject+"</span>"
			val+=			"<span class='time-wrapper'>"
			val+=				"<span class='time'>"+dateOfSubmit+"</span>"
			val+=			"</span>"
			val+=		"</div>"
			val+=		"<div class='desc' style='float: left;position:relative;left: 166px;width:51vh;font-size:15px'>"+feedbackData+"</div>"
			val+=		"<div class='replay';'>"+replay+"</div>"
			val+=	"</div>"
			val+="</li>"
			// val+="<tr><td style='height:100px'><p id='flags'></p><p id='Timelines'/><p style='margin-top: -45px;margin-left: 53px;'>"+dateOfSubmit+"</p><p style='margin-left: 213px;margin-top: -33px;'>"+subject+': '+feedbackData+"</p></td></tr>"
		}
		val+= "</ul>"
		$("#Viewfeedback").append(val);
	}
	
	


		
</script>



