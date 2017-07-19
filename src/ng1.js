"use strict";
exports.__esModule = true;
var reducer_1 = require("./reducer");
var dispatcher_1 = require("./dispatcher");
var store_1 = require("./store");
var state_1 = require("./state");
var utils_1 = require("./utils");
function _initialReducerFactory(reducer) {
    if (typeof reducer === 'function') {
        return reducer;
    }
    return utils_1.combineReducers(reducer);
}
exports._initialReducerFactory = _initialReducerFactory;
function _initialStateFactory(initialState, reducer) {
    if (!initialState) {
        return reducer(undefined, { type: dispatcher_1.Dispatcher.INIT });
    }
    return initialState;
}
exports._initialStateFactory = _initialStateFactory;
function _storeFactory(dispatcher, reducer, state$) {
    return new store_1.Store(dispatcher, reducer, state$);
}
exports._storeFactory = _storeFactory;
function _stateFactory(initialState, dispatcher, reducer) {
    return new state_1.State(initialState, dispatcher, reducer);
}
exports._stateFactory = _stateFactory;
function _reducerFactory(dispatcher, reducer) {
    return new reducer_1.Reducer(dispatcher, reducer);
}
exports._reducerFactory = _reducerFactory;
;
angular.module('@ngrx/store', [])
    .value('Dispatcher', new dispatcher_1.Dispatcher())
    .factory('Store', ['Dispatcher', 'Reducer', 'State', _storeFactory])
    .factory('Reducer', ['Dispatcher', 'INITIAL_REDUCER', _reducerFactory])
    .factory('State', ['INITIAL_STATE', 'Dispatcher', 'Reducer', _stateFactory])
    .factory('INITIAL_REDUCER', ['_INITIAL_REDUCER', _initialReducerFactory])
    .factory('INITIAL_STATE', ['_INITIAL_STATE', 'INITIAL_REDUCER', _initialStateFactory])
    .value('_INITIAL_REDUCER', null)
    .value('_INITIAL_STATE', null);
