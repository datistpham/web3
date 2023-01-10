import Image from "next/image";
import { useState } from "react";

const nfts = [
  {
    image: "",
    description: "Test description",
    price: "Test price",
  },
];

export default function MyAssets() {
  const [open, setOpen]= useState(false)
  return (
    <div className="flex justify-center">
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
              <Image src={nft.image} className="rounded" alt="NFT image" />
              <div className="p-4 bg-black">
                <p className="text-2xl font-bold text-white">
                  Price - {nft.price} Eth
                </p>
                <button onClick={()=> setOpen(true)} className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded">Đấu giá</button>
                <br />
                {open=== true && 
                  <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div style={{color: "#fff"}}>1D 23H 45M</div>
                    <div style={{color: "#fff"}}>500$</div>
                  </div>
                }
                <button
                  className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                  onClick={() => listNFT(nft)}
                >
                  List
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
