// ============================================
// MODULE 1: Variables & Data Types
// Learning Sandbox - CodeSandbox
// Test - Commit changes
// ============================================

console.log("=== MODULE 1: VARIABLES & DATA TYPES ===\n");

// ============================================
// SNIPPET 1: var, let, const
// ============================================

console.log("--- SNIPPET 1: var vs let vs const ---\n");

// 1. VAR - Function Scoped (OLD WAY - AVOID)
function varExample() {
  var x = 1;

  if (true) {
    var x = 2; // Same variable!
    console.log("VAR - Inside if:", x); // 2
  }

  console.log("VAR - Outside if:", x); // 2 (changed!)
}

// 2. LET - Block Scoped (MODERN WAY)
function letExample() {
  let y = 1;

  if (true) {
    let y = 2; // Different variable!
    console.log("LET - Inside if:", y); // 2
  }

  console.log("LET - Outside if:", y); // 1 (unchanged!)
}

// 3. CONST - Block Scoped, Cannot Reassign
function constExample() {
  const z = 1;
  console.log("CONST - Initial value:", z); // 1

  // Demonstrating object mutation
  const person = { name: "John" };
  console.log("CONST - Before change:", person);

  person.name = "Jane"; // ✅ Works!
  person.age = 30; // ✅ Works!
  console.log("CONST - After change:", person);
}

// Run the examples
console.log("\n--- Running Examples ---\n");
varExample();
console.log("");
letExample();
console.log("");
constExample();

console.log("\n=== END MODULE 1 ==="); // ============================================
// MODULE 1: Variables & Data Types
// Learning Sandbox - CodeSandbox
// ============================================

console.log("=== MODULE 1: VARIABLES & DATA TYPES ===\n");

// ============================================
// SNIPPET 1: var, let, const
// ============================================

console.log("--- SNIPPET 1: var vs let vs const ---\n");

// 1. VAR - Function Scoped (OLD WAY - AVOID)
function varExample() {
  var x = 1;

  if (true) {
    var x = 2; // Same variable!
    console.log("VAR - Inside if:", x); // 2
  }

  console.log("VAR - Outside if:", x); // 2 (changed!)
}

// 2. LET - Block Scoped (MODERN WAY)
function letExample() {
  let y = 1;

  if (true) {
    let y = 2; // Different variable!
    console.log("LET - Inside if:", y); // 2
  }

  console.log("LET - Outside if:", y); // 1 (unchanged!)
}

// 3. CONST - Block Scoped, Cannot Reassign
function constExample() {
  const z = 1;
  console.log("CONST - Initial value:", z); // 1

  // Demonstrating object mutation
  const person = { name: "John" };
  console.log("CONST - Before change:", person);

  person.name = "Jane"; // ✅ Works!
  person.age = 30; // ✅ Works!
  console.log("CONST - After change:", person);
}

// Run the examples
console.log("\n--- Running Examples ---\n");
varExample();
console.log("");
letExample();
console.log("");
constExample();

console.log("\n=== END MODULE 1 ===");
