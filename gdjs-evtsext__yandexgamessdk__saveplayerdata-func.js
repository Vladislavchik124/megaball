
if (typeof gdjs.evtsExt__YandexGamesSDK__SavePlayerData !== "undefined") {
  gdjs.evtsExt__YandexGamesSDK__SavePlayerData.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YandexGamesSDK__SavePlayerData = {};


gdjs.evtsExt__YandexGamesSDK__SavePlayerData.userFunc0x9d6460 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var sceneVarsRef = runtimeScene.getVariables();
var callbackVarName = "SavePlayerDataResult";
var keyVarName = eventsFunctionContext.getArgument("KeyVariableName")
var contentVarName = eventsFunctionContext.getArgument("ContentVariableName");
var contentVar = sceneVarsRef.get(contentVarName);

gdjs._YandexGamesSDK.setCallback(false, callbackVarName);

try {
    var data = null;

    if (contentVar.isStructure()) {
        data = {
            [keyVarName]: JSON.parse(gdjs.evtTools.network.variableStructureToJSON(contentVar))
        };
    } else if (contentVar.isPrimitive()) {
        data = {
            [keyVarName]: contentVar.getValue()
        };
    }

    gdjs._YandexGamesSDK.getPlayerInstance().setData(data)
        .then(function () {
            gdjs._YandexGamesSDK.setCallback(true, callbackVarName);
        })
        .catch(function (err) {
            gdjs._YandexGamesSDK.setCallback(false, callbackVarName);
            console.warn(err);
        });
} catch (err) {
    console.warn(err);
    gdjs._YandexGamesSDK.setCallback(false, callbackVarName);
}


};
gdjs.evtsExt__YandexGamesSDK__SavePlayerData.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YandexGamesSDK__SavePlayerData.userFunc0x9d6460(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__YandexGamesSDK__SavePlayerData.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__YandexGamesSDK__PlayerInitialized.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__YandexGamesSDK__SavePlayerData.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__YandexGamesSDK__SavePlayerData.func = function(runtimeScene, KeyVariableName, ContentVariableName, CallbackVariableName, parentEventsFunctionContext) {
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


gdjs.evtsExt__YandexGamesSDK__SavePlayerData.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YandexGamesSDK__SavePlayerData.registeredGdjsCallbacks = [];