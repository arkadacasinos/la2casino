import { ArrowUpRight, ChevronDown, Clock3, Gamepad2, ShieldCheck, Sparkles, WalletCards } from 'lucide-react'

const faqItems = [
  {
    question: 'Что такое LA Casino зеркало?',
    answer: 'Зеркало LA Casino — это альтернативный адрес официального сайта, который помогает открыть привычный аккаунт и каталог игр, если основной домен временно недоступен. Проверяйте ссылку по каналам бренда и не вводите данные на сомнительных копиях.',
  },
  {
    question: 'Как начать играть в LA Casino?',
    answer: 'Откройте официальный сайт LA Casino, создайте аккаунт, подтвердите возраст и выберите игру. Начинайте с небольшого лимита, ознакомьтесь с правилами и используйте бонус только после того, как понятны условия отыгрыша.',
  },
  {
    question: 'Где найти LA Casino официальный сайт?',
    answer: 'Актуальный адрес официального сайта публикуется в наших навигационных блоках и проверенных источниках бренда. Если страница не открывается, используйте официальный LA Casino официальный сайт через актуальное зеркало, а не случайную ссылку из рекламы.',
  },
  {
    question: 'Можно ли играть в LA Casino онлайн с телефона?',
    answer: 'Да. Адаптивная версия LA Casino онлайн работает в браузере смартфона и не требует отдельного приложения. Для стабильного соединения используйте личную сеть, обновлённый браузер и не сохраняйте платёжные данные на общем устройстве.',
  },
  {
    question: 'Как играть ответственно?',
    answer: 'Определите бюджет до начала сессии, не занимайте деньги для игры и делайте паузы. При ощущении потери контроля остановитесь и обратитесь за профессиональной помощью. Азартная игра должна оставаться развлечением, а не способом решать финансовые задачи.',
  },
]

const games = [
  { title: 'Слоты', text: 'Быстрые раунды, яркие механики и понятные бонусные функции для коротких игровых сессий.', tag: 'Популярное' },
  { title: 'Рулетка', text: 'Европейская классика, чистая графика стола и привычный выбор ставок в одном экране.', tag: 'Классика' },
  { title: 'Live-казино', text: 'Атмосфера настоящего зала, ведущие в прямом эфире и интерактивный формат игры.', tag: 'Live' },
  { title: 'Настольные игры', text: 'Блэкджек, баккара и другие форматы для тех, кто любит стратегию и ритм раунда.', tag: 'Стратегия' },
]

