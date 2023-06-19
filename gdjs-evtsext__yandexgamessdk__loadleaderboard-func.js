
if (typeof gdjs.evtsExt__YandexGamesSDK__LoadLeaderboard !== "undefined") {
  gdjs.evtsExt__YandexGamesSDK__LoadLeaderboard.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YandexGamesSDK__LoadLeaderboard = {};


gdjs.evtsExt__YandexGamesSDK__LoadLeaderboard.userFunc0xa73e50 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var boardName = eventsFunctionContext.getArgument("Name");
var callbackVarName = "LoadLeaderboardResult";

try {
    gdjs._YandexGamesSDK.getInstance().getLeaderboards()
        .then(function (lb) {
            return lb.getLeaderboardDescription(boardName);
        })
        .then(function (res) {
            gdjs._YandexGamesSDK.setFunctionContextJsonCallback(JSON.stringify(res), eventsFunctionContext);
            gdjs._YandexGamesSDK.setCallback(true, callbackVarName);
        })
        .catch(function (err) {
            gdjs._YandexGamesSDK.setCallback(false, callbackVarName);
            console.warn(err);
        });
} catch (err) {
    gdjs._YandexGamesSDK.setCallback(false, callbackVarName);
    console.warn(err);
}

};
gdjs.evtsExt__YandexGamesSDK__LoadLeaderboard.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YandexGamesSDK__LoadLeaderboard.userFunc0xa73e50(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__YandexGamesSDK__LoadLeaderboard.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__YandexGamesSDK__PlayerInitialized.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__YandexGamesSDK__LoadLeaderboard.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__YandexGamesSDK__LoadLeaderboard.func = function(runtimeScene, Name, ResultVariableName, CallbackVariableName, parentEventsFunctionContext) {
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
if (argName === "Name") return Name;
if (argName === "ResultVariableName") return ResultVariableName;
if (argName === "CallbackVariableName") return CallbackVariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YandexGamesSDK__LoadLeaderboard.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YandexGamesSDK__LoadLeaderboard.registeredGdjsCallbacks = [];