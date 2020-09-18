describe("My FizzBuzz function", function(){

    beforeEach (function(){
        fizzbuzz = new fizzBuzz();
    });

    describe ("Returns number, fizz, buzz, or fizzbuzz", function(){
        it("should exist", function(){
            expect(fizzBuzz).toBeDefined();
        });

        it ("Should return fizz when called as fizzBuzz(9)", function(){
var result = fizzBuzz(9)
expect (result).toBe("Fizz");
        });

        it ("Should return buzz when called as fizzBuzz(10)", function(){
            var result = fizzBuzz(10)
            expect (result).toBe ("Buzz")
        });

        it ("Should return FizzBuzz when called as fizzBuzz(15)", function(){
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz")
        });

        it ("Should return 2 when called as fizzBuzz(2)", function(){
            var result = fizzBuzz(2)
            expect(result).toBe(2)
        });
    });

});