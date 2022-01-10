import React, { useEffect, useState } from 'react';
import { Navbar, Welcome, Services, Transactions, Loader, Footer } from './components';

import { ethers } from 'ethers';

import { contractABI, contractAddress } from './utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    const number = await transactionContract.testNumber();

    // console.log(number);

    // console.log({
    //     provider,
    //     signer,
    //     transactionContract
    // })
}

const App = () => {
  getEthereumContract();
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
