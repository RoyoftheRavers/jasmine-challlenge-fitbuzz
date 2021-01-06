describe("My fizzBuzz function", function() {
    
    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    })

        describe("check numbers", function(){

            it("should return FizzBuzz when called as FizzBuzz(15)", function() {
                var result = fizzBuzz(15);
                expect(result).toBe("FizzBuzz");
            })

            it("should return Fizz when called as Fizzbuzz(3)", function() {
                var result = fizzBuzz(3);
                expect(result).toBe("Fizz");
            })
            it("should return Buzz when called as FizzBuzz(5)", function() {
                var result = fizzBuzz(5);
                expect(result).toBe("Buzz");
            })
        })
})