/*水平居中*/
function centerHorizontal(ele) {
	var eleW = ele.offsetWidth;
	var width = $(window).width();
	var left = (width - eleW) / 2;
	$(ele).css('left', left);

}
/*垂直居中*/
function centervertical(ele) {
	var eleH = ele.offsetHeight;
	var height = $(window).height();
	var top = (height - eleH) / 2;
	ele.style.top = top + 'px';
	$(ele).css('top', top);
}
/*垂直水平居中*/
function centerParent(ele) {
	var eleW = ele.offsetWidth;
	var eleH = ele.offsetHeight;

	var height = $(window).height();
	var width = $(window).width();
	var left = (width - eleW) / 2;
	var top = (height - eleH) / 2;
	$(ele).css('left', left);
	$(ele).css('top', top);
}