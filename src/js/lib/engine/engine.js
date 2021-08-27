export default function engine(block) {
   if ((block === false) || block === undefined || block === null) {
      return document.createTextNode('');
   }
   if ((block === true) || typeof block === 'string' || typeof block === 'number') {
      return document.createTextNode(block);
   }
   if (Array.isArray(block)) {
      const frag = document.createDocumentFragment();

      block.forEach((b) => {
         const el = engine(b);
         frag.appendChild(el);
      });
      return frag;
   }

   const el = document.createElement(block.block);
   [].concat(block.cls).filter(Boolean).forEach((cls) => el.classList.add(cls));
   if (block.attrs) {
      Object.entries(block.attrs).forEach(([key, value]) => {
         el.setAttribute(key, value);
      });
   }
   const content  = engine(block.content);
   el.appendChild(content);
   return el;
}
