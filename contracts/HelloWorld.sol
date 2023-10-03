// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract HelloWorld {
    string private greeting;
    address public owner;

    constructor() {
        greeting = "Hello World!";
        owner = msg.sender;
    }

    function helloWorld() public view returns (bytes32) {
        return bytes32(bytes(greeting));
    }

    function transferOwnership(address newOwner) public {
        require(msg.sender == owner, "Caller is not the owner");
        owner = newOwner;
    }
}
