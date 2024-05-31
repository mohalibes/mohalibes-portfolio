'use client'
import { Box, Text } from '@mantine/core';
import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/work': {
    name: 'work / projects',
  },
  '/contact': {
    name: 'contact',
  }
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  passHref
                >
                  <Box
                    className="flex align-middle relative py-1 px-2"
                    style={{
                      transition: 'all 0.3s',
                      color: 'inherit',
                      textDecoration: 'none',
                      backgroundColor: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'black';
                      e.currentTarget.style.backgroundColor = '#AAFF00';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'inherit';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <Text size='md'>{name}</Text>
                     
                  </Box>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
