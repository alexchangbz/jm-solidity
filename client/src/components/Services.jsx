import {useState} from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

const getNumber = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    const number = await transactionContract.testNumber();

    // setState({ stateName : updatedStateValue })

    console.log(number);

}

function Services() {
    const [myNumber, setMyNumber] = useState()

    return (
        <div>
            <h1>{myNumber}</h1>
        </div>
    )
}

export default Services
