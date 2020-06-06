// -----JS CODE-----
//@input Component.ScriptComponent behaviorScript
function onTrigger(){
    print("behavior script triggered");
    // Remove our onTrigger() function from the BehaviorScript responses
    script.behaviorScript.api.removeTriggerResponse(onTrigger);
};
// Add our onTrigger() function as a response to the BehaviorScript being triggered
script.behaviorScript.api.addTriggerResponse(onTrigger);