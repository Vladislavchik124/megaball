gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code = {};
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewTextObjects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewTextObjects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewBBTextObjects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewBBTextObjects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText2Objects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText2Objects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText3Objects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText3Objects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText4Objects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText4Objects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText5Objects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText5Objects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText6Objects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText6Objects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewSpriteObjects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewSpriteObjects2= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText7Objects1= [];
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText7Objects2= [];


gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.mapOfGDgdjs_46_951085_951072_951089_951090_951088_951086_951081_951082_951080Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewSpriteObjects1});
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.mapOfGDgdjs_46_951085_951072_951089_951090_951088_951086_951081_951082_951080Code_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
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

gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewTextObjects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewTextObjects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewBBTextObjects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewBBTextObjects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText2Objects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText2Objects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText3Objects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText3Objects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText4Objects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText4Objects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText5Objects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText5Objects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText6Objects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText6Objects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewSpriteObjects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewSpriteObjects2.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText7Objects1.length = 0;
gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.GDNewText7Objects2.length = 0;

gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code.eventsList0(runtimeScene);

return;

}

gdjs['_1085_1072_1089_1090_1088_1086_1081_1082_1080Code'] = gdjs._1085_1072_1089_1090_1088_1086_1081_1082_1080Code;
