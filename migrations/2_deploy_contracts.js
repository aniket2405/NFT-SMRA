const Auction = artifacts.require('./Auction.sol')

module.exports = async function (deployer) {
  await deployer.deploy(
    Auction,
    120,
    240,
    '0x1cC51A2528e51BA1B3c5071156496b391E37a5f2',
    10
  )
}
