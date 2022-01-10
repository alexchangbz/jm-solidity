const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  it("It should return a correct number", async function () {
    const Transactions = await ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();
    await transactions.deployed();

    const number = await transactions.testNumber();

    console.log(number);
    await transactions.setNumber(7);
    const newNumber = await transactions.testNumber();
    console.log(newNumber);

    expect(await transactions.testNumber()).to.equal(7);

   
  });
});
