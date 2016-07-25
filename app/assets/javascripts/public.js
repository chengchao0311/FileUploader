//公共回调方法

function fsNativeCallBack(json) {
    
<!--00：成功-->
<!---->
<!--99：调用失败（其它错误）-->
    
    if(json.state != 00){
        alert('调用失败');
    }
    document.getElementById("state").value=json.state;
    document.getElementById("msg").value=json.errorMessage;
    
    if(json.method == 'scanQRCode'){  //扫描二维码回调
        
        document.getElementById("qrCode").value=json.qrCode;
    }
    
    if(json.method == 'getDeviceToken') {
        document.getElementById("deviceToken").value=json.deviceToken;
    }
    
}



//调用二维码2D qrcode
function scanTwoDimensionBarcode(dataJson){
    var successMethod = dataJson.onSuccess;
    var failMethod = dataJson.onFail;
    
    window.location.href = 'http://APPS.callBackApps?actionName=scanTwoDimensionBarcode&param={ "onSuccess" : "'+ successMethod +'"  , "onFail" : "'+ failMethod +'"  }';
}

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

