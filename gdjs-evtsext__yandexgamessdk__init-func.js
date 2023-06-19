
if (typeof gdjs.evtsExt__YandexGamesSDK__Init !== "undefined") {
  gdjs.evtsExt__YandexGamesSDK__Init.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YandexGamesSDK__Init = {};


gdjs.evtsExt__YandexGamesSDK__Init.userFunc0x744db8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var prefix = "__YandexGamesSDK_";
var globalVarsRef = runtimeScene.getGame().getVariables();

function getPrefixingString(str) {
    return prefix + str;
}

var isInitVar = globalVarsRef.get(getPrefixingString("IsInit"));

isInitVar.setBoolean(false);
globalVarsRef.add(isInitVar);

// Load and init Yandex.Games SDK
var options = {
    fullscreen: eventsFunctionContext.getArgument("fullscreen"),
    orientation: {
        value: eventsFunctionContext.getArgument("orientation") || "portrait",
        lock: eventsFunctionContext.getArgument("lock")
    }
};

(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        isInitVar.setBoolean(true);
        globalVarsRef.add(isInitVar);
        return;
    };
    js = d.createElement(s);
    js.id = id;
    js.src = "https://yandex.ru/games/sdk/v2";
    js.onload = function () {
        YaGames
            .init(options)
            .then(function (instance) {
                // Set as global object
                gdjs._YandexGamesSDK.setInstance(instance);

                isInitVar.setBoolean(true);
                globalVarsRef.add(isInitVar);
            });
    };
    js.onerror = function (ev) {
        console.warn(ev);
    };
    fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "yagames-jssdk");

// Extension`s methods
function setFunctionContextCallback(isSuccess, _eventsFunctionContext) {
    var state = isSuccess ? "ok" : "error";
    var callbackVarName = _eventsFunctionContext.getArgument("CallbackVariableName");
    if (callbackVarName) {
        var callbackVar = globalVarsRef.get(callbackVarName);
        callbackVar.setString(state);
        globalVarsRef.add(callbackVarName, callbackVar);
    }
}

function setCallback(isSuccess, callbackVarName) {
    var state = isSuccess ? "ok" : "error";
    var prefixingCallbackVarName = getPrefixingString(callbackVarName)
    var callbackVar = globalVarsRef.get(prefixingCallbackVarName);
    callbackVar.setString(state);
    globalVarsRef.add(prefixingCallbackVarName, callbackVar);
}

function setFunctionContextJsonCallback(json, _eventsFunctionContext) {
    var resultVarName = _eventsFunctionContext.getArgument("ResultVariableName");
    if (resultVarName) {
        var resultVar = globalVarsRef.get(resultVarName);
        gdjs.evtTools.network.jsonToVariableStructure(json, resultVar);
        globalVarsRef.add(resultVarName, resultVar);
    }
}

gdjs._YandexGamesSDK = {
    getInstance: function () {
        return window[getPrefixingString("instance")];
    },
    setInstance: function (instance) {
        window[getPrefixingString("instance")] = instance;
    },
    getPlayerInstance: function () {
        return window[getPrefixingString("player")];
    },
    setPlayerInstance: function (player) {
        window[getPrefixingString("player")] = player;
    },
    getPaymentsInstance: function () {
        return window[getPrefixingString("payments")];
    },
    setPaymentsInstance: function (payments) {
        window[getPrefixingString("payments")] = payments;
    },
    getGlobalVariable: function (name) {
        return globalVarsRef.get(name);
    },
    setGlobalVariable: function (name, value) {
        var globalVar = globalVarsRef.get(name);
        switch (typeof value) {
            case "object":
                gdjs.evtTools.network.jsonToVariableStructure(JSON.stringify(value), globalVar);
                break;
            case "string":
                globalVar.setString(value);
                break;
            case "number":
                globalVar.setNumber(value);
                break;
            default:
                globalVar.setValue(value);
                break;
        };
        globalVarsRef.add(globalVar);
    },
    setFunctionContextCallback: setFunctionContextCallback,
    setCallback: setCallback,
    setFunctionContextJsonCallback: setFunctionContextJsonCallback,
    getPrefixingString: getPrefixingString,
    getExtensionPrefix: function () {
        return prefix;
    }
}

};
gdjs.evtsExt__YandexGamesSDK__Init.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YandexGamesSDK__Init.userFunc0x744db8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__YandexGamesSDK__Init.func = function(runtimeScene, fullscreen, orientation, lock, parentEventsFunctionContext) {
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
if (argName === "fullscreen") return fullscreen;
if (argName === "orientation") return orientation;
if (argName === "lock") return lock;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YandexGamesSDK__Init.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YandexGamesSDK__Init.registeredGdjsCallbacks = [];