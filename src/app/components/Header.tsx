import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { FadeTransition } from "./FadeTransition";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { memo } from "react";
import { COLORS, FONTS } from "../constants/theme";
import { logoImage } from "../assets/images";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = memo(function Header({ onMenuClick }: HeaderProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      <Link
        to="/"
        className="flex items-center gap-3"
        style={{ textDecoration: "none" }}
      >
        <img
          src={logoImage}
          alt="Taizan-Ryu Logo"
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
          }}
        />
        <FadeTransition keyValue={`header-logo-${language}`}>
          <div
            style={{
              fontFamily: FONTS.serif,
              fontSize: "13px",
              fontWeight: 600,
              color: COLORS.main,
              lineHeight: "1.3",
            }}
          >
            {language === "jp" ? (
              <>
                泰山流護身術・逮捕術
                <br />
                東京八王子本部道場
              </>
            ) : (
              <>
                PEACEFUL MOUNTAIN SYSTEM
                <br />
                Hachioji Honbu Dojo
              </>
            )}
          </div>
        </FadeTransition>
      </Link>
      <div className="flex items-center gap-3">
        <FadeTransition keyValue={`booking-btn-${language}`}>
          <button
            className="px-3 py-1.5 text-sm text-white rounded-md"
            style={{
              backgroundColor: COLORS.buttonPrimary,
              fontSize: "13px",
              fontWeight: 600,
            }}
            onClick={() => {
              window.location.href = "/#contact";
            }}
          >
            {t.header.bookingButton}
          </button>
        </FadeTransition>
        <button className="p-2" onClick={onMenuClick}>
          <Menu size={24} color={COLORS.main} />
        </button>
      </div>
    </header>
  );
});