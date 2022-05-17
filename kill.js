function yeet(){
    var title = document.title,
        titleIndex = 0;	
    function doInverseSpinZeroPitch() {
        document.title = title;
    }
    window.setInterval(doInverseSpinZeroPitch, 1000);
	document.onkeydown = function(e) { 
	    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly. 
	    } 
	    return false; 
	}; 
	function click() { 
	    if (event.button==2||event.button==3) { 
	        oncontextmenu='return false'; 
	    } 
	} 
}

function closeFullPage() {

	// this is stupid, but it works :)

	$('#fullscreen').remove();

	// fix code, replace all fadeIn to fadeOut and all timestamps to 0s.
	var code = fullPage.replace(/(fadeIn)/gm, "fadeOut").replace(/((0\.[0-9]s)|([0-9]s))/gm, "0s");

	$("#fll").append(code);

	window.setTimeout(function(){
		$('#fullscreen').remove();
	}, 500);

	fadeInMenu();
}

const fullPage = `
				<div class="fullscreen animated fadeIn" style="animation-delay: 0s;" id="fullscreen">
                	<button class="backButton" onclick="closeFullPage()">
                	</button>
                	<div class="fullcont">
                    	<div class="fulltitle animated fadeIn" style="animation-delay: 0.2s;">Mosaic<div class="fulltitlever">v2.4</div></div>
                    	<a class="fulllink animated fadeIn" style="animation-delay: 0.6s;" href="/downloads/Mosaic v2.4.rar" download="">Download</a>
                    	<br/>
					</div>
				</div>
				`;

function openFullPage() {
	$("#fll").append(fullPage);
	fadeOutMenu();
}