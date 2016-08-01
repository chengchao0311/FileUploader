
/**
 *  公共回调方法
 *
 *  由Native回调JS
 */

function fsNativeCallBack(json) {
    
//    返回状态码：
//    00：成功
//    91 - 98：自定义特殊失败码
//    99：失败
//    
//    json格式：
//    {
//        "method":"xxx",   调用方法名称
//        "state":"xxx",    状态码
//        "errorMessage":"",错误信息
//        "key":"value"     自定义内容
//    }
    
    if(json.state != 00){
        alert('调用失败');
    }
    
    
    if(json.method == 'scanQRCode'){  //扫描二维码回调
        
        document.getElementById("qrCode").value = json.qrCode;
        
    }else if(json.method == "getDeviceToken") { //获取DeviceToken
        
//        var deviceToken = json.deviceToken;
        
        document.getElementById("deviceToken").value = json.deviceToken;
    }
    
    //显示返回信息到HTML，根据需要可以去除
    document.getElementById("state").value=json.state;
    document.getElementById("msg").value=json.errorMessage;
    
    
};

function getImageFromNativeCallBack(state, imagePath, errorMessage) {
    if(imagePath!="" && imagePath != null){
        
        document.getElementById("droid").src=imagePath;
        document.getElementById("droid").with = document.body.clientWidth*0.8;
        document.getElementById("droid").height = document.body.clientWidth*0.8;
    }
    
    document.getElementById("result").value=state;
    if(state==00){
        document.getElementById("msg").value='调用成功';
    }else if (state==91){
        document.getElementById("msg").value='来源类型错误';
        
    }else if (state==92){
        document.getElementById("msg").value='图片类型错误';
    }else if (state==93){
        document.getElementById("msg").value='图片高度错误';
    }else if (state==94){
        document.getElementById("msg").value='图片宽度错误';
    }else if (state==95){
        document.getElementById("msg").value='图片名称错误';
    }else if (state==96){
        document.getElementById("msg").value='图片大小不足1M';
    }else if (state==99){
        document.getElementById("msg").value='调用失败:' + errorMessage;
    }else {
        document.getElementById("msg").value=errorMessage;
    }
    
};

    
    
/**
 *  发起调用
 *
 *  由JS调用Native
 */

//返回首页
function homePage() {
    window.location.href = "http://APPS.callBackApps?actionName=backHome"
}

//调用二维码扫描
function scanQRCode() {
    
    window.location.href = "http://APPS.callBackApps?actionName=scanQRCode&param={ \"customerId\" : \"zhangsan\"}"
    
};



//调用相机或者相册，获取照片
function getImageFrom(dataJson){
    var sourceType = dataJson.sourceType;
    var compressionRatio = dataJson.compressionRatio;
    var wide = dataJson.wide;
    var height = dataJson.height;
    var imageFile = dataJson.imageFile;
    var imageFormat = dataJson.imageFormat;
    var targetEdge = dataJson.targetEdge;
    var fileSize = dataJson.fileSize;
    var onResults = dataJson.onResults;
    
    window.location.href = 'http://APPS.callBackApps?actionName=getImageFrom&param={ "sourceType" : "'+ sourceType +'"  ,  "compressionRatio" : "'+ compressionRatio +'"  ,  "wide" : "'+ wide +'"  ,  "height" : "'+ height +'"  ,  "imageFile" : "'+ imageFile +'"  ,  "imageFormat" : "'+ imageFormat +'"  ,  "targetEdge" : "'+ targetEdge +'"  ,  "fileSize" : "'+ fileSize +'"  ,  "onResults" : "'+ onResults +'"  }';
    
    
}

//修改语言(C：繁体  S：简体  E：英文)
function language(lan) {
    
    window.location.href = "http://APPS.callBackApps?actionName=changeLang&param={ \"language\" : \""+lan+"\"}"
    
};

//底部菜单显示及隐藏，menuId目前暂定:home、expendManage、bill、records、calendar。如果menuId内容为空，即为隐藏
function showTabbar(muneId) {
    
    window.location.href = "http://APPS.callBackApps?actionName=showTabBar&param={ \"menuId\" : \""+muneId+"\"}"
    
};

//获取DeviceToken
function deviceToken() {
    
    window.location.href = "http://APPS.callBackApps?actionName=getDeviceToken";
    
};

//修改语言(C：繁体  S：简体  E：英文)
function changeRole(role) {
    
    window.location.href = "http://APPS.callBackApps?actionName=changeRole&param={ \"role\" : \""+role+"\"}"
    
};


////调用二维码2D qrcode
//function scanTwoDimensionBarcode(dataJson){
//    var successMethod = dataJson.onSuccess;
//    var failMethod = dataJson.onFail;
//
//    window.location.href = 'http://APPS.callBackApps?actionName=scanTwoDimensionBarcode&param={ "onSuccess" : "'+ successMethod +'"  , "onFail" : "'+ failMethod +'"  }';
//}

