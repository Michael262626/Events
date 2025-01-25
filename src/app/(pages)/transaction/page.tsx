"use client";

import dynamic from 'next/dynamic';  

const PaystackPayment = dynamic(() => import('./PaystackPayment'), {  
  ssr: false,  
}); 

export default function TransactionPage() {
    return <PaystackPayment />;
}
