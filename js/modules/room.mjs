;"use strict";
import * as inout from "./inout.mjs";

export class room {
    constructor(id, name, desc, coord) {
        this.id = id || 0;
        this.name = name || "default_name";
        this.desc = desc || "default_desc";
        this.coord = coord || [];
        
     };
    print_desc = () => {
        inout.log(this.id);
        inout.log(this.name);
        inout.log(this.desc);
        inout.log(this.coord);
        inout.log(" ");
    }
    load = (filename) => {
        loadJSON(
            response => {
                let response_obj = JSON.parse(response);
                this.id = response_obj.id;
                this.name = response_obj.name;
                this.desc = response_obj.desc;
                this.coord = response_obj.coord;
                this.print_desc();
            },
            filename
        )
    }
}

function loadJSON(callback,filename) {
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', filename, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    }
    xobj.send(null);
}
