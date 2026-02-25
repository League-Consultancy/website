
/**
 * Contact form submission — Integrated with EmailJS.
 */
export const contactService = {
    submitForm: async (formData) => {
        try {
            // For Vercel Serverless Functions, the API is on the same domain (/api/contact)
            // If running locally, you can set VITE_API_URL or default to localhost:5000
            const API_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5000' : '');
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                return {
                    success: true,
                    message: data.message || 'Inquiry submitted successfully! Our team will respond within 24-48 business hours.',
                };
            } else {
                throw new Error(data.message || 'Failed to send inquiry.');
            }
        } catch (error) {
            console.error('[API Error]:', error);
            throw new Error(error.message || 'Submission failed. Please ensure the backend server is running.');
        }
    },
};
