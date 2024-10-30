"use client"
import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import {Center} from "@repo/ui/Center"
import { Select } from "@repo/ui/select"
import { useState } from "react"
import { TextInput } from "@repo/ui/TextInput"

const SUPPORTED_BANKS = [{
    name: "Commonwealth Bank", 
    redirectUrl: "https://www.my.commbank.com.au/netbank/Logon"
}, {

    name: "Westpac Bank",
    redirectUrl: "https://banking.westpac.com.au/wbc/banking/handler"
}]; 
// add money function 
export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl); 
    return <Card title="Add Money">
        <div className="w-full">
            <TextInput label={"Amount"} placeholder={"Amount"} onChange={() => {

            }}/>
            <div className="py-4 text-left">
                Bank
            </div>
            < Select onSelect={(value) => {
                setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
            }} options = {SUPPORTED_BANKS.map(x => ({
                key: x.name, 
                value: x.name
            }))} />
            <div className="flex justify-center pt-4">
                <Button onClick={() => {
                    window.location.href = redirectUrl || ""; 
                }}>
                    Add Money
                </Button>
            </div>
        </div>
    </Card>
}