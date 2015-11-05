// NOTES
// The jQuery I'm using so far seems to have a pattern of $(selectSomething).doSomething();
// This makes sense because jQuery is a function and we are passing in a parameter of selectSomething, then executing another function to doSomething();
// Jason - does more advanced jQuery follow the same pattern?
// -----------------------------------------------


// Selects all things in the first string and adds the class in the second string.
$("#append-class").click(function appendClass() {
	$("div").addClass("new-class");
	// $("div").toggleClass("new-class"); // This does the same as above, but the class is added/removed when the button is clicked.
	}
);

// Selecting by class has the same syntax as CSS: .ClassName
$("#slide-content").click(function slideContent() {
	$(".main-content").slideToggle(); 
	}
);

// Grabs an item with a specific class, then replaces the content within that item.
$("#replace-content").click(function replaceContent() {
	$(".replace-content").html("With this new fancy content!");
	}
);

$("#input-name").click(function inputName() {
	alert("Is your name really " + $("input[name=firstName").val() + " " + $("input[name=lastName").val() + "?");
	}
);