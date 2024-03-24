import Image from 'next/image';
import lt from 'public/images/home/lt.jpg';
import rainbow from 'public/images/home/rainbow.jpg';
import sea from 'public/images/home/sea.jpg';
import wtd from 'public/images/home/wtd.jpg';
import marina from 'public/images/home/marina.jpg';
import tree from 'public/images/home/tree.jpg';
import zenn from 'public/images/home/zenn.png';
import zenn_icom from 'public/images/home/zenn_icon.jpeg';
import wtd_icon from 'public/images/home/wtd_icon.jpg';
import wtd_mark from 'public/images/home/wtd_mark.png';
import { StaticImageData } from 'next/image';

function ArrowIcon() {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
        fill='currentColor'
      />
    </svg>
  );
}
function Bloglink({ url, name }: { url: string; name: string }) {
  return (
    <div className='group'>
      <a
        href={url}
        className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full'
      >
        <div className='flex flex-col'>
          <p className='font-medium text-neutral-900 dark:text-neutral-100'>
            {name}
          </p>
        </div>
        <div className='text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12'>
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}
function ChannelLink({
  img,
  icon_img,
  link,
  name,
}: {
  img: StaticImageData;
  icon_img: StaticImageData;
  link: string;
  name: string;
}) {
  return (
    <div className='group flex w-full'>
      <a
        href={link}
        target='_blank'
        className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full'
      >
        <div className='flex items-center space-x-3'>
          <div className='relative h-16'>
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes='33vw'
              className='border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16'
              priority
            />
            <div className='border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-7 w-7 items-center -top-6 -right-10'>
              <Image
                alt='icon'
                src={icon_img}
                height={11}
                width={19}
                sizes='33vw'
                className='object-cover object-center'
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='font-medium text-neutral-900 dark:text-neutral-100'>
              {name}
            </p>
          </div>
        </div>
        <div className='text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12'>
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <section className='max-w-3xl'>
      <h1 className='font-medium text-2xl mb-8 tracking-tighter'>
        {`hey, I'm Kokoro 👋`}
      </h1>

      <p className='prose prose-neutral dark:prose-invert'>
        {`I work as a data scientist, where I'm involved in making data-driven
        decisions and developments for the growth of our services. At Commune Inc. I
        am engaged in understanding and fostering communities, aiming to create
        environments where people can connect, grow, and learn together through
        big data use.`}
      </p>

      <div className='columns-2 sm:columns-3 gap-4 my-8'>
        <div className='relative h-80 mb-4'>
          <Image
            alt='My twitter avatar'
            src={tree}
            fill
            sizes='(max-width: 768px) 213px, 33vw'
            priority
            className='rounded-lg object-cover'
          />
        </div>

        <div className='relative h-40 mb-4 sm:mb-4'>
          <Image
            alt='Rainbow'
            src={rainbow}
            fill
            priority
            sizes='(max-width: 768px) 213px, 33vw'
            className='rounded-lg object-cover object-top'
          />
        </div>

        <div className='relative h-40 mb-4'>
          <Image
            alt='lt'
            src={lt}
            fill
            priority
            sizes='(max-width: 768px) 213px, 33vw'
            className='rounded-lg  object-cover object-right'
          />
        </div>

        <div className='relative h-40 mb-4 sm:h-80'>
          <Image
            alt='wtd'
            src={wtd}
            priority
            fill
            sizes='(max-width: 768px) 213px, 33vw'
            className='rounded-lg object-cover object-top sm:object-left'
          />
        </div>

        <div className='relative h-80 mb-4'>
          <Image
            alt='Enoshima'
            src={sea}
            fill
            sizes='(max-width: 768px) 213px, 33vw'
            priority
            className='rounded-lg object-cover  sm:object-center'
          />
        </div>

        <div className='relative h-40 mb-4'>
          <Image
            alt='marina'
            src={marina}
            priority
            fill
            className='rounded-lg object-cover object-center'
          />
        </div>
      </div>

      <div className='my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full'>
        <ChannelLink
          img={zenn_icom}
          icon_img={zenn}
          name='Zenn articles'
          link='https://zenn.dev/zerebom'
        />

        <ChannelLink
          img={wtd_icon}
          icon_img={wtd_mark}
          name='Wantedly profile'
          link='https://www.wantedly.com/id/kokoroo'
        />
      </div>

      <div className='prose prose-neutral dark:prose-invert'>
        <p>
          I regularly publish articles on SaaS, recommendation systems, MLOps,
          and data analysis. For more details, please check the link below.
        </p>
      </div>
      <div className='my-8 flex flex-col space-y-4 w-full'>
        <Bloglink
          url='https://note.com/higu_engineer/n/n43955bd85459'
          name='行動モデルに沿った意志力に頼らない良い習慣の作り方'
        />
        <Bloglink
          url='https://zenn.dev/zerebom/articles/a86dc6198625fe'
          name='高速で持続可能な開発のためのソフトウェア工学と機械学習への適用'
        />

        <Bloglink
          url='https://speakerdeck.com/zerebom/wantedlydefeature-storewodao-ru-suruji-nikao-etakoto'
          name='WantedlyでFeature Storeを導入する際に考えたこと'
        />
      </div>

      <div className='prose prose-neutral dark:prose-invert'>
        <p>
          Note: This site was designed with inspiration from:
          <br />
          <a
            href='https://vercel.com/templates/next.js/nextjs-portfolio'
            target='_blank'
            className='text-blue-600 dark:text-blue-400 hover:underline'
          >
            vercel.com/templates/next.js/nextjs-portfolio
          </a>
        </p>
      </div>
    </section>
  );
}
