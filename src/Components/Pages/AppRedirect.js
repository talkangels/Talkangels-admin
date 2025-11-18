import { useEffect } from "react";

export default function AppRedirect() {
    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();

        console.log(ua);
    
        const androidPackage = "com.talkangels.app";
        const androidStore = "https://play.google.com/store/apps/details?id=" + androidPackage;

        // Android intent link
        const intentUrl =
            "intent://open#Intent;scheme=talkangels;package=" +
            androidPackage +
            ";S.browser_fallback_url=" +
            encodeURIComponent(androidStore) +
            ";end";

        // Try opening the app
        // window.location.href = intentUrl;

        // Backup fallback after 1 sec (some browsers block intent)
        // setTimeout(() => {
        //     if (ua.includes("android")) {
        //         window.location.replace(androidStore);
        //     }
        // }, 1000);
    }, []);

    return (
        <div style={{ padding: 50, textAlign: "center" }}>
            <h2>Opening TalkAngels App...</h2>
            <p>If nothing happens, you will be redirected shortly.</p>
        </div>
    );
}
