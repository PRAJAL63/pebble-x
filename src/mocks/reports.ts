export interface DailySalesData {
  date: string;
  revenue: number;
  orders: number;
}

export interface CategorySalesData {
  category: string;
  value: number;
  percentage: number;
}

export interface MonthlyTrend {
  month: string;
  revenue: number;
  orders: number;
  growth: number;
}

export interface ReportSummary {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  pendingOrders: number;
  approvedOrders: number;
  rejectedOrders: number;
  completedOrders: number;
}

export const mockDailySales: DailySalesData[] = [
  { date: '2026-01-01', revenue: 125000, orders: 12 },
  { date: '2026-01-02', revenue: 98000, orders: 9 },
  { date: '2026-01-03', revenue: 145000, orders: 15 },
  { date: '2026-01-04', revenue: 110000, orders: 11 },
  { date: '2026-01-05', revenue: 89000, orders: 8 },
  { date: '2026-01-06', revenue: 156000, orders: 18 },
  { date: '2026-01-07', revenue: 134000, orders: 14 },
  { date: '2026-01-08', revenue: 177100, orders: 16 },
  { date: '2026-01-09', revenue: 142000, orders: 13 },
  { date: '2026-01-10', revenue: 168000, orders: 17 },
  { date: '2026-01-11', revenue: 195000, orders: 19 },
  { date: '2026-01-12', revenue: 156000, orders: 14 },
];

export const mockCategorySales: CategorySalesData[] = [
  { category: 'Power Tools', value: 450000, percentage: 35 },
  { category: 'Hand Tools', value: 320000, percentage: 25 },
  { category: 'Safety Equipment', value: 256000, percentage: 20 },
  { category: 'Welding Equipment', value: 128000, percentage: 10 },
  { category: 'Testing Equipment', value: 64000, percentage: 5 },
  { category: 'Others', value: 64000, percentage: 5 },
];

export const mockMonthlyTrends: MonthlyTrend[] = [
  { month: 'Jul 2025', revenue: 850000, orders: 95, growth: 12 },
  { month: 'Aug 2025', revenue: 920000, orders: 105, growth: 8 },
  { month: 'Sep 2025', revenue: 980000, orders: 112, growth: 6.5 },
  { month: 'Oct 2025', revenue: 1050000, orders: 120, growth: 7.1 },
  { month: 'Nov 2025', revenue: 1120000, orders: 128, growth: 6.7 },
  { month: 'Dec 2025', revenue: 1250000, orders: 142, growth: 11.6 },
];

export const mockReportSummary: ReportSummary = {
  totalRevenue: 1595100,
  totalOrders: 8,
  averageOrderValue: 199387.5,
  pendingOrders: 1,
  approvedOrders: 2,
  rejectedOrders: 1,
  completedOrders: 4,
};
