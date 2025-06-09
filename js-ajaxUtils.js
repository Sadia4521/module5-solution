var $ajaxUtils = (function () {
  function sendGetRequest(requestUrl, responseHandler, isJsonResponse) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (isJsonResponse === true) {
          responseHandler(JSON.parse(xhr.responseText));
        } else {
          responseHandler(xhr.responseText);
        }
      }
    };
    xhr.open("GET", requestUrl, true);
    xhr.send(null);
  }

  return {
    sendGetRequest: sendGetRequest
  };
})();
