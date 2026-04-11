import { useLanguage } from '../contexts/LanguageContext';
import { FadeTransition } from './FadeTransition';
import newsData from '../data/news.json';

type NewsCategory = 'event' | 'notice' | 'update';

interface NewsItem {
  id: number;
  date: string;
  category: NewsCategory;
  titleJP: string;
  titleEN: string;
  bodyJP: string;
  bodyEN: string;
}

const CATEGORY_LABELS: Record<NewsCategory, { jp: string; en: string; color: string }> = {
  event:  { jp: 'イベント', en: 'EVENT',  color: '#5DADE2' },
  notice: { jp: 'お知らせ', en: 'NOTICE', color: '#6B1F23' },
  update: { jp: '更新',     en: 'UPDATE', color: '#1A2B48' },
};

function formatDate(dateStr: string, lang: string): string {
  const d = new Date(dateStr);
  if (lang === 'jp') {
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  }
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function NewsSection() {
  const { language } = useLanguage();
  const items = (newsData.items as NewsItem[]);

  return (
    <section style={{ backgroundColor: 'white' }} className="px-6 py-16">
      <FadeTransition keyValue={`news-${language}`}>
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2
              style={{
                fontFamily: language === 'jp' ? "'Zen Old Mincho', serif" : "'Playfair Display', serif",
                fontSize: '28px',
                fontWeight: language === 'jp' ? 700 : 600,
                color: '#6B1F23',
                lineHeight: '1.5',
                letterSpacing: language === 'jp' ? '0.05em' : '0.08em',
                marginBottom: '8px',
              }}
            >
              {language === 'jp' ? 'お知らせ' : 'INFORMATION'}
            </h2>
            <div
              style={{
                width: '48px',
                height: '3px',
                backgroundColor: '#5DADE2',
                borderRadius: '2px',
                margin: '0 auto',
              }}
            />
          </div>

          {/* News list */}
          {items.length === 0 ? (
            <p
              style={{
                fontFamily: language === 'jp' ? "'Noto Serif JP', serif" : "'Playfair Display', serif",
                color: '#6B1F23',
                fontSize: '15px',
                textAlign: 'center',
                opacity: 0.5,
                letterSpacing: '0.08em',
              }}
            >
              {language === 'jp' ? '現在お知らせはありません。' : 'No announcements at this time.'}
            </p>
          ) : (
            <div className="space-y-0">
              {items.map((item, index) => {
                const cat = CATEGORY_LABELS[item.category] ?? CATEGORY_LABELS.notice;
                const isLast = index === items.length - 1;
                return (
                  <div
                    key={item.id}
                    style={{
                      borderTop: '1px solid #E8E2D6',
                      borderBottom: isLast ? '1px solid #E8E2D6' : 'none',
                      padding: '20px 0',
                    }}
                  >
                    {/* Meta row */}
                    <div className="flex items-center gap-3 mb-3">
                      {/* Category badge */}
                      <span
                        style={{
                          backgroundColor: cat.color,
                          color: 'white',
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          padding: '3px 10px',
                          borderRadius: '2px',
                          flexShrink: 0,
                        }}
                      >
                        {language === 'jp' ? cat.jp : cat.en}
                      </span>
                      {/* Date */}
                      <span
                        style={{
                          fontFamily: language === 'jp' ? "'Noto Serif JP', serif" : "'Playfair Display', serif",
                          color: '#1A2B48',
                          fontSize: '13px',
                          opacity: 0.55,
                        }}
                      >
                        {formatDate(item.date, language)}
                      </span>
                    </div>

                    {/* Title */}
                    <p
                      style={{
                        fontFamily: language === 'jp' ? "'Noto Serif JP', serif" : "'Playfair Display', serif",
                        fontSize: '15px',
                        fontWeight: language === 'jp' ? 700 : 600,
                        color: '#1A2B48',
                        lineHeight: '1.6',
                        marginBottom: '8px',
                      }}
                    >
                      {language === 'jp' ? item.titleJP : item.titleEN}
                    </p>

                    {/* Body */}
                    <p
                      style={{
                        fontFamily: language === 'jp' ? "'Noto Serif JP', serif" : "'Playfair Display', serif",
                        fontSize: '14px',
                        color: '#1A2B48',
                        lineHeight: '1.85',
                        opacity: 0.75,
                      }}
                    >
                      {language === 'jp' ? item.bodyJP : item.bodyEN}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </FadeTransition>
    </section>
  );
}
