var expands = document.querySelectorAll(".item-header");

expands.forEach(function (expand) {
    var toggle = expand.querySelector(".toggle");

    toggle.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

const itemHeaders = document.querySelectorAll(".item-header");

itemHeaders.forEach((itemHeader) => {
    itemHeader.addEventListener("click", (event) => {
        itemHeader.classList.toggle("active");
        const itemBody = itemHeader.nextElementSibling;
        if (itemHeader.classList.contains("active")) {
            itemBody.style.maxHeight = `calc(${itemBody.scrollHeight}px + 250px)`;
        } else {
            itemBody.style.maxHeight = 0;
        }
    });
});

const fixedSizeButtons = document.querySelectorAll(".fixed");

fixedSizeButtons.forEach((fixedSizeButton) => {
    fixedSizeButton.addEventListener("click", (event) => {
        fixedSizeButton.classList.toggle("bgDisplay");

        const parentModule = fixedSizeButton.closest(".item");
        const bgSizeSlider = parentModule.querySelector(".bgopt");
        const padSizeSlider = parentModule.querySelector(".padopt");

        if (fixedSizeButton.classList.contains("bgDisplay")) {
            bgSizeSlider.style.display = "block";
            padSizeSlider.style.display = "none";
        } else {
            bgSizeSlider.style.display = "none";
            padSizeSlider.style.display = "block";
        }
    });
});

const backgroundChecks = document.querySelectorAll(".bgToggle");

backgroundChecks.forEach((backgroundCheck) => {
    backgroundCheck.addEventListener("click", (event) => {
        backgroundCheck.classList.toggle("fixedDisplay");

        const parentModule = backgroundCheck.closest(".item");
        const fixedToggle = parentModule.querySelector(".fixed-opt");

        if (backgroundCheck.classList.contains("fixedDisplay")) {
            fixedToggle.style.display = "none";
        } else {
            fixedToggle.style.display = "flex";
        }
    });
});

const viChecks = document.querySelectorAll(".viToggle");

viChecks.forEach((viCheck) => {
    viCheck.addEventListener("click", (event) => {
        viCheck.classList.toggle("viDisplay");

        const parentModule = viCheck.closest(".item");
        const fixedToggle = parentModule.querySelector(".viDisplayToggle");

        if (viCheck.classList.contains("viDisplay")) {
            fixedToggle.style.display = "block";
        } else {
            fixedToggle.style.display = "none";
        }
    });
});

const outlineChecks = document.querySelectorAll(".outlineToggle");

outlineChecks.forEach((outlineCheck) => {
    outlineCheck.addEventListener("click", (event) => {
        outlineCheck.classList.toggle("fixedDisplay");

        const parentModule = outlineCheck.closest(".item");
        const outlineDisplay = parentModule.querySelector(".outlineDisplay");

        if (outlineCheck.classList.contains("fixedDisplay")) {
            outlineDisplay.style.display = "block";
        } else {
            outlineDisplay.style.display = "none";
        }
    });
});

const vanillaChecks = document.querySelectorAll(".vanillaOutline");

vanillaChecks.forEach((vanillaCheck) => {
    vanillaCheck.addEventListener("click", (event) => {
        vanillaCheck.classList.toggle("vanillaToggleDisplay");

        const parentModule = vanillaCheck.closest(".item");
        const vanillaDisplay = parentModule.querySelector(".vanillaDisplay");

        if (vanillaCheck.classList.contains("vanillaToggleDisplay")) {
            vanillaDisplay.style.display = "none";
        } else {
            vanillaDisplay.style.display = "flex";
        }
    });
});

const keystrokeBorderChecks = document.querySelectorAll(".keystrokeBorderChecks");

keystrokeBorderChecks.forEach((keystrokeBorderCheck) => {
    keystrokeBorderCheck.addEventListener("click", (event) => {
        keystrokeBorderCheck.classList.toggle("keystrokeBorderTogglDisplay");

        const parentModule = keystrokeBorderCheck.closest(".item");
        const keystrokeBorderDisplay = parentModule.querySelector(".keystrokeBorderDisplay");

        if (keystrokeBorderCheck.classList.contains("keystrokeBorderTogglDisplay")) {
            keystrokeBorderDisplay.style.display = "block";
        } else {
            keystrokeBorderDisplay.style.display = "none";
        }
    });
});

const overlayBlockChecks = document.querySelectorAll(".overlayBlockOutline");

overlayBlockChecks.forEach((overlayBlockCheck) => {
    overlayBlockCheck.addEventListener("click", (event) => {
        overlayBlockCheck.classList.toggle("overlayToggleDisplay");

        const parentModule = overlayBlockCheck.closest(".item");
        const overlayBlockDisplay = parentModule.querySelector(
            ".overlayBlockDisplay"
        );

        if (overlayBlockCheck.classList.contains("overlayToggleDisplay")) {
            overlayBlockDisplay.style.display = "flex";
        } else {
            overlayBlockDisplay.style.display = "none";
        }
    });
});

const eyeLineChecks = document.querySelectorAll(".eyeLineCheck");

eyeLineChecks.forEach((eyeLineCheck) => {
    eyeLineCheck.addEventListener("click", (event) => {
        eyeLineCheck.classList.toggle("eyeLineToggleDisplay");

        const parentModule = eyeLineCheck.closest(".item");
        const eyeLineDisplay = parentModule.querySelector(".eyeLineDisplay");

        if (eyeLineCheck.classList.contains("eyeLineToggleDisplay")) {
            eyeLineDisplay.style.display = "none";
        } else {
            eyeLineDisplay.style.display = "flex";
        }
    });
});

const lookingAtChecks = document.querySelectorAll(".lookingAtCheck");

lookingAtChecks.forEach((lookingAtCheck) => {
    lookingAtCheck.addEventListener("click", (event) => {
        lookingAtCheck.classList.toggle("lookingAtToggleDisplay");

        const parentModule = lookingAtCheck.closest(".item");
        const lookingAtDisplay = parentModule.querySelector(".lookingAtDisplay");

        if (lookingAtCheck.classList.contains("lookingAtToggleDisplay")) {
            lookingAtDisplay.style.display = "none";
        } else {
            lookingAtDisplay.style.display = "flex";
        }
    });
});

const timeChecks = document.querySelectorAll(".timeCheck");

timeChecks.forEach((timeCheck) => {
    timeCheck.addEventListener("click", (event) => {
        timeCheck.classList.toggle("timeToggleDisplay");

        const parentModule = timeCheck.closest(".item");
        const timeDisplay = parentModule.querySelector(".timeDisplay");

        if (timeCheck.classList.contains("timeToggleDisplay")) {
            timeDisplay.style.display = "flex";
        } else {
            timeDisplay.style.display = "none";
        }
    });
});

function toggleBorder(modId) {
    var mod = document.getElementById(modId);
    var toggle = mod.querySelector(".toggle");

    mod.classList.toggle("checked");
    toggle.classList.toggle("checked");
}

const playSound = () => {
    const clickSound = new Audio("./click.mp3");
    clickSound.play();
};

const clickableElements = document.querySelectorAll(".click");
clickableElements.forEach((element) => {
    element.addEventListener("click", playSound);
});

function toggleZoom() {
    var zoomButton = document.getElementById("zoomButton");
    var zoomBox = document.getElementById("modmenu");
    var flashButton = document.getElementById("flash");
    var movableContainer = document.getElementById("move-container");

    movableContainer.style.display = "none";
    zoomButton.style.display = "none";
    flashButton.style.display = "none";
    zoomBox.style.display = "block";
}

function moveMods() {
    var zoomButton = document.getElementById("zoomButton");
    var zoomBox = document.getElementById("modmenu");
    var zoomBoxSetting = document.getElementById("setting");
    var movableContainer = document.getElementById("move-container");

    movableContainer.style.display = "block";
    zoomButton.style.display = "block";
    zoomBox.style.display = "none";
    zoomBoxSetting.style.display = "none";
}

function goToMain() {
    var settingPage = document.getElementById("setting");
    var modMenu = document.getElementById("modmenu");
    settingPage.style.display = "none";
    modMenu.style.display = "block";
    modMenu.style.opacity = "1";
}

function openSetting() {
    var settingPage = document.getElementById("setting");
    var modMenu = document.getElementById("modmenu");
    settingPage.style.display = "block";
    modMenu.style.opacity = "0";
}

let lastClickedButton = null;

function handleFilter(event, category) {
    const buttons = document.querySelectorAll(".filterbutton");
    buttons.forEach((button) => button.classList.remove("hold"));

    const currentButton = event.target;
    currentButton.classList.add("hold");
    lastClickedButton = currentButton;

    const cards = document.querySelectorAll(".item");
    cards.forEach((card) => {
        card.style.display = "block";
        if (category !== "all" && !card.classList.contains(category)) {
            card.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const blurCheckbox = document.getElementById("blurchk");
    const blurSlider = document.getElementById("rangeInput");
    const blurImage = document.querySelector(".bg");
    const resetButtons = document.querySelectorAll(".x");

    let lastBlurValue = blurSlider.value;

    blurImage.style.filter = `blur(${blurCheckbox.checked ? blurSlider.value : 0
        }px)`;

    blurCheckbox.addEventListener("change", function () {
        if (blurCheckbox.checked) {
            blurImage.style.filter = `blur(${blurSlider.value}px)`;
        } else {
            blurImage.style.filter = "blur(0)";
        }
    });

    blurSlider.addEventListener("input", function () {
        lastBlurValue = blurSlider.value;

        if (blurCheckbox.checked) {
            blurImage.style.filter = `blur(${blurSlider.value}px)`;
        }
    });

    resetButtons.forEach((resetButton) => {
        resetButton.addEventListener("click", function () {
            if (blurCheckbox.checked) {
                blurImage.style.filter = "blur(0)";
                setTimeout(() => {
                    blurImage.style.filter = `blur(${lastBlurValue}px)`;
                }, 1500);
            }
        });
    });
});

function closeBox() {
    var zoomButton = document.getElementById("zoomButton");
    var zoomBox = document.getElementById("modmenu");
    var zoomBoxSetting = document.getElementById("setting");
    var movableContainer = document.getElementById("move-container");
    var fps = document.getElementById("box2");
    var keystrokes = document.getElementById("box1");
    var sprint = document.getElementById("box3");

    fps.classList.add("no-outline2")
    fps.classList.remove("box2")
    keystrokes.classList.add("no-outline1")
    keystrokes.classList.remove("box1")
    sprint.classList.add("no-outline3")
    sprint.classList.remove("box3")
    movableContainer.style.display = "block";
    zoomButton.style.display = "none";
    zoomBox.style.display = "none";
    zoomBox.style.opacity = "1";
    zoomBoxSetting.style.display = "none";

    setTimeout(reOpen, 1500);

    function reOpen() {
        const zoomButton = document.getElementById("zoomButton");
        var movableContainer = document.getElementById("move-container");
        var fps = document.getElementById("box2");
        var keystrokes = document.getElementById("box1");
        var sprint = document.getElementById("box3");

        keystrokes.classList.remove("no-outline1")
        keystrokes.classList.add("box1")
        fps.classList.remove("no-outline2")
        fps.classList.add("box2")
        sprint.classList.remove("no-outline3")
        sprint.classList.add("box3")
        movableContainer.style.display = "block";
        zoomButton.style.display = "block";
    }
}

document.getElementById("mcrftin").addEventListener("change", function () {
    var check = document.getElementById("txtshdw");
    var hdfnt = document.getElementById("hdfnt");

    if (this.checked) {
        check.style.display = "flex";
        hdfnt.style.display = "flex";
    } else {
        check.style.display = "none";
        hdfnt.style.display = "none";
    }
});


function makeDraggable(element) {
    let offsetX, offsetY, isDragging = false;

    element.addEventListener('mousedown', startDrag);
    element.addEventListener('touchstart', startDrag);

    function startDrag(e) {
        e.preventDefault();

        isDragging = true;
        offsetX = e.clientX || e.touches[0].clientX;
        offsetY = e.clientY || e.touches[0].clientY;
        offsetX -= element.getBoundingClientRect().left;
        offsetY -= element.getBoundingClientRect().top;

        element.style.cursor = 'grabbing';

        document.addEventListener('mousemove', dragMove);
        document.addEventListener('touchmove', dragMove);

        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
    }

    function dragMove(e) {
        e.preventDefault();

        let x = e.clientX || e.touches[0].clientX;
        let y = e.clientY || e.touches[0].clientY;

        // Ensure the box stays within the container
        x = Math.min(Math.max(x - offsetX, 0), window.innerWidth - element.offsetWidth);
        y = Math.min(Math.max(y - offsetY, 0), window.innerHeight - element.offsetHeight);

        // Snap to the center
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const snapThreshold = 20;

        if (Math.abs(x + element.offsetWidth / 2 - centerX) < snapThreshold) {
            x = centerX - element.offsetWidth / 2;
        }

        if (Math.abs(y + element.offsetHeight / 2 - centerY) < snapThreshold) {
            y = centerY - element.offsetHeight / 2;
        }

        element.style.left = x + 'px';
        element.style.top = y + 'px';
    }

    function endDrag() {
        isDragging = false;
        element.style.cursor = 'grab';

        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('touchmove', dragMove);

        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchend', endDrag);
    }
}

// Make each draggable box interactive
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

makeDraggable(box1);
makeDraggable(box2);
makeDraggable(box3);
