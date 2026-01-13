// app/nimbus.ts
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { createPublicClient, http, formatEther } from "viem";
import { baseSepolia } from "viem/chains";

const NETWORK = {
  name: "Base Sepolia",
  chainId: 84532,
  rpc: "https://sepolia.base.org",
  explorer: "https://sepolia.basescan.org",
};

const sdk = new CoinbaseWalletSDK({
  appName: "Nimbus (Built for Base)",
});

const client = createPublicClient({
  chain: baseSepolia,
  transport: http(NETWORK.rpc),
});

async function connect() {
  const provider = sdk.makeWeb3Provider(NETWORK.rpc, NETWORK.chainId);
  const accounts = (await provider.request({
    method: "eth_requestAccounts",
  })) as string[];

  return accounts[0];
}

async function snapshot(address: `0x${string}`) {
  const [balance, block] = await Promise.all([
    client.getBalance({ address }),
    client.getBlock(),
  ]);

  return {
    address,
    balance: formatEther(balance),
    blockNumber: block.number,
    timestamp: block.timestamp,
  };
}

async function run() {
  const address = await connect();
  const data = await snapshot(address);

  console.log("Network:", NETWORK.name);
  console.log("chainId:", NETWORK.chainId);
  console.log("Wallet:", data.address);
  console.log("Balance:", data.balance, "ETH");
  console.log("Latest block:", data.blockNumber);
  console.log("Explorer:", `${NETWORK.explorer}/address/${data.address}`);
}

run().catch((e) => {
  console.error("Error:", e.message);
});
