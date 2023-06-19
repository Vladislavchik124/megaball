
if (typeof gdjs.evtsExt__YandexGamesSDK__SavePlayerStats !== "undefined") {
  gdjs.evtsExt__YandexGamesSDK__SavePlayerStats.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YandexGamesSDK__SavePlayerStats = {};


gdjs.evtsExt__YandexGamesSDK__SavePlayerStats.userFunc0x9f5780 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var callbackVarName = "SavePlayerStatsResult";
var contentVarName = eventsFunctionContext.getArgument("ContentVariableName");
var contentVar = gdjs._YandexGamesSDK.getGlobalVariable(contentVarName);

gdjs._YandexGamesSDK.setCallback(false, callbackVarName);

if (contentVar && contentVar.isStructure()) {
    try {
        var data = gdjs.evtTools.network.variableStructureToJSON(contentVar);
        gdjs._YandexGamesSDK.getPlayerInstance()
            .setStats(JSON.parse(data))
            .then(function () {
                gdjs._YandexGamesSDK.setCallback(true, callbackVarName);
            })
            .catch(function (err) {
                gdjs._YandexGamesSDK.setCallback(false, callbackVarName);
                console.warn(err);
            })
    } catch (err) {
        gdjs._YandexGamesSDK.setCallback(false, callbackVarName);
        console.warn(err);
    }
}


};
gdjs.evtsExt__YandexGamesSDK__SavePlayerStats.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YandexGamesSDK__SavePlayerStats.userFunc0x9f5780(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__YandexGamesSDK__SavePlayerStats.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__YandexGamesSDK__PlayerInitialized.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__YandexGamesSDK__SavePlayerStats.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__YandexGamesSDK__SavePlayerStats.func = function(runtimeScene, KeyVariableName, ContentVariableName, CallbackVariableName, parentEventsFunctionContext) {
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
if (argName === "KeyVariableName") return KeyVariableName;
if (argName === "ContentVariableName") return ContentVariableName;
if (argName === "CallbackVariableName") return CallbackVariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YandexGamesSDK__SavePlayerStats.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YandexGamesSDK__SavePlayerStats.registeredGdjsCallbacks = [];