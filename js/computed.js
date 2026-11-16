/* Computed properties (getters) */
DentalCare.register({
        // Computed Properties
        get activeServices() {
            return this.services.filter(s => s.active);
        },
        get activeDentists() {
            return this.dentists.filter(d => d.active);
        },
        get availableTimeSlots() {
            const baseSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];
            return baseSlots.map(time => {
                const conflict = this.appointments.some(a =>
                    a.dentist === this.bookingForm.dentist &&
                    a.date === this.bookingForm.date &&
                    a.time === time &&
                    (a.status === 'Confirmed' || a.status === 'Pending')
                );
                return { time, booked: conflict };
            });
        },
        get patientAppointments() {
            if (!this.loggedInPatient) return this.appointments.slice(0, 2);
            return this.appointments.filter(a => a.patientName.toLowerCase() === this.loggedInPatient.name.toLowerCase());
        },
        get pendingCount() {
            return this.appointments.filter(a => a.status === 'Pending').length;
        },
        get todayAppointmentsCount() {
            return this.appointments.filter(a => a.date === '2026-11-16').length;
        },
        get filteredDashboardAppointments() {
            return this.appointments.filter(a => {
                const q = this.aptFilterQuery.toLowerCase();
                const matchQ = !q || a.patientName.toLowerCase().includes(q) || a.id.toLowerCase().includes(q);
                const matchD = !this.aptFilterDate || a.date === this.aptFilterDate;
                const matchDoc = !this.aptFilterDentist || a.dentist === this.aptFilterDentist;
                const matchSt = !this.aptFilterStatus || a.status === this.aptFilterStatus;
                return matchQ && matchD && matchDoc && matchSt;
            });
        },
        get totalInvoiced() {
            return this.invoices.reduce((sum, i) => sum + i.total, 0);
        },
        get totalCollected() {
            return this.invoices.reduce((sum, i) => sum + i.paid, 0);
        },
        get totalOutstanding() {
            return this.invoices.reduce((sum, i) => sum + i.balance, 0);
        },
        get dashTitle() {
            const titles = {
                overview: 'Clinic Dashboard & Financial Reports',
                appointments: 'Appointments & Schedule Management',
                patients: 'Patient Records & 2D Dental Chart',
                clinical: 'Treatment Plan Management',
                billing: 'Invoices & Payment Collections',
                services: 'Dental Service Catalog Management',
                staff: 'Dentist & Staff Administration'
            };
            return titles[this.dashTab] || 'Dashboard';
        },

});
