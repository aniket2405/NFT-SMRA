import React, { useState, useEffect } from 'react'
import Auction from './contracts/Auction.json'
import getWeb3 from './getWeb3'
import MetamaskLogin from './MetamaskLogin'

import './App.css'

function App() {
  const [storageValue, setStorageValue] =
    useState(undefined);
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [contract, setContract] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3()

        // Use web3 to get the user's accounts.
        const accounts =
          await web3.eth.getAccounts()

        // Get the contract instance.
        const networkId =
          await web3.eth.net.getId()
        const deployedNetwork =
          Auction.networks[networkId]
        const contract = new web3.eth.Contract(
          Auction.abi,
          deployedNetwork &&
            deployedNetwork.address
        )

        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        setWeb3(web3)
        setAccounts(accounts)
        setContract(contract)
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        )
        console.error(error)
      }
    }
    init()
  }, [])

  useEffect(() => {
    /* const load = async () => {
      await contract.methods
        .(5)
        .send({ from: accounts[0] })

      const response = await contract.methods
        .get()
        .call()

      setStorageValue(response)
    } 
    setStorageValue(50); */
    if (
      typeof web3 !== 'undefined' 
      && typeof accounts !== 'undefined'
      && typeof contract !== 'undefined'
    ) {
      // load();
      return(
        <h2>hello</h2>
      )
    }
  }, [web3, accounts, contract])

  if (typeof web3 === 'undefined') {
    return (
      <div>
        Loading Web3, accounts, and contract..
      </div>
    )
  }

  return (
    <div className='App'>
      <h1>
        This is a blockchain-based NFT Marketplace.
      </h1>
      <MetamaskLogin />
      
    </div>
  )
}

export default App
