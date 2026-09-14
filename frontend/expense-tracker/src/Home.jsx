import React from 'react';
import { 
  Wallet, 
  PieChart, 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp 
} from 'lucide-react';

const Home = ({ onGetStarted, onLogin }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col justify-between">
      
      {/* 1. Header / Navbar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 space-x-reverse cursor-pointer">
            <div className="p-2 bg-emerald-500 text-white rounded-xl">
              <Wallet size={24} />
            </div>
            <span className="text-xl font-bold text-gray-900">Expense Tracker</span>
          </div>

          <div className="flex items-center space-x-4 space-x-reverse">
            <button 
              onClick={onLogin}
              className="text-gray-600 hover:text-emerald-600 font-medium px-4 py-2 transition-colors"
            >
              تسجيل الدخول
            </button>
            <button 
              onClick={onGetStarted}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-sm transition-all"
            >
              إنشاء حساب
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-right">
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
            <TrendingUp size={16} />
            <span>إدارة أموالك بذكاء وسهولة</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            تتبع مصاريفك ودخلك في <span className="text-emerald-600">مكان واحد</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            تطبيق متكامل يساعدك على مراقبة ميزانيتك اليومية، تحليل مصروفاتك عبر تقارير ورسوم بيانية تفاعلية، وتصدير بياناتك المالية بكل سهولة.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 sm:space-x-reverse pt-4">
            <button 
              onClick={onGetStarted}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-200 transition-all flex items-center justify-center space-x-2 space-x-reverse"
            >
              <span>ابدأ مجاناً الآن</span>
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={onLogin}
              className="w-full sm:w-auto bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-lg font-medium px-8 py-3.5 rounded-xl transition-all"
            >
              تسجيل الدخول
            </button>
          </div>

          {/* Quick Checklist */}
          <div className="pt-6 flex items-center space-x-6 space-x-reverse text-sm text-gray-500">
            <div className="flex items-center space-x-1.5 space-x-reverse">
              <CheckCircle2 size={18} className="text-emerald-500" />
              <span>مجاني بالكامل</span>
            </div>
            <div className="flex items-center space-x-1.5 space-x-reverse">
              <CheckCircle2 size={18} className="text-emerald-500" />
              <span>تقارير Excel</span>
            </div>
            <div className="flex items-center space-x-1.5 space-x-reverse">
              <CheckCircle2 size={18} className="text-emerald-500" />
              <span>أمان عالي</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Card / Mockup */}
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <p className="text-xs text-gray-400">ملخص الشهر الحالي</p>
              <h3 className="text-xl font-bold text-gray-800">$12,500</h3>
            </div>
            <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
              +14% هذا الشهر
            </span>
          </div>

          {/* Dummy Mini Progress Items */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span className="text-gray-600">الدخل (Income)</span>
                <span className="text-emerald-600">$18,000</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[75%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span className="text-gray-600">المصاريف (Expenses)</span>
                <span className="text-rose-600">$5,500</span>
              </div>
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full w-[30%]"></div>
              </div>
            </div>
          </div>

          {/* Dummy Recent Item */}
          <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">مشروع فاينل / Freelance</p>
                <p className="text-xs text-gray-400">اليوم، 02:30 م</p>
              </div>
            </div>
            <span className="font-bold text-emerald-600">+$1,200</span>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">مميزات التطبيق</h2>
            <p className="text-gray-500 mt-2">كل ما تحتاجه للتحكم الكامل في ميزانيتك الشخصية أو مشروعك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl w-fit">
                <PieChart size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-800">رسوم بيانية تفاعلية</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                متابعة مصاريف ودخل آخر 30 و 60 يوم بوضوح عبر مخططات بيانية توضح حركة أموالك.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl w-fit">
                <Download size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-800">تصدير التقارير (Excel)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                تحميل جميع سجلات المصاريف والدخل بضغطة زر بصيغة Excel لتحليلها ومراجعتها.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-xl w-fit">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-800">أمان وحماية الحساب</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                تسجيل دخول آمن وتشفير كامل لبياناتك الشخصية باستخدام تقنيات JWT الحديثة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm border-t border-gray-800">
        <p>© 2026 Expense Tracker App. جميع الحقوق محفوظة.</p>
      </footer>

    </div>
  );
};

export default Home;