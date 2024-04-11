document.addEventListener('alpine:init', () => {
    Alpine.data('contactForm', () => ({
        subject: '',
        body: '',
        reset() {
            this.subject = '';
            this.body = '';
        },
        get link() {
            return `mailto:trainer@offbeatcanine.com?subject=${this.subject}&body=${this.body}`;
        }
    }));
});
