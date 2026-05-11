function Footer_1() {
    const ServicesCount = 5;
    const ProductCount = 5;
  return (
    <div className="flex flex-col py-24 px-28 bg-[#E6E6E6] w-full font-main">
      {/* Services Group */}
      <div className="flex flex-row items-start gap-30 border-b-2 border-gray-400 pb-8">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-[#1E293B]">Sitemap</p>
          <div className="flex flex-col text-[#475569]">
            <p>Home</p>
            <p>Layanan</p>
            <p>Destinala</p>
            <p>Pemesanan</p>
            <p>Tentang</p>
            <p>Kontak</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-[#1E293B]">Layanan</p>
          <div className="flex flex-col text-[#475569]">
            {Array.from({ length: ServicesCount }, (_, i) => (
              <p key={i}>Layanan {i + 1}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-[#1E293B]">Product</p>
          <div className="flex flex-col text-[#475569]">
            {Array.from({ length: ProductCount }, (_, i) => (
              <p key={i}>Product {i + 1}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-[#1E293B]">Help & Support</p>
          <div className="flex flex-col text-[#475569]">
            <p>Whatsapp Number</p>
            <p>Email Support</p>
            <p>Product Refund</p>
            <p>Submit Feedback</p>
            <p>Help Ticket</p>
            <p>Call center</p>
          </div>
        </div>
      </div>
      {/* Logo Copyright Group */}
      <div className="flex flex-row justify-between items-center mt-8">
        <img src="./LogoPlaceholder.svg" alt="" />
        <span className="text-[#475569]">
            Copyright 2026 Destinala, All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer_1;
