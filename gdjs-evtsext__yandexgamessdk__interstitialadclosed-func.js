
if (typeof gdjs.evtsExt__YandexGamesSDK__InterstitialAdClosed !== "undefined") {
  gdjs.evtsExt__YandexGamesSDK__InterstitialAdClosed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YandexGamesSDK__InterstitialAdClosed = {};


gdjs.evtsExt__YandexGamesSDK__InterstitialAdClosed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("IsWasShown") : false);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__YandexGamesSDK_InterstitialAdResult")) == "was_shown_closed";
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("IsWasShown") : false);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{let isConditionTrue_3 = false;
isConditionTrue_2 = false;
{
isConditionTrue_3 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__YandexGamesSDK_InterstitialAdResult")) == "just_closed";
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
isConditionTrue_3 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("__YandexGamesSDK_InterstitialAdResult")) == "was_shown_closed";
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
}
}
{
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__YandexGamesSDK__InterstitialAdClosed.func = function(runtimeScene, IsWasShown, parentEventsFunctionContext) {
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
if (argName === "IsWasShown") return IsWasShown;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YandexGamesSDK__InterstitialAdClosed.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__YandexGamesSDK__InterstitialAdClosed.registeredGdjsCallbacks = [];