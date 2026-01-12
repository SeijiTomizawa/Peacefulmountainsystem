import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { FadeTransition } from "./FadeTransition";
import { memo, useCallback } from "react";
import { COLORS, FONTS } from "../constants/theme";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavigationDrawer = memo(function NavigationDrawer({
  isOpen,
  onClose,
}: NavigationDrawerProps) {
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const t = translations[language].nav;

  // Don't render if not open to improve performance
  if (!isOpen) {
    return (
      <div
        className="fixed inset-0 bg-black opacity-0 pointer-events-none transition-opacity duration-300 z-40"
        onClick={onClose}
      />
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen
            ? "opacity-50"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: COLORS.main }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <FadeTransition keyValue={`menu-${language}`}>
              <div
                style={{
                  fontFamily: "'Zen Old Mincho', serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "white",
                }}
              >
                {t.menuTitle}
              </div>
            </FadeTransition>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={24} color="white" />
            </button>
          </div>

          {/* Language Toggle */}
          <div
            className="px-6 py-4 border-b"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <div className="flex items-center justify-between">
              <span
                style={{
                  color: "white",
                  fontSize: "14px",
                  opacity: 0.8,
                }}
              >
                Language / 言語
              </span>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
                style={{
                  backgroundColor: COLORS.main,
                  color: "white",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    opacity: language === "en" ? 1 : 0.5,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  EN
                </span>
                <div className="w-px h-4 bg-white/30" />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    opacity: language === "jp" ? 1 : 0.5,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  JP
                </span>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8 overflow-y-auto">
            <FadeTransition keyValue={`nav-links-${language}`}>
              {/* Main Pages Section */}
              <div className="mb-6">
                <p
                  style={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    opacity: 0.6,
                  }}
                >
                  {language === "jp"
                    ? "メインページ"
                    : "Main Pages"}
                </p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/"
                      onClick={onClose}
                      className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: 500,
                        textDecoration: "none",
                        backgroundColor:
                          location.pathname === "/"
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                      }}
                    >
                      {language === "jp" ? "ホーム" : "Home"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/self-defense"
                      onClick={onClose}
                      className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: 500,
                        textDecoration: "none",
                        backgroundColor:
                          location.pathname === "/self-defense"
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                      }}
                    >
                      {language === "jp"
                        ? "護身術・逮捕術"
                        : "Self-Defense"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shiatsu"
                      onClick={onClose}
                      className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: 500,
                        textDecoration: "none",
                        backgroundColor:
                          location.pathname === "/shiatsu"
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                      }}
                    >
                      {language === "jp"
                        ? "指圧整体院"
                        : "Shiatsu"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/soke"
                      onClick={onClose}
                      className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: 500,
                        textDecoration: "none",
                        backgroundColor:
                          location.pathname === "/soke"
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                      }}
                    >
                      {language === "jp"
                        ? "宗家について"
                        : "About Soke"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/members"
                      onClick={onClose}
                      className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: 500,
                        textDecoration: "none",
                        backgroundColor:
                          location.pathname === "/members"
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                      }}
                    >
                      {language === "jp"
                        ? "メンバー紹介"
                        : "Members"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/videos"
                      onClick={onClose}
                      className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: 500,
                        textDecoration: "none",
                        backgroundColor:
                          location.pathname === "/videos"
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                      }}
                    >
                      {language === "jp"
                        ? "ビデオギャラリー"
                        : "Videos"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      onClick={onClose}
                      className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: 500,
                        textDecoration: "none",
                        backgroundColor:
                          location.pathname === "/gallery"
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                      }}
                    >
                      {language === "jp"
                        ? "フォトギャラリー"
                        : "Gallery"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/links"
                      onClick={onClose}
                      className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: 500,
                        textDecoration: "none",
                        backgroundColor:
                          location.pathname === "/links"
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                      }}
                    >
                      {t.links}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CTA Button in Drawer */}
              <div className="mt-8">
                <Link
                  to="/contact"
                  onClick={() => onClose()}
                  className="w-full px-6 py-4 rounded-lg shadow-lg block text-center hover:shadow-xl transition-all"
                  style={{
                    backgroundColor: COLORS.buttonPrimary,
                    color: "white",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      COLORS.buttonPrimaryHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      COLORS.buttonPrimary)
                  }
                >
                  {t.ctaButton}
                </Link>
              </div>
            </FadeTransition>
          </nav>

          {/* Footer */}
          <div
            className="px-6 py-6 border-t"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <FadeTransition
              keyValue={`drawer-header-${language}`}
            >
              <p
                style={{
                  fontFamily: "'Zen Old Mincho', serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: "8px",
                }}
              >
                {language === "jp"
                  ? "PEACEFUL MOUNTAIN SYSTEM"
                  : "PEACEFUL MOUNTAIN SYSTEM"}
              </p>
            </FadeTransition>
          </div>
        </div>
      </div>
    </>
  );
});