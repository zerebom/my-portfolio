import { writeFileSync } from 'fs';
import Parser from 'rss-parser';

const parseFeed = async (src_site, parser, url) => {
  const feed = await parser.parseURL(url);
  return feed.items.map((data) => {
    if (src_site == 'zenn') {
      data.thumbnail = data.enclosure ? data.enclosure.url : null;
    }

    if (src_site == 'note') {
      data.content = data.contentSnippet;
    }
    return data;
  });
};

let note_parser = new Parser({
  customFields: {
    item: [
      ['media:thumbnail', 'thumbnail'],
      ['contentSnippet', 'content'],
    ],
  },
});

let zenn_parser = new Parser({
  customFields: {
    item: [['enclosure', 'thumbnail', { keepArray: true, value: 'url' }]],
  },
});

(async () => {
  const noteItems = await parseFeed(
    'note',
    note_parser,
    'https://note.com/higu_engineer/rss',
  );
  const zennItems = await parseFeed(
    'zenn',
    zenn_parser,
    'https://zenn.dev/zerebom/feed',
  );
  const allItems = [...noteItems, ...zennItems];

  allItems.sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));
  writeFileSync('src/rss/data.json', JSON.stringify(allItems));
})();
