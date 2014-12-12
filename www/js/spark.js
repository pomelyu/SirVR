var deviceID = "48ff71065067555016221387";
var accessToken = "c38b8121089b701b0db51791bf6558598f99ae0f";
var setYawFunc = "setYaw";
var setPitchFunc = "setPitch";

function sparkSetYaw(newValue) {
    var requestURL = "https://api.spark.io/v1/devices/" + deviceID + "/" + setYawFunc + "/";
    $.post(requestURL, {
        params: newValue,
        access_token: accessToken
    });
}

function sparkSetPitch(newValue) {
    var requestURL = "https://api.spark.io/v1/devices/" + deviceID + "/" + setPitchFunc + "/";
    $.post(requestURL, {
        params: newValue,
        access_token: accessToken
    });
}