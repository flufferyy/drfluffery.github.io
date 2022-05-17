function fade04() {
    $(".fade-04").css({"opacity": "1"});
}

function fade08() {
    $(".fade-08").css({"opacity": "1"});
}

function fade12() {
    $(".fade-12").css({"opacity": "1"});
}

function fade16() {
    $(".fade-16").css({"opacity": "1"});
}

function fade20() {
    $(".fade-20").css({"opacity": "1"});
}

function fade04a() {
    $(".fade-04").css({"opacity": "0"});
}

function fade08a() {
    $(".fade-08").css({"opacity": "0"});
}

function fade12a() {
    $(".fade-12").css({"opacity": "0"});
}

function fade16a() {
    $(".fade-16").css({"opacity": "0"});
}

function doFadeIn() {
    window.setTimeout(fade04, 400);
    window.setTimeout(fade08, 800);
    window.setTimeout(fade12, 1200);
    window.setTimeout(fade16, 1600);
    window.setTimeout(fade20, 2000);
}

function fadeOutMenu() {
    fade04a();
    fade08a();
    fade12a();
    fade16a();
}

function fadeInMenu() {
    fade04();
    fade08();
    fade12();
    fade16();
}