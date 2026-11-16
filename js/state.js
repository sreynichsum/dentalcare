/* Initial application state: UI flags, form models, and seed data */
DentalCare.state = () => ({
        // Interface & RBAC State
        interfaceMode: 'public', // 'public' | 'dashboard'
        publicSection: 'home',   // 'home' | 'services' | 'dentists' | 'book' | 'portal'
        dashTab: 'overview',     // 'overview' | 'appointments' | 'patients' | 'clinical' | 'billing' | 'services' | 'staff'
        staffRole: 'Administrator',
        sidebarOpen: false,

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

});
