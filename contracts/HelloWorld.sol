// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract HelloWorld {
    bytes32 public greeting;
    address public owner;

    constructor() {
        greeting = bytes32("Hello World!");
        owner = msg.sender;
    }

    function helloWorld() public view returns (bytes32) {
        return (greeting);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    function transferOwnership(address newOwner) public onlyOwner {
        owner = newOwner;
    }

    function changeGreeting(bytes32 newGreeting) public onlyOwner{
        greeting = newGreeting;
    }
}
