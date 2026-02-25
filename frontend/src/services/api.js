
/**
 * Contact form submission — Integrated with EmailJS.
 */
export const contactService = {
    submitForm: async (formData) => {
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
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
