// Given the string representations of two integers, return the string
// representation of the sum of those integers.

// For example:
// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides
// the ten numerals "0" to "9".

function sumStrings(a, b) {
  a = a.trim() || "0";
  b = b.trim() || "0";

  return console.log((BigInt(a) + BigInt(b)).toString());
}

sumStrings("1", "1");
