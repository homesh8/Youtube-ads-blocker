setInterval(function(){
    if( window.location.href !== "https://www.youtube.com/"){
        var sb = document.getElementsByClassName("ytp-ad-skip-button");
        if( sb != undefined && sb.length >0){
            console.log("Forced skipped a ad");
            sb[0].click();
        }
        var sideBannerAds = document.getElementsByClassName("style-scope ytd-companion-slot-renderer")
        var overlayAds = document.getElementsByClassName("ytp-ad-overlay-slot")        
        if(sideBannerAds != undefined && sideBannerAds.length >0){
            console.log("Removed side banner ads")
            sideBannerAds[0].remove()
        }    
        if(overlayAds != undefined && overlayAds.length >0){
            console.log("Removed overlay Ads")
            overlayAds[0].remove()
        }
    }
    else{
        var youTubePremium = document.getElementsByTagName("ytd-banner-promo-renderer")
        var bannerAds = document.getElementsByTagName("ytd-video-masthead-ad-v3-renderer")
        if( bannerAds != undefined && bannerAds.length >0){
            console.log("removed banner ads");
            bannerAds[0].remove();
        }
        if(youTubePremium != undefined && youTubePremium.length >0){
            console.log("Stop showing youtube premium")
            youTubePremium[0].remove()
        }
    }    
},100)