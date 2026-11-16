/* Chart.js initialization and updates (FR-13) */
DentalCare.register({
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
});
