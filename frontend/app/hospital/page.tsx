'use client'
import HospitalPage from "@/components/enhanced-hospital-page";
import { useSearchParams } from "next/navigation"

export default function(){
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    return <HospitalPage></HospitalPage>
}