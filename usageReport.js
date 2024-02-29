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
		margin-top: 6px;
		left: 44%;	
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

.table-wrapper{
    margin: 10px 70px 10px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
	height: 71vh;
    overflow-y: scroll;
}

.fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
}

.fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
}

.fl-table thead th {
    color: #ffffff;
    background: #305781;
}


.fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}

.fl-table tr:nth-child(even) {
    background: #F8F8F8;
}

/* Responsive */

@media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
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
	<br><br>
	<h2>Manager Visiting History</h2>
<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>No</th>
            <th>Reporting Manager</th>
            <th>Last Visited On</th>
            <th>Visiting Count</th>
            <th>Mail Send Count</th>
        </tr>
        </thead>
        <tbody id="VisitingData">
        
        <tbody>
    </table>
	
</div>
<div id=ExportButton>
		<input type="button" id="ExportData" class="expbtn" onclick="ExportData()" value="Export" />
		
	</div>
	
</div>

<script>
var listOfEngineer=[];

	var VisterList = "ManagerVisitingHistory";
	var VisitererDataArr =[];
	var sharepointemail = "";
	var user_log=  "";
    var user_title=  "";
    var user_email =  "";
	var user_region =  "";
	var queryUrlVisiterData = _spPageContextInfo.siteAbsoluteUrl + "/ZeroFollowup/_api/web/lists/getbytitle('"+VisterList+"')/items?$top=5000" ;
	
	
	VisitertExtractData();
	getUserDetails();
	displayData();
	
	
	document.getElementById("ExportData").addEventListener('click',function()
	{
		var table2excel = new Table2Excel();
		table2excel.export(document.querySelectorAll(".fl-table"));
	});	
	
//fetch data from tracker data list	
	
	
//fetch task list data 
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
				console.log(VisitererDataArr );
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

		head=["maheshkumar.jagadish@autoliv.com","mohammed.salahuddin@autoliv.com","aravind.kanade@autoliv.com","mallikarjun.banappanavar@autoliv.com","amrutha.lakshminarasimha.external@autoliv.com","sudarshan.narayanaswamy@autoliv.com"]
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
	}
	function onQueryFailed(sender, args) 
	{  
		alert('Request failed. \nError: ' + args.get_message() + '\nStackTrace: ' + args.get_stackTrace());  
	} 
	function displayData()
	{
		var val="";
		console.log(VisitererDataArr.length)
		for(var i =0;i<VisitererDataArr.length;i++)
		{
			console.log(VisitererDataArr[i]);
			var No = (i+1);
			var ReportingManager = VisitererDataArr[i]["ReportingManager"];
			if (ReportingManager!="none")
			{
			ReportingManager=ReportingManager.charAt(0).toUpperCase()+ReportingManager.slice(1).replaceAll('@autoliv.com',' ').replaceAll('.',' ').replaceAll('external',' ')
			var LastVisitedOn =VisitererDataArr[i]["LastVisitedOn"];
			if (LastVisitedOn==null)
			{
				LastVisitedOn="0"
			}
			var VisitingCount =VisitererDataArr[i]["VisitingCount"];
			if (VisitingCount==null)
			{
				VisitingCount="0"
			}
			var MailSendCount =VisitererDataArr[i]["MailSendCount"];
			if (MailSendCount==null)
			{
				MailSendCount="0"
			}
			console.log(No)
			console.log(ReportingManager)
			console.log(LastVisitedOn)
			console.log(VisitingCount)
			console.log(MailSendCount)
			val+="<tr>"
				val+="<td>"+No+"</td>"
				val+="<td>"+ReportingManager+"</td>"
				val+="<td>"+LastVisitedOn+"</td>"
				val+="<td>"+VisitingCount+"</td>"
				val+="<td>"+MailSendCount+"</td>"
			val+="</tr>"
			
			}
		}
		$("#VisitingData").append(val);
	}

</script>

