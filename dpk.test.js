const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
    it("Returns the literal '0' when given no input", () => {
        const trivialKey = deterministicPartitionKey();
        expect(trivialKey).toBe("0");
    });

    it("Returns the partitionKey property if present", () => {
        const event = { partitionKey: "partitionKey" };
        expect(deterministicPartitionKey(event)).toBe("partitionKey");
    });

    it("Returns the SHA3-512 hash of the JSON stringified event if no partitionKey is present", () => {
        const event = { someProp: "someValue" };
        const hash = crypto
            .createHash("sha3-512")
            .update(JSON.stringify(event))
            .digest("hex");
        expect(deterministicPartitionKey(event)).toBe(hash);
    });

    it("Return the partitionKey value if the candidate is not an string and is lower than 256 characters", () => {
        const event = { partitionKey: 42 };
        const candidate = JSON.stringify(event.partitionKey);
        expect(deterministicPartitionKey(event)).toBe(candidate);
    });

    it("Returns the SHA3-512 hash of the candidate if it is longer than 256 characters", () => {
        const event = { partitionKey: "a".repeat(300) };
        const candidate = event.partitionKey;
        const hash = crypto
            .createHash("sha3-512")
            .update(candidate)
            .digest("hex");
        expect(deterministicPartitionKey(event)).toBe(hash);
    });
});
