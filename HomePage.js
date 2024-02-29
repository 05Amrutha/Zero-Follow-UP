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
		overflow-y: scroll ;
		z-index: 2;
		background-image: url("https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SiteAssets/background.jpg");
		background-size: 100% 100%;
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
	padding-top: 5px;
    height: 50px;
	}
	.fa 
	{
    padding-top: 20px;
    color: white;
    padding-left: 5px;
    float: right;
    padding-right:80px;
	}
	
	#username
	{
		color:white;
		font-weight:bold;
		padding-top: 18px;
		float:right;
		font-size:inintial;
	}

	.tab
	{
		position:absolute;
		top: 40%;
		left: 35%;
		height: 62%;
		width: 30%;
		transform:translate(-50%,-50%);
		padding:10px 30px;
		overflow:hidden;
		border-radius:50%;
		background: rgba(255,255,255,.70);
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

	.heading,#headers
	{
		font-weight:bold;
		padding: 15px;
		background-color:#305781;
		color: white;
		padding:20px;
		//border-color:#305781;
	}
	
	
	
	#title
	{
		background-color:#305781;
 
	}
	

	.tab-body
	{
		width:100%;
		height:80%
	}
	
	#links
	{
		margin-top: 5%;
		width: 53%;
		background: #305781;
		margin-left: 20%;
		color: white;
		font-weight: bold;
		font-size: medium;
		border: none;
		padding:3%
	}
	a:hover,a
	{
		text-decoration:none;
	}
	#links:hover
	{
		background-color: #c5e9ea;
		color : black;
	}
	a:visited 
	{
		color: white;
		text-decoration:none;
	}
	#followuptitle
	{
		top: 40%;
		margin-top: 15%;
		margin-left: 20%;
		background: rgb(255 255 255);
		width: 55%;
		font-size: x-large;
		text-align: center;
		font-weight: bold;
		padding: 2%;
	}
	a, .ms-link:visited 
	{
    color: white;
	}
	
	@media screen and (min-width:700px)
	{
		#followuptitle
		{}
		
		div.tab-header
		{
			
		}
		
	}
</style>

	

<div id="ContainerDiv">
	
	<div class="bootstrap-iso">
	
		<div id="titlebar" >
			<i class="fa fa-user fa-xs"></i>
			<div id="username"> </div>
			<div><img id="logo" src="https://autoliv.sharepoint.com/:i:/r/sites/alvgtsc/ZeroFollowup/SiteAssets/Logo.png?csf=1&web=1&e=gePRmE" alt="Autoliv logo"></div>

		</div>
	</div>
	<br><br>
	
	
	<div class="tab">
		<div class="tab-header" style = "align-items:center;">
			<div id="followuptitle">Zero Follow Up</div>
			<div id="links"><a href="https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SitePages/Edit.aspx">Follow Up</a></div>
			<div id="links"><a href="https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SitePages/addPeople.aspx">Edit Details</div>
			<div id="links"><a href="https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SitePages/Report.aspx">View Follow-Up</div>
			<div id="links"><a href="https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SitePages/Feedback.aspx">FeedBack</div>
		</div>		
</div>


<script>
	
	$(function(){
		
		getUserDetails();
	});
	$(document).ready(function() {
      $(document).bind('keydown', function(e) {
        if (e.altKey && e.which == 82) {
		window.open("https://autoliv.sharepoint.com/sites/alvgtsc/ZeroFollowup/SitePages/usageReport.aspx");
          console.log("ALT+R");
        }
      });
	});
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
		loadCurrentUsersReportiesDetails(sharepointemail);
		
		//GetUserProfileProperties(user_log);

	}
	  
	function onQueryFailed(sender, args) 
	{  
		alert('Request failed. \nError: ' + args.get_message() + '\nStackTrace: ' + args.get_stackTrace());  
	}  

</script>







