//调用二维码2D barcode
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
    var onResults = dataJson.onResults;
    
    window.location.href = 'http://APPS.callBackApps?actionName=getImageFrom&param={ "sourceType" : "'+ sourceType +'"  ,  "compressionRatio" : "'+ compressionRatio +'"  ,  "wide" : "'+ wide +'"  ,  "height" : "'+ height +'"  ,  "imageFile" : "'+ imageFile +'"  ,  "imageFormat" : "'+ imageFormat +'"  ,  "targetEdge" : "'+ targetEdge +'"  ,  "onResults" : "'+ onResults +'"  }';
    
    
}

