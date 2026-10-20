// Protected PWA cache: NEVER cache decrypted content (v2.5).
const CACHE='vasilisa-expedition-v9-profiles';
const CACHE_PREFIX='vasilisa-expedition-';
const CORE=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png","./icons/icon-maskable-192.png","./icons/icon-maskable-512.png","./stickers/01_common_01_star_fox.png","./stickers/01_common_02_heart_bunny.png","./stickers/01_common_03_heart_cat.png","./stickers/01_common_04_mischief_jester.png","./stickers/01_common_05_star_puppy.png","./stickers/01_common_06_rainbow_unicorn.png","./stickers/01_common_07_flower_panda.png","./stickers/01_common_08_space_penguin.png","./stickers/02_rare_01_star_fox.png","./stickers/02_rare_02_heart_bunny.png","./stickers/02_rare_03_heart_cat.png","./stickers/02_rare_04_mischief_jester.png","./stickers/02_rare_05_star_puppy.png","./stickers/02_rare_06_rainbow_unicorn.png","./stickers/02_rare_07_flower_panda.png","./stickers/02_rare_08_space_penguin.png","./stickers/03_epic_01_star_fox.png","./stickers/03_epic_02_heart_bunny.png","./stickers/03_epic_03_heart_cat.png","./stickers/03_epic_04_mischief_jester.png","./stickers/03_epic_05_star_puppy.png","./stickers/03_epic_06_rainbow_unicorn.png","./stickers/03_epic_07_flower_panda.png","./stickers/03_epic_08_space_penguin.png","./stickers/04_legendary_01_star_fox.png","./stickers/04_legendary_02_heart_bunny.png","./stickers/04_legendary_03_heart_cat.png","./stickers/04_legendary_04_mischief_jester.png","./stickers/04_legendary_05_star_puppy.png","./stickers/04_legendary_06_rainbow_unicorn.png","./stickers/04_legendary_07_flower_panda.png","./stickers/04_legendary_08_space_penguin.png","./stickers/heart_kitten.png","./stickers/moon_dreamer.png","./stickers/night_buddy.png","./stickers/rainbow_unicorn.png","./stickers/royal_kitten.png","./stickers/space_explorer.png","./stickers/star_fox.png","./stickers/wizard_bunny.png","./avatars/free_fox.webp","./avatars/free_kitten.webp","./avatars/free_bunny.webp","./avatars/free_bear.webp","./avatars/free_panda.webp","./avatars/free_puppy.webp","./avatars/free_hamster.webp","./avatars/free_koala.webp","./avatars/free_unicorn.webp","./avatars/free_dragon.webp","./avatars/free_fairy.webp","./avatars/free_wizard.webp","./avatars/free_mermaid.webp","./avatars/free_robot.webp","./avatars/free_ghost.webp","./avatars/free_butterfly.webp","./avatars/free_penguin.webp","./avatars/free_lion.webp","./avatars/free_tiger.webp","./avatars/free_frog.webp","./avatars/free_octopus.webp","./avatars/free_dinosaur.webp","./avatars/free_bee.webp","./avatars/free_turtle.webp","./avatars/rare_space_fox.webp","./avatars/rare_owl.webp","./avatars/rare_pirate_cat.webp","./avatars/rare_emerald_dragon.webp","./avatars/epic_moon_unicorn.webp","./avatars/epic_mermaid.webp","./avatars/epic_star_wolf.webp","./avatars/epic_robot.webp","./avatars/legendary_royal_lion.webp","./avatars/legendary_phoenix.webp","./avatars/legendary_space_panda.webp","./avatars/legendary_fairy.webp"];
self.addEventListener('install',event=>event.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(CORE);await self.skipWaiting();})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const k of await caches.keys()){if(k.startsWith(CACHE_PREFIX)&&k!==CACHE)await caches.delete(k);}await self.clients.claim();})()));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 if(event.request.mode==='navigate'){
  event.respondWith((async()=>{
   try{
    const res=await fetch(event.request);
    if(res.ok){const c=await caches.open(CACHE);await c.put('./index.html',res.clone());}
    return res;
   }catch(e){const c=await caches.open(CACHE);return await c.match('./index.html')||Response.error();}
  })());return;
 }
 event.respondWith((async()=>{const cached=await caches.match(event.request);if(cached)return cached;return fetch(event.request);})());
});
