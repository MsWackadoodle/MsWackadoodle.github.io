var more = document.getElementsByClassName('more');
for (var i=0;i<more.length;i++) {
	more[i].addEventListener('click', function(e) {
		var p = this.previousElementSibling;

		e.preventDefault();
		p.style.height = "auto";
		this.remove();

});
}
