import Image from 'next/image';
import cn from 'classnames';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  image_src: string;
};

export function CoverImage({
  title,
  src,
  link,
}: {
  title: string;
  src: string;
  link: string;
}) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={1300}
      height={630}
      className={cn('rounded-lg shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': title,
      })}
    />
  );
  return (
    <div className='sm:mx-0'>
      <a className='hover:underline' href={link}>
        {image}
      </a>
    </div>
  );
}
