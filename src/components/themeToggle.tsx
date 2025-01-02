"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const ThemeToggle = () => {
    const { setTheme } = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Sun className='size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                    <Moon className='absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='hover:cursor-pointer'>
                <DropdownMenuItem onClick={() => { setTheme('light') }}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => { setTheme('dark') }}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => { setTheme('system') }}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
