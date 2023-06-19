gdjs._1080_1075_1088_1072Code = {};
gdjs._1080_1075_1088_1072Code.GDNewTiledSpriteObjects1= [];
gdjs._1080_1075_1088_1072Code.GDNewTiledSpriteObjects2= [];
gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1= [];
gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects2= [];
gdjs._1080_1075_1088_1072Code.GDNewSprite2Objects1= [];
gdjs._1080_1075_1088_1072Code.GDNewSprite2Objects2= [];
gdjs._1080_1075_1088_1072Code.GDNewTextObjects1= [];
gdjs._1080_1075_1088_1072Code.GDNewTextObjects2= [];
gdjs._1080_1075_1088_1072Code.GDNewText2Objects1= [];
gdjs._1080_1075_1088_1072Code.GDNewText2Objects2= [];
gdjs._1080_1075_1088_1072Code.GDNewSprite3Objects1= [];
gdjs._1080_1075_1088_1072Code.GDNewSprite3Objects2= [];
gdjs._1080_1075_1088_1072Code.GDNewSprite4Objects1= [];
gdjs._1080_1075_1088_1072Code.GDNewSprite4Objects2= [];
gdjs._1080_1075_1088_1072Code.GDNewSprite5Objects1= [];
gdjs._1080_1075_1088_1072Code.GDNewSprite5Objects2= [];
gdjs._1080_1075_1088_1072Code.GDNewLightObjects1= [];
gdjs._1080_1075_1088_1072Code.GDNewLightObjects2= [];
gdjs._1080_1075_1088_1072Code.GDleftbuttonObjects1= [];
gdjs._1080_1075_1088_1072Code.GDleftbuttonObjects2= [];
gdjs._1080_1075_1088_1072Code.GDridebuttonObjects1= [];
gdjs._1080_1075_1088_1072Code.GDridebuttonObjects2= [];
gdjs._1080_1075_1088_1072Code.GDUpButtonObjects1= [];
gdjs._1080_1075_1088_1072Code.GDUpButtonObjects2= [];
gdjs._1080_1075_1088_1072Code.GDrestartObjects1= [];
gdjs._1080_1075_1088_1072Code.GDrestartObjects2= [];
gdjs._1080_1075_1088_1072Code.GDhomeObjects1= [];
gdjs._1080_1075_1088_1072Code.GDhomeObjects2= [];


gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1});
gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._1080_1075_1088_1072Code.GDNewSprite3Objects1});
gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1});
gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._1080_1075_1088_1072Code.GDNewSprite2Objects1});
gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1});
gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._1080_1075_1088_1072Code.GDNewSprite4Objects1});
gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDleftbuttonObjects1Objects = Hashtable.newFrom({"leftbutton": gdjs._1080_1075_1088_1072Code.GDleftbuttonObjects1});
gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDridebuttonObjects1Objects = Hashtable.newFrom({"ridebutton": gdjs._1080_1075_1088_1072Code.GDridebuttonObjects1});
gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDUpButtonObjects1Objects = Hashtable.newFrom({"UpButton": gdjs._1080_1075_1088_1072Code.GDUpButtonObjects1});
gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs._1080_1075_1088_1072Code.GDrestartObjects1});
gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDhomeObjects1Objects = Hashtable.newFrom({"home": gdjs._1080_1075_1088_1072Code.GDhomeObjects1});
gdjs._1080_1075_1088_1072Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length !== 0 ? gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._1080_1075_1088_1072Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDNewSpriteObjects1Objects, gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "игра", true);
}{gdjs.evtsExt__Gamepads__A_Vibrate_controller.func(runtimeScene, 1, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._1080_1075_1088_1072Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDNewSpriteObjects1Objects, gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._1080_1075_1088_1072Code.GDNewSprite2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._1080_1075_1088_1072Code.GDNewText2Objects1);
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDNewText2Objects1[i].setString(gdjs._1080_1075_1088_1072Code.GDNewText2Objects1[i].getString() + (""));
}
}{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDNewSprite2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._1080_1075_1088_1072Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDNewSpriteObjects1Objects, gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDNewSprite4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[k] = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "левел 2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[k] = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[k] = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[k] = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Delete");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Tab");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "меню", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("leftbutton"), gdjs._1080_1075_1088_1072Code.GDleftbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDleftbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ridebutton"), gdjs._1080_1075_1088_1072Code.GDridebuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDridebuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpButton"), gdjs._1080_1075_1088_1072Code.GDUpButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDUpButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs._1080_1075_1088_1072Code.GDrestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDrestartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("home"), gdjs._1080_1075_1088_1072Code.GDhomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1080_1075_1088_1072Code.mapOfGDgdjs_46_951080_951075_951088_951072Code_46GDhomeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "меню", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "LT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "RT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("UpButton"), gdjs._1080_1075_1088_1072Code.GDUpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("home"), gdjs._1080_1075_1088_1072Code.GDhomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("leftbutton"), gdjs._1080_1075_1088_1072Code.GDleftbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs._1080_1075_1088_1072Code.GDrestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("ridebutton"), gdjs._1080_1075_1088_1072Code.GDridebuttonObjects1);
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDUpButtonObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDUpButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDridebuttonObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDridebuttonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDleftbuttonObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDleftbuttonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDhomeObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDhomeObjects1[i].hide(false);
}
for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDrestartObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDrestartObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("UpButton"), gdjs._1080_1075_1088_1072Code.GDUpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("home"), gdjs._1080_1075_1088_1072Code.GDhomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("leftbutton"), gdjs._1080_1075_1088_1072Code.GDleftbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs._1080_1075_1088_1072Code.GDrestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("ridebutton"), gdjs._1080_1075_1088_1072Code.GDridebuttonObjects1);
{for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDUpButtonObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDUpButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDridebuttonObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDridebuttonObjects1[i].hide();
}
for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDleftbuttonObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDleftbuttonObjects1[i].hide();
}
for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDhomeObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDhomeObjects1[i].hide();
}
for(var i = 0, len = gdjs._1080_1075_1088_1072Code.GDrestartObjects1.length ;i < len;++i) {
    gdjs._1080_1075_1088_1072Code.GDrestartObjects1[i].hide();
}
}}

}


};

gdjs._1080_1075_1088_1072Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1080_1075_1088_1072Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewSpriteObjects2.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewSprite2Objects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewSprite2Objects2.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewTextObjects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewTextObjects2.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewText2Objects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewText2Objects2.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewSprite3Objects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewSprite3Objects2.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewSprite4Objects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewSprite4Objects2.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewSprite5Objects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewSprite5Objects2.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewLightObjects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDNewLightObjects2.length = 0;
gdjs._1080_1075_1088_1072Code.GDleftbuttonObjects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDleftbuttonObjects2.length = 0;
gdjs._1080_1075_1088_1072Code.GDridebuttonObjects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDridebuttonObjects2.length = 0;
gdjs._1080_1075_1088_1072Code.GDUpButtonObjects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDUpButtonObjects2.length = 0;
gdjs._1080_1075_1088_1072Code.GDrestartObjects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDrestartObjects2.length = 0;
gdjs._1080_1075_1088_1072Code.GDhomeObjects1.length = 0;
gdjs._1080_1075_1088_1072Code.GDhomeObjects2.length = 0;

gdjs._1080_1075_1088_1072Code.eventsList0(runtimeScene);

return;

}

gdjs['_1080_1075_1088_1072Code'] = gdjs._1080_1075_1088_1072Code;
