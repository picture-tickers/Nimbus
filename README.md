# Nimbus

## Overview

Nimbus is a compact, read-only utility created to help developers explore and validate the Base Sepolia network. It provides a fast way to inspect wallet balances, confirm network context, and reference deployed contracts through Basescan without interacting with blockchain state.

---

## Base Alignment

Nimbus is designed specifically for the Base ecosystem:
- Built for Base Sepolia testnet workflows  
- Uses official Coinbase and Base tooling  
- References chainId 84532 throughout the workflow  
- Explorer-first approach using Basescan  

All operations are strictly non-mutating.

---

## Capabilities

### Network Context
- Confirms active connection to Base Sepolia  
- Displays chainId and latest block number  

### Wallet Inspection
- Connects via Coinbase Wallet  
- Reads wallet balance only  
- Outputs verified explorer links  

### Deployment Awareness
- References deployed testnet contracts  
- Provides direct deployment and verification URLs  

---

## Internal Flow

Nimbus uses the Coinbase Wallet SDK to establish a wallet connection and relies on `viem` for JSON-RPC communication with Base Sepolia. It fetches wallet balance and block metadata in parallel to keep execution fast and minimal.

No transactions are signed, simulated, or broadcast.

---

## Repository Structure

- **app/nimbus.ts**  
  Core script responsible for wallet connection and network inspection.

- **contracts/**  
  Solidity contracts deployed to Base Sepolia for validation:
  - `inheritance.sol`
  - `ERC20contract.sol`
  - `ERC721contract.sol`

- **config/**  
  Network configuration files:
  - `base.sepolia.json`

- **reports/**  
  Sample outputs generated during validation:
  - `snapshot.log`

- **docs/**  
  Reference documentation:
  - `readme-notes.md`
  - `base-aa-glossary.md`

- **package.json**  
  Dependency manifest.

- **README.md**  
  Project documentation.

---

## Usage Notes

- Intended for inspection and verification only  
- Safe to run repeatedly  
- Suitable for validating Base tooling and account abstraction flows  
- All output is verifiable via Basescan  

---

## License

MIT License

---

## Testnet Deployment (Base Sepolia)

These deployments are used to validate Base tooling and confirm correct read-only behavior.

Network: Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  

Contract inheritance.sol address:  
0x26603dE1E5aD554C50dc3f73260f118b7DB161cb

Deployment and verification:
- https://sepolia.basescan.org/address/0x26603dE1E5aD554C50dc3f73260f118b7DB161cb
- https://sepolia.basescan.org/0x26603dE1E5aD554C50dc3f73260f118b7DB161cb/0#code  

Contract ERC20contract.sol address:  
0xE7ecD786CfA90D6CB5a03783671C42d2095b08dd 

Deployment and verification:
- https://sepolia.basescan.org/address/0xE7ecD786CfA90D6CB5a03783671C42d2095b08dd
- https://sepolia.basescan.org/0xE7ecD786CfA90D6CB5a03783671C42d2095b08dd/0#code  

Contract ERC721contract.sol address:  
0x2688249bF13d1834e8d10340a842BbEC52b1e622

Deployment and verification:
- https://sepolia.basescan.org/address/0x2688249bF13d1834e8d10340a842BbEC52b1e622
- https://sepolia.basescan.org/0x2688249bF13d1834e8d10340a842BbEC52b1e622/0#code  

These Base Sepolia deployments provide a controlled environment for validating Base SDKs, account abstraction tooling, and read-only onchain access before any Base Mainnet usage.

---

## Author

- GitHub: https://github.com/picture-tickers
  
- Email: 08-picture.tickers@icloud.com
