'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5f26826d56821573bd9775448295ce5c",
".git/config": "74aa16aa0ba599fd82b9b0fa14d6113b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6cb03971edc8e78d8767953fca754a77",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6fa5c7511b6ea806c3cb2c01fb1f6a67",
".git/logs/refs/heads/main": "4272d8749f8ae7a601deb8adbfa29228",
".git/logs/refs/remotes/origin/main": "c4cb929b457d9bd488893568d5de2c37",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/03/374ef6e0f75c15f958e2da596a08e62c2be0f7": "18b1c3a5908485ab771f625bfac4e549",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/8cae093809df6677e18b4c529b3922e3968b7c": "1f203afcfe13afa0fdfa66643894cb1e",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0c/1118735389ba4f6749d9f40881ca5df92a5175": "cd30ab24b7b6be328a8e63721c1dad25",
".git/objects/0c/8b327a51da8115e93d278e59bbefa847689bfe": "8379fc9147b2f9ac74b4ec425d67388b",
".git/objects/1a/3a1c962e31cc50d9b1f2cf9b58b9ef6b52929e": "3e74ecef89c276d3639657c5e1b02d65",
".git/objects/1a/6ed813b2b81267ae55a2853f4718c7c7d1bf00": "44dfd6b8c969f4a98f14951e51bf88a5",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/e1b95129cf6b39dc53a4251864e535b72b8332": "0c2d186b1f66bb5f56bf572dd01d8edf",
".git/objects/33/30639481ec2bbf71883718e48391eedc10b388": "7cea682709947413a473c25caef21db2",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/42/cc2e4db331da8bf59f1f79ccc10807830a04d8": "a2445dcf741067d974ae149e1b64c526",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/373db31ced20e503ba4c4e52735de67a717005": "195244cbd96944d20ba76cd2fb8d9ce3",
".git/objects/46/e4063a93269da3b461d6dd7718f48bc2358fba": "ea110b2a0dc1221787d8f3c2255c57f3",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/ed6597ec1367ce56db9ee2e3080cd937dc8c65": "724d0778cd99c36a9c2f170d6cc83acb",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4e/64b763bc81bf221b0130d646d2724656dbc664": "119d41f807f9561b6e0cf77f30f53a61",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/be9cbf128f012a518a90392002b15ae3993ece": "c281f2575fb2a8e70e4ab7c3a721a4ca",
".git/objects/54/76b9ceb1f7435d34a02b659be57132994deeca": "d7cedb04c072c8ba9bca11e2d49ac7e8",
".git/objects/67/352f1ea0af5ac58b6f82444ffafb793f7992e1": "83b91784b84edac6a49e26b0a64e8a00",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6b/3a0c5057a0c72c6c59d42ecd91521a33394ec1": "ce8479e9e5eab17ced18d8b387f8cfed",
".git/objects/73/c3751c29c7e0caa45494753400a16f26a3cc60": "4b965b77c9702384f2491110a9b2df1f",
".git/objects/74/e0400680deab3a99db7b1de530412b796ec204": "d54f5a9978ab052c56e0062dd89a86e6",
".git/objects/7a/a56b1f20f5fa08d416aaa6eb3fc25c15ed08d8": "f881f680205fdf6d1444b47b50195225",
".git/objects/7a/c3a495f4e22617b20262fa4b71b691fd361989": "a5505b42d4b7cde4cee716b88f4606d2",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/84/94c373fdefb55fb50d1bd6ac525c2a3e65e6d9": "3934e457e71767e736095fa752638cbf",
".git/objects/86/cffbeb7868dcab69d92095c30a4dbac5963f3d": "43a2e1e66f31f9c80b7646ce6ecfabf5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/b4b96d137d6355a08b98d145bd000545511918": "f8c6a0340f5920b06294ab9bce6e333f",
".git/objects/96/d97da64315029913360ee0cf828039aabb1eb0": "c90b9c84516669800851ec4c22254c28",
".git/objects/9a/2244aa079288e9268616b1ce5613bc4444ad37": "99461bce170cb8d6b371774ae9326d7b",
".git/objects/9b/de258209e3661a4c372b3c6f124af1b5aaa77e": "5b4fba4edacad45d82224ce249319e94",
".git/objects/9c/1d9848496675aa4f52e31a1234cfa0cf6e7ba0": "1eb7fb3e81f5d7342b24e9e76b7ebdd5",
".git/objects/9f/095a466b7187b50c0071e8d4943dc072fe9c26": "676a9754c865e123b0c1d2bfc7106751",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a6/38b9c363e7fa74fe42405c74344ee46ffc193b": "1a8858fec99eb5c1c7767f69f230ab85",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/af/3dc0d548065bf509486e4fe5ea68e1bebbe457": "ddc810f7406090ca4f5388a104c2951e",
".git/objects/af/81a9e904c5a6b7e8da03f469eb28f127a4005d": "b3e83202d32c6c91f9cb0da00cb82864",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/d121706b1963e2d92533e7c89ef76819ce7e91": "f9bf6546f5309a3a485e38c49e4dd8d4",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/cd/f9a4c8286d54162f23832bed2d7e36547c476d": "3a8fbe04216cdf218eb4fab147cf8e33",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/de/6947a8c6b3aae673c510673d278281197a783b": "e6ae7d233e66685839ea4d9c250fd4e9",
".git/objects/df/efaf33f687b031704a34a1eca7de9d0d062c34": "d6295df025c2ee656987230f8a08560b",
".git/objects/df/fc05e0cd88ab013811c2119e06b2f4d815f0fc": "78605a1a4966d636df21a3cd09fdb0b9",
".git/objects/e0/02c48b6dc980c360097a832b10bd6b54455562": "f67615adb182d90b160e6fa899f4e98d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/ee/32fe7448bd4a6281cf9f95b590671fce34f2c1": "82bde9dbab93bbc48e2750e4cc9552bd",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/fc/98e57166dd1ea68c975df391d91d9e6ec544d8": "a4f5030c0e0ae63edf75cc5b4d597111",
".git/refs/heads/main": "f89acc58f49ed16b1fe06bdb390b98f1",
".git/refs/remotes/origin/main": "f89acc58f49ed16b1fe06bdb390b98f1",
"assets/AssetManifest.bin": "8227ba0919ca9bd3c618ded01f148a1e",
"assets/AssetManifest.bin.json": "11bbd16b163ef58f61221afd655bfe2c",
"assets/AssetManifest.json": "cecc6f19c06ded088a91e09b84411627",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/ScrollBtn.png": "9e8d72514de9b36b46162fa3c69ad448",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/adminPanel.png": "8fc6b4f99d9081c073772b89a1278511",
"assets/assets/images/grocaryApp.jpg": "6b97a6642c44b9267ba2c00b3d6b77da",
"assets/assets/images/LiveScore.jpg": "468b2ad6b8c7f8bbc458b42616ad6034",
"assets/assets/images/nikeStore.jpg": "07ad41baae4b392c925b84617cf7f82f",
"assets/assets/images/profile.jpeg": "c65ef4fc2aa64add7b0175e7959102cb",
"assets/assets/images/profile.jpg": "f80fcae9d30356eaa0377f8b5654ba5a",
"assets/assets/images/quizy.jpg": "f6827afdd786a496409b8e07cc2f5faf",
"assets/assets/images/triange_icon.png": "cf4dbd2ee194dc54920588723f983678",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "2dea70979bb3f44c90386feacb5ecd0a",
"assets/NOTICES": "60403cb93b42ecd016f7467c6fd019f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4ef9893efa01cfda3949bb8a030ea494",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d0ac55f4f803e05d41c3871baef49a6a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "09b43232697e9a2c2c7a58399aeed804",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02d8f6e1e2bd07c2932d4a187f635f69",
"/": "02d8f6e1e2bd07c2932d4a187f635f69",
"main.dart.js": "a3a371c5bbea0fe72f21a02efd4ab672",
"manifest.json": "563ddc23c6210ac8d0bec918bff55257",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