export default function Page() {
  return (
    <main className="la-shell">
      <header className="la-header">
        <div className="la-container la-header-inner">
          <a className="la-brand" href="#top" aria-label="LA Casino — на главную">
            <span className="la-brand-mark">LA</span>
            <span className="la-brand-copy"><strong>CASINO</strong><small>PLAY WITH STYLE</small></span>
          </a>
          <nav className="la-nav" aria-label="Основная навигация">
            <a href="#games">Игры</a>
            <a href="#guide">Гид</a>
            <a href="#faq">FAQ</a>
            <a href="#responsible">Ответственная игра</a>
          </nav>
          <a className="la-header-cta" href="#official">Открыть сайт <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </header>

      <section className="la-hero" id="top">
        <div className="la-hero-image" role="img" aria-label="Атмосфера премиального казино"></div>
        <div className="la-container la-hero-content">
          <p className="la-eyebrow"><span></span> Премиальный игровой зал онлайн</p>
          <h1>LA Casino — <em>игра</em> начинается здесь</h1>
          <p className="la-hero-lead">Откройте мир слотов, live-столов и классических игр в лаунж-формате. LA Casino создано для тех, кто ценит чистый интерфейс, быстрый доступ и красивую игру.</p>
          <div className="la-hero-actions">
            <a className="la-button la-button-gold" href="#official">Играть сейчас <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className="la-text-link" href="#games">Смотреть игры <span>↓</span></a>
          </div>
          <div className="la-hero-note"><ShieldCheck size={16} aria-hidden="true" /> 18+ · Играйте ответственно · Только для совершеннолетних</div>
        </div>
        <div className="la-hero-stamp" aria-hidden="true"><span>LA</span><small>EST.<br />2024</small></div>
      </section>

      <section className="la-trust" aria-label="Преимущества LA Casino">
        <div className="la-container la-trust-grid">
          <div className="la-trust-item"><Sparkles size={21} aria-hidden="true" /><div><strong>Премиальный выбор</strong><span>Игры, которые хочется открывать</span></div></div>
          <div className="la-trust-item"><Gamepad2 size={21} aria-hidden="true" /><div><strong>Играйте где угодно</strong><span>Телефон, планшет или компьютер</span></div></div>
          <div className="la-trust-item"><WalletCards size={21} aria-hidden="true" /><div><strong>Прозрачные условия</strong><span>Понятные правила и лимиты</span></div></div>
          <div className="la-trust-item"><Clock3 size={21} aria-hidden="true" /><div><strong>Всегда онлайн</strong><span>Доступ к залу в любое время</span></div></div>
        </div>
      </section>

      <section className="la-section la-games-section" id="games">
        <div className="la-container">
          <div className="la-section-heading"><div><p className="la-kicker">Выберите свой ритм</p><h2>Играть в LA Casino — <span>это про выбор</span></h2></div><p className="la-heading-aside">Один зал, четыре настроения. Найдите игру, которая подходит именно вашему вечеру.</p></div>
          <div className="la-game-grid">
            {games.map((game, index) => <article className={`la-game-card la-game-card-${index + 1}`} key={game.title}><div className="la-game-top"><span className="la-game-number">0{index + 1}</span><span className="la-game-tag">{game.tag}</span></div><div><h3>{game.title}</h3><p>{game.text}</p><a href="#official" aria-label={`Открыть раздел ${game.title}`}>Открыть <ArrowUpRight size={15} aria-hidden="true" /></a></div></article>)}
          </div>
        </div>
      </section>

      <section className="la-feature" id="official">
        <div className="la-container la-feature-grid">
          <div className="la-feature-copy"><p className="la-kicker">LA Casino официальный сайт</p><h2>Красивый вход в игру. <span>Без лишнего.</span></h2><p>LA Casino официальный сайт соединяет удобную навигацию, аккуратную подачу игр и современный подход к онлайн-развлечениям. Здесь легко найти нужный стол, сравнить форматы и перейти к игре с любого устройства.</p><p>Если основной адрес временно не отвечает, используйте проверенный LA Casino официальный сайт через актуальное зеркало. Запросы <strong>la casino зеркало</strong>, <strong>la casino официальный сайт</strong> и <strong>la casino играть</strong> ведут к одному простому действию: выбрать безопасный путь в зал.</p><a className="la-button la-button-outline" href="#guide">Перейти к гиду <ArrowUpRight size={18} aria-hidden="true" /></a></div>
          <div className="la-feature-panel"><img className="la-panel-image" src="/la-casino-hero.png" alt="Игровой стол LA Casino" loading="lazy" /><div className="la-panel-orbit"></div><div className="la-panel-content"><span className="la-panel-label">Вход в атмосферу</span><strong>LA<br /><i>Casino</i></strong><span className="la-panel-caption">YOUR NIGHT. YOUR RULES.</span></div></div>
        </div>
      </section>

      <section className="la-section la-guide-section" id="guide">
        <div className="la-container la-guide-grid">
          <div className="la-guide-intro"><p className="la-kicker">Короткий гид</p><h2>LA Casino онлайн: <span>начните уверенно</span></h2><p>Не нужно разбираться часами. Следуйте базовой последовательности, чтобы сделать первый визит комфортным и сохранить контроль над каждой игровой сессией.</p></div>
          <div className="la-steps">
            <article><span>01</span><div><h3>Проверьте адрес</h3><p>Ищите защищённое соединение и актуальный домен. LA Casino зеркало должно вести на привычную структуру сайта, а не на страницу с агрессивными обещаниями.</p></div></article>
            <article><span>02</span><div><h3>Выберите формат</h3><p>Слоты подойдут для короткой игры, live-столы — для атмосферы, а настольные игры — для спокойного темпа и внимания к правилам.</p></div></article>
            <article><span>03</span><div><h3>Задайте лимит</h3><p>Определите сумму и время заранее. Если лимит исчерпан, завершите сессию — не пытайтесь отыграться и не повышайте ставку под влиянием эмоций.</p></div></article>
          </div>
        </div>
      </section>

      <section className="la-responsible" id="responsible">
        <div className="la-container la-responsible-inner"><div className="la-responsible-symbol" aria-hidden="true">18<span>+</span></div><div><p className="la-kicker">Игра остаётся игрой</p><h2>Ответственный подход — часть стиля LA Casino</h2><p>Азартные игры предназначены для развлечения. Не используйте игру для решения финансовых проблем, не занимайте деньги и не играйте под влиянием алкоголя. Если вам трудно остановиться, обратитесь к близкому человеку или в местную службу поддержки.</p></div><a className="la-text-link" href="#faq">Узнать больше <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </section>

      <section className="la-section la-faq-section" id="faq">
        <div className="la-container la-faq-grid"><div className="la-faq-heading"><p className="la-kicker">Есть вопросы?</p><h2>Всё важное — <span>в одном месте</span></h2><p>Собрали ответы на частые запросы о доступе, формате игры и безопасном использовании LA Casino.</p></div><div className="la-faq-list">{faqItems.map((item) => <details key={item.question}><summary>{item.question}<ChevronDown size={19} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div></div>
      </section>

      <section className="la-editorial" aria-labelledby="editorial-title">
        <div className="la-container la-editorial-copy"><p className="la-kicker">О бренде</p><h2 id="editorial-title">Почему LA Casino выбирают для игры онлайн</h2><p>Современное онлайн-казино — это не только количество автоматов. Это ощущение, которое появляется с первого экрана: насколько быстро вы находите нужную категорию, понятно ли обозначены правила, легко ли сделать паузу и насколько спокойно выглядит интерфейс. LA Casino строит опыт вокруг этих деталей.</p><p>Запрос <strong>la casino</strong> давно стал коротким способом найти вход в игровой зал, но за ним всегда стоит конкретное ожидание: открыть понятный сайт без лишних переходов. Поэтому мы собрали основные сценарии в одной навигации. Любите динамику — выбирайте слоты. Нужен темп живого стола — переходите в live-казино. Предпочитаете знакомую механику — открывайте рулетку или блэкджек.</p><h3>LA Casino играть: с чего начать новичку</h3><p>Первый шаг — не ставка, а знакомство с игрой. Откройте правила, посмотрите на лимиты и обратите внимание на механику бонусов. В слотах проверьте волатильность и размер минимальной ставки. В рулетке изучите типы ставок. В live-казино заранее решите, сколько времени вы готовы провести за столом.</p><p>Не существует гарантированной стратегии выигрыша. Любой раунд случаен, а результат нельзя предсказать по предыдущим вращениям. Ответственный игрок воспринимает бюджет как стоимость развлечения и не меняет решение из-за серии удач или неудач. Именно такой подход делает онлайн-игру спокойной и возвращает ей удовольствие.</p><h3>Зеркало LA Casino и безопасный доступ</h3><p>Когда пользователи ищут <strong>la casino зеркало рабочее</strong>, им нужен не просто другой URL. Им нужен понятный знак, что они открывают официальный ресурс. Проверяйте адрес, наличие защищённого соединения, единый дизайн и корректные разделы профиля. Никому не передавайте пароль, коды подтверждения и данные карты в мессенджерах.</p><p>Официальный сайт LA Casino не просит устанавливать неизвестные файлы или отключать защиту браузера. Если ссылка выглядит подозрительно, закройте страницу и найдите новый адрес через проверенный канал. В поиске встречаются варианты «ля казино», «ля казино зеркало», «ля казино играть» и «ля казино официальный сайт» — важно смотреть не только на совпадение слов, но и на безопасность страницы.</p><h3>Личный стиль игры</h3><p>У хорошего вечера нет универсального сценария. Кому-то достаточно десяти минут и пары раундов, кому-то интереснее изучить турнирную таблицу или новый слот. Заранее определённые границы помогают не превращать игру в спешку. Делайте перерывы, следите за временем и оставляйте место для других планов.</p><p>LA Casino — это пространство для совершеннолетних пользователей, которые выбирают развлечения осознанно. Здесь можно играть красиво, когда правила понятны, бюджет ограничен, а решение остановиться принимается так же легко, как решение начать.</p></div>
      </section>

      <footer className="la-footer"><div className="la-container la-footer-top"><a className="la-brand" href="#top"><span className="la-brand-mark">LA</span><span className="la-brand-copy"><strong>CASINO</strong><small>PLAY WITH STYLE</small></span></a><div className="la-footer-links"><a href="#games">Игры</a><a href="#guide">Гид игрока</a><a href="#responsible">Ответственная игра</a><a href="#faq">Помощь</a></div><a className="la-button la-button-gold" href="#official">Открыть LA Casino <ArrowUpRight size={16} aria-hidden="true" /></a></div><div className="la-container la-footer-bottom"><p>© 2024–2026 LA Casino. Только для совершеннолетних.</p><p className="la-hashtags">#lacasinо #lacasinозеркало #lacasinоиграть #lacasinоофициальныйсайт</p></div></footer>
    </main>
  )
}

