
if (typeof gdjs.evtsExt__YandexGamesSDK__InitPlayer !== "undefined") {
  gdjs.evtsExt__YandexGamesSDK__InitPlayer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YandexGamesSDK__InitPlayer = {};


gdjs.evtsExt__YandexGamesSDK__InitPlayer.userFunc0x78c2b0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var globalsVarsRef = runtimeScene.getGame().getVariables();
var resultVarName = gdjs._YandexGamesSDK.getPrefixingString("Player");
var resultVar = globalsVarsRef.get(resultVarName);
var instance = gdjs._YandexGamesSDK.getInstance();

var photoSize = eventsFunctionContext.getArgument("PhotoSize") || "small";

function addChildVarToVar(name, value, gdjsVar) {
    var childVar = new gdjs.Variable({
        name: name, value: value
    });

    childVar.setString(value);
    return gdjsVar.addChild(name, childVar);
}

var options = {
    scopes: !!eventsFunctionContext.getArgument("Scopes"),
    signed: !!eventsFunctionContext.getArgument("Signed")
};

function initPlayer() {
    return instance.getPlayer(options)
        .then(function (player) {
            // Player logged in.
            addChildVarToVar("id", player.getUniqueID(), resultVar);

            if (!!eventsFunctionContext.getArgument("Scopes")) {
                addChildVarToVar("name", player.getName(), resultVar);
                addChildVarToVar("photo", player.getPhoto(photoSize), resultVar);
            }

            if (!!eventsFunctionContext.getArgument("Signed")) {
                addChildVarToVar("signature", player.signature, resultVar);
            }

            globalsVarsRef.add(resultVarName, resultVar);
            gdjs._YandexGamesSDK.setPlayerInstance(player);
        });
}

initPlayer()
    .catch(function (error) {
        console.warn(error);

        if (!!eventsFunctionContext.getArgument("OpenAuthDialog")) {
            instance.auth.openAuthDialog()
                .then(function () {
                    initPlayer();
                }).catch(function () {
                    console.warn("Player not logged in.");
                });
        }
    });

};
gdjs.evtsExt__YandexGamesSDK__InitPlayer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YandexGamesSDK__InitPlayer.userFunc0x78c2b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__YandexGamesSDK__InitPlayer.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__YandexGamesSDK__Initialized.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__YandexGamesSDK__InitPlayer.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__YandexGamesSDK__InitPlayer.func = function(runtimeScene, Scopes, Signed, OpenAuthDialog, PhotoSize, parentEventsFunctionContext) {
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
if (argName === "Scopes") return Scopes;
if (argName === "Signed") return Signed;
if (argName === "OpenAuthDialog") return OpenAuthDialog;
if (argName === "PhotoSize") return PhotoSize;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YandexGamesSDK__InitPlayer.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YandexGamesSDK__InitPlayer.registeredGdjsCallbacks = [];