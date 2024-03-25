import shapImg from '@/assets/waytojoin/Group 47354.png';
import qrCode from '@/assets/waytojoin/Frame 40075.png';
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { useState } from 'react';

const WayToJoin = () => {
  const [copied, setCopied] = useState(false);

  // Copy the contact ID =============
  const copyLink = () => {
    if (!copied) {
      navigator.clipboard.writeText('KEBAB.sol').then(() => {
        toast.success('Address copied');
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 1000);
      });
    }
  };

  return (
    <div className='xl:pt-20 pb-16'>
      <Container>
        <div>
          <h1 className='text-white text-[58px] text-center font-semibold mt-10 xl:mt-0'>Another Way to <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-semibold'>Join</span> the Presale</h1>

          <p className='text-[#a7a9ac] text-[18px] text-center font-normal md:w-[90%] lg:w-[80%] xl:w-[56%] 2xl:max-w-[45%] mx-auto mt-10 mb-24'>Having trouble with the DApp or want a simpler method? Participate in the KEBAB presale by sending your chosen SOL amount directly to the address:</p>

          <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
            <div className='w-full lg:w-1/2 mt-14 lg:mt-0'>
              <div className='bg-[#08151e] border border-[#418077] rounded-[15px] p-9'>
                <div className='flex items-center'>
                  <img src={qrCode} alt="Image" className='w-[45%] md:w-auto'/>

                  <div className='ml-9'>
                    <p className='text-white text-[25px] font-bold'>Address</p>
                    <p className='text-[#32C84B] text-[18px] font-normal mt-3 mb-5'>KEBAB.sol</p>

                    <Button onClick={copyLink} className="border border-[#F3F813] bg-gradient-to-l from-[#5e6c1e] to-[#135a65] hover:from-[#f5f914bb] hover:to-[#19c4e2bb] text-[16px] font-normal rounded-[5px] h-12">Copy Address</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape */}
            <div className='lg:w-1/2'>
              <img src={shapImg} alt="Image" className='w-[90%] xl:w-[87%] 2xl:w-[85%] mx-auto' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WayToJoin;
