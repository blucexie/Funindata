/**
 * Created by funinbook on 2016/11/23.
 */
$(function() {
	var userInfoJson = getLocalStorage();
	//解析JSON
	var userInfo = JSON.parse(userInfoJson);
	if(userInfoJson != null) {
		if(userInfo.status==1){
			//登錄
			$(".denglu").hide();
			$(".denglu-t").show();
		}else {
			//未登錄
			$(".denglu").show();
			$(".denglu-t").hide();
		}
	}else{
		//未登录
		$(".denglu").show();
		$(".denglu-t").hide();
	}

	$(".denglu-t").click(function(){
		alert("退出登录成功");
		$(".denglu").show();
		$(".denglu-t").hide();
		var userInfoJson = getLocalStorage();
		if(userInfoJson != null) {
			var userInfoJson = JSON.stringify(userInfo);
			userInfo.status=0;
			var userInfoJson = JSON.stringify(userInfo);
			setLocalStorage(userInfoJson);
		}
	});

	//登录界面
$('.denglu').click(function(){
	$(".deng-z").show();
});

	//注册界面
	$('#zhuce').click(function(){
		$(".zhuce").show();
	});
	$('.quxiao').click(function(){
		$(".deng-z").hide();
		$(".zhuce").hide();
		$(".fankui").hide();
	});

	$('.yj').click(function () {
		$('.fankui').show();
		$(".deng-z").hide();
	});
	$('.xj').click(function () {
		$(".deng-z").hide();
		$(".zhuce").show();
	});
	$('.xiyi_show').click(function () {
		$('.xieyi_z').show();
	});
	//用户协议取消点击
	$('.link-back2').click(function () {
		$('.xieyi_z').hide();
	});
	//点击确定
	$('.ty').click(function () {
		$('.xieyi_z').hide();
	});
	//用户是否同意协议
	$(":checkbox").click(function() {
		if ($(this).prop("checked"))//选中时，为真
		{
			$(this).parent("label").addClass("ling-xuan").removeClass("ling-wei");
		}else{
			$(this).parent("label").addClass("ling-wei").removeClass("ling-xuan");
		}
	});

	$('#login').click(function() {
		var loginUserName = $('#loginUserName').val();
		var loginPassword = $('#loginPassword').val();
		//判断用户JSON是否为空
		var userInfoJson = getLocalStorage();
		//,这里的空是null(判断是否为空的目的在于有的游览器不支持localStorage,承上启下，上面之所以保存两个地方正是如此，所以需要保存在coookie中一份)
		if(userInfoJson != null) {
			//解析JSON
			var userInfo = JSON.parse(userInfoJson);
			//验证用户名密码,登录成功
			if(userInfo.userName == loginUserName && loginPassword == userInfo.password) {
				//登录成功
				$(".deng-z").hide();
				$(".denglu").hide();
			    $(".denglu-t").show();
				userInfo.status=1;
				var userInfoJson = JSON.stringify(userInfo);
				setLocalStorage(userInfoJson);
		 /*		$(".denglu-t").click(function(){
					alert("退出登录成功");
					$(".denglu").show();
					$(".denglu-t").hide();
				});*/
			}else{
				//登录失败
				alert("密码或用户名错误，请核对后重新输入");
			}

		} else {
			$(".deng-z").hide();
			$(".zhuce").show();
			alert("未注册，请注册成功后登录");
		}

	});

	$('#register').click(function() {
		clearLocalStorage();
		//邮箱校验
		var emailReg = '([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}';
		//用户名校验
		var userNameReg = '[\\u4E00-\\u9FFF]+';
		/**开始验证**/
		//验证用户名
		var reg = new RegExp(userNameReg, "g");
		var userName = $('#userName').val();
		//非空验证
		if(userName.trim().length == 0) {
			alert('用户名不能为空！');
			return;
		}
		//包含汉字验证
		if(reg.test(userName)) {
			alert('用户名不能包含汉字！');
			return;
		}
		//验证密码
		var password = $('#password').val();
		//非空验证
		if(password.trim().length == 0) {
			alert('密码不能为空！');
			return;
		}
		//密码长度验证
		if(password.trim().length < 6) {
			alert('密码不能小于6位！');
			return;
		}
		//验证第二次输入密码
		var rePassword = $('#rePassword').val();
		if(rePassword != password) {
			alert('请确认两次数据密码一致！');
			return;
		}
		//验证邮箱
		var reg = new RegExp(emailReg, "g");
		var email = $('#email').val();
		//非空校验
		if(email.trim().length == 0) {
			alert('邮箱不能为空!');
			return;
		}
		//邮箱格式校验
		if(!reg.test(email)) {
			alert('请输入正确的邮箱！');
			return;
		}
		//验证手机号
		var reg = new RegExp("\d+", "g");
		var tel = $('#tel').val();
		//非空校验
		if(tel.trim().length == 0) {
			alert('手机号不能为空!');
			return;
		}
		//手机号格式校验
		if(tel.trim().length != 11) {
			alert('请输入正确的手机号!');
			return;
		}
		////手机号格式校验
		//if(!reg.test(tel)) {
		//	alert('请输入正确手机号格式！');
		//	return;
		//}

		//验证身份证
		var idCard = $('#idCard').val();
		//非空校验
		if(idCard.trim().length == 0) {
			alert('身份证不能为空!');
			return;
		}
		//格式校验
		if(idCard.trim().length != 18) {
			alert('请输入正确的身份证格式!');
			return;
		}
		
		//验证公司名称
		var companyName = $('#companyName').val();
		//非空校验
		if(companyName.trim().length == 0) {
			alert('公司名称不能为空');
			return;
		}
		//验证公司地址
		var companyAddress = $('#companyAddress').val();
		//非空校验
		if(companyAddress.trim().length == 0) {
			alert('公司地址不能为空');
			return;
		}
		//验证协议
		if($('#agreement').prop('checked') != true) {
			alert('未同意协议之前不可注册！');
			return;
		}
		//验证验证码
		var boolean=validate();
		if(boolean==false){
			return;
		}
		//保存数据
		var model = new userInfoModel();
		model.userName = userName;
		model.password = password;
		model.idCard = idCard;
		model.email = email;
		model.tel = tel;
		model.companyName = companyName;
		model.companyAddress = companyAddress;
		//把对象转换成JSON
		var userInfoJson = JSON.stringify(model);
		//向LocalStorage中存储
		setLocalStorage(userInfoJson);
		//此步骤为了测试用户信息是否存储到localStorage
		/*alert(getLocalStorage());*/
		$(".zhuce").hide();
		$(".deng-z").show();
	})
});

