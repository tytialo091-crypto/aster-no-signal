// ==========================================
// ASTER : NO SIGNAL
// scripts/core/input.js
// ==========================================

export default class InputManager {

    constructor(canvas){

        this.canvas = canvas;

        this.keys = {};

        this.mouse = {
            x:0,
            y:0,
            dx:0,
            dy:0,
            left:false,
            right:false
        };

        this.touch = {
            active:false,
            x:0,
            y:0,
            dx:0,
            dy:0
        };

        this.isMobile =
            /Android|iPhone|iPad|iPod/i
            .test(navigator.userAgent);

        this.init();

    }

    init(){

        // Keyboard

        window.addEventListener("keydown",(e)=>{

            this.keys[e.code]=true;

        });

        window.addEventListener("keyup",(e)=>{

            this.keys[e.code]=false;

        });

        // Mouse

        window.addEventListener("mousemove",(e)=>{

            this.mouse.dx=e.movementX;

            this.mouse.dy=e.movementY;

            this.mouse.x=e.clientX;

            this.mouse.y=e.clientY;

        });

        window.addEventListener("mousedown",(e)=>{

            if(e.button===0)
                this.mouse.left=true;

            if(e.button===2)
                this.mouse.right=true;

        });

        window.addEventListener("mouseup",(e)=>{

            if(e.button===0)
                this.mouse.left=false;

            if(e.button===2)
                this.mouse.right=false;

        });

        // Touch

        this.canvas.addEventListener("touchstart",(e)=>{

            this.touch.active=true;

            this.touch.x=e.touches[0].clientX;

            this.touch.y=e.touches[0].clientY;

        });

        this.canvas.addEventListener("touchmove",(e)=>{

            this.touch.dx=
                e.touches[0].clientX-
                this.touch.x;

            this.touch.dy=
                e.touches[0].clientY-
                this.touch.y;

            this.touch.x=
                e.touches[0].clientX;

            this.touch.y=
                e.touches[0].clientY;

        });

        this.canvas.addEventListener("touchend",()=>{

            this.touch.active=false;

            this.touch.dx=0;

            this.touch.dy=0;

        });

    }

    // =========================

    isPressed(key){

        return this.keys[key]===true;

    }

    // =========================

    moveForward(){

        return this.isPressed("KeyW");

    }

    moveBackward(){

        return this.isPressed("KeyS");

    }

    moveLeft(){

        return this.isPressed("KeyA");

    }

    moveRight(){

        return this.isPressed("KeyD");

    }

    sprint(){

        return this.isPressed("ShiftLeft");

    }

    jump(){

        return this.isPressed("Space");

    }

    crouch(){

        return this.isPressed("ControlLeft");

    }

    reload(){

        return this.isPressed("KeyR");

    }

    fire(){

        return this.mouse.left;

    }

    aim(){

        return this.mouse.right;

    }

    // =========================

    resetMouse(){

        this.mouse.dx=0;

        this.mouse.dy=0;

    }

}
