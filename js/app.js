function dentalCareSystem() {
    return {
        // Interface & RBAC State
        interfaceMode: 'public', // 'public' | 'dashboard'
        publicSection: 'home',   // 'home' | 'services' | 'dentists' | 'book' | 'portal'
        dashTab: 'dashboard',    // 'dashboard' | 'users' | 'patients' | 'dentists' | 'appointments' | 'records' | 'treatments' | 'billing' | 'reports' | 'settings' | 'sys-*'
        treatmentSubTab: 'plans',
        staffRole: 'Clinic Admin',
        sidebarOpen: false,

        // Clinic Settings (Synced with Public Website)
        clinicSettings: {
            name: 'DentalCare Clinic',
            phone: '+855 (023) 884-920',
            email: 'care@dentalcare-clinic.com',
            hours: 'Mon–Sat: 08:30 AM – 06:00 PM',
            closedNote: 'Sunday: Closed',
            address: '128 Norodom Blvd, Suite 302',
            city: 'Phnom Penh, Cambodia'
        },

        // Staff & System Users (FR-01)
        showNewUserModal: false,
        newUserForm: { name: '', email: '', role: 'Receptionist' },
        staffUsers: [
            { id: 'USR-001', name: 'Olivia Vance', email: 'admin@dentalcare.com', role: 'Clinic Admin', active: true },
            { id: 'USR-002', name: 'David Kim (IT)', email: 'sysadmin@dentalcare.com', role: 'System Admin', active: true },
            { id: 'USR-003', name: 'Hannah Lee', email: 'reception@dentalcare.com', role: 'Receptionist', active: true },
            { id: 'USR-004', name: 'Dr. Sarah Smith', email: 'dr.smith@dentalcare.com', role: 'Dentist', active: true },
            { id: 'USR-005', name: 'Dr. Robert Chen', email: 'dr.chen@dentalcare.com', role: 'Dentist', active: true }
        ],

        // System Administration Data (IT Support)
        logFilterLevel: '',
        techConfig: { backupSchedule: 'Every 24 Hours (02:00 AM)', sessionTimeout: 30, rateLimit: 120 },
        backups: [
            { id: 'BKP-20261117-0200', timestamp: 'Nov 17, 2026 • 02:00 AM', type: 'Automated Full SQL', size: '18.4 MB' },
            { id: 'BKP-20261116-0200', timestamp: 'Nov 16, 2026 • 02:00 AM', type: 'Automated Full SQL', size: '18.1 MB' },
            { id: 'BKP-20261115-1430', timestamp: 'Nov 15, 2026 • 02:30 PM', type: 'Manual Snapshot', size: '17.9 MB' }
        ],
        systemLogs: [
            { id: 1, time: '2026-11-17 01:04:12', level: 'INFO', message: 'Scheduled backup BKP-20261117-0200 verified successfully (SHA-256 OK).' },
            { id: 2, time: '2026-11-16 17:45:09', level: 'INFO', message: 'Spring Security: User admin@dentalcare.com authenticated via JWT.' },
            { id: 3, time: '2026-11-16 15:12:44', level: 'WARN', message: 'API response latency spike (210ms) on /api/v1/appointments/slots.' },
            { id: 4, time: '2026-11-16 11:20:03', level: 'ERROR', message: 'SMTP relay retry succeeded on attempt #2 for appointment confirmation email.' }
        ],

        // Toast Notification
        toast: { show: false, message: '', type: 'success' },

        // Patient Auth State (FR-01)
        loggedInPatient: { id: 'PAT-2026-001', name: 'Sarah Jenkins', email: 'sarah@example.com', phone: '+855 12 884 210' },
        showAuthModal: false,
        authModalMode: 'login',
        authForm: { name: '', email: '', phone: '', password: '' },

        // Online Booking Wizard State (FR-05)
        bookingStep: 1,
        lastBookingId: '',
        bookingForm: {
            service: 'Routine Scaling & Polishing',
            dentist: 'Dr. Sarah Smith',
            date: '2026-11-16',
            time: '',
            patientName: 'Sarah Jenkins',
            phone: '+855 12 884 210',
            notes: ''
        },

        // Dashboard Appointment Filters & View
        aptViewMode: 'list',
        aptFilterQuery: '',
        aptFilterDate: '',
        aptFilterDentist: '',
        aptFilterStatus: '',
        showWalkInModal: false,
        walkInForm: { patientName: '', service: 'Routine Scaling & Polishing', dentist: 'Dr. Sarah Smith', date: '2026-11-16', time: '02:30 PM' },

        // Reschedule Proposal Modal
        showRescheduleModal: false,
        rescheduleTarget: null,
        rescheduleDate: '2026-11-17',
        rescheduleTime: '10:30 AM',

        // Dental Services Catalog (FR-10)
        showNewServiceModal: false,
        services: [
            { id: 'SVC-1', name: 'Routine Scaling & Polishing', category: 'Preventive', price: 45.00, duration: 30, active: true, description: 'Ultrasonic tartar removal, stain polishing, and comprehensive oral hygiene check.' },
            { id: 'SVC-2', name: 'Composite Tooth Filling', category: 'Restorative', price: 85.00, duration: 45, active: true, description: 'Tooth-colored bonded resin restoration for cavities and chipped enamel.' },
            { id: 'SVC-3', name: 'Root Canal Therapy', category: 'Endodontics', price: 320.00, duration: 90, active: true, description: 'Pain-free microscopic root canal disinfection and biocompatible sealing.' },
            { id: 'SVC-4', name: 'Porcelain Ceramic Crown', category: 'Prosthodontics', price: 450.00, duration: 60, active: true, description: 'Custom-milled natural ceramic crown for full structural tooth restoration.' },
            { id: 'SVC-5', name: 'Orthodontic Braces Consultation', category: 'Orthodontics', price: 35.00, duration: 30, active: true, description: 'Digital bite assessment, 3D alignment review, and personalized orthodontic plan.' },
            { id: 'SVC-6', name: 'Laser Teeth Whitening', category: 'Cosmetic', price: 180.00, duration: 60, active: true, description: 'Safe enamel-friendly chairside whitening up to 6 shades brighter.' }
        ],

        // Dentists & Staff (FR-04)
        dentists: [
            { id: 'DOC-1', name: 'Dr. Sarah Smith', initials: 'SS', specialty: 'Orthodontics & Preventive Care', experience: '11 Years', workingDays: 'Mon – Fri', workingHours: '08:30 AM – 05:30 PM', active: true, dayOffNote: '', revenue: 1320, bio: 'Specializes in gentle preventive dentistry, clear aligners, and minimally invasive restorations.' },
            { id: 'DOC-2', name: 'Dr. Robert Chen', initials: 'RC', specialty: 'Endodontics & Oral Surgery', experience: '14 Years', workingDays: 'Tue – Sat', workingHours: '09:00 AM – 06:00 PM', active: true, dayOffNote: 'Off Nov 20 (Conference)', revenue: 980, bio: 'Board-certified endodontist focusing on pain-free root canal therapy and surgical extractions.' },
            { id: 'DOC-3', name: 'Dr. Emily Vance', initials: 'EV', specialty: 'Cosmetic & Prosthodontics', experience: '9 Years', workingDays: 'Mon – Sat', workingHours: '09:00 AM – 05:00 PM', active: true, dayOffNote: '', revenue: 850, bio: 'Expert in ceramic crowns, veneers, and full-mouth aesthetic smile rehabilitation.' }
        ],

        // Appointments Data (FR-05, FR-06)
        appointments: [
            { id: 'APT-2026-101', patientName: 'Sarah Jenkins', service: 'Routine Scaling & Polishing', dentist: 'Dr. Sarah Smith', date: '2026-11-16', time: '09:00 AM', source: 'Online', status: 'Confirmed' },
            { id: 'APT-2026-102', patientName: 'Michael Brown', service: 'Composite Tooth Filling', dentist: 'Dr. Robert Chen', date: '2026-11-16', time: '10:30 AM', source: 'Clinic', status: 'Completed' },
            { id: 'APT-2026-103', patientName: 'Jessica Taylor', service: 'Root Canal Therapy', dentist: 'Dr. Sarah Smith', date: '2026-11-16', time: '01:00 PM', source: 'Online', status: 'Pending' },
            { id: 'APT-2026-104', patientName: 'Sarah Jenkins', service: 'Porcelain Ceramic Crown', dentist: 'Dr. Emily Vance', date: '2026-11-18', time: '10:30 AM', source: 'Online', status: 'Reschedule Proposed', proposedDate: '2026-11-19', proposedTime: '02:30 PM' }
        ],

        // Patients & 2D Dental Chart Data (FR-03, FR-07, FR-08)
        patientSearchQuery: '',
        showNewPatientModal: false,
        showExamNoteModal: false,
        showToothModal: false,
        editingToothNum: 1,
        editingToothStatus: 'Healthy',
        patients: [
            {
                id: 'PAT-2026-001',
                name: 'Sarah Jenkins',
                gender: 'Female',
                age: 32,
                phone: '+855 12 884 210',
                allergies: 'Penicillin',
                medicalHistory: 'No chronic conditions; mild dental sensitivity.',
                onlineLinked: true,
                teeth: { 3: 'Filled', 14: 'Decayed', 19: 'Missing', 30: 'Filled' },
                exams: [
                    { date: '2026-10-12', dentist: 'Dr. Sarah Smith', notes: 'Routine exam & ultrasonic scaling. Noted distal caries on #14.', finding: 'Tooth #14 Decayed' }
                ]
            },
            {
                id: 'PAT-2026-002',
                name: 'Michael Brown',
                gender: 'Male',
                age: 41,
                phone: '+855 17 554 902',
                allergies: 'None recorded',
                medicalHistory: 'Controlled hypertension.',
                onlineLinked: false,
                teeth: { 18: 'Filled', 19: 'Filled' },
                exams: [
                    { date: '2026-11-16', dentist: 'Dr. Robert Chen', notes: 'Completed composite resin restoration on tooth #19.', finding: 'Restored #19' }
                ]
            },
            {
                id: 'PAT-2026-003',
                name: 'Jessica Taylor',
                gender: 'Female',
                age: 28,
                phone: '+855 89 302 119',
                allergies: 'Latex',
                medicalHistory: 'Seasonal allergies.',
                onlineLinked: true,
                teeth: { 12: 'Decayed' },
                exams: [
                    { date: '2026-11-02', dentist: 'Dr. Sarah Smith', notes: 'Recommended endodontic therapy for symptomatic #12.', finding: 'Pulpitis #12' }
                ]
            }
        ],
        selectedPatient: null,

        // Treatment Plans (FR-09)
        showNewTreatmentModal: false,
        treatmentPlans: [
            { id: 'TP-2026-01', patientName: 'Sarah Jenkins', procedures: 'Composite Filling & Ceramic Crown', tooth: '#14', dentist: 'Dr. Sarah Smith', cost: 535.00, status: 'In Progress' },
            { id: 'TP-2026-02', patientName: 'Michael Brown', procedures: 'Composite Tooth Filling', tooth: '#19', dentist: 'Dr. Robert Chen', cost: 85.00, status: 'Completed' },
            { id: 'TP-2026-03', patientName: 'Jessica Taylor', procedures: 'Root Canal Therapy', tooth: '#12', dentist: 'Dr. Sarah Smith', cost: 320.00, status: 'Planned' }
        ],

        // Invoices & Payments (FR-11, FR-12)
        showNewInvoiceModal: false,
        showPaymentModal: false,
        paymentTargetInvoice: null,
        paymentInputAmount: 0,
        paymentInputMethod: 'QR Payment',
        showReceiptModal: false,
        receiptTargetInvoice: null,
        invoices: [
            { id: 'INV-2026-001', patientName: 'Sarah Jenkins', items: 'Root Canal Stage 1 & Exam', total: 320.00, paid: 200.00, balance: 120.00, status: 'Partial', lastMethod: 'QR Payment' },
            { id: 'INV-2026-002', patientName: 'Michael Brown', items: 'Composite Tooth Filling (#19)', total: 85.00, paid: 85.00, balance: 0.00, status: 'Paid', lastMethod: 'Bank Transfer' },
            { id: 'INV-2026-003', patientName: 'Jessica Taylor', items: 'Diagnostic X-Ray & Consultation', total: 65.00, paid: 0.00, balance: 65.00, status: 'Unpaid', lastMethod: '' }
        ],

        // Reports & Charts State (FR-13)
        reportPeriod: 'monthly',
        clinicExpenses: 450,
        revenueChartInstance: null,
        paymentChartInstance: null,

        init() {
            this.selectedPatient = this.patients[0];
            this.$nextTick(() => {
                lucide.createIcons();
                this.initCharts();
            });
        },

        switchInterface(mode) {
            this.interfaceMode = mode;
            this.$nextTick(() => {
                lucide.createIcons();
                if (mode === 'dashboard' && this.dashTab === 'reports') {
                    this.initCharts();
                }
            });
        },

        setDashTab(tab) {
            this.dashTab = tab;
            this.sidebarOpen = false;
            this.$nextTick(() => {
                lucide.createIcons();
                if (tab === 'reports') {
                    this.initCharts();
                }
            });
        },

        onRoleChange() {
            if (this.staffRole === 'System Admin') {
                this.setDashTab('sys-overview');
            } else if (this.staffRole === 'Dentist') {
                this.setDashTab('appointments');
            } else if (this.staffRole === 'Receptionist') {
                this.setDashTab('appointments');
            } else {
                this.setDashTab('dashboard');
            }
            this.showToast(`Switched active RBAC role to ${this.staffRole}`);
        },

        logoutStaffDashboard() {
            this.interfaceMode = 'public';
            this.publicSection = 'home';
            this.showToast('Logged out of Clinic Management Dashboard.');
            this.$nextTick(() => lucide.createIcons());
        },

        showToast(message, type = 'success') {
            this.toast = { show: true, message, type };
            this.$nextTick(() => lucide.createIcons());
            setTimeout(() => { this.toast.show = false; }, 3200);
        },

        // Computed Properties
        get activeServices() {
            return this.services.filter(s => s.active);
        },
        get activeDentists() {
            return this.dentists.filter(d => d.active);
        },
        get filteredPatientsList() {
            const q = this.patientSearchQuery.toLowerCase();
            return this.patients.filter(p => !q || p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.phone.includes(q));
        },
        get filteredSystemLogs() {
            return this.systemLogs.filter(l => !this.logFilterLevel || l.level === this.logFilterLevel);
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
                dashboard: 'Dashboard Overview',
                users: 'User & Staff Management',
                patients: 'Patient Management',
                dentists: 'Dentist Management',
                appointments: 'Appointment Management',
                records: 'Dental Records & 2D Dental Chart',
                treatments: 'Treatment & Services',
                billing: 'Billing & Payments',
                reports: 'Financial & Operational Reports',
                settings: 'Clinic Settings',
                'sys-overview': 'DentalCare – System Administration',
                'sys-database': 'Database Management',
                'sys-backup': 'Backup & Recovery',
                'sys-logs': 'System Logs',
                'sys-monitoring': 'System Monitoring',
                'sys-settings': 'Technical Settings'
            };
            return titles[this.dashTab] || 'Dashboard';
        },

        // Staff User & System Admin Actions
        createStaffUser() {
            if (!this.newUserForm.name || !this.newUserForm.email) {
                this.showToast('Please enter full name and email.', 'error');
                return;
            }
            this.staffUsers.push({
                id: 'USR-00' + (this.staffUsers.length + 1),
                name: this.newUserForm.name,
                email: this.newUserForm.email,
                role: this.newUserForm.role,
                active: true
            });
            this.newUserForm = { name: '', email: '', role: 'Receptionist' };
            this.showNewUserModal = false;
            this.showToast('New staff user account created.');
        },
        runDbOptimization() {
            this.systemLogs.unshift({ id: Date.now(), time: '2026-11-17 01:10:00', level: 'INFO', message: 'Manual InnoDB index optimization & integrity check completed (0 errors).' });
            this.showToast('MySQL database integrity check passed & tables optimized.');
        },
        createDatabaseBackup() {
            const id = 'BKP-20261117-' + Math.floor(1000 + Math.random() * 9000);
            this.backups.unshift({ id, timestamp: 'Nov 17, 2026 • Just Now', type: 'Manual Snapshot', size: '18.5 MB' });
            this.systemLogs.unshift({ id: Date.now(), time: '2026-11-17 01:10:15', level: 'INFO', message: `Created new manual database backup ${id}.` });
            this.showToast(`Database backup ${id} created successfully.`);
        },
        restoreBackup(bk) {
            this.systemLogs.unshift({ id: Date.now(), time: '2026-11-17 01:10:30', level: 'WARN', message: `Database snapshot ${bk.id} restored by System Admin.` });
            this.showToast(`Database restored to snapshot ${bk.id}.`);
        },

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

        // 2D Dental Chart Actions (FR-08)
        openToothEditor(num) {
            this.editingToothNum = num;
            this.editingToothStatus = this.selectedPatient.teeth[num] || 'Healthy';
            this.showToothModal = true;
        },
        saveToothStatus() {
            if (this.selectedPatient) {
                this.selectedPatient.teeth[this.editingToothNum] = this.editingToothStatus;
                this.showToothModal = false;
                this.showToast(`Tooth #${this.editingToothNum} marked as ${this.editingToothStatus}.`);
            }
        },

        // Billing & Payment Actions (FR-11, FR-12)
        openRecordPaymentModal(inv) {
            this.paymentTargetInvoice = inv;
            this.paymentInputAmount = inv.balance;
            this.showPaymentModal = true;
        },
        processInvoicePayment() {
            if (!this.paymentTargetInvoice || this.paymentInputAmount <= 0) return;
            this.paymentTargetInvoice.paid += Number(this.paymentInputAmount);
            this.paymentTargetInvoice.balance = Math.max(0, this.paymentTargetInvoice.total - this.paymentTargetInvoice.paid);
            this.paymentTargetInvoice.status = this.paymentTargetInvoice.balance === 0 ? 'Paid' : 'Partial';
            this.paymentTargetInvoice.lastMethod = this.paymentInputMethod;
            this.showPaymentModal = false;
            this.showToast(`Recorded $${Number(this.paymentInputAmount).toFixed(2)} via ${this.paymentInputMethod}.`);
            this.updateCharts();
        },
        openReceiptModal(inv) {
            this.receiptTargetInvoice = inv;
            this.showReceiptModal = true;
        },

        // Staff Day Off (FR-04)
        recordDentistDayOff(doc) {
            doc.dayOffNote = 'Day off scheduled: Nov 24, 2026';
            this.showToast(`Recorded schedule exception for ${doc.name}.`);
        },

        // UI Helpers
        statusBadgeClass(status) {
            const map = {
                'Pending': 'bg-amber-100 text-amber-800',
                'Confirmed': 'bg-tealbrand-100 text-tealbrand-800',
                'Completed': 'bg-emerald-100 text-emerald-800',
                'Reschedule Proposed': 'bg-sky-100 text-sky-800',
                'Cancelled': 'bg-slate-200 text-slate-700',
                'Rejected': 'bg-rose-100 text-rose-800',
                'No-show': 'bg-rose-100 text-rose-800',
                'Planned': 'bg-amber-100 text-amber-800',
                'In Progress': 'bg-sky-100 text-sky-800'
            };
            return map[status] || 'bg-slate-100 text-slate-700';
        },
        toothButtonClass(status) {
            if (status === 'Decayed') return 'bg-rose-50 border-rose-400 text-rose-800';
            if (status === 'Filled') return 'bg-sky-50 border-sky-400 text-sky-800';
            if (status === 'Missing') return 'bg-slate-200 border-dashed border-slate-400 text-slate-400';
            return 'bg-white border-slate-200 text-slate-700 hover:border-tealbrand-500';
        },

        // Chart.js Initialization & Updates (FR-13)
        initCharts() {
            const revCtx = document.getElementById('revenueChart');
            const payCtx = document.getElementById('paymentMethodChart');
            if (!revCtx || !payCtx) return;

            if (this.revenueChartInstance) this.revenueChartInstance.destroy();
            if (this.paymentChartInstance) this.paymentChartInstance.destroy();

            this.revenueChartInstance = new Chart(revCtx, {
                type: 'bar',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [
                        {
                            label: 'Invoiced Revenue ($)',
                            data: [1200, 1450, 1100, 1680],
                            backgroundColor: '#99F6E4',
                            borderRadius: 8
                        },
                        {
                            label: 'Payments Collected ($)',
                            data: [1050, 1300, 980, 1420],
                            backgroundColor: '#0F766E',
                            borderRadius: 8
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom' } },
                    scales: { y: { beginAtZero: true, grid: { color: '#F1F5F9' } }, x: { grid: { display: false } } }
                }
            });

            this.paymentChartInstance = new Chart(payCtx, {
                type: 'doughnut',
                data: {
                    labels: ['QR Payment', 'Bank Transfer', 'Cash'],
                    datasets: [{
                        data: [48, 34, 18],
                        backgroundColor: ['#0F766E', '#14B8A6', '#99F6E4'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '68%',
                    plugins: { legend: { position: 'bottom' } }
                }
            });
        },
        updateCharts() {
            if (!this.revenueChartInstance) return;
            const datasets = {
                daily: { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], inv: [320, 450, 280, 510, 490, 620], col: [280, 400, 280, 420, 450, 590] },
                monthly: { labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], inv: [1200, 1450, 1100, 1680], col: [1050, 1300, 980, 1420] },
                yearly: { labels: ['Q1', 'Q2', 'Q3', 'Q4'], inv: [14200, 16800, 15900, 18400], col: [13100, 15900, 14800, 17200] }
            };
            const d = datasets[this.reportPeriod];
            this.revenueChartInstance.data.labels = d.labels;
            this.revenueChartInstance.data.datasets[0].data = d.inv;
            this.revenueChartInstance.data.datasets[1].data = d.col;
            this.revenueChartInstance.update();
        }
    }
}
