import DateFormatter from '@/app/_components/date-formatter';
import { CoverImage } from '@/app/_components/cover-image';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  image_src: string;
};

export function HeroPost({ title, date, excerpt, link, image_src }: Props) {
  return (
    <section className='mb-8'>
      <div className='mb-8 md:mb-16'>
        <CoverImage title={title} src={image_src} link={link} />
      </div>

      <div className='grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
        <div>
          <h3 className='mb-4 text-4xl'>
            <a className='hover:underline' href={link}>
              {title}
            </a>
          </h3>

          <div className='mb-4 md:mb-0 text-lg'>
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className='text-lg leading-relaxed mb-4'>
            {excerpt.substring(0, 100)}...
          </p>
        </div>
      </div>
    </section>
  );
}
