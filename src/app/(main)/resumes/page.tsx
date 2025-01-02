
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Home',
    description: 'Welcome to my website',
}
const page = () => {
    return (
        <main className='max-w-7xl mx-auto w-full px-3 py-6 space-y-6'>
            <Button asChild className='mx-auto flex w-fit gap-2'>
                <Link href='/editor'>
                    <Plus className='size-6' />
                    New Resume
                </Link>
            </Button>
        </main>
    )
}

export default page