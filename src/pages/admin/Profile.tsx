import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { useGetMe } from '@/hooks/useAuth';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Calendar, Shield, User } from 'lucide-react';

export default function Profile() {
  const { data, isLoading } = useGetMe();

  const formatDate = (dateString?: Date) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getRoleBadgeColor = (role: string) => {
    const colors: Record<string, string> = {
      ADMIN: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      SUPPLIER: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      USER: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
      VENDOR: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    };
    return colors[role] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Spinner className="w-8 h-8" />
      </div>
    );
  }

  if (!data?.user) {
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-950 p-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow dark:shadow-gray-800 p-12 text-center border border-gray-200 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 mb-4">User not found</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const user = data.user;

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-950 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile Settings</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">View your account information</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* User Profile Card */}
            <Card className="lg:col-span-2 border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {user.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {user.name}
                    </h2>
                    <Badge className={getRoleBadgeColor(user.role)}>{user.role}</Badge>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div className="flex-1">
                      <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Full Name
                      </label>
                      <p className="text-base text-gray-900 dark:text-white">{user.name}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div className="flex-1">
                      <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Email Address
                      </label>
                      <p className="text-base text-gray-900 dark:text-white">{user.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div className="flex-1">
                      <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Phone Number
                      </label>
                      <p className="text-base text-gray-900 dark:text-white">
                        {user.phone || 'Not provided'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div className="flex-1">
                      <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Address
                      </label>
                      <p className="text-base text-gray-900 dark:text-white">
                        {user.address || 'Not provided'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Details Card */}
            <Card className="border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle>Account Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Account Role
                  </label>
                  <div className="mt-2">
                    <Badge className={getRoleBadgeColor(user.role)}>{user.role}</Badge>
                  </div>
                </div>

                {user._id && (
                  <div>
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      User ID
                    </label>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-mono bg-gray-50 dark:bg-gray-800 p-2 rounded">
                      {user._id}
                    </p>
                  </div>
                )}

                {user.createdAt && (
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <label className="text-sm font-medium text-gray-500 dark:text-gray-400 block">
                        Member Since
                      </label>
                      <p className="text-sm text-gray-900 dark:text-white">
                        {formatDate(user.createdAt)}
                      </p>
                    </div>
                  </div>
                )}

                {user.updatedAt && (
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <label className="text-sm font-medium text-gray-500 dark:text-gray-400 block">
                        Last Updated
                      </label>
                      <p className="text-sm text-gray-900 dark:text-white">
                        {formatDate(user.updatedAt)}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
