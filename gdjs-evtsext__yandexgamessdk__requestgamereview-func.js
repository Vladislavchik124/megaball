
if (typeof gdjs.evtsExt__YandexGamesSDK__RequestGameReview !== "undefined") {
  gdjs.evtsExt__YandexGamesSDK__RequestGameReview.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YandexGamesSDK__RequestGameReview = {};


gdjs.evtsExt__YandexGamesSDK__RequestGameReview.userFunc0x7b1c90 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._YandexGamesSDK.getInstance().feedback.canReview()
    .then(function (res) {
        if (res.value) {
            gdjs._YandexGamesSDK.getInstance().feedback.requestReview()
                .then(function (res) {
                    console.log(res.feedbackSent);
                });
        } else {
            console.log(res.reason);
        }
    });
    
};
gdjs.evtsExt__YandexGamesSDK__RequestGameReview.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YandexGamesSDK__RequestGameReview.userFunc0x7b1c90(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__YandexGamesSDK__RequestGameReview.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YandexGamesSDK__RequestGameReview.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YandexGamesSDK__RequestGameReview.registeredGdjsCallbacks = [];