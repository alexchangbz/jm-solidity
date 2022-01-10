// https://eth-ropsten.alchemyapi.io/v2/6z_CP1D1OTfQYF55aZtgp3rmLGC76lV9

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/6z_CP1D1OTfQYF55aZtgp3rmLGC76lV9",
      accounts: [ '2b0560ea4ebee2353f57987042c350dc2d712ff4b8f3101a7791759c4b543742' ]
    }
  }
}
