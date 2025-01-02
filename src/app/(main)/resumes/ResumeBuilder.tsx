'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import GeneralInfoForm from './forms/GeneralInfoForm'
// import GeneralInfoForm from './forms/GeneralInfoForm'

const ResumeBuilder = () => {
    return (
        <div className='flex flex-col grow'>
            <header className='space-y-1.5 border-b px-3 py-5 text-center'>
                <h1 className='text-2xl font-bold'>Design Your Resume</h1>
                <p className="text-sm text-muted-foreground">
                    Follow the steps below to create a stunning resume. Your resume is save automatically.
                </p>
            </header>

            <main className='relative grow h-screen'>
                <div className="absolute bottom-0 top-0 flex w-full">
                    <div className="w-full md:w-1/2">
                        <GeneralInfoForm />
                    </div>
                    <div className="grow md:border-r" />
                    <div className="hidden md:flex w-1/2">right</div>
                </div>
            </main>



            <footer className='w-full border-t px-3 py-5'>
                <div className="mx-auto flex max-w-7xl flex-wrap  justify-between gap-3">
                    <div className="flex  items-center gap-3">
                        <Button variant={'secondary'}>Previous Step</Button>
                        <Button>Next Step</Button>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant={'secondary'} asChild>
                            <Link href="/resumesw">Close</Link>
                        </Button>
                        <p className="text-muted-foreground opacity-0">Saving...</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ResumeBuilder