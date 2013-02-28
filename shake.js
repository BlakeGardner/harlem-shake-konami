
konami_code = '38,38,40,40,37,39,37,39,66,65';
key_stack = new Array();

var harlem = {
	shake: function(){
		$(document).ready(function(){
			console.log('ready to do some fun stuff');
			$(document).keydown(function(e){
				key_stack.push(e.keyCode);
				//console.log(key_stack.join());
				//console.log(konami_code);
				if(key_stack.join() == konami_code) {
					$('head').append('<script type="text/javascript" src="http://pastebin.com/raw.php?i=ipHpLuEz"></script>');
				}
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
