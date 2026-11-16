/* Billing, payments, and staff day-off actions (FR-04, FR-11, FR-12) */
DentalCare.register({
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

});
