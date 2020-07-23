;"use strict";


class room{
    id = 0;
    name = "default_name";
    desc = "default_desc";
    coord = [];
    
    constructor(id, name, desc, coord) {
        this.id = id;
        this.name = name;
        this.desc = desc.replace("#", "</br>");
        this.coord = coord;
    }


    print_desc() {
        print(this.name);
        print(" ");
        print(this.desc);
        print(this.coord);
        print(" ");
    }
}

var fountain = new room(
    1,
    "Red Carpet Fountain", 
    "Welcome to the Red Carpet Fountain, where water is rippling #\
    and there is great adventures to await. This however, is just #\
    a description, to show the functionality of this program #\
    hopefully this works by escaping all the newlines. #",
    [1,1,1] 
);