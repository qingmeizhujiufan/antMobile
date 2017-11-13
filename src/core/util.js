import $ from 'n-zepto';

var loadingIn = function(text) {
	var _text = '';
	var _class = '';
	var append_html = '';
	if($('.mui-loading').length > 0) {
		return false;
	}
	if(text && text != '') {
		_class = ' mui-loading-text';
		_text = '<p>' + text + '</p>';
		append_html = '<div class="backup"></div><div class="mui-loading' + _class + '"><span class="mui-spinner mui-spinner-white"></span>' + _text + '</div>';
	} else {
		_class = '';
		_text = '';
		append_html = '<div class="backup"></div>' +
			'<div class="mui-loading ball-scale-multiple">' +
			'<div class="loader-inner ball-clip-rotate-pulse">' +
			'<div></div>' +
			'<div></div>' +
			'</div></div>' +
			'</div>' +
			'</div>';
	}
	$('body').append(append_html);
};

/**	
 * 隐藏加载中的图层
 */
var loadingOut = function(fast) {
	$('.mui-loading').addClass('fade');
	if(arguments.length == 1) {
		$('.mui-loading, .backup').remove();
		return;
	}
	setTimeout(function() {
		$('.mui-loading, .backup').remove();
	}, 350);
};

module.exports = {
	loadingIn,
	loadingOut
};