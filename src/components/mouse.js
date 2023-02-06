import { ref, onMounted, onUnmounted } from 'vue';

export function useMouse() {
    const x = ref(0);
    const y = ref(0);

    function update(event) {
        x.value = event.pageX;
        y.value = event.pageY;
    }

    onMounted(() => {
        window.addEventListener('mousemove', update);
    })
    onUnmounted(() => {
        window.addEventListener('mousemove', update);
    })

    return {x, y}
}


// {"vip_level":"","popup_account":"2018\/03\/14172227e4yog.txt","game":"0","begin_datetime":"2018-03-14 17:22:36","end_datetime":"2018-03-14 18:10:38","mp_src":"\/\/img2.37wanimg.com\/2018\/03\/14172302ULMcE.mp4","flash_src":"\/\/img2.37wanimg.com\/2018\/03\/14172317F4LxZ.swf","src":"\/\/img2.37wanimg.com\/2018\/03\/14172322nWsF8.png","photo_bid":"","link":"","text":"test314","shadow":"","number":"2","acc":["c606f8cc15a16a05aa161a82f144cd4a","098e69f97fd1d9e34c2ade676af2670f"],"randstr":"5ef9605f051076329"}

// {"vip_level":"0,1,2,3,4,5,6,7,8","popup_account":"2022\/05\/10174020Crdd0.txt","game":"0","begin_datetime":"2023-02-01 15:03:00","end_datetime":"2023-02-10 15:03:05","mp_src":"\/\/img2.37wanimg.com\/2022\/04\/141510322YOtd.mp4","flash_src":"","src":"\/\/img2.37wanimg.com\/2022\/04\/14151044UbK67.jpg","photo_bid":"5865","link":"\/\/www.37.com\/","text":"\u6d4b\u8bd5","shadow":"1","number":"30","acc":["c606f8cc15a16a05aa161a82f144cd4a","098e69f97fd1d9e34c2ade676af2670f"],"randstr":"5ef9605f051076329"}