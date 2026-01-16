import type {
  DailySalesData,
  CategorySalesData,
  MonthlyTrend,
  ReportSummary,
} from '@/mocks/reports';
import {
  mockDailySales,
  mockCategorySales,
  mockMonthlyTrends,
  mockReportSummary,
} from '@/mocks/reports';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface ReportFilters {
  startDate?: string;
  endDate?: string;
  supplierId?: string;
}

export const getSalesData = async (filters?: ReportFilters): Promise<DailySalesData[]> => {
  // TODO: Replace with real API when backend is ready
  // const response = await axiosInstance.get<SalesDataResponse>('/reports/sales', { params: filters });
  // return response.data.body.data;

  await delay(500);
  let data = [...mockDailySales];

  if (filters?.startDate) {
    data = data.filter(d => d.date >= filters.startDate!);
  }
  if (filters?.endDate) {
    data = data.filter(d => d.date <= filters.endDate!);
  }

  return data;
};

export const getCategorySales = async (): Promise<CategorySalesData[]> => {
  // TODO: Replace with real API when backend is ready
  // const response = await axiosInstance.get<CategorySalesResponse>('/reports/category-sales');
  // return response.data.body.data;

  await delay(400);
  return [...mockCategorySales];
};

export const getMonthlyTrends = async (): Promise<MonthlyTrend[]> => {
  // TODO: Replace with real API when backend is ready
  // const response = await axiosInstance.get<MonthlyTrendResponse>('/reports/monthly-trends');
  // return response.data.body.data;

  await delay(400);
  return [...mockMonthlyTrends];
};

export const getReportSummary = async (filters?: ReportFilters): Promise<ReportSummary> => {
  // TODO: Replace with real API when backend is ready
  // const response = await axiosInstance.get<ReportSummaryResponse>('/reports/summary', { params: filters });
  // return response.data.body.data;

  await delay(300);
  return { ...mockReportSummary };
};
