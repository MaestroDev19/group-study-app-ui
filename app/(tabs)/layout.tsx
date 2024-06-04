"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Read = () => <div>Read Page</div>;

export default function RootLayout(
    {
        children,
    }: {
    children: React.ReactNode
  }) {
    const router = useRouter();
    return (
    <section className="pb-20">
        {children}
        <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
            <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group" onClick={() => router.push('/home')}>
                <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
                <span className="sr-only">Home</span>
            </button>
            <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Home
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <div className="flex items-center justify-center">
                <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center bg-gray-500 w-12 h-12 font-medium rounded-full hover:bg-primary group focus:ring-4 focus:ring-lime-300 focus:outline-none dark:focus:ring-lime-800" onClick={() => router.push('/dashboard')}>
                    <svg className="w-7.5 h-7.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd"/>
                    </svg>
                    <span className="sr-only">Study</span>
                </button>
            </div>
            <div id="tooltip-study" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Study
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-lime-50 dark:hover:bg-lime-800 group" onClick={() => router.push('/groups')}>
                <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"/>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414Z"/>
                </svg>
                <span className="sr-only">Explore</span>
            </button>
            <div id="tooltip-discover" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Explore
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>

    </section>
    )
}