/**
 * 请求参数对象
 */
function userInfoModel(){
	var userName;
	var password;
	var idCard;
	var email;
	var tel;
	var companyName;
	var companyAddress;
	var status;

}

/**
 * 获取localStorage(仅供登录注册使用)
 */
function getLocalStorage() {
	return localStorage.getItem("userInfo");
}

/**
 * 添加localStorage(仅供登录注册使用)
 * @param {Object} userInfo 用户信息(JSON格式)
 */
function setLocalStorage(userInfo) {
	localStorage.setItem("userInfo", userInfo);
}

/**
 * 清除localStorage(仅供登录注册使用)
 */
function clearLocalStorage() {
	localStorage.clear();
}

/**
 * 创建cookies(仅供登录注册使用)
 * @param {Object} userInfo
 */
function createCookie(userInfo) {
	//创建cookie之前先清除cookie 用户信息(JSON格式)
	clearCookie();
	//创建cookie有效时间
	var exp = new Date();
	exp.setTime(exp.getTime() + 30 * 24 * 60 * 60 * 1000);
	//escape编码，为了在每个游览器都能获取到正常的数据
	document.cookie = "userInfo=" + escape(userInfo) + ";expires=" + exp.toGMTString();
}

/**
 * 获取cookies(仅供登录注册使用)
 * @param {Object} userInfo
 */
function getCookies() {
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		//unescape解码，存储的时候编码了此处要解码
		if(c.indexOf("userInfo") == 0) return unescape(c.substring("userInfo=".length, c.length));
	}
	return null;
}

/**
 * 删除cookie(仅供登录注册使用)
 */
function clearCookie() {
	document.cookie = "userInfo=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}
/*驗證碼*/
var code ; //在全局定义验证码
//产生验证码
window.onload = function createCode(){
	code = "";
	var codeLength = 4;//验证码的长度
	var checkCode = document.getElementById("code");
	var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
		'S','T','U','V','W','X','Y','Z');//随机数
	for(var i = 0; i < codeLength; i++) {//循环操作
		var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
		code += random[index];//根据索引取得随机数加到code上
	}
	checkCode.value = code;//把code值赋给验证码
}
function shuaxin(){
	code = "";
	var codeLength = 4;//验证码的长度
	var checkCode = document.getElementById("code");
	var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
		'S','T','U','V','W','X','Y','Z');//随机数
	for(var i = 0; i < codeLength; i++) {//循环操作
		var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
		code += random[index];//根据索引取得随机数加到code上
	}
	checkCode.value = code;//把code值赋给验证码
}
//校验验证码
function validate(){
	var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写
	if(inputCode.length <= 0) { //若输入的验证码长度为0
		alert("请输入验证码！"); //则弹出请输入验证码
	}
	else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时
		alert("验证码输入错误!"); //则弹出验证码输入错误
		createCode();//刷新验证码
		document.getElementById("input").value = "";//清空文本框
		return false;
	}
	else {//输入正确时
		return true;
	}
}