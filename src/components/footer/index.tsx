"use client";

const Footer: React.FC = () => {
  return (
    <footer className="shadow-2xl overflow-x-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        <div className="flex flex-wrap justify-center items-center py-4 border-t text-center">
          {/* استبدلنا row بـ flex flex-wrap */}
          <div className="w-full ">
            {/* استبدلنا col-md-3 col-sm-5 بـ w-full md:w-3/12 sm:w-5/12 */}
            <div className="flex justify-center items-center mt-2">
              <span>
                &copy; 2025 حصاد للاستيراد والتصدير - جميع الحقوق محفوظة. | تصدير الحاصلات الزراعية بجودة عالمية. 
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;