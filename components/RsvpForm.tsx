"use client"

import { useState } from 'react'

import { SubmitForm } from "@/actions/FormActions"

import Button from '@/components/Button'

export default function RsvpForm() {
  const [selects, setSelects] = useState("1")

  return (
    <form action={async formData => {
      await SubmitForm(formData)
    }} className="w-3/4 mx-auto mt-10 flex flex-col gap-5 text-white text-xl">
      <h1 className="text-center text-3xl">Reserve a Spot</h1>
      <div className="flex justify-between">
      <input 
        type="text"
        name="firstName"
        placeholder="First Name"
        className="w-1/2 mr-1 text-sm p-2 rounded-md placeholder:text-black"
        required
      />
      <input 
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="w-1/2 ml-1 text-sm p-2 rounded-md placeholder:text-black"
        required
      />
      </div>
      <input 
        type="tel"
        name="Phone"
        placeholder="123-456-7890"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
        className="w-full text-sm p-2 rounded-md placeholder:text-black"
        required
      />
      <label>Party Size 1-10:
        <input 
          type="text" 
          name="Party Size"
          required
        />
      </label>
      <Button />
    </form>
  )
}
