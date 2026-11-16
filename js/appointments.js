/* Appointment workflow actions (FR-05, FR-06) */
DentalCare.register({
        // Appointment Workflow Actions (FR-05, FR-06)
        approveAppointment(apt) {
            const conflict = this.appointments.some(other =>
                other.id !== apt.id &&
                other.dentist === apt.dentist &&
                other.date === apt.date &&
                other.time === apt.time &&
                other.status === 'Confirmed'
            );
            if (conflict) {
                this.showToast(`Conflict Alert: ${apt.dentist} already has a confirmed appointment at ${apt.time}.`, 'error');
                return;
            }
            apt.status = 'Confirmed';
            this.showToast(`Appointment ${apt.id} approved and confirmed.`);
        },
        updateAppointmentStatus(id, status) {
            const apt = this.appointments.find(a => a.id === id);
            if (apt) {
                apt.status = status;
                this.showToast(`Appointment ${id} updated to ${status}.`);
            }
        },
        openRescheduleModal(apt) {
            this.rescheduleTarget = apt;
            this.showRescheduleModal = true;
        },
        submitRescheduleProposal() {
            if (this.rescheduleTarget) {
                this.rescheduleTarget.status = 'Reschedule Proposed';
                this.rescheduleTarget.proposedDate = this.rescheduleDate;
                this.rescheduleTarget.proposedTime = this.rescheduleTime;
                this.showRescheduleModal = false;
                this.showToast('Alternative appointment time proposed to patient.');
            }
        },
        acceptReschedule(apt) {
            apt.date = apt.proposedDate || apt.date;
            apt.time = apt.proposedTime || apt.time;
            apt.status = 'Confirmed';
            this.showToast('New appointment schedule accepted and confirmed!');
        },
        createWalkInBooking() {
            if (!this.walkInForm.patientName) {
                this.showToast('Please enter patient name.', 'error');
                return;
            }
            const conflict = this.appointments.some(a =>
                a.dentist === this.walkInForm.dentist &&
                a.date === this.walkInForm.date &&
                a.time === this.walkInForm.time &&
                a.status === 'Confirmed'
            );
            if (conflict) {
                this.showToast('Scheduling Conflict: Dentist is already booked at this time.', 'error');
                return;
            }
            this.appointments.unshift({
                id: 'APT-2026-' + (100 + this.appointments.length + 1),
                patientName: this.walkInForm.patientName,
                service: this.walkInForm.service,
                dentist: this.walkInForm.dentist,
                date: this.walkInForm.date,
                time: this.walkInForm.time,
                source: 'Clinic',
                status: 'Confirmed'
            });
            this.showWalkInModal = false;
            this.walkInForm.patientName = '';
            this.showToast('Walk-in appointment scheduled and confirmed.');
        },

});
