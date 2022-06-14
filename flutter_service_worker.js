'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c73f57a771f98f41ea0cbfd364899fee",
".git/config": "fe35b9d7e480943ecafcae5722aeb0e7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1e16be15322d0fabfbf747e5f083e4e4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "38eb34ac8ee86f016d6070ead45162e6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "332d07ac330d02b22d0f13a262ceb5f5",
".git/logs/refs/heads/master": "332d07ac330d02b22d0f13a262ceb5f5",
".git/logs/refs/remotes/origin/master": "b743e12d76cf68a08688870be01cb5cb",
".git/objects/06/4e7dfbb4": "0b37acebddc77c05976961c7a0ead1e4",
".git/objects/06/558ac983": "0b37acebddc77c05976961c7a0ead1e4",
".git/objects/06/873fa369b46cebdf275099af48c2cf2f5f0987": "0b37acebddc77c05976961c7a0ead1e4",
".git/objects/1b/c93889cce46c1d14ba25bb650d7d4424f0deed": "33a023bd7c6009c20d7733a2da371c63",
".git/objects/2d/2c8b977d": "e0f43624fced49408035f8838948fa44",
".git/objects/2d/5a0a2f216352be69ad63de93f27930ffadba00": "e0f43624fced49408035f8838948fa44",
".git/objects/37/f098bd0929fca209bed5f647d3fe29e14a7b17": "ba8741332a9abb7a288d0d65ba7fbc51",
".git/objects/48/68615367faf4750ed84bf1d3472dbb3a901107": "f650a12719d1fa8577c3d3b74030ce5d",
".git/objects/65/29ea58e9bb2db2be82c59ea66ad6274d959b10": "0da281c3b7e6184c909a2771475f9a85",
".git/objects/69/8dade26abca4167fe29478773eaf25f9cb8c25": "25af2d9eb7830f1617f6109f66a9f29f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/5b63644c5d5d0434c8bb340e0650cce186d52a": "149ac5d8281d761c5abb4dac3d147260",
".git/objects/a1/9b8d9d30f18bd2343ca9ad272b4d5899a61ed5": "508fe7b843c3872cf282e11c1d5e7969",
".git/objects/a2/a5ed966131cf57234394b6876597115739fa91": "3fdb90ae9a004ff6e90209d9685dc103",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/861856768e9bfb21e3c2a256002fb25d2dd6f5": "c169d05fbfe3efb4475358ac4175b015",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/a4d1cbd6": "e49e87fa0649666d3140f109e5758d3f",
".git/objects/e0/a8758e99558e38d9366f93da26592878259753": "e49e87fa0649666d3140f109e5758d3f",
".git/objects/e2/0b50b232a50770d5a0985f02e05277f4d96200": "038e24109fa628fd0a685191350bbfbc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/ORIG_HEAD": "e74b467efb9c952656b8e7382ed1bb80",
".git/refs/heads/master": "e74b467efb9c952656b8e7382ed1bb80",
".git/refs/remotes/origin/master": "e74b467efb9c952656b8e7382ed1bb80",
"assets/AssetManifest.json": "1a0aeadec3f553845ea5153afbe0dff7",
"assets/assets/images/background.jpg": "d1de36e6dbdce0a7d7908bf88ff811ee",
"assets/assets/images/blurlu.png": "7aca000e01a13df04b1230f442b9d2c2",
"assets/assets/images/blurluInverted.png": "a2f7cdb62fa59182509e97f2f7ea143a",
"assets/assets/images/drawerBackground.png": "08955f085663a932910ae0ef7f599d43",
"assets/assets/images/maestro.png": "dad5f08d6f4112a2c50c77a38d6e4723",
"assets/assets/images/profilBackground.png": "bb7558f2dcec1e19410d40ac2ef6956b",
"assets/assets/images/SpotifyLogoLight.png": "907e659b4a4a2fd281e7b9db374b3463",
"assets/assets/images/tempAlbum.png": "5961caac9e762a8fbed23d607c727198",
"assets/assets/images/tempAvatar.png": "c4ec24d7a631dec4d702ec654e136f30",
"assets/assets/images/tempSanatci.png": "80785c571a18c1693d8fc350286a25c6",
"assets/assets/images/tempSarki.png": "0e06c209e8c77dcad61732b50c536238",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "4eb890635b6c79ce104a13ce2b0f3a01",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4b0032fdfcf24a9b3e749ac433462ddb",
"/": "4b0032fdfcf24a9b3e749ac433462ddb",
"main.dart.js": "1f6b7b793f16aa5a97a5517bf84cace8",
"manifest.json": "7ffce4bd1797002a7f38bbc98d4c3278",
"version.json": "b0d0d9270de535269cd0e24c1591e80c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
