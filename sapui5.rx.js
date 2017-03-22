(function(window){
	"use strict";

	window.sap.ui.createObservable = function(oControl, sEvent){
		return Rx.Observable.create(function (observer) {
			var fnOnNext = function(oEvent){
				observer.onNext(oEvent);
			};

			oControl.attachEvent(sEvent, fnOnNext);

			return function(){
				oControl.detachEvent(sEvent, fnOnNext);
			};
		})
	};
	window.sap.ui.mixinObservableEvents = function(oControl){
		var mEvents = oControl.getMetadata().getEvents();
		Object.keys(mEvents).forEach(function(sEvent){
			var sObservableName = sEvent + "$";
			if ( !oControl.hasOwnProperty( sObservableName ) ){
				oControl[sObservableName] = window.sap.ui.createObservable(oControl, sEvent);
			}
		})
	};
})(window);
