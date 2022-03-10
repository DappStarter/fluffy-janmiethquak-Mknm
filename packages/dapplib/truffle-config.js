require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name release mad soap harvest close borrow tip'; 
let testAccounts = [
"0x727d81aaacdcf8637c4713b217a86e8ae4eca63e5ed8e23486bbd31184b9cf61",
"0x72f3957b26388ff2890d1105af729ec445b7b5ca336e3c05ba6cc3824b018bf6",
"0x740f4858fd250590fb04a0e3ea0a37479e8749c794ae007402390234e37e30d8",
"0x8fc4a31eb42391423528272db68345531a96e52ccbe90ff99e8cb1cb0ca55a24",
"0x778bd0851d1bcbf8412ad83136b1da30e67c49512a9ecc00cc619acb0b1c3c8b",
"0x59521f97ec44ad08bb0bdc6d4e07842aac38d8e9422172d53444d58c8395fb51",
"0x5104531178516fc0f25858ba7b286db67f6e6e8ecd185068e256eb1298f26666",
"0xe066686b8bc6b30977f8c67fec3556340e719bd940bc3bb834885b3164148ef6",
"0x62e362085f19b3b2fea762b21573b5d5884d20e2495a6e5e16f32a9643482e40",
"0xf3d07a2ee4198babbed0405b266a1bd6db127b1e87cbe45d1eed120972722beb"
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
            version: '^0.8.0'
        }
    }
};

