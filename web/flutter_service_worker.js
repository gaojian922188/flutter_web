'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9ff487d2f42971d0d8d2326d47582e18",
"assets/AssetManifest.bin.json": "f45295c3fa21f8e4f301c2c7cf636e6c",
"assets/AssetManifest.json": "fe25cc1f271832f00461238eb69b1b0f",
"assets/assets/filters/pngs/A620.png": "0abbc63154ef35ce182af5864226987b",
"assets/assets/filters/pngs/BOOTH.png": "ec43f6b31e49563599aa81f3eee02d89",
"assets/assets/filters/pngs/C123.png": "10d09738f099d733e5cb5f1cec64339d",
"assets/assets/filters/pngs/cool.png": "1e4032e2ff1900b8591154f4104de618",
"assets/assets/filters/pngs/CX733.png": "c30f20aa24feaadc10fce978554dfbdd",
"assets/assets/filters/pngs/DISPO.png": "2d918809eaaa26111b4ce307951e29ca",
"assets/assets/filters/pngs/F100.png": "a9e99f09f9cd2223953ab17e3d475877",
"assets/assets/filters/pngs/F710.png": "90b9a028770726d23c815001bd8dc114",
"assets/assets/filters/pngs/GR.png": "dcb951097916af8a411287e783690e6b",
"assets/assets/filters/pngs/hy6.png": "eb487b48cb883641a3ff518b516f2fbc",
"assets/assets/filters/pngs/INSTAX.png": "0c924b3038e31f29031e06e86c0bc86b",
"assets/assets/filters/pngs/IXUS70.png": "ff135044bea1038ddb16a9d827effdf1",
"assets/assets/filters/pngs/M10.png": "72b37aa90fd6d1eba1f8d808af0fca95",
"assets/assets/filters/pngs/SIPIC.png": "ac1dd4b9ee0147f5d717f0c4d482131c",
"assets/assets/filters/pngs/U400.png": "bf2b8deff5c7b5c6ad178069f4c29900",
"assets/assets/filters/pngs/U7040.png": "e3a6f72c89ee5d81120bfbfd4ea155f2",
"assets/assets/filters/pngs/vintage.png": "374600cad7b6b9632a5bef1524fbb557",
"assets/assets/filters/pngs/XG.png": "224b93321063c00efe6571a7a657b041",
"assets/assets/filters/pngs/XSR.png": "0fc9d8986209f4f5ce43f63875e3a9f4",
"assets/assets/filters/pngs/Z30.png": "a562d93d28ba1b189f7f197b983565ae",
"assets/assets/filters/pngs/Z50.png": "72fc9e456f850aeb7757f7aabb77c652",
"assets/assets/fonts/AstaSans-Regular.ttf": "362374507ccb6f53a6d58a41e01e9967",
"assets/assets/fonts/NotoSans-Regular.ttf": "c8e58befd2433eb89589dd1d23225c4e",
"assets/assets/fonts/NotoSerifJP-Regular.ttf": "dbd50dd8eeb84428bd905845f4937e53",
"assets/assets/fonts/NotoSerifSC-Regular.ttf": "22b0c7221da10f0ba4599688bc4a64fd",
"assets/assets/images/2-1.png": "6ac23150e641c2fe42dcffa7c11e00e6",
"assets/assets/images/2-2.png": "1c891b0591e52bb3c13d48daebad86b4",
"assets/assets/images/2-3.png": "4e521c71ed99ac8371822139c6817fd8",
"assets/assets/images/2-4.png": "a65cd576e6655f48a56b33dd9c641c42",
"assets/assets/images/2-5.png": "0103cba73efcd74cd43877ca285ba66b",
"assets/assets/images/2-6.png": "c2f46a522607a3166077c805e4e190f3",
"assets/assets/images/3-1.png": "017fed213f36bd4b82510c9d7433a57c",
"assets/assets/images/3-2.png": "bfb170b72c4d4ac024870372dfd0d1a3",
"assets/assets/images/3-3.png": "88a062d22c6a2373f52ba3107327aa4b",
"assets/assets/images/3-4.png": "57ad32a7ef071a08d6554b17ecb052ff",
"assets/assets/images/3-5.png": "2c2d08be56cc85b6da248230e70d0e8d",
"assets/assets/images/3-6.png": "199c56803071ba120346afd48a6e45ad",
"assets/assets/images/3-7.png": "f29689a678a1d4829a534a1c87865b8e",
"assets/assets/images/3-8.png": "7250d527d5f2a5f3ea777c1b6784e9ba",
"assets/assets/images/4-1.png": "b59a04fcdeba645454cc640435a521a1",
"assets/assets/images/4-2.png": "55b1f6777c04dae6daac1e77c546bfe4",
"assets/assets/images/4-3.png": "516862e5925641d0379cd3b91e1bb447",
"assets/assets/images/4-4.png": "080a96ae370eaa297f3412c550770401",
"assets/assets/images/4-5.png": "a55865b8857d41dd350e7a151e3b194e",
"assets/assets/images/4-6.png": "7e8d8ab96ba1de0d59d4f66cdfdbd2f5",
"assets/assets/images/4-7.png": "5bffa7f711602663a4f0c25a1c9557a1",
"assets/assets/images/5-1.png": "70e6dd86e0dc8ada157b1d1260d35efc",
"assets/assets/images/5-2.png": "5083d462a9d4b4d5a12eb50633cc121c",
"assets/assets/images/5-3.png": "58d44b8e7a023c0a023bc5aff730fdae",
"assets/assets/images/5-4.png": "1e860f346ffac2eb71f1a51abbe4efae",
"assets/assets/images/5-5.png": "eef66d174ce17973e7d6ed0308fb1982",
"assets/assets/images/5-6.png": "785eaf7b7a234f6b1ee84b4ccb22474c",
"assets/assets/images/5-7.png": "f066dd4825246e41784f3a76d897bdb0",
"assets/assets/images/5-8.png": "92e3ae2a816d998b72c75adaa24f758f",
"assets/assets/images/6-1.png": "be48ab8b226a31fa9d2e667f684420a5",
"assets/assets/images/6-2.png": "cf3fdc55320c366c185a96a83efa4a15",
"assets/assets/images/6-3.png": "7cb454260c199f67ac45a8c08f4f7dd2",
"assets/assets/images/6-4.png": "34e859e8189051891928bc1c1309031e",
"assets/assets/images/6-5.png": "3b3590727ea2dabfc8868823a87f7c30",
"assets/assets/images/6-6.png": "801d452e04ac70610bbe1a5527a1558d",
"assets/assets/images/7-1.png": "8744b0f5d4782509c761df5cc1f44ecf",
"assets/assets/images/7-2.png": "17aed224a52a0593fd6449e881d77540",
"assets/assets/images/7-3.png": "3b5f41edc302fd06414cbe7db6fcef0a",
"assets/assets/images/7-4.png": "8de22a802b9a56c7bd6606ec2f161242",
"assets/assets/images/7-5.png": "787fcebe8686e685fdad100f98f1c31a",
"assets/assets/images/7-6.png": "a7883c540eb104326e077235511f98dd",
"assets/assets/images/8-1.png": "fbb2a4797ee3f87b8de1b241bf3a1065",
"assets/assets/images/8-2.png": "472d4275d10c5fa51f4335cab3bce1af",
"assets/assets/images/8-3.png": "2711117fe311e84dea501304fc1f2624",
"assets/assets/images/8-4.png": "052ae32ddfb5e32a9b694bad18e50172",
"assets/assets/images/8-5.png": "b9a9c76e8dfa6694c1d3768ccb0b2dd2",
"assets/assets/images/8-6.png": "0f03460e59bc78b95aa3cee01f1a79e3",
"assets/assets/images/9-1.png": "a3e440e44bf1063a40fd84eb7cacb749",
"assets/assets/images/9-2.png": "d2460000aedaa681d3844915fa1d98a4",
"assets/assets/images/9-3.png": "0f03460e59bc78b95aa3cee01f1a79e3",
"assets/assets/images/9-4.png": "e9e395ec479a94a7235523f56a3ba9f3",
"assets/assets/images/9-5.png": "001967b95eaf5120c391235869a22810",
"assets/assets/images/9-6.png": "23e65fef3e758f1b18569e151ebcbd4d",
"assets/assets/images/action_tab_canvas.png": "02d68b4b04cd1baa30f068b275c20253",
"assets/assets/images/action_tab_photo.png": "286689041708a7bdc71c0e3d54013ccf",
"assets/assets/images/action_tab_puzzle.png": "8a1947efe85ce328f413b5ed58c2a6f6",
"assets/assets/images/Asta_Sans.png": "020351cf567cf24b00d13beecbbd0e2f",
"assets/assets/images/AudioRecord_more.png": "b3a00386495ef5424a5428d79e10dd0b",
"assets/assets/images/AudioRecord_play_n.png": "3565862a2009def705acf1735ac0322f",
"assets/assets/images/AudioRecord_record_play.png": "926f33d43dc9046a8e772389f235d961",
"assets/assets/images/audio_record/Audio_record_00000.png": "c6189c8dfe2b7898fe6c8ee392b792f8",
"assets/assets/images/audio_record/Audio_record_00001.png": "b140eddd3c9a8819eee86b99dd128d2a",
"assets/assets/images/audio_record/Audio_record_00002.png": "8d5109d6433dbfb649280d57d46008c9",
"assets/assets/images/audio_record/Audio_record_00003.png": "9668bb75bec9dc31f49964f22174faa2",
"assets/assets/images/audio_record/Audio_record_00004.png": "6a25e805489eb286977a297e764d6903",
"assets/assets/images/audio_record/Audio_record_00005.png": "65ba84d07f1d1168eda8be7f66dc4e06",
"assets/assets/images/audio_record/Audio_record_00006.png": "80a9b67a08328bc7f73ab269ab586327",
"assets/assets/images/audio_record/Audio_record_00007.png": "fb535c8564a928d8b250da7a69b0b3bb",
"assets/assets/images/audio_record/Audio_record_00008.png": "c99b16e3bca2fe215d60fab3f6dffbdc",
"assets/assets/images/audio_record/Audio_record_00009.png": "f939f389177ff24fb75bbd7cbeaf2210",
"assets/assets/images/audio_record/Audio_record_00010.png": "ce75c61198f0f21cdb248ccb41b4efdc",
"assets/assets/images/audio_record/Audio_record_00011.png": "1f24ca691c4f02271cf325b271001801",
"assets/assets/images/audio_record/Audio_record_00012.png": "6fe40f55763f21bc1a5daac2d358ec11",
"assets/assets/images/audio_record/Audio_record_00013.png": "64a267b0051a1d7cbb477e5c1fa4fdbe",
"assets/assets/images/audio_record/Audio_record_00014.png": "39816f5ae048ea175fa34d8047559b83",
"assets/assets/images/audio_record/Audio_record_00015.png": "79282b2cc796802ebb6b68057b526b41",
"assets/assets/images/audio_record/Audio_record_00016.png": "043301236c3ef66f91f6f2bfc561a21b",
"assets/assets/images/audio_record/Audio_record_00017.png": "cea949cde57bca036ee1dd86f7f121fa",
"assets/assets/images/audio_record/Audio_record_00018.png": "e0beafdb337dd4bbb9e323acef0b6fff",
"assets/assets/images/audio_record/Audio_record_00019.png": "417fda023ac784787cf2d1b34fca8540",
"assets/assets/images/audio_record/Audio_record_00020.png": "7684827b58f4d00e329ec509bcf0210a",
"assets/assets/images/audio_record/Audio_record_00021.png": "8e26aabcc1c61b594ed57be58da19dad",
"assets/assets/images/audio_record/Audio_record_00022.png": "81ecbe69029acbdd93bf2ef247d0e8d9",
"assets/assets/images/audio_record/Audio_record_00023.png": "a0dd747172b60b94d875c691d395ddba",
"assets/assets/images/audio_record/Audio_record_00024.png": "ca92cc0fa555cf3f8ef488eaf8fddee9",
"assets/assets/images/audio_record/Audio_record_00025.png": "9f4fb338b2291b28f3b7720e22eddaf6",
"assets/assets/images/audio_record/Audio_record_00026.png": "1799aa3415b5954d84969bbb2d3d3d73",
"assets/assets/images/audio_record/Audio_record_00027.png": "5443ca73ce65f3996b6ccf10c7d1c954",
"assets/assets/images/audio_record/Audio_record_00028.png": "1dc7f4ec22a64d25db8335e19606fb28",
"assets/assets/images/audio_record/Audio_record_00029.png": "4d6327d6a49e0d7614c06ba002dc7845",
"assets/assets/images/audio_record/Audio_record_00030.png": "0aa4e518095a967df99d16284ab580f0",
"assets/assets/images/audio_record/Audio_record_00031.png": "bfb91c2cabf012265ab7173797be7473",
"assets/assets/images/audio_record/Audio_record_00032.png": "9646f55b86f8ba789ab1ff5cc414e5ed",
"assets/assets/images/audio_record/Audio_record_00033.png": "91db311e773261d56b64df7bc13c8539",
"assets/assets/images/audio_record/Audio_record_00034.png": "43b7a9ffed4a326428bae1dd381a7b19",
"assets/assets/images/audio_record/Audio_record_00035.png": "b15a39776037c56389784ed0404cbabc",
"assets/assets/images/audio_record/Audio_record_00036.png": "7c8f3b241e49a88afd99bb1fbfa379ba",
"assets/assets/images/audio_record/Audio_record_00037.png": "22907cd130817a5ee53d8d9995fe52e6",
"assets/assets/images/audio_record/Audio_record_00038.png": "f92742f87f795ff8156d1d1c9639044a",
"assets/assets/images/audio_record/Audio_record_00039.png": "e07838d62640f8c3bfdc3355f70c5461",
"assets/assets/images/Audio_record_pause.png": "4ee552810349aaddfe9cc68b3d81f918",
"assets/assets/images/Audio_record_play.png": "4de21274e9092f10a7225fcc6e04856e",
"assets/assets/images/background_tool_icon.png": "936fa30a5e61e8a7e6184842f65d5c6a",
"assets/assets/images/border_guide.png": "ef916a648f7386c99f7fa41f5935db0d",
"assets/assets/images/border_guide_1.png": "94e1dc3df2a2d8ea717b0c83b59198e3",
"assets/assets/images/border_guide_2.png": "887820b528a73e854aee0eb848a4c7b4",
"assets/assets/images/border_guide_3.png": "fc40929fc56dfd1682a81b0fea35f52d",
"assets/assets/images/border_guide_4.png": "44f887fa54d352161421465c9274e4ce",
"assets/assets/images/border_guide_5.png": "5168391a5df29627a93318089c62eb64",
"assets/assets/images/border_heart.png": "8451dbba0fa5f27b15ee7b98098b357f",
"assets/assets/images/border_h_black.png": "7e65c6d83529a901fb31f0a486412556",
"assets/assets/images/border_h_black1.png": "4d8d49dd0ebc1e12bfb4e5df18d24706",
"assets/assets/images/border_h_firework.png": "d078047377ca0c9c75e7d42efd6e13eb",
"assets/assets/images/border_h_gradient.png": "68ae0e3d6cd633c0808a09ba2598b6fd",
"assets/assets/images/border_h_gradient1.png": "51da1593912b79b7bd04ff1f3bd85956",
"assets/assets/images/border_h_heart.png": "920160a3eac5d6925fff567415e1e526",
"assets/assets/images/border_h_lavender.png": "0887c95dc015c9ee45c9ad832d753ba3",
"assets/assets/images/border_h_pink.png": "72609f3818e80480e155cc139835d810",
"assets/assets/images/border_h_pink1.png": "a3abce69342dccfe93087cd4cd999def",
"assets/assets/images/border_h_shivering.png": "52bb58ce5a643979d927f4d588cf2921",
"assets/assets/images/border_h_white.png": "e9eda3a32341defc1d5acffbc8cd1220",
"assets/assets/images/border_i_black.png": "4ddb01b13eebc3737843f63082c52bbc",
"assets/assets/images/border_i_black1.png": "bfcb87ee9228a7e5ae51d002313abeb4",
"assets/assets/images/border_i_firework.png": "5772d55207f34998fc6681e76a3d8f76",
"assets/assets/images/border_i_gradient.png": "eea8416ca0c1e826373c082e96676059",
"assets/assets/images/border_i_gradient1.png": "64f3dec47af1fd03804db6100dee0861",
"assets/assets/images/border_i_heart.png": "dd4f233ff7c401d57de04c88f06a0ccc",
"assets/assets/images/border_i_lavender.png": "67f20724a864708bda4b07b5423427d5",
"assets/assets/images/border_i_pink.png": "1739120067a838023026adc40c1a266b",
"assets/assets/images/border_i_pink1.png": "2a86882326eae020d6176f12d0b81418",
"assets/assets/images/border_i_shivering.png": "d8bcf2febd0214726b3f04af1112e275",
"assets/assets/images/border_i_white.png": "9deb9c2dd8724d80b2a20f45e1905d55",
"assets/assets/images/border_system.png": "77ee208a0558b8377ec0656f173d2462",
"assets/assets/images/border_test.png": "1bbbb6fa34b63354b759b075e904c598",
"assets/assets/images/border_type_horizontal.png": "a095392cf0151fceadf0f80811410c04",
"assets/assets/images/border_type_horizontal_s.png": "ad01297193c1e9ff3d88620bc4a162e4",
"assets/assets/images/border_type_instant.png": "cce1ffe0deb320a89553b14e414f143a",
"assets/assets/images/border_type_instant_s.png": "da51ea4701d4a99c865d98f736b39f95",
"assets/assets/images/border_type_vertical.png": "ca343ea3c149e1e64fe7d872f3022ac0",
"assets/assets/images/border_type_vertical_s.png": "b3308f7774a78df67caa452587081b8e",
"assets/assets/images/border_upload.png": "c91072298925ad4dc54092444552899b",
"assets/assets/images/border_v_black.png": "e88fce9e169690535d35982d0f731d90",
"assets/assets/images/border_v_black1.png": "dabcd6dd4cb723976ee886f6004db81f",
"assets/assets/images/border_v_firework.png": "26305b4a0fb7c97f3bb5ac7491a1e243",
"assets/assets/images/border_v_gradient.png": "0b83d7feb0f2f0ce4347949e964bc897",
"assets/assets/images/border_v_gradient1.png": "6e3270a983212f9cc5bec9cee8b4a92a",
"assets/assets/images/border_v_heart.png": "6d797593fe7d6606438db4bf917a179b",
"assets/assets/images/border_v_lavender.png": "8ff793e50e383d8623abd59ce4e8d5df",
"assets/assets/images/border_v_pink.png": "954d55f9f16f1ef950301614ae753644",
"assets/assets/images/border_v_pink1.png": "faaf6c747caa275b92e4fe495c6f7a80",
"assets/assets/images/border_v_shivering.png": "db7967ae76437d4e68229afeff12bd5c",
"assets/assets/images/border_v_white.png": "78411e1958fd08d783bdcca581374687",
"assets/assets/images/camera_animate1.png": "7a9632b6572842b597d8da79bde27010",
"assets/assets/images/camera_animate2.png": "6630cb369427fba4325050cbb92d5e97",
"assets/assets/images/camera_animate3.png": "b97a77c9623c3fb235d013d0bd05beb8",
"assets/assets/images/camera_animate4.png": "e3086f313b80cfa32afa46f697325293",
"assets/assets/images/camera_animate5.png": "7529cb19177ffabf39990c48907653f6",
"assets/assets/images/camera_animate6.png": "606cd35cb1e18757379d8f54e9282359",
"assets/assets/images/camera_animate7.png": "0b102305242b4725843d3a873afdb25c",
"assets/assets/images/camera_animate8.png": "bb0640f9580b2bfd136cc2b9cebaafc4",
"assets/assets/images/camera_animate9.png": "53b54ebbd4c1f734dbeef03afca2e452",
"assets/assets/images/camera_bgi.png": "972ab070fa201fb0a19d3675df5b58ae",
"assets/assets/images/camera_border.png": "7eac4e2e3841b4f7dcafe98c3ec65370",
"assets/assets/images/camera_border_pet.png": "fbf883257a4aaf310af0e1546b1f2717",
"assets/assets/images/camera_border_pet1.png": "a14a69f423679f800cda3610150e5091",
"assets/assets/images/camera_border_pet1_icon.png": "04c532a4d367f729bc353ec57b3c3fb8",
"assets/assets/images/camera_border_selected.png": "45860972dce4a071398c3691b0cfe7fe",
"assets/assets/images/camera_bottomBgi.png": "cc57abc15f3be8b93cc2fafce130cfe8",
"assets/assets/images/camera_button_bgi.png": "5ed9d604438459a15a1aca817acfd6b7",
"assets/assets/images/camera_cancel.png": "4bcb7431a0cfed9f70ea8c143654b011",
"assets/assets/images/camera_close.png": "33608f8dfc9987b62360b7d07ea40c62",
"assets/assets/images/camera_close_bgi.png": "1b9de9d59e4ea696bbf003b6a13c032d",
"assets/assets/images/camera_confirm.png": "ac123778f742c6b60751c8c9fefb9cf4",
"assets/assets/images/camera_countdown.png": "7f176db567e7afbffbc151e15acc81f8",
"assets/assets/images/camera_countdown10.png": "c73536ec5fc80f0aebf12dd13096a1ae",
"assets/assets/images/camera_countdown2.png": "1358c5558ea4a44a14a778ccb8246e1f",
"assets/assets/images/camera_countdown3.png": "956ba0c91bfc11691550a244394d3a94",
"assets/assets/images/camera_countdown5.png": "717aae19cc7e6d7a12d8221bc40db716",
"assets/assets/images/camera_filter_A620.png": "415e1accf6ae30586799c718ab5ca46f",
"assets/assets/images/camera_filter_BOOTH.png": "16488d1e2d7bd8e844d3d2ed8c6ff689",
"assets/assets/images/camera_filter_C123.png": "c69b85aeef93e52ac98bb809a952a69a",
"assets/assets/images/camera_filter_CX733.png": "97f5faec134968cf0af5fe1f344fe55e",
"assets/assets/images/camera_filter_DISPO.png": "1fdfba4de01deb74e70d8598ad1ff2da",
"assets/assets/images/camera_filter_empty.png": "6327f8de097bcc9957fafb3cb12204f0",
"assets/assets/images/camera_filter_F100.png": "e8542299b1da07a6c3e145a334314b4e",
"assets/assets/images/camera_filter_F710.png": "c77657efba7d4176777a7bc9dadb5550",
"assets/assets/images/camera_filter_GR.png": "64e59e39ed84e2d208edac79fc430489",
"assets/assets/images/camera_filter_INSTAX.png": "9afd167f0556e1cf60541560c15d0ed4",
"assets/assets/images/camera_filter_IXUS70.png": "f6ea06b8dbb59f4bdfec074b4278200c",
"assets/assets/images/camera_filter_M10.png": "d99a9574e3a71d54d8162d0f0c165b60",
"assets/assets/images/camera_filter_SIPIC.png": "ad4da2d8a5a495345b83d331f9633253",
"assets/assets/images/camera_filter_U400.png": "1f57957fc5fb4f654e4c553d498fd54e",
"assets/assets/images/camera_filter_U7040.png": "ef1ed9fdb76bcc04859a45bd97ee5a50",
"assets/assets/images/camera_filter_XG.png": "32f0e37e8d1528861aebce8e1b1e118c",
"assets/assets/images/camera_filter_XSR.png": "a55586c273b61968aee110165be962ea",
"assets/assets/images/camera_filter_Z30.png": "b8df096b4bc5e4cad82a63fbb3c66dda",
"assets/assets/images/camera_filter_Z50.png": "24c34041e65676b8703b86702e239b09",
"assets/assets/images/camera_flash.png": "6d1dd417f7338a5bb084c4174e34dcf9",
"assets/assets/images/camera_flash_off.png": "3c89eebda4fca714e80f8673b7c50b49",
"assets/assets/images/camera_flash_on.png": "52a7a5883332330c3989fdefba7207fe",
"assets/assets/images/camera_flash_unable.png": "6b16ecb532b4f71881998d21cf5d6c7a",
"assets/assets/images/camera_position.png": "c3132ffb056288376de2143e65ec9c8f",
"assets/assets/images/camera_preview.png": "ab3371b17c244e58878f22dbc0241d22",
"assets/assets/images/camera_printer.png": "f2175bd491b0ed3cb3296e6dfa2bf875",
"assets/assets/images/camera_settings.png": "995ac8b9c311225d7394e58d81d0ea11",
"assets/assets/images/camera_settings_disable.png": "e5474a8f791b460e1a20a00fbbe5e21a",
"assets/assets/images/camera_take.png": "fda2d8d358bfd29421d4aa1bdb7bde82",
"assets/assets/images/cancel_white.png": "185527a5d8a4e5d12138b169378ae18b",
"assets/assets/images/canvas_advanced_angle.png": "af8a8167d2a29d9be47dea38b20d2f5f",
"assets/assets/images/canvas_advanced_scale.png": "82a9b4d0ae20fd1a9e88beda32b87e7f",
"assets/assets/images/canvas_arrow_up.png": "d415474f448645a639366776ebdab760",
"assets/assets/images/canvas_close.png": "442093a1d835c4baafb9170ad73ebd9c",
"assets/assets/images/canvas_color_able.png": "b261f0d8ed6ce6135f453c13ed7ed0ed",
"assets/assets/images/canvas_color_unable.png": "fe43a027a41cbd4e092b7ae202ec2542",
"assets/assets/images/canvas_confirm.png": "3cbad19fabb478034c8035a33d375644",
"assets/assets/images/canvas_corner.png": "abb6f1a39a2b8f182da4ba3f63d04161",
"assets/assets/images/canvas_cut.png": "e872ef610d23af030b94ad1b7013f100",
"assets/assets/images/canvas_element.png": "d78b457fbf55636fba814c068c09120d",
"assets/assets/images/canvas_element_select.png": "9edf794e907e63e0ccc28ed6e6786237",
"assets/assets/images/canvas_group.png": "958b0f5fb071e5fe0844b1e27888fc4a",
"assets/assets/images/canvas_image_crop.png": "89a095783ae386f07c2544259722c143",
"assets/assets/images/canvas_image_fill.png": "5514f2f860bfcb887ec1b83cc63717d8",
"assets/assets/images/canvas_image_matting.png": "7ecd66493878f04b9a17acff0710935b",
"assets/assets/images/canvas_list_more.png": "a6907d8682c5dc5d506f9f4c48809942",
"assets/assets/images/canvas_operation_b.png": "4dc33546599ce7773e70fd8dc82932e8",
"assets/assets/images/canvas_operation_c.png": "f199e127ccdb3b6505c66f8d2f7bc49a",
"assets/assets/images/canvas_operation_center.png": "5e8245c87f70059d9548bc07b8964541",
"assets/assets/images/canvas_operation_down.png": "d4bc4574b75271de16946cd750aa0fa8",
"assets/assets/images/canvas_operation_flip_h.png": "ce4c5a28b8fdb41ca359385073ddc980",
"assets/assets/images/canvas_operation_flip_v.png": "8569148c1a711002327099ab16a28d8b",
"assets/assets/images/canvas_operation_h.png": "37b7e6c891373ad92038894f5aa309df",
"assets/assets/images/canvas_operation_l.png": "c8d9e18d2c9f2267cb9a75e757ebd40c",
"assets/assets/images/canvas_operation_left.png": "a65247640d8367caf56ae8adab52fff7",
"assets/assets/images/canvas_operation_r.png": "b4da6e10f1b80efe77a9cb801786ce98",
"assets/assets/images/canvas_operation_right.png": "589e467a1ad39f9c3f070f39acd2a229",
"assets/assets/images/canvas_operation_t.png": "1e5db2a022b6910a200d62c2e0c65f66",
"assets/assets/images/canvas_operation_up.png": "f404686e4b8842971c6bb2cc0ccdb99c",
"assets/assets/images/canvas_operation_v.png": "77d5219c9a3c0b75159d55655cc2c4a8",
"assets/assets/images/canvas_pad_back.png": "3558239a82d4a7286998fe0087296a3f",
"assets/assets/images/canvas_pad_back_selected.png": "4650b2830a9d22d1b7751979b0013150",
"assets/assets/images/canvas_pad_delete.png": "e528b0484a3afc9d8bed208c1e084098",
"assets/assets/images/canvas_pad_grid.png": "888e131218fe8d65603bd60fdfc68a9f",
"assets/assets/images/canvas_pad_more.png": "a6907d8682c5dc5d506f9f4c48809942",
"assets/assets/images/canvas_pad_print.png": "9168954a5a4723ee45c68d2342cfaef0",
"assets/assets/images/canvas_pad_save.png": "60c1da485c9270216e870afd3a34b02b",
"assets/assets/images/canvas_shape.png": "fde4ca08730aa8f43feacac1458d1743",
"assets/assets/images/canvas_shape_select.png": "70470af79377a62c1a98e32e9367622e",
"assets/assets/images/canvas_size.png": "de14782d7fc111331f22b65b4a7ac430",
"assets/assets/images/canvas_template.png": "ac953550603b5759526f2e65c0905306",
"assets/assets/images/canvas_template_select.png": "2a94d0e776854a673f759bbb1491c1ae",
"assets/assets/images/canvas_text.png": "bf506d4dd83387ecf849753a66d2029d",
"assets/assets/images/canvas_text_bold.png": "bf8c6be566740deb35eb4f137dacbfed",
"assets/assets/images/canvas_text_center.png": "c8a6968349e4372a5e7866d283faafde",
"assets/assets/images/canvas_text_download.png": "0f13b8fc0cbd46b216198719658f2158",
"assets/assets/images/canvas_text_italic.png": "78a838929e08946bf69cfbc656d3036d",
"assets/assets/images/canvas_text_left.png": "ddb43499f0b24de1fb0dc17814c30244",
"assets/assets/images/canvas_text_line.png": "7dad42c1b64650021b006e9467f4476d",
"assets/assets/images/canvas_text_right.png": "5a2a7545941714a1740089fd54da2bf7",
"assets/assets/images/canvas_ungroup.png": "dde71e2672f3efbd4d2d3916cdd999c8",
"assets/assets/images/canvas_upload.png": "b947fba48b86217140cac4770d20d6ae",
"assets/assets/images/cn_guide1.png": "468f2d07d576c1ddc99862120a4ed789",
"assets/assets/images/cn_guide2.png": "6fd208a8fbd2c81b8f1a2063c763f52a",
"assets/assets/images/cn_guide3.png": "7b4c36007ad18b8dcebdb9bc2439483c",
"assets/assets/images/color_picker_alpha_bgi.png": "8d511f0395764ac8352c6a912e9ed433",
"assets/assets/images/color_picker_straw.png": "d5241ec89386e043317118c9954ef46f",
"assets/assets/images/color_picker_straw1.png": "430265debd0375aef396301eb987ca7b",
"assets/assets/images/common_selected.png": "0f60c8c20468f8457535710c10a0dbd8",
"assets/assets/images/common_unselect.png": "a6c2ee567cdc5c274c646fa461729a36",
"assets/assets/images/copies_plus_n.png": "30f5f06f84e26c5d967d4f51cd7ef18e",
"assets/assets/images/copies_reduce_n.png": "18d2c8fb995e50a39a3a97bb2bcf3dc8",
"assets/assets/images/cutout_brush_n.png": "5da09d54402e6096ec2ac0fa5f5d6afa",
"assets/assets/images/cutout_brush_s.png": "b8015f9b73a3e7df3e8e57c1bf6d7a96",
"assets/assets/images/cutout_eraser_n.png": "cb9e3cfc5e6c7b8dfa3c7c016c2672dd",
"assets/assets/images/cutout_eraser_s.png": "382df9bd29fbc3dd1bf77e426d41a373",
"assets/assets/images/device_error.png": "b595a0dca7e6c17afde4d8c412d8b4d8",
"assets/assets/images/device_offline.png": "bcf29d1e27482ad3e9c7333f9c9b7219",
"assets/assets/images/device_printing1.png": "f4cfcb318f4d7fbf6e5a7700ef1b692b",
"assets/assets/images/device_printing2.png": "a625f80c698b3c668383dc37df6c4a17",
"assets/assets/images/device_printing3.png": "564ba176a421067eb77573a7ada2e9f0",
"assets/assets/images/device_printing4.png": "8684fbd16adc7ab95ab732915b9a5060",
"assets/assets/images/device_printing5.png": "6a5f1db7b0f51b2a39f180b8c0750c8b",
"assets/assets/images/device_printing6.png": "0bd864788abf1ad7e62bcc812b9bc89c",
"assets/assets/images/device_refresh.png": "4500b318d13c5782eb56a0a2b72597b6",
"assets/assets/images/device_upload1.png": "091ea75e616e37c3831bdb14bb34afde",
"assets/assets/images/device_upload2.png": "ab981aca51245ae35a94e9c6c122f88c",
"assets/assets/images/device_upload3.png": "3fcb3509e91a0f3a9849d7415543a23d",
"assets/assets/images/device_upload4.png": "45eb5aa96ca3d1fcb7b83ae0ba0b304e",
"assets/assets/images/device_upload5.png": "3d6bcb3564127d611686cd2580476c34",
"assets/assets/images/device_upload6.png": "a27614d0456b62a5837cf317ed000f06",
"assets/assets/images/element_tool_icon.png": "3f224666ac2526b530fd81fbe0dd8922",
"assets/assets/images/folder_empty.png": "16b16b2a6b4e3017b7fdc0d54fe06cd1",
"assets/assets/images/guide1.png": "10da7777ebec0f66e37672b430aafa74",
"assets/assets/images/guide2.png": "4393755081a6effec4730faae26e5526",
"assets/assets/images/guide3.png": "899c47a4bb7f6f848cb0c5e0d3359f49",
"assets/assets/images/guide_phone1.png": "802542abb253d5205601dbfe9b9a980d",
"assets/assets/images/guide_phone2.png": "4393755081a6effec4730faae26e5526",
"assets/assets/images/guide_phone3.png": "548a468af10c4f0d0ed8922ea19b6711",
"assets/assets/images/home_element_add.png": "c997902b55c8e4fee62d8f116944ee23",
"assets/assets/images/home_favorites.png": "9fd4011dfcbe982e20dd947992ab0778",
"assets/assets/images/home_favorites_selected.png": "0b54449c0b1110c2dc5a117c024847d6",
"assets/assets/images/home_my_project_more.png": "94057e55874d792bfb24f91738002037",
"assets/assets/images/home_search.png": "0490f9ac84471313994282581e144d80",
"assets/assets/images/home_shared_quit.png": "edf245954bdda5f0e4f8cb3edad79ac6",
"assets/assets/images/ht_brightness_icon_select.png": "717a154cb34a50bf494de5af7576cc6e",
"assets/assets/images/ht_brigntness_icon_unselect.png": "57a4eab7e978120aee774511a08736f4",
"assets/assets/images/ht_contrast_icon_select.png": "503fc79fd124308686d3387c058d969c",
"assets/assets/images/ht_contrast_icon_unselect.png": "d4fe14d326b4fd80a8fca42181594a2e",
"assets/assets/images/ht_default_icon.png": "68afd132d76de78735ca674e5fa9a733",
"assets/assets/images/ht_filter_original_img.png": "bc87c7e6739f5c46bf095bdcc020d7c1",
"assets/assets/images/ht_saturation_icon_select.png": "9321de5a61c2d0ae03b565093338338b",
"assets/assets/images/ht_saturation_icon_unselect.png": "4fa3dc436ff98bc20fa749e1be9a8593",
"assets/assets/images/ht_search_empty.png": "12f265d3dec55a01babeb2d91c5edb42",
"assets/assets/images/ht_search_icon.png": "47db2aec632d0758fbd6693f1368add0",
"assets/assets/images/ht_shadow_icon_select.png": "4a2f3daa28e0c295351ab58f990127de",
"assets/assets/images/ht_shadow_icon_unselect.png": "21e976e3cfc1b0462618832736177220",
"assets/assets/images/ht_sharpen_icon_select.png": "fd456d5226634a626308d35012bebf53",
"assets/assets/images/ht_sharpen_icon_unselect.png": "4cba1b09f30994e9d8e4d1285d4114d1",
"assets/assets/images/ht_upload_img_delete.png": "a492ff3ed90d6263c4b9ee911aa30cc6",
"assets/assets/images/icon_add_canvas.png": "018b8f943b82e5bc27d1a1c9cd4c3149",
"assets/assets/images/icon_album_down.png": "4926218304b90933b4a38c2fd658a5db",
"assets/assets/images/icon_back.png": "6214de7ac6de40b365a35bce8eb54261",
"assets/assets/images/icon_battery_high.png": "af79f717a7f18309d7357a7644e49c63",
"assets/assets/images/icon_battery_high_charge.png": "033964da0aa488667be8e9293de4908c",
"assets/assets/images/icon_battery_low.png": "279b57df7bb48b21aedf712ca20e5247",
"assets/assets/images/icon_battery_low_charge.png": "37ed04d8a68d6190cd739f3d0cee8a55",
"assets/assets/images/icon_battery_medium.png": "899cccf25cf69b2980d7279fdf1b18a1",
"assets/assets/images/icon_battery_medium_charge.png": "782b2ef4e5694ef39732e186d2378862",
"assets/assets/images/icon_border_border.png": "74bdaa4f7dc4cd8642890cc29ea62cfe",
"assets/assets/images/icon_border_diy.png": "5f6deebe32dcf594a6cd42aeeea1395f",
"assets/assets/images/icon_border_instax.png": "bcfafe81729209758aca70958603f8dc",
"assets/assets/images/icon_border_noborder.png": "70eb73ae84841c22aa9e36d491dcee9a",
"assets/assets/images/icon_border_nocrop.png": "dc66ba17fc7371292635931b19cc2157",
"assets/assets/images/icon_border_selected.png": "1d9c41432fcd2caed021f080e87ebfac",
"assets/assets/images/icon_camera.png": "42c23cf425d847e270e93b510c16e1c9",
"assets/assets/images/icon_camera_close.png": "581dc1c80c7a72030e1d2a4ae9d7c519",
"assets/assets/images/icon_camera_confirm.png": "688898d57ef003e8855e5893da29b4a3",
"assets/assets/images/icon_cancel.png": "2a73120b486d5bb364c706f915f89916",
"assets/assets/images/icon_canvas_a_x_b.png": "83953044d7bf2c10ec3da09bca45cb96",
"assets/assets/images/icon_canvas_a_x_c.png": "8173a3e43d73d9eb70b0305b0ca16b63",
"assets/assets/images/icon_canvas_a_x_m.png": "3ab30807b8ad13db8a35d8d04406d76e",
"assets/assets/images/icon_canvas_a_x_m_1.png": "84dc72593ac92348f32136ee1ff9f8ae",
"assets/assets/images/icon_canvas_a_x_t.png": "14a5131889eec34fa43839bb83f9edf0",
"assets/assets/images/icon_canvas_a_y_c.png": "9203b645413755ada0e9a5d420dbb382",
"assets/assets/images/icon_canvas_a_y_l.png": "30cc2f094d3daf4bbf1cabfceba550a4",
"assets/assets/images/icon_canvas_a_y_m.png": "1177ffd44a8d3828f676905f81a2674e",
"assets/assets/images/icon_canvas_a_y_m_1.png": "3877815f824a542352bae03575f669d5",
"assets/assets/images/icon_canvas_a_y_r.png": "600c68dcbba1d29d7eb7ded35a097f53",
"assets/assets/images/icon_canvas_close2.png": "5a8b149d480278f2969952b1db075f7e",
"assets/assets/images/icon_canvas_close_bg.png": "bb476384d9f5c5228b74510723ca6283",
"assets/assets/images/icon_canvas_crop.png": "aca60a50ed11a671d2461beeee2e41b4",
"assets/assets/images/icon_canvas_edit_layer.png": "4f263c6a7c52e13c345824c92dc3cbfc",
"assets/assets/images/icon_canvas_layer_bottom.png": "1b370282feafaeccbc9b05d9627d67b3",
"assets/assets/images/icon_canvas_layer_bottom_d.png": "d262a99af2511b66e6eeca3842946934",
"assets/assets/images/icon_canvas_layer_bottom_d_pad.png": "997d98d9ff93860508de88ba3ff418bb",
"assets/assets/images/icon_canvas_layer_bottom_pad.png": "74aee31108eb9e31b2983767e71d7284",
"assets/assets/images/icon_canvas_layer_down.png": "07d3c070c32616eff1fe72636b0d05db",
"assets/assets/images/icon_canvas_layer_down_d.png": "4cb4751b12529bef45c7d585977c53ad",
"assets/assets/images/icon_canvas_layer_down_d_pad.png": "fb68fdbbeca9085e1720a8c535003f34",
"assets/assets/images/icon_canvas_layer_down_pad.png": "cb918cab6201e3cc4865c79aafaa629c",
"assets/assets/images/icon_canvas_layer_top.png": "c16da6a4bfa993761f522480b5457be9",
"assets/assets/images/icon_canvas_layer_top_d.png": "a1e65192612565040c6abd28c56ceb9d",
"assets/assets/images/icon_canvas_layer_top_d_pad.png": "b1f12a8e3a8e7df2cd3de6be14c985e8",
"assets/assets/images/icon_canvas_layer_top_pad.png": "7f094681eca967d5f48c31f1418e01ee",
"assets/assets/images/icon_canvas_layer_up.png": "ca3c5fdb1181d4b8b07c0ac51d37144f",
"assets/assets/images/icon_canvas_layer_up_d.png": "a401cb4ad985504b52bb20dfa140b788",
"assets/assets/images/icon_canvas_layer_up_d_pad.png": "069ea2811aece57c5866442c50480e09",
"assets/assets/images/icon_canvas_layer_up_pad.png": "f9f2c6034429dc0ffec0281d6d3e1990",
"assets/assets/images/icon_canvas_move_down.png": "1fb77505ff68c316763a7b618d394f5b",
"assets/assets/images/icon_canvas_move_left.png": "eec53c96320080edcdfca93f6ac25210",
"assets/assets/images/icon_canvas_move_right.png": "e6f47c888880e53fac308ded253846d4",
"assets/assets/images/icon_canvas_move_up.png": "a270c0216beadfaaee7e1fdaa1c0baf6",
"assets/assets/images/icon_canvas_rotate.png": "c12f295d98bbb08cf425af1ef62e4623",
"assets/assets/images/icon_canvas_tool_adjust.png": "ee3b00240c1cfae7e4448eb5f0f560a7",
"assets/assets/images/icon_canvas_tool_advanced.png": "58e107252b555050abaa01ad832a1b93",
"assets/assets/images/icon_canvas_tool_border.png": "7bf253b4eb0a861cc5fc14e84749a96e",
"assets/assets/images/icon_canvas_tool_border_empty.png": "1ec60350af45b19bf92d1fc05733e6b8",
"assets/assets/images/icon_canvas_tool_colour.png": "65f77ed0696f505094149e755f6d9fc0",
"assets/assets/images/icon_canvas_tool_colour_empty_n.png": "af38e8a04ded2945fea1ac6991e729a7",
"assets/assets/images/icon_canvas_tool_colour_empty_pad_n.png": "b5cf83533d892e03d78764c78b625412",
"assets/assets/images/icon_canvas_tool_colour_empty_pad_s.png": "8843f8b1fde5927b52c8adbe6ebca71f",
"assets/assets/images/icon_canvas_tool_colour_empty_s.png": "6d8099169e8747b286edde5222e840ff",
"assets/assets/images/icon_canvas_tool_corner.png": "7e2361f9bc7a78c0779c418a02c7f51e",
"assets/assets/images/icon_canvas_tool_crop.png": "98d2702a8d3977ee10869d684de2c278",
"assets/assets/images/icon_canvas_tool_effect.png": "41af4e5e60b9576688b8107a8d335edd",
"assets/assets/images/icon_canvas_tool_flip.png": "c7bbf3592f0e8c55022bf88d2f01e15a",
"assets/assets/images/icon_canvas_tool_flip_horizontal.png": "25cb2ff559eac5f5b9b8ac7cb4a64741",
"assets/assets/images/icon_canvas_tool_flip_vertical.png": "fd07097fb32044cb27985dbb304c8ef4",
"assets/assets/images/icon_canvas_tool_font.png": "cbaabc780128a84319365541f57be11a",
"assets/assets/images/icon_canvas_tool_font_size.png": "1cdc4d6f109a4e541ecb4683ab5a20ea",
"assets/assets/images/icon_canvas_tool_format.png": "0be5a9e8a5145b9dbdbe6d02af6a3db9",
"assets/assets/images/icon_canvas_tool_image_fill.png": "8cb627666a76d1517ae6d37c05b312b7",
"assets/assets/images/icon_canvas_tool_input.png": "327f5af2861ac35e1072dc400e483319",
"assets/assets/images/icon_canvas_tool_matting_manual.png": "64533c16a41924699b4d9bec5b4d837a",
"assets/assets/images/icon_canvas_tool_plus.png": "af41bb2719156aa2f9839ea18ae05ba8",
"assets/assets/images/icon_canvas_tool_position.png": "5d479afccf4e9e72756f469eee8e0e1e",
"assets/assets/images/icon_canvas_tool_ratio_enable.png": "6d61ce74eaff167e42b8288fc91db5af",
"assets/assets/images/icon_canvas_tool_ratio_enabled.png": "15048a707e4d4e629f17c752f28abae4",
"assets/assets/images/icon_canvas_tool_reduce.png": "1065e1d9f74644afe36d30597ab06347",
"assets/assets/images/icon_canvas_tool_shape.png": "d7bdbca740e13200d062f918b6da0f22",
"assets/assets/images/icon_canvas_tool_spacing.png": "0f888fb8e5f0667398c470d295495247",
"assets/assets/images/icon_canvas_tool_texture.png": "fe0fe67d5ff33922d42a0b03dc8dc26b",
"assets/assets/images/icon_canvas_ungroup.png": "23e34dc5edf91e92bc7937372f16bee6",
"assets/assets/images/icon_canva_tool_film_image_fill.png": "871f8e760175b301d3d18dfdc4637011",
"assets/assets/images/icon_card_cover.png": "580f522e2355397581956313d56ea731",
"assets/assets/images/icon_check_empty_b.png": "4efa8115ea00587e574f683583cc6047",
"assets/assets/images/icon_check_empty_w.png": "88d631a08b8357684337656c2f8bac4d",
"assets/assets/images/icon_clear_all.png": "1d2690ea7bc41c6f723c9e3e76bc4582",
"assets/assets/images/icon_close.png": "aa8fdfd5031508ffa8c7804585a6e0e0",
"assets/assets/images/icon_close_02.png": "38ef8ef5175d9d67787067b32eb80a24",
"assets/assets/images/icon_collect_0.png": "f19ed80ec0fab0610cdf506cab266b7e",
"assets/assets/images/icon_collect_1.png": "fa83ab5da22021a7e8f86e5afbac2824",
"assets/assets/images/icon_confirm.png": "00c1c02f5d20756d561bc013f6bb7b79",
"assets/assets/images/icon_crop_close.png": "f6134889d603bf50879ee412773ae136",
"assets/assets/images/icon_cutout_bg.png": "5f881918eba7d1bc3f28b7eee42a2e04",
"assets/assets/images/icon_cut_alert_example_1.png": "6654db2b42a91d8bd20f6c73e011f316",
"assets/assets/images/icon_cut_alert_example_2.png": "214bbfc1997eb3b137be3c0dcdd37f47",
"assets/assets/images/icon_cut_mode_edit.png": "f84ecbdf14c23130226164fcb6385be9",
"assets/assets/images/icon_edit.png": "10e0042698a1dc9f7cbc3434cdbd1363",
"assets/assets/images/icon_edit_compare.png": "96e2a9a4c6efde145d94ecae3b1e233c",
"assets/assets/images/icon_edit_enhance.png": "04ebdfb3d8774c8ce6c935f535574ba7",
"assets/assets/images/icon_edit_filters.png": "b8b886ca34c3c94424f10bc3f06b173b",
"assets/assets/images/icon_edit_flip.png": "e8e647db486dbd6c2269f0c768ba1814",
"assets/assets/images/icon_edit_framesAdjust.png": "600165918559239b5f5219ef17ff7789",
"assets/assets/images/icon_edit_replace.png": "b636b8c16590bf743685e20d4ce87f7e",
"assets/assets/images/icon_edit_rotate.png": "383ef6c03e1599f078fc999150c35eb7",
"assets/assets/images/icon_edit_share.png": "929b1192f29068cc0ddea77857818e82",
"assets/assets/images/icon_edit_undo.png": "198884a05cab88a18922bfae471c9caf",
"assets/assets/images/icon_element_delete.png": "4a2c7ab2abd721d853e8dc1e0a0c09c8",
"assets/assets/images/icon_element_duplicate.png": "7a016e81d883f7c687c04a2533914a1c",
"assets/assets/images/icon_element_stroke_alert.png": "176873a3079ab9e75cc2755f6d1b983a",
"assets/assets/images/icon_element_textStyle.png": "d713ec9364f1800e536bea630cb8416b",
"assets/assets/images/icon_font_download.png": "452627a335a52eb3acf1277cde930666",
"assets/assets/images/icon_font_downloading.png": "bb80fb4b17f44ffbee479c72e9659030",
"assets/assets/images/icon_home_bgi.png": "b6a4aaec84e3c81f36694a6ca37a0c97",
"assets/assets/images/icon_home_canvas_add.png": "4c7dc65b42d5e96d0b8769fd156833ee",
"assets/assets/images/icon_home_change.png": "bd13ccb2a5f57d9eee771a01ea0af29f",
"assets/assets/images/icon_home_elements_add.png": "9cb203632392157927803f663a99aa46",
"assets/assets/images/icon_home_film.png": "98ea4d41bef424cd8986ee73640b4683",
"assets/assets/images/icon_home_idCardPhoto.png": "ad3c6c6ce2ad2663bdd2eb1fb9c70ff6",
"assets/assets/images/icon_home_print.png": "1ef1cb4e6ab2483d36ddaf45e04eaa94",
"assets/assets/images/icon_home_project_add.png": "e5dba33343fda3da2c9de2c2d430dd65",
"assets/assets/images/icon_home_project_placeholder.png": "a7f8bb7aee826f364dd0ff2dd63b0f2c",
"assets/assets/images/icon_home_Puzzle.png": "031ffb213810aef5c5374699242953e8",
"assets/assets/images/icon_home_right_arrow.png": "77adbc281a82877aca463dd9adf71d1e",
"assets/assets/images/icon_home_section_more.png": "29293a6e66deb447540f55288f72e03e",
"assets/assets/images/icon_home_upload.png": "414d4a4e1f843c2bf5b5559b86f10af4",
"assets/assets/images/icon_home_upload_error.png": "2991928eb10f16cd46fc6fad77217dec",
"assets/assets/images/icon_image_exchange.png": "38a02d0660ebe91319be946d3ff170c5",
"assets/assets/images/icon_image_preview.png": "14e2474b67c833db7ca49887dd838594",
"assets/assets/images/icon_inputbar_confirm.png": "18e5ef5298881d4b028324b907d553ed",
"assets/assets/images/icon_kiwi_add.png": "32171cff8e270dee21e92580641402c2",
"assets/assets/images/icon_kiwi_bgi.png": "43fc0d8c9126c4c128f496225cf4deca",
"assets/assets/images/icon_mine_AR.png": "835e8dd39ff1dc8f085383089f6fd445",
"assets/assets/images/icon_mine_bind_account.png": "53ef99a9b6e8f105076ac8f9efb2970b",
"assets/assets/images/icon_mine_canvas.png": "fc1dadbb67496d7cb16032132d68d9ac",
"assets/assets/images/icon_mine_headImage.png": "4cef09429a9e39bd607f12a5aac45a81",
"assets/assets/images/icon_mine_help.png": "26559b2d12f576adb121bf157fd348cb",
"assets/assets/images/icon_mine_message.png": "2e52b2c4e00c87b4af2f6b1f0619b366",
"assets/assets/images/icon_mine_photo.png": "f80722ef3b0aef4aa06bb67576d805c0",
"assets/assets/images/icon_mine_setting.png": "7f33af72625c52b962078e1fe9e25725",
"assets/assets/images/icon_paletteColor.png": "4685832ffba18069de3269c7469fc182",
"assets/assets/images/icon_picker_add.png": "c31b4a93e2fbd5e8936ad8abbdc1f1b7",
"assets/assets/images/icon_picker_delete.png": "33a7edf6cdc060acc2992d79d573aa39",
"assets/assets/images/icon_picker_more.png": "5df1fef1837152796c8fdac95fb75f16",
"assets/assets/images/icon_picker_right_arrow.png": "5fe74abdbbf1041e3e96ce312b521c61",
"assets/assets/images/icon_picker_tip.png": "4b343722f12763d85ec830af3ef3c05b",
"assets/assets/images/icon_puzzle_print.png": "52f86b4a01b3705203ccb239e45a6b69",
"assets/assets/images/icon_puzzle_print_able.png": "243d0f75466048deb3124d0f05572559",
"assets/assets/images/icon_random.png": "1e9255c8cf4073d474987a0732f0aea5",
"assets/assets/images/icon_reset.png": "98dc0edf8bbfb2c4bb262a8ad22fc6ab",
"assets/assets/images/icon_rotate.png": "93e7bd23341b4a290a5a812130181998",
"assets/assets/images/icon_rotate_left.png": "dda10f0e2e2435879310bafdd2d68b02",
"assets/assets/images/icon_rotate_right.png": "965e6d1fb122f1e37c1b4cf4fae5e462",
"assets/assets/images/icon_save.png": "07be26ab5b58d36a45ade33975a9d623",
"assets/assets/images/icon_save_d.png": "c6342295abb42355e1c1bc64f8661dee",
"assets/assets/images/icon_stroke_help.png": "096d96185da816352c4c764fcad753b2",
"assets/assets/images/icon_system_audio-list.png": "6cda6383e3f21af4cd16be629dc86fa6",
"assets/assets/images/icon_tabbar_add.png": "2c7a3b0a8b14475a03c09cbcc2425dcb",
"assets/assets/images/icon_tabbar_me.png": "0f2093f8ab4d6857d6da8432964299a7",
"assets/assets/images/icon_tabbar_me_active.png": "4f5476e136bb02a8e6a5b2c3c379357a",
"assets/assets/images/icon_tabbar_print.png": "183bc68693d2073c711f972ba8b0be80",
"assets/assets/images/icon_tabbar_print_active.png": "f88856f1d20d8d0344c71f7a004e8f11",
"assets/assets/images/icon_template_close.png": "6f82968b8429a0a5238fe42afde21d63",
"assets/assets/images/icon_textStyle_align_center.png": "16d1b98fc55d26ec3fe296e7e59f0fa3",
"assets/assets/images/icon_textStyle_align_center_pad.png": "f8546d59c976d3216af350266563ab75",
"assets/assets/images/icon_textStyle_align_left.png": "3229547e88dd7868fe516e8effcf6408",
"assets/assets/images/icon_textStyle_align_left_pad.png": "0494f63f04684f3d3e12e090edd0efaa",
"assets/assets/images/icon_textStyle_align_right.png": "a54b018782e7607e71bc959a119cb4fc",
"assets/assets/images/icon_textStyle_align_right_pad.png": "45ffbae14fa7a37d38dc32b3d8806f60",
"assets/assets/images/icon_textStyle_bold.png": "92cf2a37dbc63424235e280229c406dc",
"assets/assets/images/icon_textStyle_bold_pad.png": "25daf2312c3ba36d44aa03e3f2891e34",
"assets/assets/images/icon_textStyle_italic.png": "3c19afa8087768f6a7915d1f3c27f24c",
"assets/assets/images/icon_textStyle_italic_pad.png": "d4b526211d01e69b94777cde1eb3fa22",
"assets/assets/images/icon_textStyle_underline.png": "b60b42467249a5451026229fdb86ff21",
"assets/assets/images/icon_textStyle_underline_pad.png": "407514b626496a923df81c91867cd203",
"assets/assets/images/icon_texture_selected.png": "b40e12137d4a5543b9e231c9154145d8",
"assets/assets/images/icon_tips.png": "d2700a151d85b734c49cd2591323051a",
"assets/assets/images/icon_top_copy.png": "df2051364f96eff840bd5562e4b5a330",
"assets/assets/images/icon_top_delete.png": "045577b73df098f572b3c277ce4907da",
"assets/assets/images/icon_top_layer.png": "b7537a526a43cdb560b5c032a282d3e0",
"assets/assets/images/icon_trash.png": "8a01505ee202b26a4c25d1a925036d04",
"assets/assets/images/icon_white_confirm.png": "46a1ecaf0d5354c8373f9efda945e883",
"assets/assets/images/icon_write.png": "2ef2aa0f68948dcb474716d722533a04",
"assets/assets/images/ic_common_empty.png": "25abb223c3b9ced4950403c64fb6c0a3",
"assets/assets/images/ic_editor_grid_n.png": "2561816a8805001129910ddff12fc77f",
"assets/assets/images/ic_editor_grid_s.png": "db210a53ce7f1b6499e263b9e38e306e",
"assets/assets/images/ic_editor_print.png": "132da676d6441d56ba9f8434c249e3b1",
"assets/assets/images/ic_editor_print_d.png": "9ec1c219463fef82b1b50883f9793013",
"assets/assets/images/ic_editor_redo_btn.png": "538812bd6fd1ee9aeec3d243023c1083",
"assets/assets/images/ic_editor_redo_btn_d.png": "e0f987285aa417d84972162f48340417",
"assets/assets/images/ic_editor_undo_btn.png": "ecf27afbefd9a24f75c24caa8d88c6c2",
"assets/assets/images/ic_editor_undo_btn_d.png": "f38ee7caa07dcf3f03eb0b2f848352ba",
"assets/assets/images/ic_editor_unit_in.png": "9595929e43d7e9c8bc1ee72a343e1f4f",
"assets/assets/images/ic_editor_unit_mm.png": "ef89bcceb30416a9ded359daf4159c5b",
"assets/assets/images/ic_exception.png": "260719fe67860b93e0804ebf2d8fc76d",
"assets/assets/images/ic_tips_close.png": "5cadb441104ebbd20a1143aac085cf07",
"assets/assets/images/ic_user_center_media.png": "9e578ea3d48a98a9b32a4ff01448c603",
"assets/assets/images/image_picker_confirm.png": "71ae2e5ffb5366ab2ffa56727057c65a",
"assets/assets/images/image_picker_live.png": "03ee9e5d9b9ce8d5faab31d1ae7f720e",
"assets/assets/images/kiwi_bgi.png": "041465653abba2b8692cad7e17219d80",
"assets/assets/images/kiwi_home_ar.png": "7e535e9d9d448661c0391e5e3f24ade0",
"assets/assets/images/kiwi_home_audio.png": "c197441eb74cc778dbddd446940dbb9e",
"assets/assets/images/kiwi_home_classic.png": "09763c9058088cb26ed48f385628251d",
"assets/assets/images/kiwi_home_id_card.png": "df16cb3b0323befd57dd15fcf37ab47b",
"assets/assets/images/kiwi_home_insta.png": "85251e6e6822c6afdec381bc981ec273",
"assets/assets/images/kiwi_home_puzzle.png": "22f0e286b31df29e341eeae9f1822c95",
"assets/assets/images/loading.png": "302149dbc689cb344bc619cd06a23120",
"assets/assets/images/login_apple.png": "06210b8bfcc4e5bb56c9a79ef5b88c65",
"assets/assets/images/login_close.png": "1375ba9f5cac67df26da1261b18b4c97",
"assets/assets/images/login_email.png": "bd4948df9508c8ba04d43cb5b06392af",
"assets/assets/images/login_facebook.png": "2b7314b10db8611476b755e91fefc03e",
"assets/assets/images/login_logo.png": "9e130a4f57b56cd99465ad91cb0debd8",
"assets/assets/images/login_phone.png": "2062ccaa7b987e565f012ddfcec65023",
"assets/assets/images/login_tip.png": "592fc1dbecd106f4cbbd94140a76c21a",
"assets/assets/images/login_wechat.png": "29bf531aeef3e4e04164e81a8478aba8",
"assets/assets/images/matting_brush.png": "44580bef16f27897a21d1266d8dffe9a",
"assets/assets/images/matting_clear.png": "0521b66f2d056bb44c77d3b44f10275d",
"assets/assets/images/matting_minus.png": "6f0caa9b5d96449197f8807afbdedb99",
"assets/assets/images/matting_pad_redo.png": "5b94d1748f455a9cf37791cdcd4d4b27",
"assets/assets/images/matting_pad_undo.png": "5a9b30a81882d2e3270c4ba88b530b66",
"assets/assets/images/matting_plus.png": "9f768c61ee196f7e6f3fa5c58196f60c",
"assets/assets/images/my_project_all_edit.png": "a83b3076c5c6d3611e674f62c4329cd8",
"assets/assets/images/my_project_delete.png": "d989342181141513222b51c086aba016",
"assets/assets/images/my_project_file.png": "7529dd5df3590430e98ad86545da698d",
"assets/assets/images/my_project_manager_delete.png": "80a118ce97d06f64d803960cbb1551c7",
"assets/assets/images/my_project_manager_move.png": "7959a026ba4c2b81f3dd8a7073dbf240",
"assets/assets/images/my_project_manager_new_folder.png": "91373e79aa85381ee930e9fd78d1b285",
"assets/assets/images/my_project_manager_quit.png": "f1b72532d2397f56d973d87617ef03ed",
"assets/assets/images/my_project_manager_rename.png": "8a6cd74ee8f4239a6896a5fef45bc88c",
"assets/assets/images/my_project_manager_return.png": "58b4bcca5b5b7ba72f0a971d1ffa6c92",
"assets/assets/images/my_project_manager_share.png": "f95ecb7ed3a4f0b7f3d13c0d1e90499a",
"assets/assets/images/my_project_print.png": "ede21fd7f024937512041617a33e786d",
"assets/assets/images/my_project_rename.png": "927b77c63edf916efdad3aeec1bec18b",
"assets/assets/images/my_project_rename_clear.png": "c3f3853edd0235d2fb97328d55398261",
"assets/assets/images/my_project_save.png": "a42390d141ddb042649e7165afe4fdf4",
"assets/assets/images/my_project_selection_selected.png": "c7d953630391d31c37c5d7055f535419",
"assets/assets/images/my_project_selection_unselected.png": "9a5c3c6088667b80d6fc99719eeac481",
"assets/assets/images/new.png": "156d794819897cf47b4087c59fbc9fb6",
"assets/assets/images/NotoSans.png": "b315f8abef22ffd5025cec0a3616e765",
"assets/assets/images/NotoSerifSC.png": "75c4520f2614fcaf343e10b6c085781d",
"assets/assets/images/Noto_Serif_JP.png": "bb1e4fa92cf07d0cc50307b82660c1cf",
"assets/assets/images/play.png": "729903a7f8d6c3ca9f9582fae75792fa",
"assets/assets/images/printer_cumin.png": "68c47ac42aba7a17848b734bb637ba5a",
"assets/assets/images/printer_cumin_oversea.png": "0442fea00ba11020bd61919cbd5ca753",
"assets/assets/images/printer_fennel.png": "4f46fac90f7b4c5185665fcb44f903f4",
"assets/assets/images/printer_fennel_oversea.png": "e52f657f49b0b9768459181c4eb857c4",
"assets/assets/images/printer_kiwi.png": "e4d2ea23395a1b008efc80bf9f20ccf4",
"assets/assets/images/printer_kiwi_oversea.png": "a0a0fa771e2905813f1555cd1a0d8e4b",
"assets/assets/images/printer_laurel.png": "c92817c7191624ba0c0eef4a339f6f9e",
"assets/assets/images/printer_laurel_oversea.png": "aaebc975e16620f17dd38fe4bc4b2fa1",
"assets/assets/images/printer_perilla.png": "b4fea49553866a462e86c63feef4ecd3",
"assets/assets/images/printer_perilla_oversea.png": "46a90de6bf48fb29b7c46a7f18d07326",
"assets/assets/images/shape_tool_icon.png": "f697904babc8cb19383f78a0ce4ba458",
"assets/assets/images/style_3d.png": "5d729280c87485fa994d0b1b3251749a",
"assets/assets/images/style_bp.png": "62a492ab6cc8cf1f73a95ba370215c5d",
"assets/assets/images/style_ch.png": "e93eb30ef19442c5e5e0c7edcbaa49c6",
"assets/assets/images/style_mm.png": "2213ab89732ab58e6ba895cf12c81858",
"assets/assets/images/style_rm.png": "2a2e8614a6eb232fd87e95953ca7a026",
"assets/assets/images/style_sbpk.png": "7a8205d8eb16f25d5e4091b10d071289",
"assets/assets/images/style_sm.png": "32c61e40bab3e56243cb08247e2deaf8",
"assets/assets/images/style_zsdc.png": "c3f606ab959ebd5a91bce55b2775b3ef",
"assets/assets/images/tabbar_scan.png": "d2684bc22b0ee66838ba689a66b9d4f0",
"assets/assets/images/template_tool_icon.png": "db9f6c3ed8255af28f0bc6d077ca39c4",
"assets/assets/images/text_tool_icon.png": "7e2cc0775070c7b21694038c50ff9774",
"assets/assets/images/upload_alert_tip.png": "cb13c9163aed4ff925d1480b0310bf3f",
"assets/assets/images/upload_image.png": "939a06711536a3dba7845ff6e5f7f974",
"assets/assets/images/upload_tool_icon.png": "6ba03799bd7b19c28f8d8e64bb3d4785",
"assets/assets/images/user_center_store.png": "4c4eaa0e5fa6b26eb1e6667fdc72c0f5",
"assets/assets/jsons/canvas_loading.json": "d21b41e7b5367db41541df0dad5e33ee",
"assets/assets/svgs/1.svg": "bfc6bac1c516281df1cae53abfc6a3ce",
"assets/assets/svgs/10.svg": "582579e1dfb5b5c485b815b68f068b56",
"assets/assets/svgs/11.svg": "1fc15913a84ce3dd13b1a76a8a9da30e",
"assets/assets/svgs/12.svg": "be48e87119c87c1910dd6b6be8d0292a",
"assets/assets/svgs/13.svg": "03b21a2a8276d818d7dc2a24fc73fd64",
"assets/assets/svgs/14.svg": "46d6d2a144e5cfaee2e522c6ed712995",
"assets/assets/svgs/15.svg": "905b0b641d5952e5f2be681d59dcd251",
"assets/assets/svgs/16.svg": "c5e7cbd445821f855a9b858193c5b2e2",
"assets/assets/svgs/17.svg": "687ca4d89d89ab6a95a6e589e65c3ab2",
"assets/assets/svgs/18.svg": "66774d073303205437079e831baa88a9",
"assets/assets/svgs/19.svg": "cc5684fdcdf3a4390af480cfed972be8",
"assets/assets/svgs/2.svg": "e5ea79c99fc5c333880f3201bda4a7b2",
"assets/assets/svgs/3.svg": "69928c7742bea53691a5b144d20a3599",
"assets/assets/svgs/4.svg": "90ced314e62978402dd546b9a97221e6",
"assets/assets/svgs/5.svg": "b4997c003f49cdb11a4b2767efab38e6",
"assets/assets/svgs/6.svg": "393fabea51a877c15094b39e3f33f2c3",
"assets/assets/svgs/7.svg": "d95375884921d6cbfa331eecc776990b",
"assets/assets/svgs/8.svg": "304c19feeda6a0615fe305fe873afd94",
"assets/assets/svgs/9.svg": "83c6be0bd5b0d3c2f684c5c45bd8bcc8",
"assets/assets/svgs/film.svg": "34ab89273f900480c8e6018f63352969",
"assets/assets/svgs/heart.svg": "a7d579c808d711fc19d193b9e1e4a379",
"assets/assets/svgs/juxing.svg": "d0af7d2ccf04c333558a6665aaa5401d",
"assets/assets/svgs/shape_border_0.svg": "c7ebe96235d46dd1ee71570b4665864d",
"assets/assets/svgs/shape_border_1.svg": "85055e24df3b3c9f16469097c92820a6",
"assets/assets/svgs/shape_border_2.svg": "bbcb9c44a30db3f71cfdc0150ad27153",
"assets/assets/svgs/shape_border_3.svg": "59eac41fd2513335e6931ef8e73af4b9",
"assets/assets/svgs/shape_border_4.svg": "012e8b38e8acd14a1468b7fcfa8112ff",
"assets/assets/videos/check_paper2.mp4": "95d1754c2daabf069fc103adaaa014d7",
"assets/assets/videos/color_background3.mp4": "12ba8f739325a37b5476ae3a83eec1f8",
"assets/assets/videos/shape4.mp4": "db65a9346e0fcefe6288d1f7ff94db47",
"assets/assets/videos/six_to_seven1.mp4": "28f6122091c7577cfe3de908e026f873",
"assets/assets/videos/template_and_element5.mp4": "308f34ae9ff6f8ced9575981f0313186",
"assets/FontManifest.json": "922f117823ebd044b82c3db40f30fea5",
"assets/fonts/MaterialIcons-Regular.otf": "868910684b7286795165795d08ac7f4d",
"assets/NOTICES": "d347dcee0b6e13275d8bacbe14289f60",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c811b994731b5c60823e7e4e01885380",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "18ffce8cff0da20fba53e07e4060c901",
"/": "18ffce8cff0da20fba53e07e4060c901",
"main.dart.js": "1e494cba53b33b0a587e4a983e0e73e2",
"manifest.json": "f45432b5f9e86fb962f0f4adc698b701",
"version.json": "fe8728dd472c26e4adcd598f3674e277"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
