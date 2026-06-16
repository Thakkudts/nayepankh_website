import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#F5E9DA] border-b border-[#E2C8AD] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link
  to="/"
  className="flex items-center gap-3"
>
  <img
    src="https://media.licdn.com/dms/image/v2/D4D0BAQEOkloxg767Og/company-logo_200_200/company-logo_200_200/0/1680603823152?e=2147483647&v=beta&t=1IehNt5beNmmluW54a0K-zMcSHFPmH7TPHHeSTZpzU8"
    alt="NayePankh Logo"
    className="w-12 h-12 object-contain"
  />

  <span className="text-2xl font-bold text-[#2C1E14]">
    NayePankh
  </span>
</Link>

        <div className="flex gap-6 font-medium text-[#5A3E2B]">
          <Link to="/" className="hover:text-[#8B5E3C] transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-[#8B5E3C] transition">
            About
          </Link>

          <Link to="/Join_us" className="hover:text-[#8B5E3C] transition">
            Join Us
          </Link>

          <Link to="/Certificate" className="hover:text-[#8B5E3C] transition">
            Certificates
          </Link>

          <Link to="/contact" className="hover:text-[#8B5E3C] transition">
            Contact
          </Link>

          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;