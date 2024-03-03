'use client'
import React, { FormEvent, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { CheckCircle, X } from 'lucide-react';
import Image from 'next/image';
import { Campaign } from '@/lib/definitions';

const defaultDonationAmt = [
  {
    amt: '1k',
    setAmt: '1000.00'
  },
  {
    amt: '5k',
    setAmt: '5000.00'
  },
  {
    amt: '10k',
    setAmt: '10000.00'
  },
  {
    amt: '25k',
    setAmt: '25000.00'
  },
  {
    amt: '50k',
    setAmt: '50000.00'
  },
  {
    amt: '75k',
    setAmt: '75000.00'
  },
  {
    amt: '100k',
    setAmt: '100000.00'
  },
  {
    amt: '200k',
    setAmt: '200000.00'
  },
  {
    amt: '500k',
    setAmt: '500000.00'
  },
];

interface Props{
  campaignList: Campaign[];
}

const DonationSection = ({campaignList}: Props) => {
  const [campaign, setCampaign] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const publicKey = 'pk_test_2b74aab00574728a1603061034868a0e8aac3d72';
  const email = 'helpmeet52@gmail.com';

  const handleCampaignChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCampaign(event.target.value);
  };

  const handleAmountInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputAmount(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    // Trim input amount
    const trimmedInputAmount = inputAmount.trim();
  
    // Check if campaign and input amount are provided
    if (!campaign) {
      setErrorMessage('Please select a campaign!');
      return;
    }
  
    if (!trimmedInputAmount) {
      setErrorMessage('Please enter a donation amount!');
      return;
    }
  
    // Parse input amount to float
    const parsedInputAmount = parseFloat(trimmedInputAmount);
  
    // Check if parsed input amount is valid
    if (isNaN(parsedInputAmount) || parsedInputAmount <= 0) {
      setErrorMessage('Please enter a valid donation amount!');
      return;
    }
  
    // Set loading state
    setLoading(true);
  
    // Find selected campaign
    const selectedCampaign = campaignList.find(campaignItem => campaignItem._id === campaign);
  
    // Check if selected campaign exists
    if (!selectedCampaign) {
      setErrorMessage('Invalid campaign selected!');
      setLoading(false);
      return;
    }
  
    // Construct data object with campaign ID, title, email, and amount
    const formData = {
      campaign: {
        id: campaign,
        title: selectedCampaign.title
      },
      email,
      amount: parsedInputAmount * 100 // Convert to kobo (lowest currency denomination in Nigeria)
    };
  
    // Simulate asynchronous operation
    setTimeout(() => {
      setShowPopup(true);
      console.log('Form submitted with data:', formData);
      setLoading(false);
    }, 1500);
  };
  
  
  const PaymentSuccess = () => {

    setDonationSuccess(true)
    setShowPopup(false)
  }

  const PaymentProps = {
    email,
    amount,
    publicKey,
    text: "Confirm Payment",
    onSuccess: PaymentSuccess,
    onClose: () => alert("Wait! Your Donation is neeeded, don't go!!!!"),
  };

  return (
    <>
      <section className='p-5 lg:px-12 bg-[#16231F]/75 text-gray-100'>
        <div className='xl:max-w-[1196px] m-auto pt-10'>
          <h3 className='text-lg font-bold text-center'>Thank you for Considering Joining Us in Helping the Needy!</h3>
          <div className='py-12 md:flex gap-5 lg:gap-10 md:px-5'>
            <div className='w-1/2 my-2 hidden md:block'>
              <Image src='/6.webp' width={500} height={500} alt='' className='h-[80%]  lg:h-full w-full rounded-2xl opacity-80' />
            </div>
            <div className='md:w-1/2'>
              <div className="text-red-500 italic">{errorMessage}</div>
              <form action="" className='py-5' onSubmit={onSubmit}>
                <div className='flex flex-col gap-2 py-3'>
                  <label htmlFor="campaignInput" className='px-2'>Select Campaign</label>
                  <select name="campaign" id="campaignInput" className='w-full border border-orange-400 rounded-lg p-3  text-gray-700' onChange={handleCampaignChange}>
                    <option value="">-------</option>
                    {campaignList.map((campaign) =>
                      <option value={campaign._id} key={campaign._id} className='capitalize'>{campaign.title}</option>
                    )}
                  </select>
                </div>
                <div className='flex flex-col gap-2 py-3'>
                  <label htmlFor="DonAmt" className='px-2'>Donation Amount</label>
                  <div className='flex gap-2 flex-wrap justify-center items-center bg-[#E8FAF3] p-5 rounded-xl'>
                    {defaultDonationAmt.map((amt, index) =>
                      <input className={`${amt.setAmt==inputAmount?'bg-[#1ECA8C] text-white':'bg-white  text-gray-700'} hover:bg-[#1ECA8C] hover:text-white rounded-md p-1 px-3 text-lg`} onClick={()=>setInputAmount(amt.setAmt)} value={amt.amt} type='button' key={index}/>
                    )}
                  </div><br />
                  <div className='flex items-center bg-[#1ECA8C] rounded-lg'>
                    <span className='font-bold text-white p-3 text-2xl'>&#8358;</span>
                    <input type="number" name="donation-amount" id="DonAmt" className='w-full border border-orange-400 rounded-lg p-3 text-gray-700 text-2xl placeholder:text-lg' min={0} defaultValue={inputAmount} placeholder='Enter Donation Amount' onChange={handleAmountInputChange} required/>
                  </div>
                </div>         
                <div className='flex justify-center pt-10'>
                  {loading ? (
                    <button className='bg-[#1ECA8C] font-bold rounded-md p-3 px-5 text-sm text-white border border-orange-400' disabled>Loading...</button>
                  ) : (
                    <button className='bg-[#1ECA8C] font-bold rounded-md p-3 px-5 text-sm text-white hover:shadow-lg hover:shadow-orange-400 border border-orange-400'>Make Donation</button>
                  )}
                </div>
              </form>          
            </div>            
          </div>
        </div>
        
      </section>
      {showPopup && (  
      <section className='bg-[#5f5d5db0] w-full min-h-svh fixed top-0 z-10 p-5'>        
        <div className="flex justify-center items-center min-h-svh text-gray-600">
          <div className="bg-white p-10 border rounded-xl text-center relative">
            <X className='absolute top-0 right-2 pt-2' onClick={()=>setShowPopup(false)}/>
            <h2 className='font-semibold text-md'>Confirm Donation Details:</h2>
            <div className='py-5'>
              <p className='text-center text-xl leading-8'>
                You are about to donate <br/> <span className='text-orange-400 font-semibold'>&#8358; {`${(parseInt(inputAmount)).toLocaleString()}.00`}</span> <br/> to <br/><span className='text-[#1ECA8C] italic font-semibold'>{campaign}.</span>
              </p>
            </div>
            <div>
              <PaystackButton {...PaymentProps} className='bg-[#1ECA8C] font-bold rounded-md p-3 px-5 text-sm text-white hover:shadow-lg hover:shadow-orange-400 border border-orange-400'/>
            </div>
          </div>
        </div>
      </section>             
      )}

    {donationSuccess && (  
      <section className='bg-[#5f5d5db0] w-full min-h-svh fixed top-0 z-10 p-5'>        
        <div className="flex justify-center items-center min-h-svh text-gray-600">
          <div className="bg-white p-10 border rounded-xl text-center relative">
            <X className='absolute top-0 right-2 pt-2' onClick={()=>setDonationSuccess(false)}/>
            <div className='flex justify-center flex-col items-center'>
              <CheckCircle width={50} height={50} className='font-semibold text-md text-[#1ECA8C]'/>
              <div className='py-5'>
                <p className='text-center text-xl leading-8 font-semibold'>
                  <span className=''>&#8358; {(1000000).toLocaleString()}</span> <br />
                  <span className=' uppercase text-xs'>Your donation was successful!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>  
    )}
      
    </>
  );
};

export default DonationSection;
