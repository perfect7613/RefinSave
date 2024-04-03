import Header from "@/components/Header";
import Link from "next/link";
import Image from 'next/image'
import CustomForm from "@/components/Typeform";
import HomeForm from "@/components/HomeForm";

export default function Home() {
  return (
    <div className="overflow-hidden"> 
      <Header/>
      <div className="pt-[50px] max-w-7xl lg:ml-[130px]">
        <h1 className="text-2xl lg:text-6xl font-bold text-center space-x-3 space-y-8">
          <strong>How Our Client-Focused Approach Helps Home Owners <span className="text-[#FF0068]">Save HEAPS</span> On Their <span className="text-[#FF0068]">Home Loans</span>.</strong>
        </h1>
      </div>
      <div className="flex justify-evenly">
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/924282438?h=3308459c2e" width="500" height="360"></iframe>
          <div className="hidden lg:block  mr-18 mt-5">
          <HomeForm />
          </div>
      </div>
      <div className="py-8 text-center">
        <p>What would saving tens of thousands of dollars do for you?</p>
        <p>Fill in the form for a zero commitment call to find out how we can do that for you.</p>
      </div>
      <Link href='/form'>
        <button className="flex items-center justify-center w-48 h-12 mx-auto mt-8 border-2 border-pink-500 rounded-none">
          <span className="text-pink-500 font-bold">Start Saving</span> <span className="ml-2 text-pink-500">&#8594;</span>
        </button>
      </Link>
      <div className="flex items-center justify-center mt-8">
        <div className="w-px h-20 bg-black"></div>
      </div>
      <div className="pt-[50px] max-w-7xl lg:ml-[130px]">
        <h1 className="text-3xl lg:text-4xl font-bold text-center space-x-3 space-y-8">
          <strong>Check Out The Amazing <span className="text-[#FF0068]">Success Stories</span></strong>
        </h1>
      </div>
      <div className="text-center max-w-7xl py-20 lg:ml-[130px]">
        <h5 className="font-bold">Kerren Saved 5 Years & $18,000/yr</h5>
        <p className="pt-10">While Kerren wanted to own an investment property, she had three other loans that were set interest only for almost 5 years. So the first change we made is to help her move to principal + interest loans.</p>
        <p>With financial security and a good mortgage buffer for emergencies, both of her properties became self-sufficient. With the whole package of refinancing investment and home loans for great interest rates, she saved $18000 in the first year itself, which translated to massive savings over the years.</p>
        <div className="flex justify-center pt-20">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/t9aMgZB3kc0?si=Kj6JmbRNiTyFnK-1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
      <div className="text-center max-w-7xl py-20 lg:ml-[130px]">
        <h5 className="font-bold">Sanford and Soniya saved over $100,000 in their repayments after refinancing their home loan.</h5>
        <p className="pt-10">They were paying interest of above 3%. With Borrower First, they had to pay less than 1%. Soniya agreed that while working with mortgage brokers only offered different mortgage options, having a personal refinance strategist helped them understand their personal needs and know how secure their future was. Saved from the hidden trailing commissions, they could pay their home loan before retirement without any major cutbacks in their lifestyle.</p>
        <div className="flex justify-center pt-20">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Zp9pW5C1TzE?si=ThSn1Y16CQ2KTK73" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
      <div className="text-center max-w-7xl py-20 lg:ml-[130px]">
        <h5 className="font-bold">Eddie is debt free in retirement and is living his dream!</h5>
        <p className="pt-10">Retired and living happily in Darwin, Eddie had acquired a fairly good super fund from working in the railways. Willing to secure his retirement with a good investment, Eddie went to AMP bank for advice. Somewhere along the line, he realized they had advised him wrongly, and that's when he met Borrower First.</p>
        <p>While things were always abstract at the big bank, Borrower First coached him openly and helped him get the best product available then.</p>
        <p>Eddie now lives free, in a place now where the weather is good and suits his metabolism, and he is quite happy with his financial situation.</p>
        <div className="flex justify-center pt-20">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mCNdr9FyrLE?si=VgSKCo2Nxz47j7t3" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
      <div className="text-center max-w-7xl py-20 lg:ml-[130px]">
        <h5 className="font-bold">Rob The Gas Man Saved $40,000 In The First Year!</h5>
        <p className="pt-10">When Rob, owner of The Gas Man Company, was looking to consolidate his debt, Borrower First figured out a way to help him save about 2.5% on his interest rates, which was a significant amount considering their loans. The freed-up cash after refinancing their debt was a great relief for him, his wife and his business. At the end of it all, we helped Rob save almost $40,000 in his loan repayments in the first year! Rob said that with this newly gained financial freedom, for the first time in a long time, they were looking to book an overseas holiday that they had put off for a long while.</p>
        <div className="flex justify-center pt-20">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/BJuvWL-JSzU?si=fhQZ8TQWiSIQVeSd" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
      <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdyUrQ0MbplTcnoLU2RKzbbBU3yhDh_R6fwmBUGmotO0gDAoA/viewform?usp=sf_link'>
        <button className="flex items-center justify-center w-48 h-12 mx-auto mt-8 border-2 border-pink-500 rounded-none">
          <span className="text-pink-500 font-bold">Start Saving</span> <span className="ml-2 text-pink-500">&#8594;</span>
        </button>
      </Link>
      <div className="flex items-center justify-center mt-14">
        <div className="w-px h-28 bg-black"></div>
      </div>
      <div className="w-screen flex justify-center items-center flex-col h-[700px] bg-gray-300">
        <p className="text-center max-w-[60rem] py-20"><span className="font-bold">Financial Disclaimer:</span> Please remember that past performance may not be indicative of future results. Different types of investments involve varying degrees of risk. Due to various factors, including changing market conditions, the content may no longer be reflective of current opinions or positions. Moreover, you should not assume that any discussion or information contained in this website serves as the receipt of, or as a substitute for, personalized investment advice from Borrower First. Please consult our financial experts for more information.</p>
        <div className="flex flex-col items-center bg-black w-screen text-center lg:w-[1200px] h-[340px] z-50">
          <Image src='/images/Logo2.png' alt='Refine Save' width={80} height={30} className="pt-10" />
          <p className="text-white pt-10">Let Refi N Save do the heavy lifting and negotiate with lenders to secure a great deal for you.</p>
          <div className="text-center text-white pt-10">
            <p>Contact Us:</p>
            <p>Westpoint WOTSO 17 Patrick Street Blacktown NSW 2148</p>
            <p>kiran@borrowerfirst.com.au</p>
            <p className="underline">1300 135 626</p>
          </div>
        </div>
      </div>
    </div>
  );
}
