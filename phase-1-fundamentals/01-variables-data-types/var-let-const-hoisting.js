let b = 2;
function varExample() {
    var x = 1;

    if (true) {
        var x = 2;
        console.log("Inside block", x);
    }

    console.log("Outside block", x);

    var person = { name: "John" };
    person.name = "Jane";
    person.age = 35;
    person = {};
}

function letExample() {
    let x = 1;

    if (true) {
        let x = 2;
        console.log("Inside block", x);
    }

    console.log("Outside block", x);

    let person = { name: "John" };
    person.name = "Jane";
    person.age = 35;
    person = {};
}

function constExample() {
    const x = 1;
    x = 2;

    const person = { name: "John" };
    person.name = "Jane";
    person.age = 35;
    person = {};
}

varExample();
letExample();
constExample();

function hoistingExample() {
    console.log(a);
    console.log(b);
    console.log(c);

    var a = 1;
    let b = 2;
    const c = 3;
}

hoistingExample();
