require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food tragic rebel magnet combine honey light army genre'; 
let testAccounts = [
"0x6b04c03c8300349d70ba3e1bd465196994102fd0968a147cecfaeaaaa02dfdb1",
"0xb8125b3098fbbc2e9c1abc9cd29c89dc545c87b396f76fa9d757c059b41c656c",
"0xc664ee3f191e0847fe817eb0f682d4161886e36707c1ea7cffd0c726d69ef862",
"0x51e040e4c333c7f1f38f363e42b37fc53b43bf40245d7a827e5fff3bf45ee0d4",
"0xeb4236e6f53735c143c9dcb1730e52c260c940bff08c3b6e1aeef6806078dd87",
"0xfd141144552825c803a12982b7f68e0089625a7f14e5895f52a822d0b5e93913",
"0x5f522e7cbc456f5aec21045ded15dfd97cad66a685c55a4e5ad9cc309348349c",
"0xa67cb50c537d740b607e0df17a89e1f5e30e2ef11ee6fa35109aacb9ef6b8f7f",
"0x9ab99d8fc8656d07b0837bed911050e8718e306c1d4c8abff77b147978f6e280",
"0xdb22ba7f0584390ca18e88fa2144026e3150ea989b50bfd6ba85bc2a6ab3fac7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
