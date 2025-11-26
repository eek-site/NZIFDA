/**
 * NZIFDA Shared Header Component
 * Generates a uniform header across all pages
 */

function generateHeader() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Navigation links - all pages should have these
    const navLinks = [
        { href: 'for-consumers.html', text: 'For Consumers' },
        { href: 'for-operators.html', text: 'For Operators' },
        { href: 'for-fuel-stations.html', text: 'For Fuel Stations' },
        { href: 'for-insurers.html', text: 'For Insurers' },
        { href: 'mediation.html', text: 'Mediation' },
        { href: 'about.html', text: 'About' },
        { href: 'resources.html', text: 'Resources' },
        { href: 'contact.html', text: 'Contact' }
    ];
    
    // Mobile navigation links - may include additional links
    const mobileNavLinks = [
        { href: 'index.html', text: 'Home' },
        ...navLinks,
        { href: 'emergency-response.html', text: 'Emergency Response' },
        { href: 'misfuel-prevention.html', text: 'Prevention Guide' },
        { href: 'faq.html', text: 'FAQ' }
    ];
    
    const headerHTML = `
    <header class="header">
        <div class="nav-container">
            <div class="logo">
                <div class="logo-hexagons">
                    <div class="hex hex-1"></div>
                    <div class="hex hex-2"></div>
                    <div class="hex hex-3"></div>
                    <div class="hex hex-4"></div>
                    <div class="hex hex-5"></div>
                    <div class="hex hex-6"></div>
                </div>
                <div class="logo-text">
                    <h1><a href="index.html" style="text-decoration: none; color: inherit;"><span class="nz">NZ</span><span class="if">IF</span><span class="da">DA</span></a></h1>
                    <span>New Zealand Insoluble Fuel Disposal Agency</span>
                </div>
            </div>
            <nav>
                <button class="mobile-menu-toggle" onclick="toggleMobileMenu()" aria-label="Toggle mobile menu">☰</button>
                <ul class="nav-links">
                    ${navLinks.map(link => 
                        `<li><a href="${link.href}" ${currentPage === link.href ? 'class="active"' : ''}>${link.text}</a></li>`
                    ).join('')}
                </ul>
            </nav>
            <nav class="mobile-nav" id="mobileNav">
                ${mobileNavLinks.map(link => 
                    `<a href="${link.href}" ${currentPage === link.href ? 'class="active"' : ''}>${link.text}</a>`
                ).join('')}
            </nav>
        </div>
    </header>
    `;
    
    return headerHTML;
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
        mobileNav.classList.toggle('active');
    }
}

// Auto-inject header when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.outerHTML = generateHeader();
        }
    });
} else {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = generateHeader();
    }
}

