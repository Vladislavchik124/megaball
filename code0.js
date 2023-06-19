gdjs._1084_1077_1085_1102Code = {};
gdjs._1084_1077_1085_1102Code.GDNewTiledSpriteObjects1= [];
gdjs._1084_1077_1085_1102Code.GDNewTiledSpriteObjects2= [];
gdjs._1084_1077_1085_1102Code.GDNewTiledSprite3Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewTiledSprite3Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects1= [];
gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects2= [];
gdjs._1084_1077_1085_1102Code.GDNewSprite5Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewSprite5Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewTextObjects1= [];
gdjs._1084_1077_1085_1102Code.GDNewTextObjects2= [];
gdjs._1084_1077_1085_1102Code.GDNewText2Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewText2Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewTiledSprite2Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewTiledSprite2Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewText3Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewText3Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewText4Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewText4Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewSprite2Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewSprite2Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewSprite3Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewSprite3Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewText5Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewText5Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewSprite4Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewSprite4Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewText6Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewText6Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewText7Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewText7Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewSprite6Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewSprite6Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewSprite7Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewSprite7Objects2= [];
gdjs._1084_1077_1085_1102Code.GDNewText8Objects1= [];
gdjs._1084_1077_1085_1102Code.GDNewText8Objects2= [];


gdjs._1084_1077_1085_1102Code.mapOfGDgdjs_46_951084_951077_951085_951102Code_46GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs._1084_1077_1085_1102Code.GDNewSprite7Objects1});
gdjs._1084_1077_1085_1102Code.mapOfGDgdjs_46_951084_951077_951085_951102Code_46GDNewTiledSprite3Objects1Objects = Hashtable.newFrom({"NewTiledSprite3": gdjs._1084_1077_1085_1102Code.GDNewTiledSprite3Objects1});
gdjs._1084_1077_1085_1102Code.mapOfGDgdjs_46_951084_951077_951085_951102Code_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._1084_1077_1085_1102Code.GDNewSprite2Objects1});
gdjs._1084_1077_1085_1102Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs._1084_1077_1085_1102Code.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1084_1077_1085_1102Code.mapOfGDgdjs_46_951084_951077_951085_951102Code_46GDNewSprite7Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "игра", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs._1084_1077_1085_1102Code.GDNewTiledSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1084_1077_1085_1102Code.mapOfGDgdjs_46_951084_951077_951085_951102Code_46GDNewTiledSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "настройки", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._1084_1077_1085_1102Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1084_1077_1085_1102Code.mapOfGDgdjs_46_951084_951077_951085_951102Code_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "a560e367-f0a9-4df5-ba5f-0c6fc523d387", true);
}}

}


};

gdjs._1084_1077_1085_1102Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1084_1077_1085_1102Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewTiledSprite3Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewTiledSprite3Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSpriteObjects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSprite5Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSprite5Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewTextObjects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewTextObjects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText2Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText2Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewTiledSprite2Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewTiledSprite2Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText3Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText3Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText4Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText4Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSprite2Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSprite2Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSprite3Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSprite3Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText5Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText5Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSprite4Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSprite4Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText6Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText6Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText7Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText7Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSprite6Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSprite6Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSprite7Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewSprite7Objects2.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText8Objects1.length = 0;
gdjs._1084_1077_1085_1102Code.GDNewText8Objects2.length = 0;

gdjs._1084_1077_1085_1102Code.eventsList0(runtimeScene);

return;

}

gdjs['_1084_1077_1085_1102Code'] = gdjs._1084_1077_1085_1102Code;
