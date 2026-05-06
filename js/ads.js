// Ad System for Minecraft Launcher

const ads = [
    {
        id: 1,
        title: "TopBlox",
        description: "Build and explore amazing worlds!",
        embed: '<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://topblox-3be0b896.base44.app" data-iframely-url="https://iframely.net/Yc1FTDr3?theme=dark"></a></div></div>',
        link: "https://topblox-3be0b896.base44.app",
        color: "#FF6B6B"
    },
    {
        id: 2,
        title: "TopTV",
        description: "Stream your favorite content",
        embed: '<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://app-toptv-027ec6a3-05d4-43d5-bcc9-8af17892753d.base44.app" data-iframely-url="https://iframely.net/2SsizFSI?theme=dark"></a></div></div>',
        link: "https://app-toptv-027ec6a3-05d4-43d5-bcc9-8af17892753d.base44.app",
        color: "#4ECDC4"
    },
    {
        id: 3,
        title: "Poople Universe",
        description: "Navigate amazing dimensions",
        embed: '<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://poople-universe-navigator-4f470ef3.base44.app" data-iframely-url="https://iframely.net/gpqtLqCf?theme=dark"></a></div></div>',
        link: "https://poople-universe-navigator-4f470ef3.base44.app",
        color: "#45B7D1"
    },
    {
        id: 4,
        title: "TopGamerX Studios",
        description: "Join our Roblox community!",
        embed: '<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.roblox.com/communities/34259388/topgamerx-studios" data-iframely-url="https://iframely.net/4FM6LZDo?theme=dark"></a></div></div>',
        link: "https://www.roblox.com/communities/34259388/topgamerx-studios",
        color: "#FF1744"
    },
    {
        id: 5,
        title: "McDonald's",
        description: "Check out our menu",
        embed: '<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.mcdonalds.com/us/en-us.html" data-iframely-url="https://iframely.net/WxH0QJMh?theme=dark"></a></div></div>',
        link: "https://www.mcdonalds.com/us/en-us.html",
        color: "#FFC72C"
    },
    {
        id: 6,
        title: "Vilros",
        description: "Gaming gear and accessories",
        embed: '<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://vilros.com/" data-iframely-url="https://iframely.net/jGa65WjP?theme=dark"></a></div></div>',
        link: "https://vilros.com/",
        color: "#FF9500"
    },
    {
        id: 7,
        title: "Gamer X Nexus",
        description: "Connect with gamers worldwide",
        embed: '<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://gamer-x-nexus-46dbeaa1.base44.app" data-iframely-url="https://iframely.net/e7tKIQ6r?theme=dark"></a></div></div>',
        link: "https://gamer-x-nexus-46dbeaa1.base44.app",
        color: "#00D4FF"
    },
    {
        id: 8,
        title: "AI Forge",
        description: "Discover the future of AI",
        embed: '<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://ai-forge-2351a779.base44.app" data-iframely-url="https://iframely.net/cJyqJtCH?theme=dark"></a></div></div>',
        link: "https://ai-forge-2351a779.base44.app",
        color: "#7C3AED"
    }
];

function getRandomAd() {
    return ads[Math.floor(Math.random() * ads.length)];
}

function createAdModal(ad) {
    const modal = document.createElement('div');
    modal.className = 'adModal';
    modal.id = 'adModal';
    
    const overlay = document.createElement('div');
    overlay.className = 'adOverlay';
    overlay.onclick = closeAd;
    
    const content = document.createElement('div');
    content.className = 'adContent';
    content.style.borderTopColor = ad.color;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'adCloseBtn';
    closeBtn.innerHTML = '✕';
    closeBtn.onclick = closeAd;
    
    const embedContainer = document.createElement('div');
    embedContainer.className = 'adEmbedContainer';
    embedContainer.innerHTML = ad.embed;
    
    const textContent = document.createElement('div');
    textContent.className = 'adTextContent';
    
    const title = document.createElement('h2');
    title.className = 'adTitle';
    title.innerHTML = ad.title;
    
    const description = document.createElement('p');
    description.className = 'adDescription';
    description.innerHTML = ad.description;
    
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'adButtonContainer';
    
    const visitBtn = document.createElement('a');
    visitBtn.href = ad.link;
    visitBtn.target = '_blank';
    visitBtn.className = 'adButton adButtonPrimary';
    visitBtn.innerHTML = 'Visit Website';
    visitBtn.style.backgroundColor = ad.color;
    
    const skipBtn = document.createElement('button');
    skipBtn.className = 'adButton adButtonSecondary';
    skipBtn.innerHTML = 'Maybe Later';
    skipBtn.onclick = closeAd;
    
    buttonContainer.appendChild(visitBtn);
    buttonContainer.appendChild(skipBtn);
    
    textContent.appendChild(title);
    textContent.appendChild(description);
    textContent.appendChild(buttonContainer);
    
    content.appendChild(closeBtn);
    content.appendChild(embedContainer);
    content.appendChild(textContent);
    
    modal.appendChild(overlay);
    modal.appendChild(content);
    
    return modal;
}

function showAd(adIndex = null) {
    // Remove existing modal if present
    const existingModal = document.getElementById('adModal');
    if (existingModal) existingModal.remove();
    
    const ad = adIndex !== null ? ads[adIndex] : getRandomAd();
    const modal = createAdModal(ad);
    document.body.appendChild(modal);
    
    // Trigger animation
    setTimeout(() => {
        modal.classList.add('adShow');
        // Load iframely embeds
        if (window.iframely) {
            window.iframely.load();
        }
    }, 10);
}

function showAdBeforePlay() {
    // Show random ad before playing
    showAd();
    
    // Store that we showed an ad
    localStorage.setItem('lastAdShown', new Date().getTime());
}

function closeAd() {
    const modal = document.getElementById('adModal');
    if (modal) {
        modal.classList.remove('adShow');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}
