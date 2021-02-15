var assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error('Assertion failed: ' + assertionToCheck + ' is not truthy');
    } else {
      console.log('Great work Salar!!!!');
    }
  },
};

function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  assert.isTrue(circle.radius === 10);
};

testCircleRadiusDefaultsTo10();

describe('CIRCLE', function () {
  it('works out radius', () => {
    let circle = new Circle();
    isEqual(circle.radius, 9);
  });
  it('works out radius', () => {
    let circle = new Circle();
    isEqual(circle.radius, 10);
  });
});

describe('SQUARE', function () {
  it('works out diamater', () => {
    let square = new Square();
    isEqual(square.diamater, 9);
  });
});

describe('addition', function () {
  it('adds two numbers together', () => {
    let calculator = new Calculator();
    isEqual(calculator.addition(2, 2), 4);
  });
  it('checks if Salar is true', () => {
    let calculator = new Calculator();
    isTrue(calculator.salar());
  })
});



