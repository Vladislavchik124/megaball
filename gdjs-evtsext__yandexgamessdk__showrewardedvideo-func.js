
if (typeof gdjs.evtsExt__YandexGamesSDK__ShowRewardedVideo !== "undefined") {
  gdjs.evtsExt__YandexGamesSDK__ShowRewardedVideo.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YandexGamesSDK__ShowRewardedVideo = {};


gdjs.evtsExt__YandexGamesSDK__ShowRewardedVideo.userFunc0x78c2b0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var resultVarName = gdjs._YandexGamesSDK.getPrefixingString("RewardedVideoResult");

try {
    gdjs._YandexGamesSDK.getInstance().adv.showRewardedVideo({
        callbacks: {
            onOpen: function () {
                gdjs._YandexGamesSDK.setGlobalVariable(resultVarName, "open");
            },
            onRewarded: function () {
                gdjs._YandexGamesSDK.setGlobalVariable(resultVarName, "rewarded");
            },
            onClose: function () {
                gdjs._YandexGamesSDK.setGlobalVariable(resultVarName, "closed");
            },
            onError: function (err) {
                gdjs._YandexGamesSDK.setGlobalVariable(resultVarName, "error");
                console.warn(err);
            }
        }
    });
} catch (err) {
    gdjs._YandexGamesSDK.setGlobalVariable(resultVarName, "error");
    console.warn("Error while showing a rewarded video", err);
};

};
gdjs.evtsExt__YandexGamesSDK__ShowRewardedVideo.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YandexGamesSDK__ShowRewardedVideo.userFunc0x78c2b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__YandexGamesSDK__ShowRewardedVideo.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__YandexGamesSDK__Initialized.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__YandexGamesSDK__ShowRewardedVideo.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__YandexGamesSDK__ShowRewardedVideo.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__YandexGamesSDK__ShowRewardedVideo.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YandexGamesSDK__ShowRewardedVideo.registeredGdjsCallbacks = [];