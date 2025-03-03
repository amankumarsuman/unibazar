import React, { useState } from "react";
import Image from "next/image";
import AmazonLogo from '../../../assets/unibazar-home-images/amazon-logo.svg';
import MeeshoLogo from '../../../assets/unibazar-home-images/meesho-logo.png';
import CredentialDailog from "../CredentialsDailog/CredentialsDailog";
import { useRouter } from 'next/router';
const LinkAccount = ({ isOpen, onClose }) => {
  const [isCredentialDailogOpen, setIsCredentialDailogOpen] = useState(false);
  const [CredentialDailogContent, setCredentialDailogContent] = useState({ title: '', content: '' });
  const router = useRouter();

  // State to track filled accounts
  const [filledAccounts, setFilledAccounts] = useState({
    amazon: false,
    meesho: false,
  });

  const handleImageClick = (title, content, accountKey) => {
    setCredentialDailogContent({ title, content });
    setIsCredentialDailogOpen(true);

    // Save the account key to track which account is being filled
    setFilledAccounts(prev => ({ ...prev, [accountKey]: true }));
  };

  const handleNextClick = () => {
    router.push('/dashboard'); // Redirect to the dashboard
  };

  // Check if the current route is '/dashboard'
  const isDashboardRoute = router.pathname === '/dashboard';

  //if (isDashboardRoute || !isOpen) return null;

  return (
    <div className="max-w-[600px] bg-gray-50 w-full max-md:mt-10 h-fit gap-0 flex flex-col items-center my-10 py-10 rounded-xl px-5">
      <h1 className="text-[30px] font-bold text-center">Link Account</h1>
      <p className="text-[16px] text-[#8692a6] leading-[34px] font-normal text-center">For the purpose of industry regulation, your details are required.</p>
      <div className="w-full flex justify-center gap-2 mb-8 ">
        {/* Conditionally render account options based on filled state */}
        <div className={`flex flex-col items-center w-[144px] h-[130px] py-3 bg-[rgba(255,_255,_255,_1)] rounded-xl ${filledAccounts.amazon ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={() => !filledAccounts.amazon && handleImageClick('Amazon', 'Amazon is an Indian fashion e-commerce platform.', 'amazon')}>
          <Image src={AmazonLogo} alt='AmazonLogo' className="w-[48px] h-[48px] rounded-full " />
          <div className="h-6 mt-2">
            <span className="font-bold text-[16px] leading-[17px] text-[rgba(0,_0,_0,_0.7)]">Amazon</span>
          </div>
          {/* Conditionally render check icon and linked message */}
          {filledAccounts.amazon && (
            <div className="flex items-center mt-2">
              {/*<Image src={CheckIcon} alt="Linked" className="w-5 h-5 text-green-500" />  Adjust size as needed */}
              <span className="ml-1 text-green-500">Linked</span>
            </div>
          )}
        </div>

        <div className={`flex flex-col items-center w-[144px] h-[130px] py-3 bg-[rgba(255,_255,_255,_1)] rounded-xl ${filledAccounts.meesho ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={() => !filledAccounts.meesho && handleImageClick('Meesho', 'Meesho is an Indian social commerce platform.', 'meesho')}>
          <Image src={MeeshoLogo} alt='Meeshologo' className="w-[48px] h-[48px] rounded-full " />
          <div className="h-6 mt-2">
            <span className="font-bold text-[16px] leading-[17px] text-[rgba(0,_0,_0,_0.7)]">Meesho</span>
          </div>
          {filledAccounts.meesho && (
            <div className="flex items-center mt-2">
              {/*<Image src={CheckIcon} alt="Linked" className="w-5 h-5 text-green-500" />  Adjust size as needed */}
              <span className="ml-1 text-green-500">Linked</span>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center w-[144px] h-[130px] py-3 bg-[rgba(255,_255,_255,_1)] rounded-xl">
          <div className="w-[48px] h-[48px] rounded-full bg-[#f5f5f5]"></ div>
          <div className="h-6 mt-2">
            <span className="flex text-center font-bold text-[16px] text-[rgba(0,_0,_0,_0.7)]">
              Own other <br /> site </span>
          </div>
        </div>
      </div>
      {/* Conditionally render the NEXT button based on the route */}
      {!isDashboardRoute && (
        <button
          onClick={handleNextClick}
          className="bg-teal-600 hover:bg-teal-800 w-full md:w-[440px] md:px-24 px-12 py-4 text-[22px] font-normal text-white tracking-[0.05rem] rounded-lg mt-5"
        >
          NEXT
        </button>
      )}
      <CredentialDailog
        isOpen={isCredentialDailogOpen}
        onClose={() => setIsCredentialDailogOpen(false)}
        title={CredentialDailogContent.title}
        content={CredentialDailogContent.content}
      />
    </div>
  );
};

export default LinkAccount;