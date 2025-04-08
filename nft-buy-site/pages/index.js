import { ThirdwebProvider, ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";

export default function Home() {
  return (
    <ThirdwebProvider activeChain={Polygon}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Buy Your NFT</h1>
        <ConnectWallet className="mb-4" />

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Exclusive NFT</h2>
          <p className="text-gray-600 mb-4">Mint your limited edition NFT now on Polygon!</p>

          <Web3Button
            contractAddress="0x3a7E6b22dE7cb5EFc51D2c5d1025B33E032c18D9"
            action={async (contract) => {
              await contract.erc721.claim(1);
            }}
          >
            Buy Now
          </Web3Button>
        </div>
      </div>
    </ThirdwebProvider>
  );
}