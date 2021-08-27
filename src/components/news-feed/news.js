import engine from '../../js/lib/engine/engine.js';
import {NewsFeedTemp, NewsFeedTemp2} from './news.temp.js'; // здесь нужно расширение жс

const tmplEngine = (tmpl) => {
   console.log(tmpl);
};
export default class NewsFeed {
   constructor(conteqiner) {
      if (typeof conteqiner === 'string') {
         conteqiner = document.querySelector(conteqiner);// перезагрузка - если строка, взять эдемент,//в котором он
      }
      this.conteqiner = conteqiner;
   }

   render(news) {
      // const list = document.createElement('ul');
      // list.className = 'news';
      // news.forEach((element) => {
      //    const item = document.createElement('li');
      //    list.className = 'news_item';
      //    item.textContent = element;
      //    list.inserBefore(item, list.firstElementChild);
      // });

      // if (this.list) {
      //    this.list.remove();
      // }
      // this.conteqiner.appendChild(list);
      // this.list = list;

      // return engine(NewsFeedTemp(news))

      const element = engine(NewsFeedTemp(news));
      if (this.element) {
         this.element.remove();
      }
      this.conteqiner.appendChild(element);
      this.element = element;
   }

   addNews(title) {
      if (!this.element) return;
      const newElement = engine(NewsFeedTemp2(title));
      this.element.insertBefore(newElement, this.element.firstElementChild);
   }
}

window.NewsFeed = NewsFeed;
const l = new NewsFeed('.cont');
console.log(l);
l.render(['Глава ФСВТС рассказал об интересе Минска к закупке АК-12',
   'Российские военные эвакуировали граждан Таджикистана из Кабула',
   'Миронов призвал поправить закон об иноагентах после случая с Дождем']);
const v = new NewsFeed('.cont');
v.render(['Глава ФСВТС рассказал об интересе Минска к закупке АК-12',
   'Российские военные эвакуировали граждан Таджикистана из Кабула',
   'Миронов призвал поправить закон об иноагентах после случая с Дождем']);
   v.addNews('Ghndtn')
