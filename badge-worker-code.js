export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    
    if (path.startsWith('/badge/')) {
      const hashId = path.replace('/badge/', '');
      
      if (!hashId) {
        return new Response('Badge ID required', { status: 400 });
      }
      
      const data = await env.NZIFDA_CERTIFIED.get(hashId, 'json');
      
      let status = 'notfound';
      let companyName = '';
      let certType = 'compliant_operator'; // default
      
      if (data) {
        const statusValue = data.status || 'notfound';
        companyName = data.company || '';
        
        // Derive cert_type from status field
        // Status can be: compliant_operator, certified_workshop, mobile_certified, pending, suspended, expired, notfound
        if (statusValue === 'compliant_operator' || statusValue === 'certified_workshop' || statusValue === 'mobile_certified') {
          certType = statusValue;
          status = 'certified'; // These are all certified types
        } else {
          // For pending, suspended, expired, notfound - use status as-is and default cert_type
          status = statusValue;
          certType = data.cert_type || 'compliant_operator'; // Fallback to cert_type if exists, otherwise default
        }
      }
      
      const badge = generateBadge(status, companyName, hashId, certType);
      
      return new Response(badge, {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'public, max-age=3600',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
    
    return new Response('NZIFDA Badge Service', { status: 200 });
  },
};

function generateBadge(status, companyName, hashId, certType) {
  // Certification type configurations
  const certTypeConfigs = {
    compliant_operator: {
      color: '#0369a1',
      label: 'COMPLIANT OPERATOR',
      description: 'Management & Customer Service'
    },
    certified_workshop: {
      color: '#16a34a',
      label: 'CERTIFIED WORKSHOP',
      description: 'Service Delivery Facility'
    },
    mobile_certified: {
      color: '#7c3aed',
      label: 'MOBILE CERTIFIED',
      description: 'Mobile Service Unit'
    }
  };
  
  // Status configurations
  const statusConfigs = {
    certified: { 
      bgColor: '#ffffff', 
      borderColor: certTypeConfigs[certType]?.color || '#0369a1',
      statusText: 'CERTIFIED',
      statusColor: '#16a34a',
      descriptionLine1: 'This operator is currently',
      descriptionLine2: 'certified and authorized'
    },
    pending: { 
      bgColor: '#ffffff', 
      borderColor: certTypeConfigs[certType]?.color || '#0369a1',
      statusText: 'PENDING',
      statusColor: '#f59e0b',
      descriptionLine1: 'Certification application',
      descriptionLine2: 'is currently under review'
    },
    expired: { 
      bgColor: '#f8fafc', 
      borderColor: '#ef4444',
      statusText: 'EXPIRED',
      statusColor: '#ef4444',
      descriptionLine1: 'This certification has',
      descriptionLine2: 'expired and is no longer valid'
    },
    suspended: { 
      bgColor: '#f8fafc', 
      borderColor: '#ef4444',
      statusText: 'SUSPENDED',
      statusColor: '#ef4444',
      descriptionLine1: 'This certification has been',
      descriptionLine2: 'suspended pending review'
    },
    notfound: { 
      bgColor: '#f8fafc', 
      borderColor: '#6b7280',
      statusText: 'NOT VERIFIED',
      statusColor: '#6b7280',
      descriptionLine1: 'This operator is not',
      descriptionLine2: 'verified by NZIFDA'
    }
  };
  
  const certConfig = certTypeConfigs[certType] || certTypeConfigs.compliant_operator;
  const statusConfig = statusConfigs[status] || statusConfigs.notfound;
  const displayName = companyName.length > 30 ? companyName.substring(0, 27) + '...' : companyName;
  const displayHash = hashId.length > 20 ? hashId.substring(0, 17) + '...' : hashId;
  
  // Hexagon positions - scaled for 280x420 badge
  // Each hex is 18 units wide, 21 units tall
  const hexPositions = [
    { x: 9, y: 0, color: '#ef4444' },      // hex-1: top left
    { x: 24, y: 0, color: '#84cc16' },     // hex-2: top right
    { x: 1, y: 18, color: '#2563eb' },     // hex-3: middle left
    { x: 32, y: 18, color: '#fb923c' },    // hex-4: middle right
    { x: 9, y: 36, color: '#6b7280' },     // hex-5: bottom left
    { x: 24, y: 36, color: '#60a5fa' }    // hex-6: bottom right
  ];
  
  // Hexagon path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)
  // For an 18x21 hex: points at (5.4,0), (12.6,0), (18,10.5), (12.6,21), (5.4,21), (0,10.5)
  const hexPath = 'M 5.4 0 L 12.6 0 L 18 10.5 L 12.6 21 L 5.4 21 L 0 10.5 Z';
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 420" width="280" height="420" style="max-width: 100%; height: auto;">
    <defs>
      <style>
        @keyframes hexFloat {
          0%, 100% { 
            transform: translateY(0) scale(1); 
            filter: brightness(1);
            opacity: 0.9;
          }
          50% { 
            transform: translateY(-2px) scale(1.03); 
            filter: brightness(1.15);
            opacity: 1;
          }
        }
        .hex {
          animation: hexFloat 6s ease-in-out infinite;
        }
        .hex-1 { animation-delay: 0s; }
        .hex-2 { animation-delay: 0.5s; }
        .hex-3 { animation-delay: 1s; }
        .hex-4 { animation-delay: 1.5s; }
        .hex-5 { animation-delay: 2s; }
        .hex-6 { animation-delay: 2.5s; }
      </style>
    </defs>
    
    <!-- Background with rounded corners -->
    <rect width="280" height="420" rx="16" fill="${statusConfig.bgColor}" stroke="${statusConfig.borderColor}" stroke-width="3"/>
    
    <!-- Animated Hexagon Logo - Centered at top -->
    <g transform="translate(115, 30)">
      ${hexPositions.map((hex, i) => `
        <path 
          d="${hexPath}" 
          fill="${hex.color}" 
          class="hex hex-${i + 1}"
          opacity="0.9"
        />
      `).join('')}
    </g>
    
    <!-- NZIFDA Text -->
    <text x="140" y="100" text-anchor="middle" font-family="Oswald, Arial, sans-serif" font-size="24" font-weight="700" style="pointer-events: none;">
      <tspan fill="#1a1a1a">NZ</tspan><tspan fill="#dc2626">IF</tspan><tspan fill="#0369a1">DA</tspan>
    </text>
    
    <!-- Gradient Line -->
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#dc2626;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0369a1;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect x="90" y="110" width="100" height="3" rx="2" fill="url(#grad)" style="pointer-events: none;"/>
    
    <!-- Company Name -->
    <text x="140" y="140" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-size="16" font-weight="600" fill="#0f172a" style="pointer-events: none;">
      ${escapeXml(displayName)}
    </text>
    
    <!-- Certification Type Badge -->
    <rect x="50" y="160" width="180" height="32" rx="16" fill="${certConfig.color}" opacity="0.1" style="pointer-events: none;"/>
    <text x="140" y="178" text-anchor="middle" font-family="Oswald, Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="1" fill="${certConfig.color}" style="pointer-events: none;">
      ${certConfig.label}
    </text>
    <text x="140" y="195" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-size="10" fill="#64748b" font-weight="500" style="pointer-events: none;">
      ${certConfig.description}
    </text>
    
    <!-- Status Badge -->
    <rect x="70" y="210" width="140" height="28" rx="14" fill="${statusConfig.statusColor}" opacity="0.1" style="pointer-events: none;"/>
    <text x="140" y="228" text-anchor="middle" font-family="Oswald, Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="1.5" fill="${statusConfig.statusColor}" style="pointer-events: none;">
      ${statusConfig.statusText}
    </text>
    
    <!-- Status Description (Two Lines) -->
    <text x="140" y="260" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-size="11" fill="#64748b" font-weight="400" style="pointer-events: none;">
      ${statusConfig.descriptionLine1}
    </text>
    <text x="140" y="278" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-size="11" fill="#64748b" font-weight="400" style="pointer-events: none;">
      ${statusConfig.descriptionLine2}
    </text>
    
    <!-- Verification Code -->
    <text x="140" y="310" text-anchor="middle" font-family="Courier New, monospace" font-size="9" fill="#94a3b8" font-weight="500" style="pointer-events: none;">
      ${escapeXml(displayHash)}
    </text>
    
    <!-- Verification Link -->
    <text x="140" y="340" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#64748b" font-weight="500" style="pointer-events: none;">
      Verification Seal
    </text>
    <text x="140" y="360" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#94a3b8" font-weight="400" style="pointer-events: none;">
      nzifda.org/verify
    </text>
    
    <!-- Clickable Link Overlay -->
    <a href="https://nzifda.org/verify" target="_blank" style="cursor: pointer;">
      <rect width="280" height="420" rx="16" fill="transparent"/>
    </a>
  </svg>`;
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

