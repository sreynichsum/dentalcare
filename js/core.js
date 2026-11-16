/* Lifecycle, role switching (RBAC), and toast notifications */
DentalCare.register({
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
                if (mode === 'dashboard' && this.dashTab === 'overview') {
                    this.initCharts();
                }
            });
        },

        onRoleChange() {
            if (this.staffRole === 'Dentist' && (this.dashTab === 'billing' || this.dashTab === 'services' || this.dashTab === 'staff')) {
                this.dashTab = 'clinical';
            }
            if (this.staffRole === 'Receptionist' && (this.dashTab === 'clinical' || this.dashTab === 'services' || this.dashTab === 'staff')) {
                this.dashTab = 'appointments';
            }
            this.showToast(`Switched active RBAC role to ${this.staffRole}`);
            this.$nextTick(() => lucide.createIcons());
        },

        showToast(message, type = 'success') {
            this.toast = { show: true, message, type };
            this.$nextTick(() => lucide.createIcons());
            setTimeout(() => { this.toast.show = false; }, 3200);
        },

});
