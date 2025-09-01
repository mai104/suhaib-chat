// Main JavaScript for Waez App

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const homeScreen = document.getElementById('home-screen');
    const chatScreen = document.getElementById('chat-screen');
    const startChatBtn = document.getElementById('start-chat-btn');
    const backBtn = document.getElementById('back-btn');
    
    // Show welcome modal on page load
    const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    welcomeModal.show();
    
    // Animation helper function
    function animate(element, animationName, duration) {
        element.style.animation = `${animationName} ${duration}ms`;
        setTimeout(() => {
            element.style.animation = '';
        }, duration);
    }
    
    // Start chat button click event
    startChatBtn.addEventListener('click', function() {
        // Animate the home screen before hiding it
        animate(homeScreen, 'fadeOut', 300);
        
        // Hide home screen and show chat screen after animation
        setTimeout(() => {
            homeScreen.classList.add('d-none');
            chatScreen.classList.remove('d-none');
            
            // Animate the chat screen appearing
            animate(chatScreen, 'fadeIn', 300);
        }, 300);
    });
    
    // Back button click event
    backBtn.addEventListener('click', function() {
        // Animate the chat screen before hiding it
        animate(chatScreen, 'fadeOut', 300);
        
        // Hide chat screen and show home screen after animation
        setTimeout(() => {
            chatScreen.classList.add('d-none');
            homeScreen.classList.remove('d-none');
            
            // Animate the home screen appearing
            animate(homeScreen, 'fadeIn', 300);
        }, 300);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(20px); }
        }
    `;
    document.head.appendChild(style);
});
