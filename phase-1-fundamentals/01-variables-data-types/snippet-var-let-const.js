// ============================================
// SNIPPET: var, let, const - The Differences
// ============================================

// 1. VAR - Function Scoped (OLD WAY - AVOID)
// -----------------------------------------
function varExample() {
  var x = 1;
  
  if (true) {
    var x = 2; // Same variable! (function scoped)
    console.log('Inside if:', x); // 2
  }
  
  console.log('Outside if:', x); // 2 (changed!)
}

// 2. LET - Block Scoped (MODERN WAY)
// -----------------------------------------
function letExample() {
  let y = 1;
  
  if (true) {
    let y = 2; // Different variable! (block scoped)
    console.log('Inside if:', y); // 2
  }
  
  console.log('Outside if:', y); // 1 (unchanged!)
}

// 3. CONST - Block Scoped, Cannot Reassign
// -----------------------------------------
function constExample() {
  const z = 1;
  // z = 2; // ❌ ERROR: Cannot reassign const
  
  // But objects/arrays CAN be modified:
  const person = { name: 'John' };
  person.name = 'Jane'; // ✅ Works! (modifying property)
  person.age = 30; // ✅ Works! (adding property)
  // person = {}; // ❌ ERROR: Cannot reassign const
}

// 4. HOISTING - var vs let/const
// -----------------------------------------
function hoistingExample() {
  console.log(a); // undefined (hoisted, but not initialized)
  // console.log(b); // ❌ ERROR: Cannot access before initialization
  
  var a = 1;
  let b = 2;
}

// ============================================
// BEST PRACTICES
// ============================================
// ✅ Use const by default
// ✅ Use let if you need to reassign
// ❌ Never use var in modern JavaScript

// ============================================
// TEST YOUR UNDERSTANDING
// ============================================
// Uncomment and run each function:
// varExample();
// letExample();
// constExample();
// hoistingExample();
