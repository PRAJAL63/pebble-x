import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import SalesChart from '@/components/report/SalesChart';
import CategoryChart from '@/components/report/CategoryChart';
import { useSalesData, useCategorySales, useReportSummary } from '@/hooks/useReports';
import { Spinner } from '@/components/ui/spinner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, ShoppingCart, DollarSign, Package } from 'lucide-react';

export default function SupplierReports() {
  const { data: salesData, isLoading: loadingSales } = useSalesData();
  const { data: categorySales, isLoading: loadingCategories } = useCategorySales();
  const { data: summary, isLoading: loadingSummary } = useReportSummary();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NP', {
      style: 'currency',
      currency: 'NPR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Reports & Analytics</h1>
            <p className="text-gray-500 mt-1">Track your sales performance and metrics</p>
          </div>

          {loadingSummary ? (
            <div className="flex justify-center items-center h-64">
              <Spinner className="w-8 h-8" />
            </div>
          ) : (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {summary ? formatCurrency(summary.totalRevenue) : 'NPR 0'}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">From all orders</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{summary?.totalOrders || 0}</div>
                    <p className="text-xs text-muted-foreground mt-1">All time</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {summary ? formatCurrency(summary.averageOrderValue) : 'NPR 0'}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Per order</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{summary?.pendingOrders || 0}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {summary?.approvedOrders || 0} approved
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {loadingSales ? (
                  <div className="flex justify-center items-center h-64 bg-white rounded-lg shadow">
                    <Spinner className="w-6 h-6" />
                  </div>
                ) : (
                  salesData && <SalesChart data={salesData} />
                )}

                {loadingCategories ? (
                  <div className="flex justify-center items-center h-64 bg-white rounded-lg shadow">
                    <Spinner className="w-6 h-6" />
                  </div>
                ) : (
                  categorySales && <CategoryChart data={categorySales} />
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
