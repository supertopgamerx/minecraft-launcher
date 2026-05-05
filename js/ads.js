// Ad System for Minecraft Launcher

const ads = [
    {
        id: 1,
        title: "TopBlox",
        description: "Build and explore amazing worlds!",
        image: "./assets/images/ads/topblox.png",
        link: "https://topblox-3be0b896.base44.app",
        color: "#FF6B6B"
    },
    {
        id: 2,
        title: "TopTV",
        description: "Stream your favorite content",
        image: "./assets/images/ads/toptv.png",
        link: "https://app-toptv-027ec6a3-05d4-43d5-bcc9-8af17892753d.base44.app",
        color: "#4ECDC4"
    },
    {
        id: 3,
        title: "Poople Universe",
        description: "Navigate amazing dimensions",
        image: "./assets/images/ads/poople.png",
        link: "https://poople-universe-navigator-4f470ef3.base44.app",
        color: "#45B7D1"
    },
    {
        id: 4,
        title: "TopGamerX Studios",
        description: "Join our Roblox community!",
        image: "./assets/images/ads/roblox.png",
        link: "https://www.roblox.com/communities/34259388/topgamerx-studios",
        color: "#FF1744"
    },
    {
        id: 5,
        title: "AI Forge",
        description: "Discover the future of AI",
        image: "./assets/images/ads/aiforge.png",
        link: "https://ai-forge-2351a779.base44.app",
        color: "#7C3AED"
    },
    {
        id: 6,
        title: "Gamer X Nexus",
        description: "Connect with gamers worldwide",
        image: "./assets/images/ads/nexus.png",
        link: "https://gamer-x-nexus-46dbeaa1.base44.app",
        color: "#00D4FF"
    }
];

let currentAdIndex = 0;
let adShownBefore = false;

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
    
    const image = document.createElement('img');
    image.src = ad.image;
    image.alt = ad.title;
    image.className = 'adImage';
    
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
    content.appendChild(image);
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

function showAdRotation() {
    // Show ads every few minutes during gameplay
    const adInterval = setInterval(() => {
        showAd();
    }, 5 * 60 * 1000); // Every 5 minutes
}
