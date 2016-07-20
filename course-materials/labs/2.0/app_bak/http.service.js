"use strict";
var ClickerDataService = (function () {
    function ClickerDataService(myHttp) {
        this._http = myHttp;
    }
    ClickerDataService.prototype.returnTest = function () {
        this._http.get('localhost:8888/counter')
            .subscribe(function (res) { return console.log(res.json()); }, function (error) { return console.log(error); });
    };
    return ClickerDataService;
}());
exports.ClickerDataService = ClickerDataService;
//# sourceMappingURL=http.service.js.map