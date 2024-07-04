// Function to handle Ethereum donations
function donateEthereum() {
    if (typeof window.ethereum !== 'undefined') {
        ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
            const account = accounts[0];
            const amount = web3.utils.toWei('50', 'ether');
            const transactionParameters = {
                to: '0x9703fc5F0C0274740f251F30D7Ada155d1E597ff',
                from: account,
                value: amount,
            };

            ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            })
            .then(txHash => console.log(txHash))
            .catch(error => console.error);
        });
    } else {
        console.log('Ethereum wallet not detected');
    }
}

// Function to handle Beam Wallet donations
function donateBeam() {
    window.location.href = 'https://helga.beam.eco/';
}
