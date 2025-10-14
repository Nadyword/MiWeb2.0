"use client";
import { useEffect, useState } from "react";
import "../public/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import "photoswipe/style.css";
import "rc-slider/assets/index.css";
import { usePathname } from "next/navigation";
import BackToTop from "@/components/common/BackToTop";
import MobileMenu from "@/components/headers/MobileMenu";
import SettingsHandler from "@/components/common/SettingsHandler";
import Login from "@/components/modals/Login";
import Register from "@/components/modals/Register";
import { useSessionCleanup } from "@/components/api/useSession";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  
  // Hook para limpiar sesión automáticamente
  useSessionCleanup();

  useEffect(() => {
    setIsClient(true);
    
    // Import Bootstrap only on client side
    import("bootstrap/dist/js/bootstrap.esm").then(() => {
      // Bootstrap cargado exitosamente
      console.log('Bootstrap cargado correctamente');
    }).catch((error) => {
      console.warn('Error cargando Bootstrap:', error);
    });
    
    // Función para cerrar modales de forma segura
    const closeModals = () => {
      const modalElements = document.querySelectorAll(".modal.show");
      modalElements.forEach((modal) => {
        modal.classList.remove('show');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      });
      
      // Limpiar backdrop y clases del body
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      const backdrops = document.querySelectorAll('.modal-backdrop');
      backdrops.forEach(backdrop => backdrop.remove());
    };

    // Cerrar modales abiertos al cambiar de ruta
    closeModals();
  }, [pathname]); // Runs every time the route changes

  useEffect(() => {
    if (!isClient) return;
    
    const WOW = require("@/utlis/wow");
    const wow = new WOW.default({
      animateClass: "animated",
      offset: 100,
      mobile: true,
      live: false,
    });
    wow.init();
  }, [pathname, isClient]);

  
  useEffect(() => {
    if (!isClient) return;
    
    const handleSticky = () => {
      const navbar = document.querySelector(".header");
      if (navbar) {
        if (window.scrollY > 120) {
          navbar.classList.add("fixed");
          navbar.classList.add("header-sticky");
        } else {
          navbar.classList.remove("fixed");
          navbar.classList.remove("header-sticky");
        }
        if (window.scrollY > 300) {
          navbar.classList.add("is-sticky");
        } else {
          navbar.classList.remove("is-sticky");
        }
      }
    };

    window.addEventListener("scroll", handleSticky);
    
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, [isClient]);
  
  return (
    <html lang="en">
      <body className="popup-loader">
        {children}
        {isClient && (
          <>
            <MobileMenu />
            <BackToTop />
            <SettingsHandler />
            <Login />
            <Register />
          </>
        )}
      </body>
    </html>
  );
}
