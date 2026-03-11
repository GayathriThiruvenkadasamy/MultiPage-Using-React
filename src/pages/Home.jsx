import axios from 'axios';
import React from 'react'
import { useState, useRef, useEffect } from "react";

export default function Home() {
    const [open, setOpen] = useState(false);
    const inputRef = useRef(null);
    const [result, setResult] = useState([]);
    const [userInput, setUserInput] = useState([]);
    useEffect(() => {
        if (open && inputRef.current) inputRef.current.focus();
    }, [open]);

    const Api_key = "AIza";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${Api_key}`;

    async function geminiIntegration() {
        const prompt =
            `
        Provide a comprehensive explanation of "${userInput}".
        Inlucde:
        - Clear definition
        - Background context
        - Key facts or examples
        - Give Some Web References link
        - Why it matters or where it's used

        Write at least 100 words.
        `;

        await axios.post(url,
            {
                contents: [
                    { role: "user", parts: [{ text: prompt }] }
                ]
            }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            const data = response.data;
            setResult(data?.candidates?.[0]?.content?.parts?.[0]?.text);
            console.log(result);
        }).catch((err) => {
            console.error(JSON.stringify(err.response.data, null, 2));
            if (err.response?.status === 429) {
                const retryDelay = err.response.data?.error?.details?.find(d => d['@type'].includes('RetryInfo'))?.retryDelay;
                console.warn(`Quota exceeded. Retry after ${retryDelay || '30s'}`);
            } else {
                console.error(err);
            }


        })
    }

    // useEffect(() => {

    //     geminiIntegration();
    // }, [prompt]);


    return (
        <main className='background min-h-screen'>
            <div className=' '>
                <div className='text-center'>
                    <h1 className='text-5xl pt-17 pl-15 '>Upgrade today,<span className='text-orange-700'> change tomorrow</span></h1>
                </div>
                <div className='lg:ml-200 md:ml-70 w-50 text-center px-2 mt-7  py-4 h-15'>
                    <button className='bg-yellow-100 py-2 border rounded-full px-3 font-semibold text-xl text-center'>Get Started </button>
                </div>
            </div>
            <div className='flex flex-column pt-15 justify-center items-center'>
                <div>
                    <h1 className='text-center text-3xl text-bold mt'>“<span className='text-purple-700' >Elevate your home</span> without the heavy cost.” </h1>
                    <h5 className='text-center text-xl text-bold m-3'>Rental furniture gives you stylish flexibility without the heavy upfront cost.</h5>
                </div>
            </div>



            <div className={open ? "p-2 ml-auto flex flex-row fixed bottom-19 border bg-yellow-100 rounded right-3" : "hidden"}>
                {/* <div className='flex'> */}
                <div id='outputArea' className={open ? "block " : "hidden"}>
                    <div className='flex flex-col'>
                        <div className='flex-row mb-4'>
                            <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)} className='px-3 py-2 bottom-8 right-8 border rounded-l md:w-[190px] ' placeholder='Enter your Questions here...' />
                            <button onClick={geminiIntegration} className='bg-orange-800 py-2.5 rounded-r md:w-[100px]'>Search</button>
                        </div>
                        <textarea className='px-5 py-2 bottom-8 right-8 border rounded md:w-[290px] md:h-[450px]' value={result} readOnly placeholder='Show details' type='text' />
                    </div>
                </div>
                {/* </div> */}


                {/* // Gemini API Calls */}

            </div>
            <div className='container w-10 ml-auto fixed bottom-6 right-3'>
                <button onClick={() => setOpen(v => !v)} aria-controls='outputArea' aria-expanded={open} className='hover:cursor-pointer' ><img src='/images/Ai.png' alt='icon' /></button>
            </div>

        </main >
    );
}

