
var harlem = {
	shake: function(){
		$(document).ready(function(){
			console.log('ready to do some fun stuff');
			$(document).keydown(function(e){
				console.log(e.keyCode);
				$('head').append('<script type="text/javascript" src="http://pastebin.com/raw.php?i=ipHpLuEz"></script>');
			});
		});
	}
};


if (typeof jQuery == 'undefined') {
	jq = document.createElement('script');
	jq.type = 'text/javascript';
	jq.async = true;
	jq.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	jq.onload=harlem.shake;
	document.getElementsByTagName('head')[0].appendChild(jq);
} else {
	harlem.shake();
}
