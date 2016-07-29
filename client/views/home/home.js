Template.Home.rendered = function() {

};

Template.Home.events({

});

Template.Home.helpers({

});

Template.HomeEditor.rendered = function() {
	// function sets editor and preview panel to full height
	function setFullHeight() {
		var viewHeight = $(window).height();
		var footerHeight = $("#footer").outerHeight();
		var codeTop = $(".CodeMirror").offset().top;

		var availableHeight = viewHeight - footerHeight - codeTop;
		if(availableHeight < 200) {
			availableHeight = 200;
		}

		$(".CodeMirror").height(availableHeight);
		$(".full-height").height(availableHeight);
	}

	// set full height on window resize
	$(window).resize(function() {
		setFullHeight();
	});

	// full height initialy
	setFullHeight();
	window.scrollTo(0, 0);

	// initial text
	Session.set("editorText", "code html");
}

Template.HomeEditor.events({
});

Template.HomeEditor.helpers({
	// codemirror options here
	"editorOptions": function() {
        return {
            styleActiveLine: true,
            lineNumbers: true,
            styleActiveLine: true,
            mode: "html"
        }
	},

	// codemirror initial text
	"editorText": function() {
		return Session.get("editorText");
	}
});
