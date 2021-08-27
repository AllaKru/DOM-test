// const NewsFeedTemp = function (news) {
//    return {
//       block: 'ul',
//       cls: 'news',
//       content: news.reverse().map((element, index) => ({
//          block: 'li',
//          cls: 'news_item',
//          content: element,
//          attrs: {
//             'data-id': index,
//          },
//       })),
//    };
// };

const NewsFeedTemp = (title, index) => (

   {
      block: 'li',
      cls: 'news',
      content: title,
      attrs: {
         'data-id': index,
      },
   }
);
const NewsFeedTemp2 = (news) => (
   {
      block: 'ul',
      cls: 'news_it',
      content: news.reverse().map(NewsFeedTemp),
   }
);
export { NewsFeedTemp, NewsFeedTemp2 };

