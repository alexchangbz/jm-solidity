require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// https://eth-ropsten.alchemyapi.io/v2/6z_CP1D1OTfQYF55aZtgp3rmLGC76lV9

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: process.env.ALCHEMY_API,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
}
