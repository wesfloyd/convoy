const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ComputeLease", function () {

    before(function() {
        // runs once before the first test in this block
      })
    
    it("Should create a compute lease and initiate it", async function () {

        const [driver, miner] = await ethers.getSigners();
        const ComputeLeaseFactory = await ethers.getContractFactory("ComputeLease");
        const ComputeLease = await ComputeLeaseFactory.deploy("defipulse.com", 
            driver.address, miner.address);
    

        expect(await ComputeLease.status().to.equal(ComputeLease.Status.INITIATED.toString()));


    /**
    // Connect in order to pay?
    await ComputeLease.minerAcceptLease(...);
    expect(await ComputeLease.status().to.equal(50);

    minerCheckpoint
    await ComputeLease.initiateLease(...);
    expect(await ComputeLease.status().to.equal(50);

    ...


    // Transfer 50 tokens from owner to addr1
    await hardhatToken.transfer(addr1.address, 50);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);

    // Transfer 50 tokens from owner to addr1
    await hardhatToken.transfer(addr1.address, 50);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);

    // Transfer 50 tokens from addr1 to addr2
    await hardhatToken.connect(addr1).transfer(addr2.address, 50);
    expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
    */


    });
});