
function add(a, b){
    return a + b;
}

QUnit.test( "Calcul OK", function(assert) {
  assert.equal(add(18, 3), 21);
});
