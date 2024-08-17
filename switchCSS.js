/* Quick hack for switching a CSS file by mouse click. (C) DJ 8/2012 */

function switchCSS(first, second) {
	var styleLink = document.getElementById("replaceLink");
	var href = styleLink.getAttribute("href");
	newHref = href == first ? second : first;
	styleLink.setAttribute("href", newHref);
}