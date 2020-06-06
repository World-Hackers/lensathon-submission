// -----JS CODE----
// Disable an object

//@input SceneObject targetObject


script.targetObject.enabled = false;
print("TOUCHED 1");
var temp = countMyself();
if( temp%2 == 0){
    script.targetObject.enabled = false;
}
else{
    script.targetObject.enabled = true;
}

//print(countMyself());

function countMyself() {
    // Check to see if the counter has been initialized
    if ( typeof countMyself.counter == 'undefined' ) {
        // It has not... perform the initialization
        countMyself.counter = 0;
    }

    // Do something stupid to indicate the value
    return (++countMyself.counter);
}
