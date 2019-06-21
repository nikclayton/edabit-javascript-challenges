const alternatingCaps = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(alternatingCaps('alternating caps')).toEqual('AlTeRnAtInG CaPs');
        expect(alternatingCaps('Hello, what\'s your name?')).toEqual('HeLlO, wHaT\'S YoUr nAmE?');
        expect(alternatingCaps('Lorem ipsum dolor sit amet, consectetur adipisicing elit.')).toEqual('LoReM IpSuM DoLoR SiT AmEt, CoNsEcTeTuR AdIpIsIcInG ElIt.');
        expect(alternatingCaps('OMG!!! This website is awesome!!')).toEqual('OmG!!! tHiS WeBsItE Is aWeSoMe!!');
        expect(alternatingCaps('The quick brown fox jumps over the lazy dog')).toEqual('ThE QuIcK BrOwN FoX JuMpS OvEr tHe lAzY DoG');
        expect(alternatingCaps('The intent is to provide players with a sense of pride and accomplishment for unlocking different heroes.')).toEqual('ThE InTeNt iS To pRoViDe pLaYeRs wItH A SeNsE Of pRiDe aNd aCcOmPlIsHmEnT FoR UnLoCkInG DiFfErEnT HeRoEs.');
    });
});
