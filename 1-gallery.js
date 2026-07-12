import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as e}from"./assets/vendor-CgTBfC_f.js";const i=[{preview:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",original:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",description:"Mountain landscape at sunrise"},{preview:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",original:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",description:"Forest path through tall trees"},{preview:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=400&q=80",original:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1400&q=80",description:"Desert dunes under a bright sky"},{preview:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80",original:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80",description:"Blue ocean waves with cliffs"},{preview:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80",original:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",description:"Snowy mountain peaks in winter"},{preview:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80",original:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",description:"Colorful autumn forest road"}],s=document.querySelector(".gallery"),p=i.map(({preview:o,original:t,description:a})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${o}"
          alt="${a}"
          loading="lazy"
        />
      </a>
    </li>
  `).join("");s.insertAdjacentHTML("beforeend",p);new e(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=1-gallery.js.map
