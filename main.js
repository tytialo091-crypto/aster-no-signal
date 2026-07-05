// =====================================
// ASTER : NO SIGNAL
// main.js
// =====================================

const canvas = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true
});

let scene;

function createScene() {

    scene = new BABYLON.Scene(engine);

    scene.clearColor = new BABYLON.Color4(
        0.03,
        0.04,
        0.08,
        1
    );

    // Camera
    const camera =
        new BABYLON.UniversalCamera(
            "camera",
            new BABYLON.Vector3(0, 2, -8),
            scene
        );

    camera.attachControl(canvas, true);

    camera.speed = 0.45;

    camera.angularSensibility = 3000;

    // Light

    const hemi =
        new BABYLON.HemisphericLight(
            "light",
            new BABYLON.Vector3(0, 1, 0),
            scene
        );

    hemi.intensity = 1.2;

    // Ground

    const ground =
        BABYLON.MeshBuilder.CreateGround(
            "ground",
            {
                width: 120,
                height: 120
            },
            scene
        );

    const groundMat =
        new BABYLON.StandardMaterial(
            "groundMat",
            scene
        );

    groundMat.diffuseColor =
        new BABYLON.Color3(
            0.18,
            0.18,
            0.22
        );

    ground.material = groundMat;

    // Box Demo

    const cube =
        BABYLON.MeshBuilder.CreateBox(
            "cube",
            {
                size: 2
            },
            scene
        );

    cube.position.y = 1;

    const cubeMat =
        new BABYLON.StandardMaterial(
            "cubeMat",
            scene
        );

    cubeMat.emissiveColor =
        new BABYLON.Color3(
            0.3,
            0.7,
            1
        );

    cube.material = cubeMat;

    scene.registerBeforeRender(() => {

        cube.rotation.y += 0.005;

    });

    return scene;

}

// =====================================
// Loading
// =====================================

let progress = 0;

const bar =
document.getElementById("progress");

const loading =
document.getElementById("loadingScreen");

const menu =
document.getElementById("mainMenu");

const loadingText =
document.getElementById("loadingText");

const timer =
setInterval(() => {

    progress += 4;

    if(progress > 100)
        progress = 100;

    bar.style.width =
        progress + "%";

    loadingText.innerHTML =
        "Loading " +
        progress +
        "%";

    if(progress >= 100){

        clearInterval(timer);

        loading.style.display =
            "none";

        menu.classList.remove("hidden");

    }

},80);

// =====================================
// Create Scene
// =====================================

createScene();

engine.runRenderLoop(() => {

    scene.render();

    document
    .getElementById("fpsCounter")
    .innerHTML =
    "FPS : " +
    Math.round(
        engine.getFps()
    );

});

window.addEventListener(
"resize",
() => {

    engine.resize();

});

// =====================================
// Buttons
// =====================================

document
.getElementById("settingsBtn")
.onclick = () => {

document
.getElementById("settingsMenu")
.classList.remove("hidden");

};

document
.getElementById("backMenu")
.onclick = () => {

document
.getElementById("settingsMenu")
.classList.add("hidden");

};

document
.getElementById("creditsBtn")
.onclick = () => {

document
.getElementById("creditsMenu")
.classList.remove("hidden");

};

document
.getElementById("creditsBack")
.onclick = () => {

document
.getElementById("creditsMenu")
.classList.add("hidden");

};

document
.getElementById("exitBtn")
.onclick = () => {

if(confirm("Exit Game?")){

window.close();

}

};

// =====================================
// Save Settings
// =====================================

document
.getElementById("saveSettings")
.onclick = () => {

const quality =
document
.getElementById("quality")
.value;

const fps =
document
.getElementById("fps")
.value;

localStorage.setItem(
"quality",
quality
);

localStorage.setItem(
"fps",
fps
);

alert("Settings Saved");

};

// =====================================
// New Game
// =====================================

document
.getElementById("newGameBtn")
.onclick = () => {

menu.classList.add("hidden");

document
.getElementById("hud")
.classList.remove("hidden");

canvas.requestPointerLock?.();

};

// =====================================
// Continue
// =====================================

document
.getElementById("continueBtn")
.onclick = () => {

menu.classList.add("hidden");

document
.getElementById("hud")
.classList.remove("hidden");

};

// =====================================
// Fullscreen
// =====================================

document.addEventListener(
"dblclick",
() => {

if(
!document.fullscreenElement
){

document
.documentElement
.requestFullscreen();

}else{

document.exitFullscreen();

}

});
