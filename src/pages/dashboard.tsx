import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Statcard from '../components/Statcard';
import Saleschart from '../components/Saleschart';
import PieChartCategory from '../components/PieChartCategory';
import Countrysales from '../components/Countrysales';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Statcard />
            <Statcard />
            <Statcard />
            <Statcard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <Saleschart />
            </div>
            <div>
              <PieChartCategory />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">{/* <Countrysales /> */}</div>
        </main>
      </div>
    </div>
  );
}
