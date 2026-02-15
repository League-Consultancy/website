// ════════════════════════════════════════════════════
// LEAGUE CONSULTANCY — FRONTEND-ONLY API SIMULATION
// No backend required. All interactions are simulated
// on the client side for static deployment.
// ════════════════════════════════════════════════════

/**
 * Simulates an async delay to mimic network latency.
 * @param {number} ms - milliseconds to wait
 */
const simulateDelay = (ms = 1500) =>
    new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Contact form submission — simulated on client side.
 * In production, replace with Formspree, EmailJS, or
 * a serverless function endpoint.
 */
export const contactService = {
    submitForm: async (formData) => {
        await simulateDelay(1500);
        console.log('[Contact] Form submitted (simulated):', formData);
        return {
            success: true,
            message: 'Inquiry submitted successfully! Our team will respond within 24-48 business hours.',
        };
    },
};

/**
 * Auth services — static demo only.
 * Forms remain functional UI-wise but do not
 * connect to any backend.
 */
export const authService = {
    login: async (credentials) => {
        await simulateDelay(1200);
        console.log('[Auth] Login attempt (simulated):', credentials.email);
        return {
            success: true,
            message: 'Authentication handshake successful.',
            user: { email: credentials.email, role: 'demo' },
        };
    },
    signup: async (userData) => {
        await simulateDelay(1200);
        console.log('[Auth] Signup attempt (simulated):', userData.email);
        return {
            success: true,
            message: 'Account initialization request received. Verification pending.',
            user: { email: userData.email, name: userData.name, role: 'demo' },
        };
    },
};
