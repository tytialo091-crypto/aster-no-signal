// ==========================================
// ASTER : NO SIGNAL
// scripts/core/engine.js
// ==========================================

export default class Engine {

    constructor(canvasId) {

        this.canvas = document.getElementById(canvasId);

        this.engine = new BABYLON.Engine(
            this.canvas,
            true,
            {
                preserveDrawingBuffer: true,
                stencil: true,
                disableWebGL2Support: false
            }
        );

        this.scene = null;
        this.camera = null;
        this.light = null;

    }

    createScene() {

        this.scene = new BABYLON.Scene(this.engine);

        this.scene.clearColor =
            new BABYLON.Color4(
                0.03,
                0.04,
                0.08,
                1
            );

        this.createCamera();

        this.createLight();

        this.createEnvironment();

        this.createSky();

        return this.scene;

    }

    createCamera() {

        this.camera =
            new BABYLON.UniversalCamera(
                "PlayerCamera",
                new BABYLON.Vector3(
                    0,
                    2,
                    -8
                ),
                this.scene
            );

        this.camera.attachControl(
            this.canvas,
            true
        );

        this.camera.speed = 0.45;

        this.camera.inertia = 0.8;

        this.camera.angularSensibility = 2800;

        this.camera.minZ = 0.1;

        this.camera.fov = 1.1;

    }

    createLight() {

        this.light =
            new BABYLON.HemisphericLight(
                "Sun",
                new BABYLON.Vector3(
                    0,
                    1,
                    0
                ),
                this.scene
            );

        this.light.intensity = 1.4;

    }

    createEnvironment() {

        const ground =
            BABYLON.MeshBuilder.CreateGround(
                "Ground",
                {
                    width:300,
                    height:300
                },
                this.scene
            );

        const material =
            new BABYLON.StandardMaterial(
                "GroundMaterial",
                this.scene
            );

        material.diffuseColor =
            new BABYLON.Color3(
                0.18,
                0.18,
                0.22
            );

        material.specularColor =
            BABYLON.Color3.Black();

        ground.material = material;

        ground.receiveShadows = true;

    }

    createSky() {

        const sky =
            BABYLON.MeshBuilder.CreateSphere(
                "Sky",
                {
                    diameter:800,
                    sideOrientation:
                    BABYLON.Mesh.BACKSIDE
                },
                this.scene
            );

        const skyMaterial =
            new BABYLON.StandardMaterial(
                "SkyMaterial",
                this.scene
            );

        skyMaterial.disableLighting = true;

        skyMaterial.emissiveColor =
            new BABYLON.Color3(
                0.05,
                0.08,
                0.16
            );

        sky.material = skyMaterial;

    }

    start() {

        this.engine.runRenderLoop(() => {

            if(this.scene){

                this.scene.render();

            }

        });

        window.addEventListener(
            "resize",
            () => {

                this.engine.resize();

            }
        );

    }

    getScene(){

        return this.scene;

    }

    getCamera(){

        return this.camera;

    }

    getEngine(){

        return this.engine;

    }

                      }
