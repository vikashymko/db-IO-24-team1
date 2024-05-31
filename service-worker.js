/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "6f04577e568852bfbbd2e4a8ec9fa72e"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "443eaa36f3864580da89c378b1dc06c4"
  },
  {
    "url": "assets/css/0.styles.505da37d.css",
    "revision": "9705f6f4734144e651732d998c11a72b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.2930dd00.js",
    "revision": "2d9820364de46f1ed0aca1e4f3df90eb"
  },
  {
    "url": "assets/js/10.4a5106ba.js",
    "revision": "d206d48ddbd545786fbfda1fb7a36d15"
  },
  {
    "url": "assets/js/13.46600b4b.js",
    "revision": "7bd57ec8c7d3d5874bee7321b26e882e"
  },
  {
    "url": "assets/js/14.317c026b.js",
    "revision": "4bacf4698ea1f831f05c90e53f49158a"
  },
  {
    "url": "assets/js/15.3cfbb31a.js",
    "revision": "67f36e7819664fa6097cb4357bcb2521"
  },
  {
    "url": "assets/js/16.a2ba5947.js",
    "revision": "27cbbc7ae017eabcb2f3acf9a4699ec8"
  },
  {
    "url": "assets/js/17.3b5c41be.js",
    "revision": "1f738bf481278e201aa134da7a1b454a"
  },
  {
    "url": "assets/js/18.fd2bf65c.js",
    "revision": "19ae254516292ff2558410ab09993195"
  },
  {
    "url": "assets/js/19.350117d3.js",
    "revision": "dfe9aa3453a4ab80cd32d91dd4a29a54"
  },
  {
    "url": "assets/js/2.1631abf9.js",
    "revision": "73f3aae21cfbc566a000d728cb9a4609"
  },
  {
    "url": "assets/js/20.7c1e7656.js",
    "revision": "b2963ce8f5cac7ca60ed76ec5af4e660"
  },
  {
    "url": "assets/js/21.09e0f931.js",
    "revision": "30d8b5dd16079318a97a3ee2b199ff32"
  },
  {
    "url": "assets/js/22.b06fba7a.js",
    "revision": "b3c7f0009d6744ddad3425a799ceff01"
  },
  {
    "url": "assets/js/23.638873b3.js",
    "revision": "f1b4ba075fbe87a926bca869cb9b09c0"
  },
  {
    "url": "assets/js/24.61d6db8b.js",
    "revision": "3e102b63eace70beaaadb6f56286bdf3"
  },
  {
    "url": "assets/js/25.8bcc57bf.js",
    "revision": "b8880e393376b7210358ac4944e5ff99"
  },
  {
    "url": "assets/js/26.d76c5a3a.js",
    "revision": "3599fbbd4ffdd2a17cbff24315ea45c9"
  },
  {
    "url": "assets/js/27.0c78ab3f.js",
    "revision": "b695105d5e74d13887a6e042831e0d22"
  },
  {
    "url": "assets/js/28.1804816a.js",
    "revision": "b60a10403e6d008e642bafe11f04e05d"
  },
  {
    "url": "assets/js/29.0a95753f.js",
    "revision": "828122669b74a122ea5d6eda76cf62c2"
  },
  {
    "url": "assets/js/3.f09d7b13.js",
    "revision": "707771b1c3ccc602da6863e7076c6ee9"
  },
  {
    "url": "assets/js/30.519a696f.js",
    "revision": "a134c52a5a8fb827ee38570a1e38be7a"
  },
  {
    "url": "assets/js/31.9d9078a6.js",
    "revision": "e7c459aa97de0ef015a90c04899ad3cb"
  },
  {
    "url": "assets/js/32.6b7c703c.js",
    "revision": "5edf8216fa94b73ae5921cbaa119e3e1"
  },
  {
    "url": "assets/js/33.d76a9c9b.js",
    "revision": "bc45fd26e42c7e49d6d9c10b526cd301"
  },
  {
    "url": "assets/js/34.15a2e294.js",
    "revision": "8a9c51a2ebc4aecadbbc7404108b705c"
  },
  {
    "url": "assets/js/35.4b766fed.js",
    "revision": "49504337f640619032f1a774a0118014"
  },
  {
    "url": "assets/js/36.3660c802.js",
    "revision": "6c1f2db98a933a0dbc5717ce646e7abf"
  },
  {
    "url": "assets/js/37.7221fa63.js",
    "revision": "381d3799fa4b0af07b5f963d1e8b3792"
  },
  {
    "url": "assets/js/38.92333976.js",
    "revision": "464c876dfe2440eef50dcb3d3f48dc59"
  },
  {
    "url": "assets/js/39.a6b38481.js",
    "revision": "25c978db88d8d1e5f59e32fa1969e8c6"
  },
  {
    "url": "assets/js/4.840fd9e2.js",
    "revision": "b938d68627913ab8f7d9537676b46bfa"
  },
  {
    "url": "assets/js/40.5d33d9ea.js",
    "revision": "249d211fd41c26e81b42fb8a4a79478e"
  },
  {
    "url": "assets/js/42.caa2b45c.js",
    "revision": "c262d9b1af7d82d4b5b55b29dfdf2b7d"
  },
  {
    "url": "assets/js/5.66d5f4bb.js",
    "revision": "e1eea280454585d55106ca1cea13a118"
  },
  {
    "url": "assets/js/6.94ed5df6.js",
    "revision": "65fcdcfbb6ca922c677ce8407eccff4d"
  },
  {
    "url": "assets/js/7.42d158da.js",
    "revision": "255022024b6648297af6ade4a6418f2c"
  },
  {
    "url": "assets/js/8.50b4ec0c.js",
    "revision": "a222402e86e7400a26390acca26e7ff1"
  },
  {
    "url": "assets/js/9.f92e2f9d.js",
    "revision": "67c198b3d8edad0370af1ce7bc754bbf"
  },
  {
    "url": "assets/js/app.4755dc17.js",
    "revision": "7414210910bdbf5e6771bf657aa85df5"
  },
  {
    "url": "assets/js/vendors~docsearch.a7e18309.js",
    "revision": "5886b9422ba4f57d74f7d302e2e29b71"
  },
  {
    "url": "conclusion/index.html",
    "revision": "1c5466c4d46eff1a9af6a9179dedb5f0"
  },
  {
    "url": "design/index.html",
    "revision": "3f94fde49f722fd4d8b35d7ea6ed5aca"
  },
  {
    "url": "index.html",
    "revision": "978b57aaeb871eea00bb17c1ce446a66"
  },
  {
    "url": "intro/index.html",
    "revision": "cf9e4950944a91885e3ad1dbe9c236bc"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8d48552eaa72fa8512679b725651648b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "fc77dd8ab160e688884455e513864089"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "298fc65be56626426df83e926cf35ccf"
  },
  {
    "url": "software/index.html",
    "revision": "bfec7b67e7fc0b5b2730c20bd0d5d704"
  },
  {
    "url": "test/index.html",
    "revision": "fb8dae30345ba021d05c10d2eee69fa1"
  },
  {
    "url": "use cases/index.html",
    "revision": "59c391b442e1bd2073d63dcc5da9402a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
