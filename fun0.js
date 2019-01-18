

function resizeIF (){
  try {
      var objBody = main.document.body;
      var objFrame = document.all["main"];
      ifrmHeight = objBody.scrollHeight + (objBody.offsetHeight - objBody.clientHeight);
      objFrame.style.height = ifrmHeight;
  }
      catch(e) {}
}

function init_iframe() {
  resizeIF();
  setTimeout('init_iframe()',1)
}

jQuery('[id="menu"]').click(function(event){
    resizeIF ()
});

$('menu').click(function(event){
	resizeIF ()
});

$(function(){
	$("main").load(function(){ //iframe 컨텐츠가 로드 된 후에 호출됩니다.
		var frame = $(this).get(0);
		var doc = (frame.contentDocument) ? frame.contentDocument : frame.contentWindow.document;
		$(this).height(doc.body.scrollHeight);
		$(this).width(doc.body.scrollWidth);
	});
});
