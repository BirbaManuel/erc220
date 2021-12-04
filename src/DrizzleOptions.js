import  MIKUTANOTOKEN from './MIKUTANOTOKEN.json';

const options = {
    contracts: [MIKUTANOTOKEN],
    web3: {
        fallback:{
            type:"ws",
            url:"ws://127.0.0.1:9545",
            // url:"https://rinkeby.infura.io/v3/d0b85e210c454d9796089c4d886601d2", rinkeby
        },
    }
};

export default options;
