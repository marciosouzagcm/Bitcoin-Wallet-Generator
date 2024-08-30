// Importando as dependências necessárias
// bip32: Biblioteca para gerar e manipular carteiras HD (Hierarchical Deterministic)
// bip39: Biblioteca para gerar e converter mnemônicos em seeds (frases de recuperação)
// bitcoinjs-lib: Biblioteca para construir e manipular transações Bitcoin
const bip32 = require("bip32");
const bip39 = require("bip39");
const bitcoin = require("bitcoinjs-lib");

// Definindo a rede
// network: Define a rede que será usada para gerar os endereços Bitcoin.
// bitcoin.networks.testnet: Rede de testes do Bitcoin, usada para desenvolvimento e testes.
// bitcoin.networks.bitcoin: Rede principal do Bitcoin, usada para transações reais.
const network = bitcoin.networks.testnet;

// Definindo o caminho de derivação
// path: Define o caminho de derivação HD (Hierarchical Deterministic) para gerar endereços.
// `m/49'/1'/0'/0'`: Este caminho é usado para derivar endereços compatíveis com a rede de teste.
// `49'`: Define o tipo de carteira (P2WPKH em P2SH).
// `1'`: Coin type (1 para testnet, 0 para mainnet).
// `0'`: Account, `0'` é a primeira conta.
// `0'`: Primeira chave (0 para receber, 1 para troco).
const path = `m/49'/1'/0'/0'`;

// Criando as palavras mnemônicas para a seed (frase de recuperação)
// mnemonic: Gera uma sequência de palavras que representa a seed da carteira.
// A seed é usada para derivar todas as chaves da carteira.
let mnemonic = bip39.generateMnemonic();

// Convertendo a frase mnemônica em seed
// Seed: A seed é um buffer de bytes gerado a partir da frase mnemônica.
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criando a raiz da carteira HD (Hierarchical Deterministic)
// root: A raiz da carteira HD é gerada a partir da seed.
// bip32.fromSeed: Constrói a carteira HD a partir da seed e da rede definida.
let root = bip32.fromSeed(seed, network);

// Derivando o par de chaves da conta
// account: Deriva a conta a partir da raiz utilizando o caminho de derivação especificado.
// node: Deriva a primeira chave pública/privada (0/0) da conta.
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

// Gerando o endereço Bitcoin
// btcAddress: Gera um endereço de pagamento Bitcoin (P2PKH) a partir da chave pública.
// bitcoin.payments.p2pkh: Função para criar um endereço P2PKH (Pay to Public Key Hash).
// pubkey: A chave pública do nó é usada para gerar o endereço.
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey, // Usa a chave pública derivada
    network: network, // Define a rede utilizada (testnet)
}).address;

// Exibindo as informações da carteira gerada
console.log("Carteira gerada:");
console.log("Endereço:", btcAddress);
console.log("Chave privada:", node.toWIF()); // toWIF: Converte a chave privada para o formato Wallet Import Format
console.log("Seed:", mnemonic); // Exibe a frase mnemônica (seed) usada para gerar a carteira
