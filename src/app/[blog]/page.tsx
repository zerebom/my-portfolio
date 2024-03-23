import data from 'src/rss/data.json';
import DateFormatter from 'src/_components/date-formatter';

import { CoverImage } from 'src/_components/cover-image';
import { HeroPost } from 'src/_components/hero-post';
import { Intro } from 'src/_components/intro';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  image_src: string;
};

function PostPreview({ title, date, excerpt, link, image_src }: Props) {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage title={title} src={image_src} link={link} />
      </div>
      <a className='hover:underline' href={link}>
        <h3 className='text-3xl mb-3 leading-snug'>{title}</h3>
      </a>
      <div className='text-lg mb-4'>
        <p>
          <DateFormatter dateString={date} />
        </p>
      </div>
      <div className='text-lg leading-relaxed mb-4'>
        <p>{excerpt.substring(0, 100)}...</p>
      </div>
    </div>
  );
}

export default function page() {
  const heroPost = data[0];
  const morePosts = data.slice(1);

  return (
    <section>
      <div className='container mx-auto px-5'>
        <Intro />
        <HeroPost
          title={heroPost.title}
          date={heroPost.isoDate}
          excerpt={heroPost.content}
          link={heroPost.link}
          image_src={heroPost.thumbnail}
        />
        <h2 className='mb-8 text-4xl md:text-6xl font-bold leading-tight'>
          More Stories
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-20 md:gap-y-16 mb-32'>
          {morePosts.map((i: any) => (
            <PostPreview
              key={i}
              title={i.title}
              date={i.isoDate}
              excerpt={i.content}
              link={i.link}
              image_src={i.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
