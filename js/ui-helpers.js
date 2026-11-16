/* UI helper functions */
DentalCare.register({
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

});
