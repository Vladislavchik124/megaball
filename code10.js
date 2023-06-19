gdjs._1087_1086_1073_1077_1076_1072Code = {};
gdjs._1087_1086_1073_1077_1076_1072Code.GDNewTextObjects1= [];
gdjs._1087_1086_1073_1077_1076_1072Code.GDNewTextObjects2= [];
gdjs._1087_1086_1073_1077_1076_1072Code.GDNewSpriteObjects1= [];
gdjs._1087_1086_1073_1077_1076_1072Code.GDNewSpriteObjects2= [];


gdjs._1087_1086_1073_1077_1076_1072Code.mapOfGDgdjs_46_951087_951086_951073_951077_951076_951072Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1087_1086_1073_1077_1076_1072Code.GDNewSpriteObjects1});
gdjs._1087_1086_1073_1077_1076_1072Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1087_1086_1073_1077_1076_1072Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1087_1086_1073_1077_1076_1072Code.mapOfGDgdjs_46_951087_951086_951073_951077_951076_951072Code_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "меню", true);
}}

}


};

gdjs._1087_1086_1073_1077_1076_1072Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1087_1086_1073_1077_1076_1072Code.GDNewTextObjects1.length = 0;
gdjs._1087_1086_1073_1077_1076_1072Code.GDNewTextObjects2.length = 0;
gdjs._1087_1086_1073_1077_1076_1072Code.GDNewSpriteObjects1.length = 0;
gdjs._1087_1086_1073_1077_1076_1072Code.GDNewSpriteObjects2.length = 0;

gdjs._1087_1086_1073_1077_1076_1072Code.eventsList0(runtimeScene);

return;

}

gdjs['_1087_1086_1073_1077_1076_1072Code'] = gdjs._1087_1086_1073_1077_1076_1072Code;
