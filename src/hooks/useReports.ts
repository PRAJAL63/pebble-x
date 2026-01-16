import { useQuery } from '@tanstack/react-query';
import {
  getSalesData,
  getCategorySales,
  getMonthlyTrends,
  getReportSummary,
} from '@/lib/services/report';
import type { ReportFilters } from '@/lib/services/report';

export const useSalesData = (filters?: ReportFilters) => {
  return useQuery({
    queryKey: ['sales-data', filters],
    queryFn: () => getSalesData(filters),
  });
};

export const useCategorySales = () => {
  return useQuery({
    queryKey: ['category-sales'],
    queryFn: getCategorySales,
  });
};

export const useMonthlyTrends = () => {
  return useQuery({
    queryKey: ['monthly-trends'],
    queryFn: getMonthlyTrends,
  });
};

export const useReportSummary = (filters?: ReportFilters) => {
  return useQuery({
    queryKey: ['report-summary', filters],
    queryFn: () => getReportSummary(filters),
  });
};
