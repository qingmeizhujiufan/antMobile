import $ from 'n-zepto';
import result from './constants';

export default {
	Comget: function(url, paramdata, successfun, errorfun) {
		$.ajax({
			url: url,
			dataType: 'json',
			data: paramdata,
			type: 'GET',
			headers: {
				'authority': "tenantid=" + result.tenantid + ";userId=" + result.userId + ";userType=" + result.userType + ";u_logints=" + result.u_logints + ";u_usercode=" + result.u_usercode + ";token=" + result.token
			},
			success: function(data) {
				if(data.success || data.code == 'success') {
					if(typeof successfun == 'function') {
						successfun(data)
					} else {
						alert('调用网路请求语法有误')
					}
				} else {
					if(typeof errorfun == 'function') {
						errorfun(data.backMsg, data)
					} else {
						alert(data.backMsg);
					}
				}
//				loadingOut();
			},
			error: function(xhr, type, errorThrown) {
				if(type == 'timeout') {
					alert('网络繁忙，稍后再试');
				} else {
					alert('网络出现异常！')
				}
//				loadingOut();
			}
		});
	},
	Compost: function(url, paramdata, successfun, errorfun) {
		$.ajax(url, {
			dataType: 'json',
			data: paramdata,
			type: 'post',
			headers: {
				'authority': "tenantid=" + sessionStorage.login_tenantid + ";userId=" + sessionStorage.login_userId + ";userType=" + sessionStorage.login_userType + ";u_logints=" + sessionStorage.login_u_logints + ";u_usercode=" + sessionStorage.login_u_usercode + ";token=" + sessionStorage.login_token
			},
			contentType: 'application/json',
			success: function(data) {
				if(data.success) {
					successfun(data)
				} else {
					if(typeof errorfun == 'function') {
						errorfun(data)
					} else {
						alert(data.backMsg);
					}
				}
//				loadingOut();
			},
			error: function(xhr, type, errorThrown) {
				if(type == 'timeout') {
					alert('网络繁忙，稍后再试！');
				} else {
					alert('网络出现异常！')
				}
//				loadingOut();
			}
		});
	}
};