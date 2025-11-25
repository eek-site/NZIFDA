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
      
      if (data) {
        status = data.status || 'notfound';
        companyName = data.company || '';
      }
      
      const badge = generateBadge(status, companyName, hashId);
      
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

function generateBadge(status, companyName, hashId) {
  const configs = {
    certified: { 
      bgColor: '#ffffff', 
      borderColor: '#0369a1',
      statusText: 'CERTIFIED',
      statusColor: '#16a34a'
    },
    pending: { 
      bgColor: '#ffffff', 
      borderColor: '#f59e0b',
      statusText: 'PENDING',
      statusColor: '#f59e0b'
    },
    expired: { 
      bgColor: '#f8fafc', 
      borderColor: '#ef4444',
      statusText: 'EXPIRED',
      statusColor: '#ef4444'
    },
    suspended: { 
      bgColor: '#f8fafc', 
      borderColor: '#ef4444',
      statusText: 'SUSPENDED',
      statusColor: '#ef4444'
    },
    notfound: { 
      bgColor: '#f8fafc', 
      borderColor: '#6b7280',
      statusText: 'NOT VERIFIED',
      statusColor: '#6b7280'
    }
  };
  
  const config = configs[status] || configs.notfound;
  const displayName = companyName.length > 35 ? companyName.substring(0, 32) + '...' : companyName;
  
  // Hexagon positions - scaled for mobile-first badge
  // Using viewBox coordinates: hexagons centered in badge
  // Each hex is 20 units wide, 23 units tall (scaled from original 24x28)
  const hexPositions = [
    { x: 10, y: 0, color: '#ef4444' },      // hex-1: top left
    { x: 27, y: 0, color: '#84cc16' },     // hex-2: top right
    { x: 1, y: 20, color: '#2563eb' },     // hex-3: middle left
    { x: 36, y: 20, color: '#fb923c' },    // hex-4: middle right
    { x: 10, y: 40, color: '#6b7280' },    // hex-5: bottom left
    { x: 27, y: 40, color: '#60a5fa' }    // hex-6: bottom right
  ];
  
  // Hexagon path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)
  // For a 20x23 hex: points at (6,0), (14,0), (20,11.5), (14,23), (6,23), (0,11.5)
  const hexPath = 'M 6 0 L 14 0 L 20 11.5 L 14 23 L 6 23 L 0 11.5 Z';
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300" style="max-width: 100%; height: auto;">
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
    <rect width="400" height="300" rx="20" fill="${config.bgColor}" stroke="${config.borderColor}" stroke-width="4"/>
    
    <!-- Animated Hexagon Logo - Centered -->
    <g transform="translate(150, 40)">
      ${hexPositions.map((hex, i) => `
        <path 
          d="${hexPath}" 
          fill="${hex.color}" 
          class="hex hex-${i + 1}"
          opacity="0.9"
        />
      `).join('')}
    </g>
    
    <!-- Company Name - Below hexagons -->
    <text x="200" y="130" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-size="18" font-weight="600" fill="#0f172a" style="pointer-events: none;">
      ${escapeXml(displayName)}
    </text>
    
    <!-- Status Badge -->
    <rect x="140" y="150" width="120" height="28" rx="14" fill="${config.statusColor}" opacity="0.1" style="pointer-events: none;"/>
    <text x="200" y="168" text-anchor="middle" font-family="Oswald, Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="1.5" fill="${config.statusColor}" style="pointer-events: none;">
      ${config.statusText}
    </text>
    
    <!-- Verification Seal Text -->
    <text x="200" y="200" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#64748b" font-weight="500" style="pointer-events: none;">
      Verification Seal
    </text>
    <text x="200" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#94a3b8" font-weight="400" style="pointer-events: none;">
      nzifda.org/verify
    </text>
    
    <!-- Clickable Link Overlay -->
    <a href="https://nzifda.org/index.html#certification" target="_blank" style="cursor: pointer;">
      <rect width="400" height="300" rx="20" fill="transparent"/>
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

