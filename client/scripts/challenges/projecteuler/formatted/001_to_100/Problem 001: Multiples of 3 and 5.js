
/* eslint spaced-comment: 0 */
/* eslint no-redeclare: 0 */
/* eslint no-unused-vars: 0 */

const assert = require('chai').assert;

/// title: Problem 1: Multiples of 3 and 5
/// type: project-euler

/// categories:
/// math

/// difficulty: 1

/// benchmark:
//replaceWithActualFunctionHere;

/// description:
/// <div class="euler"><p class="euler__paragraph">If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p>
/// <p class="euler__paragraph">Find the sum of all the multiples of 3 or 5 below 1000.</p></div>

/// challengeSeed:
function euler1() {
  // Good luck!
  return true;
}

euler1();

/// solutions:
function euler1() {
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

/// tail:
// not used

/// tests:
assert(typeof euler1 === 'function', 'message: <code>euler1()</code> is a function.');
assert.strictEqual(euler1(), 233168, 'message: <code>euler1()</code> should return 233168.');
/// id: 5900f36e1000cf542c50fe80
