export default {
    isWeixin() {
        let ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('micromessenger') != -1;
    }
    
}