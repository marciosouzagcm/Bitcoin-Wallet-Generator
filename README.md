# Bitcoin Wallet Generator

Este projeto em Node.js gera uma carteira Bitcoin utilizando as bibliotecas `bip32`, `bip39` e `bitcoinjs-lib`. Ele cria uma carteira HD (Hierarchical Deterministic) compatível com a rede de testes (testnet), fornecendo o endereço Bitcoin, a chave privada e a frase mnemônica (seed) para recuperação da carteira.

## Funcionalidades

- **Geração de Frase Mnemônica (Seed)**: Utiliza o padrão BIP39 para gerar uma sequência de 12 palavras que pode ser usada para recuperar a carteira.
- **Derivação de Chaves HD**: Implementa a derivação de chaves utilizando o padrão BIP32, permitindo a geração de múltiplas chaves públicas e privadas a partir de uma única seed.
- **Criação de Endereço Bitcoin**: Gera um endereço de pagamento do tipo P2PKH compatível com a rede de testes (testnet).

## Pré-requisitos

- Node.js (v20.17.0 ou superior)
- npm (v9.6.7 ou superior)

## Como Executar

Clone este repositório:

```bash
git clone https://github.com/seu-usuario/bitcoin-wallet-generator.git
