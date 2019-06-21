const removeVowels = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(removeVowels('If Obama resigns from office NOW, thereby doing a great service to the country—I will give him free lifetime golf at any one of my courses!')).toEqual('f bm rsgns frm ffc NW, thrby dng  grt srvc t th cntry— wll gv hm fr lftm glf t ny n f my crss!');
        expect(removeVowels('This election is a total sham and a travesty. We are not a democracy!')).toEqual('Ths lctn s  ttl shm nd  trvsty. W r nt  dmcrcy!');
        expect(removeVowels('I have never seen a thin person drinking Diet Coke.')).toEqual(' hv nvr sn  thn prsn drnkng Dt Ck.');
        expect(removeVowels('Everybody wants me to talk about Robert Pattinson and not Brian Williams—I guess people just don’t care about Brian!')).toEqual('vrybdy wnts m t tlk bt Rbrt Pttnsn nd nt Brn Wllms— gss ppl jst dn’t cr bt Brn!');
        expect(removeVowels('Katy, what the hell were you thinking when you married loser Russell Brand. There is a guy who has got nothing going, a waste!')).toEqual('Kty, wht th hll wr y thnkng whn y mrrd lsr Rssll Brnd. Thr s  gy wh hs gt nthng gng,  wst!');
        expect(removeVowels('Windmills are the greatest threat in the US to both bald and golden eagles. Media claims fictional ‘global warming’ is worse.')).toEqual('Wndmlls r th grtst thrt n th S t bth bld nd gldn gls. Md clms fctnl ‘glbl wrmng’ s wrs.');
        expect(removeVowels('Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don’t feel so stupid or insecure,it’s not your fault')).toEqual('Srry lsrs nd htrs, bt my .Q. s n f th hghst -nd y ll knw t! Pls dn’t fl s stpd r nscr,t’s nt yr flt');
        expect(removeVowels('Happy Thanksgiving to all--even the haters and losers!')).toEqual('Hppy Thnksgvng t ll--vn th htrs nd lsrs!');
        expect(removeVowels('Watch Kasich squirm --- if he is not truthful in his negative ads I will sue him just for fun!')).toEqual('Wtch Ksch sqrm --- f h s nt trthfl n hs ngtv ds  wll s hm jst fr fn!');
        expect(removeVowels('Obama is, without question, the WORST EVER president. I predict he will now do something really bad and totally stupid to show manhood!')).toEqual('bm s, wtht qstn, th WRST VR prsdnt.  prdct h wll nw d smthng rlly bd nd ttlly stpd t shw mnhd!');
    });
});
