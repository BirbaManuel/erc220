import  MIKUTANOTOKEN from './MIKUTANOTOKEN.json';

const options = {
    contracts: [MIKUTANOTOKEN],
    web3: {
        fallback:{
            type:"ws",
            url:"ws://127.0.0.1:9545",
        },
    }
};

export default options;
