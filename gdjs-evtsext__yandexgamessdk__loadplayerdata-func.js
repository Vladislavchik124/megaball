
if (typeof gdjs.evtsExt__YandexGamesSDK__LoadPlayerData !== "undefined") {
  gdjs.evtsExt__YandexGamesSDK__LoadPlayerData.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YandexGamesSDK__LoadPlayerData = {};


gdjs.evtsExt__YandexGamesSDK__LoadPlayerData.userFunc0x9c7220 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var globalVarsRef = runtimeScene.getGame().getVariables();
var callbackVarName = "LoadPlayerDataResult";
var keysVariableName = eventsFunctionContext.getArgument("KeysOrThatVariableName");
var keys = [];

try {
    if (keysVariableName && globalVarsRef.has(keysVariableName)) {
        keys = globalVarsRef.get(keysVariableName)
            .getAllChildrenArray().map(function (item) {
                return item.getValue();
            });
    } else {
        keys = keysVariableName.toString().split(',');
    }
} catch (err) {
    console.warn(err);
}

gdjs._YandexGamesSDK.setCallback(false, callbackVarName);

try {
    gdjs._YandexGamesSDK.getPlayerInstance()
        .getData(keys)
        .then(function (data) {
            gdjs._YandexGamesSDK.setFunctionContextJsonCallback(JSON.stringify(data), eventsFunctionContext);
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
gdjs.evtsExt__YandexGamesSDK__LoadPlayerData.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YandexGamesSDK__LoadPlayerData.userFunc0x9c7220(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__YandexGamesSDK__LoadPlayerData.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__YandexGamesSDK__PlayerInitialized.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__YandexGamesSDK__LoadPlayerData.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__YandexGamesSDK__LoadPlayerData.func = function(runtimeScene, KeysOrThatVariableName, ResultVariableName, CallbackVariableName, parentEventsFunctionContext) {
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
if (argName === "KeysOrThatVariableName") return KeysOrThatVariableName;
if (argName === "ResultVariableName") return ResultVariableName;
if (argName === "CallbackVariableName") return CallbackVariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YandexGamesSDK__LoadPlayerData.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YandexGamesSDK__LoadPlayerData.registeredGdjsCallbacks = [];