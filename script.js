/* ========================================
   FARRISHUB - JAVASCRIPT
   Complete functionality for neon hub
   ======================================== */

// ========== INITIALIZE ON PAGE LOAD ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('Farrishub loaded successfully');
    
    // Initialize stars
    initializeStars();
    
    // Setup card click handlers
    setupCardHandlers();
    
    // Setup modal handlers
    setupModalHandlers();
});

/* ========== ANIMATED STARS BACKGROUND ========== */
function initializeStars() {
    const starsContainer = document.querySelector('.stars');
    
    // Clear existing stars
    starsContainer.innerHTML = '';
    
    // Create initial stars
    const starCount = Math.floor(Math.random() * 50) + 100; // 100-150 stars
    
    for (let i = 0; i < starCount; i++) {
        createStar(starsContainer);
    }
    
    // Continuously create new stars
    setInterval(() => {
        if (document.querySelectorAll('.star').length < 200) {
            createStar(starsContainer);
        }
    }, 500);
}

function createStar(container) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    // Random size (3-8px)
    const size = Math.random() * 5 + 3;
    
    // Random animation delay
    const delay = Math.random() * 3;
    const duration = Math.random() * 3 + 2;
    
    // Apply styles
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDelay = delay + 's';
    star.style.animationDuration = duration + 's';
    
    // Random chance to add floating animation
    if (Math.random() > 0.7) {
        star.classList.add('floating');
        star.style.animationDuration = (Math.random() * 10 + 15) + 's';
    }
    
    container.appendChild(star);
    
    // Remove star after animation completes (to prevent memory issues)
    setTimeout(() => {
        star.remove();
    }, 25000);
}

/* ========== CARD CLICK HANDLERS ========== */
function setupCardHandlers() {
    // YouTube Card
    const youtubeCard = document.getElementById('youtube-card');
    if (youtubeCard) {
        youtubeCard.addEventListener('click', function() {
            window.open('https://www.youtube.com', '_blank');
        });
        youtubeCard.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') window.open('https://www.youtube.com', '_blank');
        });
    }
    
    // TikTok Card
    const tiktokCard = document.getElementById('tiktok-card');
    if (tiktokCard) {
        tiktokCard.addEventListener('click', function() {
            window.open('https://www.tiktok.com', '_blank');
        });
        tiktokCard.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') window.open('https://www.tiktok.com', '_blank');
        });
    }
    
    // Discord Card
    const discordCard = document.getElementById('discord-card');
    if (discordCard) {
        discordCard.addEventListener('click', function() {
            window.open('https://www.discord.com', '_blank');
        });
        discordCard.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') window.open('https://www.discord.com', '_blank');
        });
    }
    
    // Games Card
    const gamesCard = document.getElementById('games-card');
    if (gamesCard) {
        gamesCard.addEventListener('click', function() {
            openGamesModal();
        });
        gamesCard.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') openGamesModal();
        });
    }
    
    // Snapchat Card
    const snapchatCard = document.getElementById('snapchat-card');
    if (snapchatCard) {
        snapchatCard.addEventListener('click', function() {
            window.open('https://www.snapchat.com', '_blank');
        });
        snapchatCard.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') window.open('https://www.snapchat.com', '_blank');
        });
    }
    
    // Roblox Card
    const robloxCard = document.getElementById('roblox-card');
    if (robloxCard) {
        robloxCard.addEventListener('click', function() {
            window.open('https://www.roblox.com', '_blank');
        });
        robloxCard.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') window.open('https://www.roblox.com', '_blank');
        });
    }
    
    // Make cards focusable for keyboard navigation
    document.querySelectorAll('.app-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.style.cursor = 'pointer';
    });
}

/* ========== GAMES MODAL HANDLERS ========== */
function setupModalHandlers() {
    const modal = document.getElementById('games-modal');
    const closeButton = document.getElementById('close-games');
    
    // Close button click
    if (closeButton) {
        closeButton.addEventListener('click', closeGamesModal);
    }
    
    // Close modal when clicking outside content
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeGamesModal();
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('games-modal');
            if (modal && !modal.classList.contains('hidden')) {
                closeGamesModal();
            }
        }
    });
}

function openGamesModal() {
    const modal = document.getElementById('games-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        console.log('Games modal opened');
    }
}

function closeGamesModal() {
    const modal = document.getElementById('games-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        console.log('Games modal closed');
    }
}

/* ========== SMOOTH SCROLL BEHAVIOR ========== */
document.addEventListener('click', function(e) {
    // Smooth scroll to hash links if any are added in future
    if (e.target.tagName === 'A' && e.target.hash) {
        const target = document.querySelector(e.target.hash);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

/* ========== PERFORMANCE OPTIMIZATION ========== */
// Throttle scroll events for better performance
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(function() {
        // Scroll-based animations can be added here if needed
        console.log('Scroll detected');
    });
}, { passive: true });

/* ========== RESIZE HANDLER FOR RESPONSIVE DESIGN ========== */
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        console.log('Window resized - Layout adjusted');
    }, 250);
}, { passive: true });

/* ========== ERROR HANDLING ========== */
window.addEventListener('error', function(e) {
    console.error('Global error caught:', e.message);
});

/* ========== CONSOLE LOGGING FOR DEBUG ========== */
console.log('%cFarrishub', 'font-size: 30px; color: #ff00ff; font-weight: bold; text-shadow: 0 0 10px #ff00ff;');
console.log('%cYour Ultimate Digital Hub', 'font-size: 14px; color: #00ffff; font-weight: bold;');
console.log('All systems online and ready! ✨');
