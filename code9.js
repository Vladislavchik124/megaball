gdjs._1074_1072_1096_1077_32_1080_1084_1103Code = {};
gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewTextInputObjects1= [];
gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewTextInputObjects2= [];
gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewSpriteObjects1= [];
gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewSpriteObjects2= [];
gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewTextObjects1= [];
gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewTextObjects2= [];


gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.mapOfGDgdjs_46_951074_951072_951096_951077_9532_951080_951084_951103Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewSpriteObjects1});
gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.mapOfGDgdjs_46_951074_951072_951096_951077_9532_951080_951084_951103Code_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewTextInputObjects1);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "a560e367-f0a9-4df5-ba5f-0c6fc523d387", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (( gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewTextInputObjects1[0].getString()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Безымянная сцена", false);
}}

}


};

gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewTextInputObjects1.length = 0;
gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewTextInputObjects2.length = 0;
gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewSpriteObjects1.length = 0;
gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewSpriteObjects2.length = 0;
gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewTextObjects1.length = 0;
gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.GDNewTextObjects2.length = 0;

gdjs._1074_1072_1096_1077_32_1080_1084_1103Code.eventsList0(runtimeScene);

return;

}

gdjs['_1074_1072_1096_1077_32_1080_1084_1103Code'] = gdjs._1074_1072_1096_1077_32_1080_1084_1103Code;
