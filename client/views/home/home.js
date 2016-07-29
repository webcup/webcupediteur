Template.Home.rendered = function() {

};

Template.Home.events({

});

Template.Home.helpers({

});
Template.HomeEditor.created = function() {
if(amplify.store("html")){
	Session.set('editorText',amplify.store("html"));
}
};

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

};

Template.HomeEditor.events({
});

Template.HomeEditor.helpers({
	// codemirror options here
	"editorOptions": function() {
        return {
		  styleActiveLine: true,
			lineNumbers: true,
			keyMap: "sublime",
			theme: "blackboard",
			lint: false,
			mode: "htmlmixed"
		}
	},
	// codemirror initial text
	"editorText": function() {

		if(Session.get("editorText")!=amplify.store("html")){
			console.log('update');
				amplify.store("html",Session.get("editorText"))
		}

		return Session.get("editorText");
	}
});
