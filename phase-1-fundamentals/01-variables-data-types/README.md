# Module 1: Variables & Data Types

**Phase:** 1 - Fundamentals  
**Status:** 🔄 In Progress  
**Estimated Time:** 3-4 hours  

---

## Learning Objectives

By the end of this module, you will understand:
- ✅ Difference between `var`, `let`, and `const`
- ✅ Scoping rules (block vs function scope)
- ✅ All 7 primitive data types
- ✅ Type coercion and `typeof` operator
- ✅ Common gotchas and best practices

---

## Key Concepts

### 1. Variable Declarations

**`var`** - Function-scoped, hoisted, avoid in modern code  
**`let`** - Block-scoped, can be reassigned  
**`const`** - Block-scoped, cannot be reassigned  

### 2. Primitive Data Types

1. `string` - Text values
2. `number` - Integers and floats
3. `boolean` - true/false
4. `null` - Intentional empty value
5. `undefined` - Variable declared but not assigned
6. `symbol` - Unique identifier (ES6+)
7. `bigint` - Large integers (ES2020+)

### 3. Type Coercion

JavaScript automatically converts types in certain operations.

---

## Files in This Module

- `snippet-var-let-const-hoisting.js` - Variable declaration examples
- `snippet-data-types.js` - All primitive types with examples
- `snippet-type-coercion.js` - Type conversion examples
- `project-type-checker.js` - Mini project: Build a type checker tool
- `cheatsheet.md` - Quick reference guide

---

## Notes & Key Takeaways

*Add your learnings here as you work through the module*

- 
- 
- 

---

## Common Mistakes to Avoid

- ❌ Using `var` in modern JavaScript
- ❌ Confusing `null` and `undefined`
- ❌ Assuming `typeof null` returns "null" (it returns "object" - JavaScript bug)
- ❌ Forgetting `const` objects can have properties modified

---

**Completed:** [Date when finished]
