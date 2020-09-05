window.onload = function () {
    let params = new URLSearchParams(location.search);
    var aid = params.get('aid');
    var bvid = params.get('bvid');
    var cid = params.get('cid');
    var templateBilibiliUrl = "https://player.bilibili.com/player.html?aid=aidPlaceholder&bvid=bvidPlaceholder&cid=cidPlaceholder&page=1";
    var url = templateBilibiliUrl.replace('aidPlaceholder',aid);
    url = url.replace('bvidPlaceholder',bvid);
    url = url.replace('cidPlaceholder',cid);
    $(document).ready(function(){
        $('iframe').attr('src',url);
    })
}