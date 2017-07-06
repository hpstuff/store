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
var withLatestFrom_1 = require("rxjs/operator/withLatestFrom");
var scan_1 = require("rxjs/operator/scan");
var observeOn_1 = require("rxjs/operator/observeOn");
var queue_1 = require("rxjs/scheduler/queue");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var State = (function (_super) {
    __extends(State, _super);
    function State(_initialState, action$, reducer$) {
        var _this = _super.call(this, _initialState) || this;
        var actionInQueue$ = observeOn_1.observeOn.call(action$, queue_1.queue);
        var actionAndReducer$ = withLatestFrom_1.withLatestFrom.call(actionInQueue$, reducer$);
        var state$ = scan_1.scan.call(actionAndReducer$, function (state, _a) {
            var action = _a[0], reducer = _a[1];
            return reducer(state, action);
        }, _initialState);
        state$.subscribe(function (value) { return _this.next(value); });
        return _this;
    }
    return State;
}(BehaviorSubject_1.BehaviorSubject));
exports.State = State;
