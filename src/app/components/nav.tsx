import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/work': {
    name: '[tbd]work',
  },
  '/blog': {
    name: '[tbd]blog',
  },
};

export function Navbar() {
  return (
    <aside className='-ml-[8px] mb-16 tracking-tight'>
      <div className='lg:sticky lg:top-20'>
        <nav className='flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'>
          <ul className='flex flex-row space-x-0 pr-10'>
            {Object.entries(navItems).map(([path, { name }]) => (
              <li key={path}>
                <Link
                  href={path}
                  key={path}
                  className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2'
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
