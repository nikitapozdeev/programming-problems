/*
  Level: 4 kyu
  Link: https://www.codewars.com/kata/538daad88ca4a39acb000705
  Instructions: 
    Write an IntStorage object/class, which allows reading bit data from a series of 
    integer values as if they were a single continuous stream of memory. 
    The class should have the following features:

    new IntStorage(byteLength, ints)
    The parameter byteLength is an optional argument. If it is omitted (or is null or undefined), its value should be defaulted to 32. 
    If it is invalid (not a primitive, positive integer between 1 and 32), an error should be thrown. 
    Each integer should only have data allocated to the last (byteLength) bits (counted from the right). 
    If the value is invalid, an error should be thrown.

    The parameter ints is an optional argument. If it is not omitted (and is not null or undefined) it should be an array of zero or more integer values. 
    Each integer in the array should only have data in the last (byteLength) number of bits (counted from the right). 
    Each integer should be added to the ints array property. If the ints value or any of its integer values are invalid, an error should be thrown.

    instance.ints
    The property ints an array holding zero or more 32-bit integer values.

    instance.length
    The length parameter reflects the number of bits stored by the IntStorage instance. 
    If an ints array has been passed in for construction, length should reflect the number of data-allocated bits stored in those values 
    (assuming each integer has data in all allowed bit positions, as indicated by byteLength). For example, if the byteLength is 8, and there 
    are 7 integers passed in as part of the ints array, the number of allocated data bits will be 56.

    instance.read(from, count)
    This is the only method you need to implement for this kata. It accepts two optional parameter, from and count, and returns a 32-bit integer

    The parameter from, if provided (and not null or undefined) should be a primitive integer, zero or greater 
    (0 being the first bit position, 1 being the second, and so on). If not provided, it should default to 0. 
    It should refer to a bit position in the data (counting, from the left, each allocated bit (as defined by byteLength) running across 
    all integer values in the IntStorage instance). Data should be read from this bit position onwards. If the from value is invalid, an error should be thrown.

    The parameter count, if provided (and not null or undefined) should be a primitive integer, between 0 and 32. 
    It dictates how many bits should be read from the bit position marked by from, onwards (counting right). 
    If there is not enough data to read the full count of bits from storage, or there is no stored data to read from to begin with, 
    count is considered invalid. Otherwise, a primitive, 32-bit integer should be returned with the data (1s and 0s) copied into the correct positions. 
    The data should be stored at the (right-most) end of the integer value. If the count value is invalid, an error should be thrown.

    Let's have a look at some examples:

    var instance = new IntStorage(6, [43, 36, 17]);
    // == { ints: [43 (101011), 36 (100100), 17 (010001)], length: 18 }

    instance.read(5, 2);
    // 101011 100100 010001
    // -----^ from (5)
    //      ^ ^ count (2)
    //      1 1 == extracted data
    // == 3 (11)

    instance.read(8, 8);
    // 101011 100100 010001
    // ------ --^ from (8)
    //          ^^^^ ^^^^ count (8)
    //          0100 0100
    // == 68 (01000100)

    instance.read(12);
    // 101011 100100 010001
    // ------ ------ ^ from (12)
    //               ^^^^^^ count (defaulted to byteLength = 6)
    //               010001
    // == 17 (010001)

    instance.read();
    // 101011 100100 010001
    // ^ from (defaulted to 0)
    // ^^^^^^ count (defaulted to byteLength = 6)
    // 101011
    // == 43 (101011)

    instance.read(15, 5);
    // 101011 100100 010001
    // ------ ------ ---^ from (15)
    //                  ^^^\*\* count (5) \* error; not enough data to read
*/

// TODO: refactoring
class IntStorage {
  constructor(byteLength, ints) {
    this.byteLength = byteLength == null ? 32 : byteLength;
    this.ints = [...(ints || [])];
    this.memory = '';
    
    if (typeof this.byteLength !== 'number' || Number.isNaN(byteLength) || this.byteLength < 1 || this.byteLength > 32) {
      throw new Error('Parameter "byteLength" must have a value between 1 and 32!');
    }
     
    this.ints.forEach(int => {
      const binary = int.toString(2);
      if (typeof int !== 'number' || binary.length > this.byteLength) {
        throw new Error("Ints have data beyond byteLength");
      }
      this.memory += int.toString(2).padStart(this.byteLength, '0');
    });
  }
  
  read(from = 0, count = this.byteLength) {
    const end = from + count;
    if (end > this.length || from < 0 || count < 0) {
      throw new Error('Not enough data to read!');
    }
    
    const chunk = this.memory.substring(from, end) || 0;
    return parseInt(chunk, 2);
  }
  
  get length() {
    return this.ints.length * this.byteLength;
  }
}