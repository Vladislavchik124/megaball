gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code = {};
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewTextObjects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewTextObjects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewBBTextObjects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewBBTextObjects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText2Objects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText2Objects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText3Objects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText3Objects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText4Objects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText4Objects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText5Objects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText5Objects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText6Objects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText6Objects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewSpriteObjects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewSpriteObjects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewSprite2Objects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewSprite2Objects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText7Objects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText7Objects2= [];


gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.mapOfGDgdjs_46_951085_951072_951089_951090_951088_951086_951081_951082_9510802Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewSpriteObjects1});
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.mapOfGDgdjs_46_951085_951072_951089_951090_951088_951086_951081_951082_9510802Code_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "меню", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewTextObjects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewTextObjects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewBBTextObjects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewBBTextObjects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText2Objects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText2Objects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText3Objects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText3Objects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText4Objects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText4Objects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText5Objects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText5Objects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText6Objects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText6Objects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewSpriteObjects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewSpriteObjects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewSprite2Objects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewSprite2Objects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText7Objects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.GDNewText7Objects2.length = 0;

gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code.eventsList0(runtimeScene);

return;

}

gdjs['_1085_1072_1089_1090_1088_1086_1081_1082_10802Code'] = gdjs._1085_1072_1089_1090_1088_1086_1081_1082_10802Code;
