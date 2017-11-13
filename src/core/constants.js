/*
 * 1）debug    - 本地测试环境
 * 2）test     - 测试环境
 * 3）dev      - 开发环境
 * 4）i3b      - 三局正式环境
 * 5）cc       - 阿里云生产环境
 * */
import $ from 'n-zepto';
var environment = "debug";

var debugConst = {
	tenantid: 'ppo2wx9x',
	userId: 'a598a0f9-a053-45be-b2bb-2f5b9a41836d',
	userType: '0',
	u_logints: '1510552972560',
	u_usercode: 'a598a0f9-a053-45be-b2bb-2f5b9a41836d',
	token: 'd2ViLDM2MDAsN1EyUlhkcElteXZQWUErczFESW1vTUtYUytNcnJ3NmZ3ZStpaS9lSTk2bmNKc2hmL3h1WDRJekcyZklUNStjL2J0M0lST3RLVy9YMjRSYjRhS2tFdHc9PQ',
};
var testConst = {
	BASEHOST: 'http://test.cscec3b.com.cn/icop-devcont-web/',
	GUIDESELF: 'http://test.cscec3b.com.cn/icop-support-web/',
	MAURL: 'http://123.103.9.200:9080/', //MA正式系统
	DEVCONT_BASEHOST: 'http://test.cscec3b.com.cn/icop-devcont-web/',
	SHARE_BASEHOST: 'http://test.cscec3b.com.cn/icop-share-web/',
	SECURITY_BASEHOST: 'http://test.cscec3b.com.cn/icop-security-web/',
	ATTACHURL: 'http://test.cscec3b.com.cn/icop-file/file/',
	BPMURL: 'http://test.cscec3b.com.cn/icop-bpmcenter-web/',
	FILE_DOWN_SERVER: "http://test.cscec3b.com.cn/", //文件下载服务器地址
	COMPANY_REF_URL: 'http://test.cscec3b.com.cn/icop-orgcenter-web/',
};
var devConst = {
	BASEHOST: 'http://dev.cscec3b.com.cn/icop-devcont-web/',
	GUIDESELF: 'http://dev.cscec3b.com.cn/icop-support-web/',
	MAURL: 'http://123.103.9.200:9080/', //MA正式系统
	DEVCONT_BASEHOST: 'http://dev.cscec3b.com.cn/icop-devcont-web/',
	SHARE_BASEHOST: 'http://dev.cscec3b.com.cn/icop-share-web/',
	SECURITY_BASEHOST: 'http://dev.cscec3b.com.cn/icop-security-web/',
	ATTACHURL: 'http://dev.cscec3b.com.cn/icop-file/file/',
	BPMURL: 'http://dev.cscec3b.com.cn/icop-bpmcenter-web/',
	FILE_DOWN_SERVER: "http://dev.cscec3b.com.cn/", //文件下载服务器地址
	COMPANY_REF_URL: 'http://dev.cscec3b.com.cn/icop-orgcenter-web/',
};
var i3bConst = {
	BASEHOST: 'http://i3b.cscec.com/icop-office-web/',
	GUIDESELF: 'http://i3b.cscec.com/icop-support-web/',
	MAURL: 'http://m.zjy.cscec.com.cn/', //MA正式系统
	DEVCONT_BASEHOST: 'http://i3b.cscec.com/icop-devcont-web/',
	SHARE_BASEHOST: 'http://i3b.cscec.com/icop-share-web/',
	SECURITY_BASEHOST: 'http://i3b.cscec3b.com.cn/icop-security-web/',
	ATTACHURL: 'http://i3b.cscec.com/icop-file/file/',
	BPMURL: 'http://i3b.cscec.com/icop-bpmcenter-web/',
	FILE_DOWN_SERVER: "http://i3b.cscec.com/", //文件下载服务器地址
	COMPANY_REF_URL: 'http://i3b.cscec.com/icop-orgcenter-web/',
};
var ccConst = {
	BASEHOST: 'https://cc.yonyouccs.com/icop-office-web/',
	GUIDESELF: 'https://cc.yonyouccs.com/icop-support-web/',
	MAURL: 'https://cc.yonyouccs.com/', //MA正式系统
	DEVCONT_BASEHOST: 'https://cc.yonyouccs.com/icop-devcont-web/',
	SHARE_BASEHOST: 'https://cc.yonyouccs.com/icop-share-web/',
	SECURITY_BASEHOST: 'https://cc.yonyouccs.com/icop-security-web/',
	ATTACHURL: 'https://cc.yonyouccs.com/icop-file/file/',
	BPMURL: 'https://cc.yonyouccs.com/icop-bpmcenter-web/',
	FILE_DOWN_SERVER: "https://cc.yonyouccs.com", //文件下载服务器地址
	COMPANY_REF_URL: 'https://cc.yonyouccs.com/icop-orgcenter-web/',
};
var appidConst = {
	/**设备项目组**/
	//设备进场验收
	DEVICE_ACCEPT: 'device-accept',
	//设备旁站监督
	DEVICE_KEYWORK: 'device-keywork',
	//设备维保
	DEVICE_SERVICE: 'device-service',
	//设备运转
	DEVICE_RUN: 'device-run',
	//设备检查
	DEVICE_CHECK: 'device-check',
	//违章罚款
	DEVICE_VIOLATION: 'device-violation',
	//进场通知
	DEVICE_DEVICEAPPROACH: "device-approach",
	//租赁合同
	DEVICE_CONTRACTLEDGER: 'device-contractLedger',
	//单机档案
	DEVICE_RECORD: 'device-record',

	/**设备供应商**/
	//设备进场通知
	PROVIDER_APPROACH: 'provider-approach',
	//设备启停租
	PROVIDER_HIRE: 'provider-hire',
	//设备维保
	PROVIDER_SERVICE: 'provider-service',
	//设备运转
	PROVIDER_RUN: 'provider-run',
	//设备整改
	PROVIDER_SUPPLIER: 'provider-supplier',
	//违章罚款
	PROVIDER_VIOLATION: 'provider-violation',
	//设备退场通知单
	PROVIDER_EXITNOTICE: 'provider-exitnotice',
	PROVIDER_CONTRACT: 'provider-contract',
	CHART_FUNDSSTOCK: 'chart-fundsstock',

	/*******************************首页显示内容*************************/
	//天气appid
	DEVICE_WEATHER: 'device-weather',
	//图表
	DEVICE_CASHFLOW: 'device-cashflow',
	//图表
	CHART_CHARTSLIDE: 'chart-chartslide',
	//审批提醒
	DEVICE_APPROVEWARN: 'device-approvewarn',
	CHART_PAYEE: 'chart-payee',
	CHART_PROJECTCOST: 'chart-projectcost',
	CHART_KEYWORKSUMARY: 'chart-keyworksummary',
	CHART_SUPPLIERMESSAGE: 'chart-suppliermessage',
	CHART_VENDERMESSAGE: 'chart-vendermessage',
	CHART_DEVICEANALYSIS: 'chart-deviceanalysis',
	CHART_INDEX_HOME: 'chart-index-home',
	PROVIDER_MESSAGE: 'provider-message',
	DEVICE_MAINIMG: 'device-mainimg',
};
var resultReturn = {
	environment: environment,
	DEV_LOGIN_CONTEXT: {
		"authority": {
			"u_logints": "1483430696506",
			"typeAlias": null,
			"flag": "success",
			"u_usercode": "a598a0f9-a053-45be-b2bb-2f5b9a41836d",
			"token": "d2ViLDM2MDAsY21uVzIySUQ0cHY2Wkc1MzlIT3IvZkZjS0tSa0NhdWNLNTZqbHIwTnVyM0RWWlVzcVR1OGJaRXY2MXloMDZ2T0I5N1NPcFc2RWJBTzloMGRLaVBSVkE9PQ",
			"userId": "a598a0f9-a053-45be-b2bb-2f5b9a41836d",
			"path": "/icop-usercenter-web",
			"usertype": 3,
			"tenantid": "ppo2wx9x",
			"msg": "登录成功!",
			"tip": "认证成功",
			"userType": "3"
		},
		"staff": {
			"id": "8aaadb365c9a7fdc015c9af3d26c0046",
			"sex": "",
			"credentialCode": "420984198811158090",
			"name": "吴勇",
			"userId": "a598a0f9-a053-45be-b2bb-2f5b9a41836d",
			"companyId": "8aaa004d5c67c532015c86cd30b600cb",
			"mobile": "13971373349"
		},
		"company": {
			"id": "8aaa004d5c67c532015c86cd30b600cb",
			"innercode": "00010001005500060003",
			"companyName": "万达项目部",
			"companyShName": "太原迎泽桥西项目",
			"companyCode": "chenlu-006"
		},
		"dept": {
			"deptName": "建造管理部",
			"innercode": "0001",
			"belongCompany": "中石化北京分公司",
			"id": "8a83898e5900804b015901895e76000c",
			"deptShName": "建造部"
		},
		"project": {
			"projectCode": "chenlu-003",
			"projectName": "东方银座",
			"projectShName": "东方银座",
			"projectId": "8aaa37095c81a092015c86db70f20000",
			"planStartDate": null,
			"planFinishDate": null,
			"memo": null,
			"orgId": "globe",
			"stateId": null,
			"countryId": "",
			"areaId": "402882e656ac8e330156ac9455ff0007",
			"address": "湖北省武汉市洪山区卓刀泉街道东方怡景大厦",
			"standardCategoryId": null,
			"applicationCategoryId": null,
			"ts": null
		},
		"user": {
			"sourceId": "1",
			"systemId": "icop",
			"versionNum": 1,
			"departmentId": "8a83898e58f247890158f30235d00016",
			"authed": false,
			"userName": "吴勇",
			"userId": "a598a0f9-a053-45be-b2bb-2f5b9a41836d",
			"userCode": "wuyongcs",
			"companyId": "8aaa004d5c67c532015c86cd30b600cb",
			"userStates": 1,
			"userAvator": "",
			"userMobile": "13971373349",
			"tenantId": "ppo2wx9x",
			"typeId": 3,
			"userEmail": "",
			"apps": "",
			"registerDate": "2016-12-12 20:40:09"
		},
		"supplier": {
			"id": "2c90ce9256ba68310156ba77051b000f",
			"name": "北京振阳建筑有限公司",
			"code": "SUP0101004"
		}
	}
};
var cordova = {
	isCordovaBack: true
};

if(environment == 'test') {
	$.extend(resultReturn, appidConst, testConst);
} else if(environment == 'dev') {
	$.extend(resultReturn, appidConst, devConst);
} else if(environment == 'i3b') {
	$.extend(resultReturn, appidConst, i3bConst);
} else if(environment == 'cc') {
	$.extend(resultReturn, appidConst, ccConst);
} else {
	cordova.isCordovaBack = false;
	$.extend(resultReturn, appidConst, testConst);
	$.extend(resultReturn, appidConst, debugConst);
}
$.extend(resultReturn, cordova);
console.log('resultReturn == ', resultReturn)
export default resultReturn;