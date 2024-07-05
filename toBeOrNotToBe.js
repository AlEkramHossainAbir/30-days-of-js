const expect = (val) => ({
    toBe: (num) => {
        if (val !== num) {
            throw new Error("Not Equal");
        }
        return true;
    },
    notToBe: (num) => {
        if (val === num) {
            throw new Error("Equal");
        }
        return true;
    }
});

expect(5).toBe(5);
expect(5).notToBe(6);