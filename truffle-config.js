const path = require('path')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(
    __dirname,
    'client/src/contracts'
  ),
  compilers: {
    solc: {
      version: '>=0.7.0 <0.9.0',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    develop: {
      port: 7545,
      network_id: '*',
    },
  },
}
