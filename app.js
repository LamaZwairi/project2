//let myname=["lama","leen","reem","omar","ola"]
//let Target="r"
let names = ["lama","ahmad", "omar", "eman", "rawan", "rami", "firas"]
let smallletter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

let randomindex = Math.floor(Math.random() * smallletter.length);
let generatedletter = smallletter[randomindex];
console.log(generatedletter)

function checktheName() {


    for (let i = 0; i < names.length; i++) {

        //if (myname[index].startsWith(Target)) {
        //console.log(myname[index]) ;

        if (names[i][0] == generatedletter) {
            console.log(`${i}this name ${names[i]} is starting with letter ${generatedletter}`);

        }
    }
}

checktheName();

//checktheName("e")
//checktheName("r")




