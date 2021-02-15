function it(description, assertion) {
  console.log('Test name: ' + description);
  assertion();
};

function describe(thingBeingDescribed, assertion) {
  console.log(thingBeingDescribed);
  assertion();
};

function isEqual(a, b) {
  if (a === b) {
    console.log('PASS');
    return true;
  } else {
    console.log('FAIL');
    console.log(a + ' != ' + b);
    return false;
  }
};
