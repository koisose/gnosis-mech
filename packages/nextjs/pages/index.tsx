import type { NextPage } from "next";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Gnosis Chain</span>
            <span className="block text-4xl font-bold">Mech NFT Wallet</span>
          </h1>
          <p>
            instead of paying gas, make NFT wallet and use that as a gasless transactions and earn revenue stream using
            superfluid
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">Explore Verified Account</span>
          </h1>
          <p className="text-center text-lg">
            Whenever you send to these below username it will notify to their email address
          </p>
          <div className="flex flex-wrap gap-4 my-8 px-5 justify-center">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-md rounded-3xl">
              <div className="flex flex-col space-y-3">
                <span className="my-2 font-bold">dsa</span>

                <button className={`h-10 btn btn-primary btn-sm px-2 rounded-full space-x-3 `}>
                  <BanknotesIcon className="h-6 w-6" />
                  <span>Send</span>
                </button>
                <button className={`h-10 btn btn-primary btn-sm px-2 rounded-full space-x-3 `}>
                  <span>Go to Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
