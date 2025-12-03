/**
 * NZIFDA Shared Footer Component
 * Generates a uniform footer across all pages
 */

function generateFooter() {
    const footerHTML = `
    <footer class="footer" id="contact">
        <div class="footer-content">
            <div class="footer-section">
                <h3>NZIFDA</h3>
                <p style="color: #cbd5e1; margin-top: 1rem;">
                    New Zealand Insoluble Fuel Disposal Agency<br>
                    Independent Industry Association<br>
                    Est. 2024
                </p>
                <p style="color: #94a3b8; margin-top: 0.5rem; font-size: 0.85rem;">Helping businesses comply with government regulations</p>
            </div>
            
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="certification.html">Certification Process</a></li>
                    <li><a href="index.html#certification">NZIFDA Mark</a></li>
                    <li><a href="index.html#standards">Industry Standards</a></li>
                    <li><a href="for-consumers.html">For Consumers</a></li>
                    <li><a href="for-operators.html">For Operators</a></li>
                    <li><a href="for-fuel-stations.html">For Fuel Stations</a></li>
                    <li><a href="for-insurers.html">For Insurers</a></li>
                    <li><a href="mediation.html">Mediation</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Resources</h3>
                <ul>
                    <li><a href="https://www.epa.govt.nz/hazardous-substances/rules-notices-and-how-to-comply/epa-notices-rules-you-must-follow/" target="_blank" rel="noopener">EPA Notices & Rules</a></li>
                    <li><a href="resources.html#mfe-guidelines">MfE Guidelines</a></li>
                    <li><a href="resources.html#dangerous-goods">Dangerous Goods Act</a></li>
                    <li><a href="resources.html">All Resources</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Legal & Compliance</h3>
                <ul>
                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    <li><a href="cookies-policy.html">Cookies Policy</a></li>
                    <li><a href="terms-of-service.html">Terms of Service</a></li>
                    <li><a href="accessibility.html">Accessibility</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Contact</h3>
                <ul>
                    <li style="color: #cbd5e1;">General: <a href="contact.html#general-form" style="color: var(--danger);">Contact Form</a></li>
                    <li style="color: #cbd5e1;">Certification: <a href="contact.html#certification-form" style="color: var(--danger);">Application Form</a></li>
                    <li style="color: #cbd5e1;">Compliance: <a href="contact.html#compliance-form" style="color: var(--danger);">Report Form</a></li>
                    <li style="color: #cbd5e1;">Mediation: <a href="complaint.html" style="color: var(--danger);">Complaint Form</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 NZIFDA - New Zealand Insoluble Fuel Disposal Agency. Ensuring compliance and excellence in fuel management services.</p>
            <p style="margin-top: 1rem;">
                <a href="privacy-policy.html">Privacy Policy</a> | 
                <a href="cookies-policy.html">Cookies Policy</a> | 
                <a href="terms-of-service.html">Terms of Service</a> | 
                <a href="accessibility.html">Accessibility</a>
            </p>
        </div>
    </footer>
    `;
    
    return footerHTML;
}

// Auto-inject footer when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.outerHTML = generateFooter();
        }
    });
} else {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = generateFooter();
    }
}

