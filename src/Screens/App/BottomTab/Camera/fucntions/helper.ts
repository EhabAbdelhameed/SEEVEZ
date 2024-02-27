export const getTime = (t:any) => {
    const digit = (n:any) => (n < 10 ? `0${n}` : `${n}`);
    const sec = digit(Math.floor(t % 60));
    const min = digit(Math.floor((t / 60) % 60));
    const hr = digit(Math.floor((t / 3600) % 60));
    return hr + ':' + min + ':' + sec;
};

let poster1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/We_Can_Do_It%21_NARA_535413_-_Restoration_2.jpg/640px-We_Can_Do_It%21_NARA_535413_-_Restoration_2.jpg'
let poster2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/We_Can_Do_It%21_NARA_535413_-_Restoration_2.jpg/640px-We_Can_Do_It%21_NARA_535413_-_Restoration_2.jpg'
let videoSource2 = 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4'
export let videoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
// let videoSource3 = ""
export const data =
    [
        {
            id: 1,
            uri: videoSource,
            poster: poster1,
            type:"bolls"
        },
        {
            id: 2,
            uri: videoSource2,
            poster: poster2,
            type:"text"

        },
        {
            id: 3,
            uri: videoSource,
            poster: poster1,
            type:"bolls"

        },
        {
            id: 4,
            uri: videoSource2,
            poster: poster2,
            type:"bolls"

        },
        {
            id: 5,
            uri: videoSource,
            poster: poster1,
            type:"bolls"

        },
        {
            id: 6,
            uri: videoSource2,
            poster: poster2,
            type:"bolls"

        },
        {
            id: 7,
            uri: videoSource,
            poster: poster1,
            type:"bolls"

        },
        {
            id: 8,
            uri: videoSource2,
            poster: poster2,
            type:"bolls"

        },
        
    ]