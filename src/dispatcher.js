"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var Dispatcher = (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher() {
        return _super.call(this, { type: Dispatcher.INIT }) || this;
    }
    Dispatcher.prototype.dispatch = function (action) {
        this.next(action);
    };
    Dispatcher.prototype.complete = function () {
        // noop
    };
    Dispatcher.INIT = '@ngrx/store/init';
    return Dispatcher;
}(BehaviorSubject_1.BehaviorSubject));
exports.Dispatcher = Dispatcher;
