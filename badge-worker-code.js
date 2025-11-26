export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path.startsWith('/badge/')) {
      const hashId = path.replace('/badge/', '').trim();

      if (!hashId) {
        return new Response('Badge ID required', { status: 400 });
      }

      const data = await env.NZIFDA_CERTIFIED.get(hashId, 'json');

      let status = 'notfound';
      let companyName = '';

      if (data) {
        status = (data.status || 'notfound').toLowerCase();
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
    // COMPLIANT OPERATOR statuses
    compliant_operator: {
      certType: 'COMPLIANT OPERATOR',
      certColor: '#0369a1',
      certBg: '#e0f2fe',
      certDesc: 'Management &amp; Customer Service',
      borderColor: '#16a34a',
      statusColor: '#16a34a',
      statusBg: '#ecfdf3',
      statusLabel: 'CERTIFIED',
      sub1: 'Verified operator',
      sub2: 'Compliance checks complete'
    },
    compliant_operator_pending: {
      certType: 'COMPLIANT OPERATOR',
      certColor: '#0369a1',
      certBg: '#e0f2fe',
      certDesc: 'Management &amp; Customer Service',
      borderColor: '#f59e0b',
      statusColor: '#d97706',
      statusBg: '#fffbeb',
      statusLabel: 'PENDING REVIEW',
      sub1: 'Compliance review in progress',
      sub2: 'Verify status before engagement'
    },
    compliant_operator_expired: {
      certType: 'COMPLIANT OPERATOR',
      certColor: '#0369a1',
      certBg: '#e0f2fe',
      certDesc: 'Management &amp; Customer Service',
      borderColor: '#ef4444',
      statusColor: '#dc2626',
      statusBg: '#fef2f2',
      statusLabel: 'EXPIRED',
      sub1: 'Certification has lapsed',
      sub2: 'Do not treat as current'
    },
    compliant_operator_suspended: {
      certType: 'COMPLIANT OPERATOR',
      certColor: '#0369a1',
      certBg: '#e0f2fe',
      certDesc: 'Management &amp; Customer Service',
      borderColor: '#ef4444',
      statusColor: '#dc2626',
      statusBg: '#fef2f2',
      statusLabel: 'SUSPENDED',
      sub1: 'Certification suspended',
      sub2: 'Investigate before access'
    },
    // CERTIFIED WORKSHOP statuses
    certified_workshop: {
      certType: 'CERTIFIED WORKSHOP',
      certColor: '#16a34a',
      certBg: '#ecfdf5',
      certDesc: 'Service Delivery Facility',
      borderColor: '#16a34a',
      statusColor: '#16a34a',
      statusBg: '#ecfdf3',
      statusLabel: 'CERTIFIED',
      sub1: 'Verified operator',
      sub2: 'Compliance checks complete'
    },
    workshop_pending: {
      certType: 'CERTIFIED WORKSHOP',
      certColor: '#16a34a',
      certBg: '#ecfdf5',
      certDesc: 'Service Delivery Facility',
      borderColor: '#f59e0b',
      statusColor: '#d97706',
      statusBg: '#fffbeb',
      statusLabel: 'PENDING REVIEW',
      sub1: 'Compliance review in progress',
      sub2: 'Verify status before engagement'
    },
    workshop_expired: {
      certType: 'CERTIFIED WORKSHOP',
      certColor: '#16a34a',
      certBg: '#ecfdf5',
      certDesc: 'Service Delivery Facility',
      borderColor: '#ef4444',
      statusColor: '#dc2626',
      statusBg: '#fef2f2',
      statusLabel: 'EXPIRED',
      sub1: 'Certification has lapsed',
      sub2: 'Do not treat as current'
    },
    workshop_suspended: {
      certType: 'CERTIFIED WORKSHOP',
      certColor: '#16a34a',
      certBg: '#ecfdf5',
      certDesc: 'Service Delivery Facility',
      borderColor: '#ef4444',
      statusColor: '#dc2626',
      statusBg: '#fef2f2',
      statusLabel: 'SUSPENDED',
      sub1: 'Certification suspended',
      sub2: 'Investigate before access'
    },
    // MOBILE CERTIFIED statuses
    mobile_certified: {
      certType: 'MOBILE CERTIFIED',
      certColor: '#7c3aed',
      certBg: '#f3e8ff',
      certDesc: 'Mobile Service Unit',
      borderColor: '#16a34a',
      statusColor: '#16a34a',
      statusBg: '#ecfdf3',
      statusLabel: 'CERTIFIED',
      sub1: 'Verified operator',
      sub2: 'Compliance checks complete'
    },
    mobile_pending: {
      certType: 'MOBILE CERTIFIED',
      certColor: '#7c3aed',
      certBg: '#f3e8ff',
      certDesc: 'Mobile Service Unit',
      borderColor: '#f59e0b',
      statusColor: '#d97706',
      statusBg: '#fffbeb',
      statusLabel: 'PENDING REVIEW',
      sub1: 'Compliance review in progress',
      sub2: 'Verify status before engagement'
    },
    mobile_expired: {
      certType: 'MOBILE CERTIFIED',
      certColor: '#7c3aed',
      certBg: '#f3e8ff',
      certDesc: 'Mobile Service Unit',
      borderColor: '#ef4444',
      statusColor: '#dc2626',
      statusBg: '#fef2f2',
      statusLabel: 'EXPIRED',
      sub1: 'Certification has lapsed',
      sub2: 'Do not treat as current'
    },
    mobile_suspended: {
      certType: 'MOBILE CERTIFIED',
      certColor: '#7c3aed',
      certBg: '#f3e8ff',
      certDesc: 'Mobile Service Unit',
      borderColor: '#ef4444',
      statusColor: '#dc2626',
      statusBg: '#fef2f2',
      statusLabel: 'SUSPENDED',
      sub1: 'Certification suspended',
      sub2: 'Investigate before access'
    },
    // NOT FOUND
    notfound: {
      certType: 'UNKNOWN',
      certColor: '#64748b',
      certBg: '#f9fafb',
      certDesc: 'Badge Not Found',
      borderColor: '#94a3b8',
      statusColor: '#64748b',
      statusBg: '#f9fafb',
      statusLabel: 'NOT VERIFIED',
      sub1: 'Badge not found in registry',
      sub2: 'Treat operator as unverified'
    }
  };

  const cfg = configs[status] || configs.notfound;
  const displayName = companyName && companyName.length > 30 ? companyName.substring(0, 27) + '...' : companyName || 'Unknown Operator';
  const shortHash = hashId ? hashId.substring(0, 20) + '…' : '';

  // Encode certificate data for the link
  const certData = {
    hash: hashId,
    company: companyName,
    status: status
  };
  const encodedData = btoa(JSON.stringify(certData)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const verifyUrl = `https://nzifda.org/index.html#certification?encoded=${encodedData}`;

  // Hexagon positions for animated logo
  const hexPositions = [
    { x: 10, y: 0, color: '#ef4444' },
    { x: 27, y: 0, color: '#84cc16' },
    { x: 1, y: 20, color: '#2563eb' },
    { x: 36, y: 20, color: '#fb923c' },
    { x: 10, y: 40, color: '#6b7280' },
    { x: 27, y: 40, color: '#60a5fa' }
  ];
  const hexPath = 'M 6 0 L 14 0 L 20 11.5 L 14 23 L 6 23 L 0 11.5 Z';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 320" width="800" height="320" style="max-width: 100%; height: auto;">
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
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-opacity="0.15"/>
    </filter>
    <linearGradient id="markLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#dc2626;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0369a1;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Main container background -->
  <rect width="800" height="320" rx="16" fill="#ffffff" stroke="${cfg.borderColor}" stroke-width="3"/>

  <!-- Column 1: NZIFDA Logo & Mark -->
  <g transform="translate(40, 30)">
    <!-- Logo container -->
    <rect x="0" y="0" width="200" height="260" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" filter="url(#shadow)"/>
    
    <!-- Animated Hexagon Logo -->
    <g transform="translate(75, 30)">
      ${hexPositions.map((hex, i) => `
        <path
          d="${hexPath}"
          fill="${hex.color}"
          class="hex hex-${i + 1}"
          opacity="0.9"
          transform="translate(${hex.x}, ${hex.y})"
        />
      `).join('')}
    </g>

    <!-- NZIFDA Text -->
    <text x="100" y="110" text-anchor="middle" font-family="Oswald, sans-serif" font-size="36" font-weight="700" letter-spacing="1">
      <tspan fill="#0f172a">NZ</tspan><tspan fill="#dc2626">IF</tspan><tspan fill="#0369a1">DA</tspan>
    </text>
    
    <!-- Gradient line -->
    <rect x="30" y="120" width="140" height="4" rx="2" fill="url(#markLine)"/>
    
    <!-- Certified text -->
    <text x="100" y="145" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="14" font-weight="700" fill="#334155" letter-spacing="2" text-transform="uppercase">
      CERTIFIED
    </text>
    
    <!-- Agency name -->
    <text x="100" y="170" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="10" fill="#64748b" font-weight="500">
      New Zealand Insoluble Fuel
    </text>
    <text x="100" y="185" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="10" fill="#64748b" font-weight="500">
      Disposal Agency
    </text>
    
    <!-- Official mark text -->
    <text x="100" y="210" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="11" fill="#0369a1" font-weight="600">
      Official Certification Mark
    </text>
    <text x="100" y="228" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="9" fill="#64748b" font-weight="500">
      Verified Compliance &amp; Standards
    </text>
  </g>

  <!-- Column 2: Company & Certification Type -->
  <g transform="translate(280, 30)">
    <rect x="0" y="0" width="240" height="260" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
    
    <!-- Company Name -->
    <text x="120" y="40" text-anchor="middle" font-family="Oswald, sans-serif" font-size="24" font-weight="700" fill="#0f172a">
      ${escapeXml(displayName)}
    </text>
    
    <!-- Divider -->
    <rect x="20" y="55" width="200" height="2" fill="#e2e8f0"/>
    
    <!-- Certification Type Badge -->
    <rect x="30" y="75" width="180" height="36" rx="18" fill="${cfg.certBg}" stroke="${cfg.certColor}" stroke-width="2.5"/>
    <text x="120" y="98" text-anchor="middle" font-family="Oswald, sans-serif" font-size="13" font-weight="700" fill="${cfg.certColor}" letter-spacing="1.5">
      ${escapeXml(cfg.certType)}
    </text>
    
    <!-- Certification Description -->
    <text x="120" y="125" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="11" fill="#64748b" font-weight="500" font-style="italic">
      ${cfg.certDesc}
    </text>
    
    <!-- Key Points -->
    <text x="120" y="160" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="10" font-weight="600" fill="#0f172a">
      Key Compliance Points:
    </text>
    <text x="120" y="180" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="9" fill="#64748b">
      ✓ Dangerous Goods Licensed
    </text>
    <text x="120" y="195" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="9" fill="#64748b">
      ✓ $2M+ Professional Indemnity
    </text>
    <text x="120" y="210" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="9" fill="#64748b">
      ✓ Waste Tracking Compliant
    </text>
    <text x="120" y="225" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="9" fill="#64748b">
      ✓ EPA Regulations Met
    </text>
  </g>

  <!-- Column 3: Status & Verification -->
  <g transform="translate(560, 30)">
    <rect x="0" y="0" width="200" height="260" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
    
    <!-- Status Badge -->
    <rect x="20" y="30" width="160" height="42" rx="21" fill="${cfg.statusBg}" stroke="${cfg.borderColor}" stroke-width="3"/>
    <text x="100" y="58" text-anchor="middle" font-family="Oswald, sans-serif" font-size="16" font-weight="700" fill="${cfg.statusColor}" letter-spacing="2">
      ${escapeXml(cfg.statusLabel)}
    </text>
    
    <!-- Status Description -->
    <text x="100" y="100" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="11" fill="#64748b" font-weight="500">
      ${escapeXml(cfg.sub1)}
    </text>
    <text x="100" y="115" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="11" fill="#64748b" font-weight="500">
      ${escapeXml(cfg.sub2)}
    </text>
    
    <!-- Verification Section -->
    <rect x="20" y="140" width="160" height="80" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
    <text x="100" y="160" text-anchor="middle" font-family="Barlow, system-ui, sans-serif" font-size="10" font-weight="600" fill="#0f172a">
      Verification Code
    </text>
    <text x="100" y="180" text-anchor="middle" font-family="ui-monospace, monospace" font-size="9" fill="#64748b" letter-spacing="0.5">
      ${escapeXml(shortHash)}
    </text>
    
    <!-- Verify Link -->
    <rect x="30" y="195" width="140" height="2" rx="1" fill="url(#markLine)"/>
    <text x="100" y="210" text-anchor="middle" font-family="Oswald, sans-serif" font-size="12" font-weight="700" fill="#0369a1">
      Verify at nzifda.org
    </text>
  </g>

  <!-- Clickable overlay linking to verification -->
  <a href="${verifyUrl}" target="_blank" style="cursor: pointer;">
    <rect width="800" height="320" rx="16" fill="transparent"/>
  </a>
</svg>`;
}

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}
