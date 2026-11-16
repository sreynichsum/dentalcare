/* Public booking helpers and patient authentication (FR-01, FR-05) */
DentalCare.register({
        // Public Booking Helpers
        startBookingWithService(serviceName) {
            this.bookingForm.service = serviceName;
            this.bookingStep = 2;
            this.publicSection = 'book';
        },
        startBookingWithDentist(dentistName) {
            this.bookingForm.dentist = dentistName;
            this.bookingStep = 1;
            this.publicSection = 'book';
        },
        submitPublicBooking() {
            if (!this.bookingForm.patientName || !this.bookingForm.phone) {
                this.showToast('Please provide your full name and phone number.', 'error');
                return;
            }
            const newId = 'APT-2026-' + (100 + this.appointments.length + 1);
            this.appointments.unshift({
                id: newId,
                patientName: this.bookingForm.patientName,
                service: this.bookingForm.service,
                dentist: this.bookingForm.dentist,
                date: this.bookingForm.date,
                time: this.bookingForm.time,
                source: 'Online',
                status: 'Pending'
            });
            this.lastBookingId = newId;
            this.bookingStep = 5;
            this.showToast('Appointment request submitted! Awaiting receptionist approval.');
        },

        // Auth Handlers (FR-01)
        handlePatientAuth() {
            if (this.authModalMode === 'forgot') {
                this.showToast('Password reset link sent to your email address.');
                this.showAuthModal = false;
                return;
            }
            const name = this.authForm.name || 'Sarah Jenkins';
            this.loggedInPatient = {
                id: 'PAT-2026-001',
                name: name,
                email: this.authForm.email || 'sarah@example.com',
                phone: this.authForm.phone || '+855 12 884 210'
            };
            this.bookingForm.patientName = this.loggedInPatient.name;
            this.bookingForm.phone = this.loggedInPatient.phone;
            this.showAuthModal = false;
            this.publicSection = 'portal';
            this.showToast(`Welcome back, ${this.loggedInPatient.name}!`);
        },
        logoutPatient() {
            this.loggedInPatient = null;
            this.publicSection = 'home';
            this.showToast('Logged out of patient portal.');
        },

});
