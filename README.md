Bitcoin Wallet Generator
Este projeto em Node.js gera uma carteira Bitcoin utilizando as bibliotecas bip32, bip39 e bitcoinjs-lib. Ele cria uma carteira HD (Hierarchical Deterministic) compatível com a rede de testes (testnet), fornecendo o endereço Bitcoin, a chave privada e a frase mnemônica (seed) para recuperação da carteira.

Funcionalidades
Geração de Frase Mnemônica (Seed): Utiliza o padrão BIP39 para gerar uma sequência de 12 palavras que pode ser usada para recuperar a carteira.
Derivação de Chaves HD: Implementa a derivação de chaves utilizando o padrão BIP32, permitindo a geração de múltiplas chaves públicas e privadas a partir de uma única seed.
Criação de Endereço Bitcoin: Gera um endereço de pagamento do tipo P2PKH compatível com a rede de testes (testnet).
Pré-requisitos
Node.js (v20.17.0 ou superior)
npm (v9.6.7 ou superior)
Como Executar
Clone este repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/bitcoin-wallet-generator.git
Instale as dependências do projeto:

bash
Copiar código
cd bitcoin-wallet-generator
npm install
Execute o script para gerar a carteira:

bash
Copiar código
node createWallet.js
O terminal exibirá o endereço Bitcoin, a chave privada e a frase mnemônica (seed):

bash
Copiar código
Carteira gerada:
Endereço: <seu-endereço-bitcoin>
Chave privada: <sua-chave-privada>
Seed: <sua-seed>
Estrutura do Projeto
createWallet.js: Script principal que executa a geração da carteira.
package.json: Contém as dependências do projeto e scripts de execução.
Considerações de Segurança
Não compartilhe sua chave privada ou seed: Essas informações são confidenciais e permitem acesso total aos fundos da sua carteira.
Use a rede de testes para experimentos: Este projeto usa a testnet por padrão. Se você deseja utilizar a rede principal, altere o código para usar bitcoin.networks.bitcoin, mas esteja ciente dos riscos.
Licença
Este projeto é licenciado sob a MIT License.
