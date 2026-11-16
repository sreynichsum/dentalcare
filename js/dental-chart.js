/* 2D dental chart actions (FR-08) */
DentalCare.register({
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

});
