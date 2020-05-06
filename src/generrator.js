function* helloGeneratorFunc() {
    yield 123;
    yield 'ádasdasdasds';
};

const res = helloGeneratorFunc();

function* printName() {
    yield 'hello saga';
}

function* helloGeneratorFunc1() {
    yield 'start';
    yield* printName();
    yield 'end';
};

const interator = helloGeneratorFunc1();
