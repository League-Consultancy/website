import emailjs from '@emailjs/browser';

/**
 * Simulates an async delay to mimic network latency.
 * @param {number} ms - milliseconds to wait
 */
const simulateDelay = (ms = 1500) =>
    new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Contact form submission — Integrated with EmailJS.
 */
export const contactService = {
    submitForm: async (formData) => {
        try {
            const templateParams = {
                full_name: formData.name,
                email: formData.email,
                inquiry_type: formData.category,
                message: formData.message,
            };

            const response = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            if (response.status === 200) {
                return {
                    success: true,
                    message: 'Inquiry submitted successfully! Our team will respond within 24-48 business hours.',
                };
            } else {
                throw new Error('Failed to send inquiry.');
            }
        } catch (error) {
            console.error('[EmailJS Error]:', error);
            throw new Error(error.text || 'Submission failed. Please try again or email us directly.');
        }
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
