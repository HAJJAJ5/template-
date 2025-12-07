// AI Chatbot Widget
document.addEventListener('DOMContentLoaded', () => {
    // Inject Chat HTML
    const chatWidget = document.createElement('div');
    chatWidget.innerHTML = `
        <div id="chat-widget" class="chat-widget">
            <button id="chat-toggle" class="chat-toggle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>
            
            <div id="chat-window" class="chat-window">
                <div class="chat-header">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div class="bot-avatar">AI</div>
                        <div>
                            <h3 style="margin: 0; font-size: 1rem;">HoodieBot</h3>
                            <span style="font-size: 0.8rem; opacity: 0.8;">Online</span>
                        </div>
                    </div>
                    <button id="chat-close" style="background: none; border: none; color: white; cursor: pointer;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                
                <div id="chat-messages" class="chat-messages">
                    <div class="message bot">
                        Hello! 👋 I'm HoodieBot. How can I help you today?
                    </div>
                </div>
                
                <div class="chat-input-area">
                    <input type="text" id="chat-input" placeholder="Type a message..." autocomplete="off">
                    <button id="chat-send">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        <style>
            .chat-widget {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 9999;
                font-family: 'Inter', sans-serif;
            }
            
            .chat-toggle {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: var(--primary, #2563eb);
                color: white;
                border: none;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.3s ease;
            }
            
            .chat-toggle:hover {
                transform: scale(1.1);
            }
            
            .chat-window {
                position: absolute;
                bottom: 80px;
                right: 0;
                width: 350px;
                height: 500px;
                background: white;
                border-radius: 16px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.15);
                display: none;
                flex-direction: column;
                overflow: hidden;
                animation: slideUp 0.3s ease;
            }
            
            .chat-window.open {
                display: flex;
            }
            
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .chat-header {
                background: var(--primary, #2563eb);
                color: white;
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .bot-avatar {
                width: 32px;
                height: 32px;
                background: rgba(255,255,255,0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 0.8rem;
            }
            
            .chat-messages {
                flex: 1;
                padding: 1rem;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                background: #f9fafb;
            }
            
            .message {
                max-width: 80%;
                padding: 0.8rem 1rem;
                border-radius: 12px;
                font-size: 0.95rem;
                line-height: 1.4;
            }
            
            .message.bot {
                background: white;
                align-self: flex-start;
                border-bottom-left-radius: 4px;
                box-shadow: 0 1px 2px rgba(0,0,0,0.05);
            }
            
            .message.user {
                background: var(--primary, #2563eb);
                color: white;
                align-self: flex-end;
                border-bottom-right-radius: 4px;
            }
            
            .chat-input-area {
                padding: 1rem;
                background: white;
                border-top: 1px solid #eee;
                display: flex;
                gap: 0.5rem;
            }
            
            #chat-input {
                flex: 1;
                padding: 0.8rem;
                border: 1px solid #ddd;
                border-radius: 20px;
                outline: none;
            }
            
            #chat-input:focus {
                border-color: var(--primary, #2563eb);
            }
            
            #chat-send {
                background: var(--primary, #2563eb);
                color: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .typing-indicator {
                font-size: 0.8rem;
                color: #666;
                margin-left: 1rem;
                margin-bottom: 0.5rem;
                display: none;
            }
        </style>
    `;
    document.body.appendChild(chatWidget);

    // Logic
    const toggleBtn = document.getElementById('chat-toggle');
    const closeBtn = document.getElementById('chat-close');
    const window = document.getElementById('chat-window');
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');
    const messages = document.getElementById('chat-messages');

    // Toggle Chat
    function toggleChat() {
        window.classList.toggle('open');
    }

    toggleBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Send Message
    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;

        // Add User Message
        addMessage(text, 'user');
        input.value = '';

        // Simulate Bot Response
        showTyping();
        setTimeout(() => {
            const response = getBotResponse(text);
            hideTyping();
            addMessage(response, 'bot');
        }, 1000 + Math.random() * 1000);
    }

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `message ${sender}`;
        div.textContent = text;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function showTyping() {
        // Simple typing indicator logic if needed
    }

    function hideTyping() {
        // Hide typing indicator
    }

    // AI Logic (Simple Rule-Based)
    function getBotResponse(input) {
        const lower = input.toLowerCase();

        if (lower.includes('hello') || lower.includes('hi')) {
            return "Hi there! Welcome to HoodieStore. Looking for anything specific?";
        }
        if (lower.includes('shipping') || lower.includes('delivery')) {
            return "We offer free shipping on orders over $75! Standard delivery takes 3-5 business days.";
        }
        if (lower.includes('return') || lower.includes('refund')) {
            return "We have a 30-day return policy. If you're not happy with your hoodie, you can return it for a full refund.";
        }
        if (lower.includes('size') || lower.includes('fit')) {
            return "Our hoodies run true to size. Check out our Size Guide in the footer for detailed measurements!";
        }
        if (lower.includes('price') || lower.includes('cost')) {
            return "Our premium hoodies start at $49.99. Check out our Sale section for deals!";
        }
        if (lower.includes('track') || lower.includes('order')) {
            return "You can track your order in your Profile dashboard. Just log in to see the status.";
        }
        if (lower.includes('material') || lower.includes('fabric')) {
            return "All our hoodies are made from 100% organic cotton for maximum comfort and durability.";
        }

        return "I'm not sure about that, but I'd love to help! You can browse our Shop page or contact support@hoodiestore.com.";
    }
});
