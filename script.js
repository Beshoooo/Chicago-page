/*jslint plusplus:true evil:true */
/*global console, alert ,pronpt */

var change1 = document.getElementById("one1"),
    change2 = document.getElementById("one2"),
    change3 = document.getElementById("one3");


change1.onmouseover = function opac() {
    "use strict";
    change1.style.opacity = "0.4";
    
};

change1.onmouseout = function opac() {
    "use strict";
    change1.style.opacity = "1";
    
};
/////////////////////////////////////////////////
change2.onmouseover = function opac() {
    "use strict";
    change2.style.opacity = "0.4";
    
};

change2.onmouseout = function opac() {
    "use strict";
    change2.style.opacity = "1";
    
};


/////////////////////////////////////////////////

change3.onmouseover = function opac() {
    "use strict";
    change3.style.opacity = "0.4";
    
};

change3.onmouseout = function opac() {
    "use strict";
    change3.style.opacity = "1";
    
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var array =
        ["slider_1", "slider_2", "slider_3"],
    random_value,
    slider = document.getElementById("slider");
    
    
function change() {
    "use strict";
    random_value =
        Math.floor(Math.random() * array.length);
    slider.setAttribute("class", array[random_value]);
    if (array[random_value] === "slider_1") {
        document.getElementById("eve_1").setAttribute("class", "active");
        document.getElementById("eve_2").setAttribute("class", "a");
        document.getElementById("eve_3").setAttribute("class", "a");
    }
    
    if (array[random_value] === "slider_2") {
        document.getElementById("eve_2").setAttribute("class", "active");
        document.getElementById("eve_1").setAttribute("class", "a");
        document.getElementById("eve_3").setAttribute("class", "a");
    }
    
    if (array[random_value] === "slider_3") {
        document.getElementById("eve_3").setAttribute("class", "active");
        document.getElementById("eve_2").setAttribute("class", "a");
        document.getElementById("eve_1").setAttribute("class", "a");
    }
    
    
    
}
setInterval(change, 2500);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var eve1 = document.getElementById("eve_1"),
    eve2 = document.getElementById("eve_2"),
    eve3 = document.getElementById("eve_3"),
    slid;

function event_1() {
    
    "use strict";
    
    if (eve2.getAttribute("class") === "active") {
        
        eve2.setAttribute("class", "a");
    }
    if (eve3.getAttribute("class") === "active") {
        
        eve3.setAttribute("class", "a");
    }
    
    eve1.setAttribute("class", "active");
    
    slid = document.getElementById("slider");
    slid.setAttribute("class", "slider_1");
     
}

function event_2() {
    
    "use strict";
    
    if (eve1.getAttribute("class") === "active") {
        
        eve1.setAttribute("class", "a");
    }
    if (eve3.getAttribute("class") === "active") {
        
        eve3.setAttribute("class", "a");
    }
    
    eve2.setAttribute("class", "active");
    
    slid = document.getElementById("slider");
    slid.setAttribute("class", "slider_2");
     
}

function event_3() {
    
    "use strict";
    
    if (eve2.getAttribute("class") === "active") {
        
        eve2.setAttribute("class", "a");
    }
    if (eve1.getAttribute("class") === "active") {
        
        eve1.setAttribute("class", "a");
    }
    
    eve3.setAttribute("class", "active");
    
    slid = document.getElementById("slider");
    slid.setAttribute("class", "slider_3");
     
}




