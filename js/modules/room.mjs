;"use strict";
import * as inout from "./inout.mjs";

export class room {
    constructor(id, name, desc, coord) {
        this.id = id || 0;
        this.name = name || "default_name";
        this.desc = desc || "default_desc";
        this.coord = coord || [];
        this.print_desc = () => {
            inout.log(this.id);
            inout.log(this.name);
            inout.log(this.desc);
            inout.log(this.coord);
            inout.log(" ");
        };
        
    }
}

